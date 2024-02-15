import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import ErrorPage from '../pages/Error'
import { createContext } from 'react'
import * as token from '../utils/token.js'

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

const UserContext = createContext()

const AuthProvider = ({ children }) => {
  return (
    <UserContext.Provider value={{}}>
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
