import React from 'react'
import { Flex } from '@chakra-ui/react'
import Card from './card'
import Solde from './card/solde'
import Spending from './card/spending'

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
      <Card
        h='500px'
        display='t'
      />
      <Card
        h='500px'
      >
        <Solde />
        <Spending />
        <Spending />
        <Solde />
      </Card>
    </Flex>
  )
}

export default Main
