import Card from '.'
import React, { Flex, Switch, Text } from '@chakra-ui/react'
import PropTypes from 'prop-types'
import { CartesianGrid, Legend, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts'
import { useState, useEffect } from 'react'

/*const data2 = [
  { name: 'Jan', solde: 2015, crypto: 10 },
  { name: 'Feb', solde: 0, crypto: 100 },
  { name: 'Mar', solde: 2290, crypto: 0.1 },
  { name: 'Apr', solde: 2000, crypto: 50 },
  { name: 'May', solde: 2181, crypto: 20 },
  { name: 'Jun', solde: 2500, crypto: 2 },
  { name: 'Jul', solde: 2100, crypto: 31.56 }
]*/

const Graph = ({ h, fullW, content }) => {
  const [view, setView] = useState(true)

  useEffect(() => {
    console.log(view)
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
          data={content.map(e=>{
            return {
            name: e.date,
            solde: e.value,
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
            ? <Line type='monotone' dataKey='solde' stroke='#82ca9d' />
            : <Line type='monotone' dataKey='crypto' stroke='#654321' />
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
}

export default Graph
