import { Flex } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ErrorPage from './Error'
import Login from './login'
import SignUp from './signup'
import PropTypes from 'prop-types'

import * as token from '../utils/token.js'
import Dashboard from './dashboard'
import Transaction from './transaction'
import Depot from './transaction/components/Depot'
import Retrait from './transaction/components/Retrait'
import AuthProvider from '../context/AuthProvider'

const LoadPage = ({ url }) => {
  useEffect(() => {
    window.location.href = url
  })
  return (<></>)
}

LoadPage.propTypes = {
  url: PropTypes.string
}

const Router = () => {
  const [error] = useState(200)
  const firstPage = (v) => {
    if (v) {
      console.log('test')
    }
    return false
  }

  return (
    <Flex
      w='100%'
      h='100%'
    >
      <BrowserRouter>
        <Routes>
          <Route
            path='/' element={
              firstPage(token.get() && process.env.NODE_ENV !== 'development')
                ? <LoadPage url='/dashboard' />
                : <LoadPage url='/login' />
          }
          />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/dashboard' element={<AuthProvider><Dashboard /></AuthProvider>}/>
          <Route path='/transaction/depot'element={<Transaction page={<Depot />} />} />
          <Route path='/transaction/retrait'element={<Transaction page={<Retrait />} />} />
          <Route path='*' element={<ErrorPage errorCode={error} />} />
        </Routes>
      </BrowserRouter>
    </Flex>
  )
}

export default Router
