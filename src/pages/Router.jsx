import { Flex, Text } from '@chakra-ui/react'
import React, { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ErrorPage from './Error'
import Login from './login'
import SignUp from './signup'
import NeedTokenPage from "../components/needTokenPage";

import * as token from "../utils/token.js"

const Router = () => {
  const [error, ] = useState(200)

  return (
    <Flex>
      <BrowserRouter>
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<SignUp />} />
                    <Route path='/dashboard' element={
                        <NeedTokenPage Page={<Text>Test</Text>} token={token.get()} />
                    } />
          <Route path='*' element={<ErrorPage error_code={error} />} />
        </Routes>
      </BrowserRouter>
    </Flex>
  )
}

export default Router
