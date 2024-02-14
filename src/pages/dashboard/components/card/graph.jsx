import Card from '.'
import React, { Flex } from '@chakra-ui/react'
import PropTypes from 'prop-types'
import { CartesianGrid, Legend, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';

const data = [
  { name: 'Jan', solde: 2400 },
  { name: 'Feb', solde: 2210 },
  { name: 'Mar', solde: 2290 },
  { name: 'Apr', solde: 2000 },
  { name: 'May', solde: 2181 },
  { name: 'Jun', solde: 2500 },
  { name: 'Jul', solde: 2100 },
];

const Graph = ({ h }) => {
  return (
    <Card
      display='t'
      h={h}
    >
      <Flex
        w='100%'
        h='100%'
        flexDir='column'
        justifyContent='space-evenly'
        alignItems='center'
      >
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
          <Line type="monotone" dataKey="solde" stroke="#82ca9d" />
        </LineChart>
      </Flex>
    </Card>
  )
}

Graph.propTypes = {
  h: PropTypes.string,
}

export default Graph
