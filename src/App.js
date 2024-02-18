import './App.css'
import Router from './pages/Router'
import React, { Flex } from '@chakra-ui/react'
import color from './utils/theme'

function App () {
  return (
    <Flex
      h='100vh'
      w='100vw'
      bgColor={color.light}
    >
      <Router />
    </Flex>
  )
}

export default App
