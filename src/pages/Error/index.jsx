import React, { Flex, Text } from '@chakra-ui/react'
import PropTypes from 'prop-types'

const ErrorPage = ({ errorCode }) => {
  return (
    <Flex
      w='100vw'
      h='100vh'
      flexDir='column'
      alignItems='center'
      justifyContent='center'
      fontSize='5vw'
    >
      <Text>
        Error code
      </Text>
      <Text>{errorCode}</Text>
    </Flex>
  )
}

ErrorPage.propTypes = {
  errorCode: PropTypes.string
}

export default ErrorPage
