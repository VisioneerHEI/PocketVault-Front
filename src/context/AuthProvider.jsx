import React, { useEffect, createContext } from 'react'
import PropTypes from 'prop-types'
import ErrorPage from '../pages/Error'

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
    return Number(st.get('solde')) || 0.0
  }
  const addMoney = (v) => {
    st.set('solde', getSolde() + Number(v))
    addTransaction(createTransaction(v))
    return st.get('solde')
  }
  const getBackMoney = (v) => {
    st.set('solde', getSolde() - Number(v))
    addTransaction(createTransaction(-v))
    return st.get('solde')
  }
  const createTransaction = (v, date=undefined) => {
    return {"value": v, "date": date || new Date().toLocaleDateString('fr-FR', { day: '2-digit', month: '2-digit', year: '2-digit' })}
  }
  const getAllTransaction = (limite=undefined) => {
    const result = st.get("transactions")
    if (!Array.isArray(result)){
      return []
    }
    if (Number.isInteger(limite) && result.length >= limite){
      return result.slice(0, limite)
    }
    return result || []
  }
  const addTransaction = (value) => {
    console.log(value);
    const listeTransaction = getAllTransaction()
    listeTransaction.push(value)
    return st.set("transactions", listeTransaction)
  }

  return (
    <UserContext.Provider value={{ getSolde, addMoney, getBackMoney, getAllTransaction }}>
      {token.get()
        ? children
        : <LoadError />}
    </UserContext.Provider>
  )
}

AuthProvider.propTypes = {
  children: PropTypes.element
}

export default AuthProvider
