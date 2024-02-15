import { Flex } from '@chakra-ui/react'
import React from 'react'
import LeftBar from '../leftBar'
import NavBar from '../NavBar'
import PropTypes from 'prop-types'

const MainLayer = ({ children }) => {
  return (
    <Flex
      h='100vh'
      w='100vw'
    >
      <LeftBar />
      <Flex
        w="80%"
        h="100%">
        <NavBar />
        {children}
      </Flex>
    </Flex>
  )
}

MainLayer.propTypes = {
    children: PropTypes.element,
}

export default MainLayer
