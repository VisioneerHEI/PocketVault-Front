import Card from '.'
import React, { Stat, StatNumber, StatLabel, Text, Flex } from '@chakra-ui/react'
import Divider from '../../../../components/divider'
import PropTypes from 'prop-types'
import { useContext } from 'react'
import { UserContext } from '../../../../context/AuthProvider'

const Solde = ({ isCrypto }) => {
  const { getSolde } = useContext(UserContext)

  return (
    <Card
      display
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
        >Solde {isCrypto ? 'Crypto' : ''}
        </Text>
        <Divider orientation='h' />
        <Stat>
          <StatLabel>Total in account</StatLabel>
          <StatNumber>${getSolde()}</StatNumber>
        </Stat>
      </Flex>
    </Card>
  )
}

Solde.propTypes = {
  isCrypto: PropTypes.bool
}

export default Solde
