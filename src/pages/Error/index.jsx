import { Flex, Text } from '@chakra-ui/react'

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

export default ErrorPage
