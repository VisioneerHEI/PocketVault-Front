import React, { Input } from '@chakra-ui/react'
import color, { transColor } from '../utils/theme'

const Button = (props) => {
  return (
    <Input
      {...props}
      type='button'
      value='Log Out'
      h='40px'
      w='25%'
      bgColor={color.second}
      border='0'
      borderRadius='1em'
      transitionDuration="400ms"
      _hover={{
        bgColor: transColor.second(.5)
      }}
    />
  )
}

export default Button
