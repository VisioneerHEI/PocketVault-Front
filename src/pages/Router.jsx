import { Flex } from '@chakra-ui/react'
import React, { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ErrorPage from './Error'
import Login from './login'
import SignUp from './signup'

const Router = () => {
  const [error, ] = useState(200)

  return (
    <Flex>
      <BrowserRouter>
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='*' element={<ErrorPage error_code={error} />} />
        </Routes>
      </BrowserRouter>
    </Flex>
  )
}

export default Router
