import React from 'react'
import { Flex } from '@chakra-ui/react'
import NavBar from './navBar'
import Main from './main'

const RigthBar = () => {
  return (
    <Flex
      h='100%'
      w='80%'
      flexDir='column'
      gap='1em'
    >
      <NavBar />
      <Main />
    </Flex>
  )
}

export default RigthBar
