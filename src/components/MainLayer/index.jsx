import { Flex } from '@chakra-ui/react'
import React from 'react'
import LeftBar from '../leftBar'
import NavBar from '../NavBar'
import PropTypes from 'prop-types'
import Footer from '../Footer'

const MainLayer = ({ children }) => {
  return (
    <Flex
      h='100vh'
      w='100vw'
    >
      <LeftBar />
      <Flex
        w={['90%', '90%', '80%']}
        h='100%'
        flexDir="column"
      >
        <NavBar />
        {children}
        <Footer />
      </Flex>
    </Flex>
  )
}

MainLayer.propTypes = {
  children: PropTypes.element
}

export default MainLayer
