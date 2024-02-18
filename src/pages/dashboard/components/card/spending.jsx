import Card from '.'
import React, { Stat, StatNumber, StatLabel, StatHelpText, StatArrow, Text, Flex } from '@chakra-ui/react'
import Divider from '../../../../components/divider'
import PropTypes from 'prop-types'

const Spending = ({ isCrypto, content = [], fullH = false }) => {
  return (
    <Card
      display
      h={fullH ? 'auto' : null}
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
        >Last {isCrypto ? 'Crypto' : ''} Transaction
        </Text>
        <Divider orientation='h' />
        {content.map((transaction, i) => (
          <Stat
            key={`${i}transaction${Math.random()}`}
          >
            <StatLabel>Transaction</StatLabel>
            <StatNumber>${Math.abs(transaction.value)}</StatNumber>
            <StatHelpText>
              <StatArrow type={transaction.value >= 0 ? 'increase' : 'decrease'} />
              {transaction.date}
            </StatHelpText>
          </Stat>
        )).reverse()}
      </Flex>
    </Card>
  )
}

Spending.propTypes = {
  isCrypto: PropTypes.bool,
  content: PropTypes.array,
  fullH: PropTypes.bool
}

export default Spending
