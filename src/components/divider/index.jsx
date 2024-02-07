import React, { Flex } from '@chakra-ui/react'
import PropTypes from 'prop-types'

const Divider = ({ orientation }) => {
  return (
    <>
      {orientation === 'h' || (orientation && orientation !== 'v')
        ? <Flex h='1px' w='80%' bgColor='darkgray' />
        : <></>}
      {orientation === 'v'
        ? <Flex w='1px' h='80%' bgColor='darkgray' />
        : <></>}
    </>
  )
}

Divider.propTypes = {
  orientation: PropTypes.string
}

export default Divider
