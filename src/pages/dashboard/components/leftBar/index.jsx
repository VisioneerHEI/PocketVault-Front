import React from 'react'
import { Flex, Text } from '@chakra-ui/react'
import DropDown from './components/DropDown'
import Divider from '../../../../components/divider'

const LeftBar = () => {
  return (
    <Flex
      bgColor='grey'
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
        <Text>PocketVault</Text>
        <Divider orientation='h' />
        <DropDown toDisplay={[
          { name: 'DashBoard', content: ['Solde', 'Transfert', 'Depot'] },
          { name: 'Extras', content: ['Vendre', 'Historique'] },
          { name: 'Internationals', content: ['Bourse'] },
          { name: 'Contacts', content: ['Support', 'Social Media'] }
        ]}
        />
      </Flex>
    </Flex>
  )
}

export default LeftBar
