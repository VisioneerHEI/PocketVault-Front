import Card from '.'
import React, { Flex, Switch, Text } from '@chakra-ui/react'
import PropTypes from 'prop-types'
import { CartesianGrid, Legend, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';
import { useState } from 'react';
import { useEffect } from 'react';

const data = [
  { name: 'Jan', solde: 2015, crypto: 10 },
  { name: 'Feb', solde: 0, crypto: 100 },
  { name: 'Mar', solde: 2290, crypto: .1 },
  { name: 'Apr', solde: 2000, crypto: 50 },
  { name: 'May', solde: 2181, crypto: 20 },
  { name: 'Jun', solde: 2500, crypto: 2 },
  { name: 'Jul', solde: 2100, crypto: 31.56 },
];

const Graph = ({ h }) => {
  const [view, setView] = useState(true)

  useEffect(()=>{
    console.log(view);
  }, [view])

  return (
    <Card
      display={true}
      h={h}
    >
      <Flex
        w='90%'
        h='90%'
        flexDir='column'
        justifyContent='space-evenly'
        alignItems='center'
      >
      <Text
        fontSize="2em">History {view ? "Solde" : "Crypto"} <Switch value={view} onChange={()=>setView(!view)} /></Text>
      <LineChart
        width={500}
        height={400}
        data={data}
        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
      >
        <XAxis dataKey="name" />
        <YAxis />
        <CartesianGrid strokeDasharray="3 3" />
        <Tooltip />
        <Legend />
        {
          view ?
          <Line type="monotone" dataKey="solde" stroke="#82ca9d" />
          :
          <Line type="monotone" dataKey="crypto" stroke="#654321" />
        }
      </LineChart>
      </Flex>
    </Card>
  )
}

Graph.propTypes = {
  h: PropTypes.string,
}

export default Graph
