import Card from '.'
import React, { Flex, Switch, Text } from '@chakra-ui/react'
import PropTypes from 'prop-types'
import { CartesianGrid, Legend, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts'
import { useState, useEffect } from 'react'
import color from '../../../../utils/theme'


const TransactionCard = ({ h, fullW, content, isCrypto }) => {
  const [view, setView] = useState(!isCrypto)

  useEffect(() => {
  }, [view])

  return (
    <Card
      display
      h={h}
      fullW={fullW}
    >
      <Flex
        w='90%'
        h='90%'
        flexDir='column'
        justifyContent='space-evenly'
        alignItems='center'
        overflowY='hidden'
        overflowX='auto'
      >
        <Text
          fontSize='2em'
        >{view ? '' : 'Crypto'} Transactions <Switch value={view} onChange={() => setView(!view)} />
        </Text>
        <LineChart
          width={fullW ? 800 : 500}
          height={400}
          data={Array.isArray(content) ? content.map(e=>{
            return {
            name: e.date,
            solde: e.value,
            crypto: e.cryptoValue,
            }
          }) : <></>}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        >
          <XAxis dataKey='name' />
          <YAxis />
          <CartesianGrid strokeDasharray='3 3' />
          <Tooltip />
          <Legend />
          {
          view
            ? <Line type='monotone' dataKey='solde' stroke={color.dark} />
            : <Line type='monotone' dataKey='crypto' stroke={color.light} />
        }
        </LineChart>
      </Flex>
    </Card>
  )
}

TransactionCard.propTypes = {
  h: PropTypes.string,
  fullW: PropTypes.bool,
  content: PropTypes.array,
  isCrypto: PropTypes.bool,
}

export default TransactionCard
