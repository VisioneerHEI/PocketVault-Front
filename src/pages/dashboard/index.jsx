import { Flex } from '@chakra-ui/react'
import React from 'react'
import LeftBar from './components/leftBar'
import RigthBar from './components/rigthBar'

const Dashboard = () => {
  return (
    <Flex
      h='100%'
      w='100%'
    >
      <LeftBar />
      <RigthBar />
    </Flex>
  )
}

export default Dashboard
