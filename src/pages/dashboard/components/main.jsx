import React from 'react'
import { Flex } from '@chakra-ui/react'
import Card from './card'
import Solde from './card/solde'
import Spending from './card/spending'
import Graph from './card/graph'

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
    >
      <Graph h='500px' />
      <Card
        h='500px'
      >
        <Solde />
        <Spending isCrypto={true} />
        <Spending />
        <Solde isCrypto={true} />
      </Card>
      <Graph h='500px' />
      <Graph h='500px' />
    </Flex>
  )
}

export default Main
