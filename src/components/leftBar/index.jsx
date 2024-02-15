import React from 'react'
import { Flex, Text } from '@chakra-ui/react'
import DropDown from './components/DropDown'
import Divider from '../divider'
import color from '../../utils/theme'

const LeftBar = () => {
  return (
    <Flex
      bgColor={color.dark}
      h='100%'
      w='20%'
      zIndex='11'
      flexDir='column'
      justifyContent='space-between'
      alignItems='center'
    >
      <Flex
        h='100%'
        w='100%'
        flexDir='column'
        alignItems='center'
      >
        <Text
          h="3em"
          fontSize="2em"
          padding=".5em">PocketVault</Text>
        <Divider orientation='h' />
        <DropDown toDisplay={[
          { name: 'DashBoard', content: [
            {"name":'All', "redirect":"/dashboard"},
            {"name":'Depot', "redirect":"/transaction/depot"},
            {"name":'Get Money', "redirect":"/transaction/retrait"},
          ]},
          { name: 'Other', content: [
            {"name":'Contact us', "redirect":"#"},
            {"name":'Support', "redirect":"#"},
          ]},
        ]}
        />
      </Flex>
    </Flex>
  )
}

export default LeftBar
