import Card from '.'
import React, { Flex, Switch, Text } from '@chakra-ui/react'
import PropTypes from 'prop-types'
import { CartesianGrid, Legend, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts'
import { useState, useEffect } from 'react'
import color from '../../../../utils/theme'

/*const data2 = [
  { name: 'Jan', solde: 2015, crypto: 10 },
  { name: 'Feb', solde: 0, crypto: 100 },
  { name: 'Mar', solde: 2290, crypto: 0.1 },
  { name: 'Apr', solde: 2000, crypto: 50 },
  { name: 'May', solde: 2181, crypto: 20 },
  { name: 'Jun', solde: 2500, crypto: 2 },
  { name: 'Jul', solde: 2100, crypto: 31.56 }
]*/

const Graph = ({ h, fullW, content, isCrypto }) => {
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
        >History {view ? 'Solde' : 'Crypto'} <Switch value={view} onChange={() => setView(!view)} />
        </Text>
        <LineChart
          width={fullW ? 800 : 500}
          height={400}
          data={content.map((e, i)=>{
            return {
            name: e.date,
            solde: content.slice(0, i+1).reduce((a,b)=>{return a+Number(b.value)}, 0),
            crypto: content.slice(0, i+1).reduce((a,b)=>{return a+Number(b.cryptoValue)}, 0),
            }
          })}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        >
          <XAxis dataKey='name' />
          <YAxis />
          <CartesianGrid strokeDasharray='3 3' />
          <Tooltip />
          <Legend />
          {
          view
            ? <Line type='monotone' dataKey='solde' stroke={color.second} />
            : <Line type='monotone' dataKey='crypto' stroke={color.primary} />
        }
        </LineChart>
      </Flex>
    </Card>
  )
}

Graph.propTypes = {
  h: PropTypes.string,
  fullW: PropTypes.bool,
  content: PropTypes.array,
  isCrypto: PropTypes.bool,
}

export default Graph
