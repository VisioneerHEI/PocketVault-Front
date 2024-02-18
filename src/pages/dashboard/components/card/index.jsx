import React from 'react'
import { Flex } from '@chakra-ui/react'
import PropTypes from 'prop-types'
import color from '../../../../utils/theme.js'

const Card = ({ h, children, display, fullW }) => {
  return (
    <Flex
      h={h || '49%'}
      w={fullW ? ['100%', '100%', '90%'] : ['100%', '100%', '49%']}
      border='0 solid'
      borderRadius='1em'
      wrap='wrap'
      flexDir='row'
      justifyContent='space-evenly'
      margin='0'
      padding='0'
      opacity={display ? '.9' : '1'}
      bgColor={display ? color.primary : ''}
    >
      {children}
    </Flex>
  )
}

Card.propTypes = {
  h: PropTypes.string,
  children: PropTypes.element,
  display: PropTypes.bool,
  fullW: PropTypes.bool
}

export default Card
