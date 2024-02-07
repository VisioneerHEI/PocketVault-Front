import { Flex } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ErrorPage from './Error'
import Login from './login'
import SignUp from './signup'
import NeedTokenPage from "../components/needTokenPage";
import PropTypes from 'prop-types';

import * as token from "../utils/token.js"
import Dashboard from './dashboard'

const LoadPage = ({url}) => {
  useEffect(()=>{
    window.location.href = url
  })
  return (<></>)
};

LoadPage.propTypes = {
  url: PropTypes.string,
}

const Router = () => {
  const [error, ] = useState(200)
  const firstPage = (v) => {
    !!v;
    return false;
  };

  return (
    <Flex
      w="100%"
      h="100%">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={
              firstPage(token.get() && process.env.NODE_ENV!=='development') ?
              <LoadPage url='/dashboard' /> :
              <LoadPage url='/login' />
          } />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<SignUp />} />
                    <Route path='/dashboard' element={
                        <NeedTokenPage Page={<Dashboard />} token={token.get()} />
                    } />
          <Route path='*' element={<ErrorPage error_code={error} />} />
        </Routes>
      </BrowserRouter>
    </Flex>
  )
}

export default Router
