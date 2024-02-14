import React from 'react'
import { Avatar, Flex } from '@chakra-ui/react'

import * as token from '../../../utils/token.js'

import './navBar.css'
import Button from '../../../components/button.jsx'
import Divider from '../../../components/divider/index.jsx'
import color, { transColor } from '../../../utils/theme.js'

const NavBar = () => {
  console.log(transColor.dark(0))
  return (
    <Flex
      h='70px'
      w='100%'
      position='absolute'
      top='0'
      left='0'
      paddingTop='10px'
      className='to-blur'
      bgColor={transColor.dark(.4)}
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
          }}
        />
        <Divider orientation='v'light={true} />
        <Avatar
          w='15%'
          bgColor={color.dark}
          borderRadius='100%'
        />
      </Flex>
    </Flex>
  )
}

export default NavBar
