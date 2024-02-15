import Card from '.'
import React, { Stat, StatNumber, StatLabel, StatHelpText, StatArrow, Text, Flex } from '@chakra-ui/react'
import Divider from '../../../../components/divider'
import PropTypes from 'prop-types'

const Spending = ({ isCrypto }) => {
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
          fontSize='1.25em'
          fontFamily='sans-serif'
          fontWeight='1em'
        >Last {isCrypto ? "Crypto" : ""} Transaction
        </Text>
        <Divider orientation='h' />
        <Stat>
          <StatLabel>Transaction</StatLabel>
          <StatNumber>$12.000.00</StatNumber>
          <StatHelpText>
            <StatArrow type='increase' />
            07/02/2024
          </StatHelpText>
        </Stat>
        <Stat>
          <StatLabel>Transaction</StatLabel>
          <StatNumber>$120.00</StatNumber>
          <StatHelpText>
            <StatArrow type='decrease' />
            17/02/2024
          </StatHelpText>
        </Stat>
      </Flex>
    </Card>
  )
}

Spending.propTypes = {
  isCrypto: PropTypes.bool
}

export default Spending
