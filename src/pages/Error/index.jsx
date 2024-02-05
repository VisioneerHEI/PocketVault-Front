import React from 'react';
import { Flex, Text } from '@chakra-ui/react'
import PropTypes from 'prop-types';

const ErrorPage = ({ error_code }) => {
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
      <Text>{error_code}</Text>
    </Flex>
  )
}

ErrorPage.propTypes = {
  error_code: PropTypes.string,
};

export default ErrorPage
