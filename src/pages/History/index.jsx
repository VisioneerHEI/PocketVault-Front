import { Flex, Text } from '@chakra-ui/react'
import React from 'react'
import { useContext } from 'react'
import MainLayer from '../../components/MainLayer'
import { UserContext } from '../../context/AuthProvider'
import Card from '../dashboard/components/card'
import Graph from '../dashboard/components/card/graph'
import Spending from '../dashboard/components/card/spending'

const transactions = [
  {
    value: 5000000,
    date: '01/01/2023'
  },
]

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
        <Graph h='500px' fullW />
        <Card fullH display>
          <Text fontSize="2em">Normal Solde</Text>
        </Card>
        <Spending fullH content={getAllTransaction()} />
        <Card fullH display>
          <Text fontSize="2em">Crypto Solde</Text>
        </Card>
        <Spending isCrypto fullH content={transactions} />
      </Flex>
    </MainLayer>
  )
}

export default History
