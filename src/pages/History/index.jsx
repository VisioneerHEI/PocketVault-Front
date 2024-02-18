import { Flex } from '@chakra-ui/react'
import React from 'react'
import { useContext } from 'react'
import MainLayer from '../../components/MainLayer'
import { UserContext } from '../../context/AuthProvider'
import Graph from '../dashboard/components/card/graph'
import ListTransaction from './components/listTransaction'

/*const transactions = [
  {
    value: 5000000,
    date: '01/01/2023'
  },
]*/

const History = () => {
  const { getAllTransaction } = useContext(UserContext)

  return (
    <MainLayer>
      <Flex
        h='100%'
        w='100%'
        flexDir='row'
        wrap='wrap'
        justifyContent='space-evenly'
        overflowX='hidden'
        margin='0'
        padding='0'
        paddingTop='90px'
        gap='.5em'
      >
        <Graph h='500px' fullW content={getAllTransaction()} />
        <ListTransaction content={getAllTransaction()} />
      </Flex>
    </MainLayer>
  )
}

export default History
