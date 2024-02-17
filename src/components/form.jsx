import { Avatar, Flex, Text } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import color from '../utils/theme'

import './form.css'

const Form = ({ name, additional, inputs, reverse, error }) => {
  useEffect(() => {
    reverse = !!reverse
    console.log('render')
  }, [error])

  return (
    <Flex
      w='90%'
      h='90%'
      bgColor='white'
      boxShadow='.01em .01em 50em grey'
      borderRadius='1em'
      className='to-hidden'
      position='relative'
    >
      <Flex
        bgGradient={`linear(to-r, ${color.primary}, white)`}
        w='600px'
        h='500px'
        borderRadius='50px'
        position='absolute'
        right='-200px'
        transform='rotate(45deg)'
        opacity='.4'
        zIndex='0'
      />
      <Flex
        bgGradient={`linear(to-l, ${color.primary}, white)`}
        w='550px'
        h='600px'
        borderRadius='50px'
        position='absolute'
        right='-200px'
        transform='rotate(45deg)'
        opacity='.4'
        zIndex='0'
      />
      <Flex
        w={['100%', '100%', '50%']}
        h='100%'
        flexDir='column'
        alignItems='center'
        zIndex='1'
      >
        <Flex
          fontFamily='cursive'
          fontSize='3em'
          h='30%'
          w='100%'
          justifyContent='center'
          alignItems='center'
        >
          <Flex
            flexDir='row'
          >
            <Text color={color.primary}>Pocket</Text>
            <Text color={color.dark}>Vault</Text>
          </Flex>
        </Flex>
        <Flex
          flexDir='column'
          h='60%'
          w='60%'
          justifyContent='space-around'
          alignItems='center'
        >
          <Text
            fontFamily='monospace'
            fontSize='2em'
          >{name}
          </Text>
          {inputs}
          {additional}
        </Flex>
      </Flex>
      <Flex
        w={['0%', '0%', '50%']}
        h='100%'
        justifyContent='center'
        alignItems='center'
        flexDir='column'
      >
        <Flex
          h='50%'
          w='40%'
          justifyContent='center'
          alignItems='center'
          backgroundColor='Window'
          zIndex='1'
          flexDir='column'
          borderRadius='.2em'
          shadow='.01em .01em .5em gray'
          display={['none', 'none', 'flex']}
        >
          <Avatar borderRadius='100%' backgroundColor={color.dark} w='50px' h='50px' />
          <Text
            textAlign='center'
            fontSize='x-large'
          >
            Welcome Back
          </Text>
          <Text
            textAlign='center'
            fontSize='small'
            w='80%'
          >
            Your favorite virtual wallet management application
          </Text>
        </Flex>
        <Flex
          backgroundColor={color.red}
          w='20%'
          h={error ? '10%' : '0'}
          zIndex='1'
          borderRadius='0 0 1em 1em'
          justifyContent='center'
          alignItems='center'
          transition='all 1s'
          overflow='hidden'
        >
          <Text
            textAlign='center'
          >{error}
          </Text>
        </Flex>
      </Flex>
    </Flex>
  )
}

Form.propTypes = {
  name: PropTypes.string,
  additional: PropTypes.any,
  inputs: PropTypes.any,
  reverse: PropTypes.bool,
  error: PropTypes.number
}

export default Form
