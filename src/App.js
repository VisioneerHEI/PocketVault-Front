import './App.css'
import Router from './pages/Router'
import React, { Flex } from '@chakra-ui/react'

function App () {
  return (
    <Flex
      h="100vh"
      w="100vw">
      <Router />
    </Flex>
  )
}

export default App
