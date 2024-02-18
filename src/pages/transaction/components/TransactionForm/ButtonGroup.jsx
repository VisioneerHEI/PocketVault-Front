import React, { Button, Flex } from '@chakra-ui/react'
import color from '../../../../utils/theme.js'

const ButtonGroup = () => {
  return (
    <Flex
      w='100%'
      justifyContent='space-evenly'
    >
      <Button colorScheme='red' bgColor={color.red} mt={4} onClick={() => window.location.href = '/'}>
        Abord
      </Button>
      <Button type='submit' colorScheme='blue' bgColor={color.primary} mt={4}>
        Send
      </Button>
    </Flex>
  )
}

export default ButtonGroup
