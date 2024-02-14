import React, { Flex } from '@chakra-ui/react'
import PropTypes from 'prop-types'

const Divider = ({ orientation, light }) => {
  return (
    <>
      {orientation === 'h' || (orientation && orientation !== 'v')
        ? <Flex h='1px' w='80%' bgColor={light ? 'gray' : 'darkgray'} />
        : <></>}
      {orientation === 'v'
        ? <Flex w='1px' h='80%' bgColor={light ? 'gray' : 'darkgray'} />
        : <></>}
    </>
  )
}

Divider.propTypes = {
  orientation: PropTypes.string,
  light: PropTypes.bool
}

export default Divider
