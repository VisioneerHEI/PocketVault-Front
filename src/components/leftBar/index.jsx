import React from 'react'
import { Flex, Text } from '@chakra-ui/react'
import DropDown from './components/DropDown'
import Divider from '../divider'
import color from '../../utils/theme'
import {
  HamburgerIcon,
  AddIcon,
  MinusIcon,
  PhoneIcon,
  EmailIcon,
  ExternalLinkIcon
} from '@chakra-ui/icons'
import { GoGraph } from 'react-icons/go'
import { FaBorderAll } from 'react-icons/fa'

const LeftBar = () => {
  return (
    <Flex
      bgColor={color.dark}
      h='100%'
      w={['10%', '10%', '20%']}
      minW={"60px"}
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
        <Flex
            h="3em"
            fontSize="2em"
            padding=".5em">
          <Text
            display={["none", "none", "block"]}>PocketVault</Text>
            <HamburgerIcon
              display={["block", "block", "none"]}/>
          </Flex>
        <Divider orientation='h' />
        <DropDown toDisplay={[
          { name: 'DashBoard', icon: <GoGraph />, content: [
            {name:'All', redirect:"/dashboard", icon: <FaBorderAll />},
            {name:'Depot', redirect:"/transaction/depot", icon: <AddIcon />},
            {name:'Get Money', redirect:"/transaction/retrait", icon: <MinusIcon />},
          ]},
          { name: 'Other', icon: <ExternalLinkIcon />, content: [
            {name:'Contact us', redirect:"#", icon: <EmailIcon />},
            {name:'Support', redirect:"#", icon: <PhoneIcon />},
          ]},
        ]}
        />
      </Flex>
    </Flex>
  )
}

export default LeftBar
