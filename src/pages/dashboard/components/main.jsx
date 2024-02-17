import React from 'react'
import { Flex } from '@chakra-ui/react'
import Card from './card'
import Solde from './card/solde'
import Spending from './card/spending'
import Graph from './card/graph'

const transactions = [
  {
    value: '12000',
    date: '07/02/2024'
  }, {
    value: '-1200',
    date: '07/02/2024'
  }
]

const Main = () => {
  return (
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
      <Graph h='500px' />
      <Graph h='500px' />
      <Card
        h='500px'
      >
        <Solde />
        <Spending isCrypto content={transactions} />
      </Card>
      <Card
        h='500px'
      >
        <Spending content={transactions} />
        <Solde isCrypto />
      </Card>
    </Flex>
  )
}

export default Main
