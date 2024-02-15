import React from 'react'
import { Avatar, Button, Flex } from '@chakra-ui/react'

import * as token from '../../utils/token.js'

import './style.css'
import color, { transColor } from '../../utils/theme'
import Divider from '../divider/index.jsx'

const NavBar = () => {
  console.log(transColor.dark(0))
  return (
    <Flex
      h='70px'
      w='100%'
      position='absolute'
      top='0'
      right='0'
      paddingTop='10px'
      className='to-blur'
      bgColor={transColor.dark(.4)}
      overflow="hidden"
    >
      <Flex
        w='70%'
      />
      <Flex
        h='100%'
        alignItems='center'
        w='30%'
        justifyContent='end'
        gap='25px'
        paddingRight='50px'
      >
        <Button
          onClick={() => {
            token.dump()
            window.location.href = '/login'
          }}>Log Out</Button>
        <Divider orientation='v'light={true} />
        <Avatar />
        <Flex
          h="15em"
          w="15em"
          bgColor={color.primary}
          position="absolute"
          zIndex={-1}
          borderRadius="1em"
          transform="translate(3em, 0) rotate(45deg)"
          />
      </Flex>
    </Flex>
  )
}

export default NavBar
