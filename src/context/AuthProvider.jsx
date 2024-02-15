import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import ErrorPage from '../pages/Error'
import { createContext } from 'react'
import * as token from '../utils/token.js'
import * as st from '../utils/userStorage'

const LoadError = () => {
  useEffect(() => {
    setTimeout(() => {
      window.location.href = '/login'
    }, 5000)
  }, [])

  return (
    <ErrorPage errorCode='400' />
  )
}

export const UserContext = createContext()

const AuthProvider = ({ children }) => {
  const getSolde = () => {
    return Number(st.get("solde")) || 0.0
  };
  const addMoney = (v) => {
    st.set("solde", getSolde() + Number(v))
    return st.get("solde")
  };
  const getBackMoney = (v) => {
    st.set("solde", getSolde() - Number(v))
    return st.get("solde")
  };

  return (
    <UserContext.Provider value={{ getSolde, addMoney, getBackMoney }}>
      {token.get() ?
        children :
        <LoadError />
      }
    </UserContext.Provider>
  )
}

AuthProvider.propTypes = {
  children: PropTypes.element,
}

export default AuthProvider
