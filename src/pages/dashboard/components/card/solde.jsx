import Card from '.'
import React, { Stat, StatNumber, StatLabel, Text, Flex } from '@chakra-ui/react'
import Divider from '../../../../components/divider'

const Solde = () => {
  return (
    <Card
      display='t'
    >
      <Flex
        w='100%'
        h='100%'
        flexDir='column'
        justifyContent='space-evenly'
        alignItems='center'
      >
        <Text
          fontSize='larger'
          fontFamily='sans-serif'
          fontWeight='1em'
        >Solde
        </Text>
        <Divider orientation='h' />
        <Stat>
          <StatLabel>Total in account</StatLabel>
          <StatNumber>$12.000.00</StatNumber>
        </Stat>
      </Flex>
    </Card>
  )
}

export default Solde
