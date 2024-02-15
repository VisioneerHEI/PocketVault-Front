import Card from '.'
import React, { Stat, StatNumber, StatLabel, Text, Flex } from '@chakra-ui/react'
import Divider from '../../../../components/divider'
import PropTypes from 'prop-types'

const Solde = ({ isCrypto }) => {
  return (
    <Card
      display={true}
    >
      <Flex
        w='100%'
        h='100%'
        flexDir='column'
        justifyContent='space-evenly'
        alignItems='center'
      >
        <Text
          fontSize='1.5em'
          fontFamily='sans-serif'
          fontWeight='1em'
        >Solde {isCrypto ? "Crypto" : ""}
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

Solde.propTypes = {
  isCrypto: PropTypes.bool
}

export default Solde
