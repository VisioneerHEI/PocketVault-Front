import Card from '.'
import React, { Flex } from '@chakra-ui/react'
import PropTypes from 'prop-types'
import { CartesianGrid, Legend, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';

const data = [
  { name: 'Jan', solde: 2015, solde2: 10 },
  { name: 'Feb', solde: 0, solde2: 100 },
  { name: 'Mar', solde: 2290, solde2: .1 },
  { name: 'Apr', solde: 2000, solde2: 50 },
  { name: 'May', solde: 2181, solde2: 20 },
  { name: 'Jun', solde: 2500, solde2: 2 },
  { name: 'Jul', solde: 2100, solde2: 31.56 },
];

const Graph = ({ h }) => {
  return (
    <Card
      display={true}
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
          <Line type="monotone" dataKey="solde2" stroke="#654321" />
        </LineChart>
      </Flex>
    </Card>
  )
}

Graph.propTypes = {
  h: PropTypes.string,
}

export default Graph
