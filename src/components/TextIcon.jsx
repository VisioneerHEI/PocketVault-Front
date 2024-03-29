import React, { Flex, Text } from '@chakra-ui/react'
import PropTypes from 'prop-types'

const TextIcon = ({ text, icon }) => {
  return (
    <Flex
      maxH='100%'
      h='3em'
      fontSize='1.5em'
      margin={['0', '0', '.5em']}
      justifyContent="center"
      alignItems="center"
    >
      <Text
        display={['none', 'none', 'block']}
      >{text}
      </Text>
      <Flex display={['block', 'block', 'none']} fontSize="1.2em">{icon}</Flex>
    </Flex>
  )
}

TextIcon.propTypes = {
  text: PropTypes.string,
  icon: PropTypes.element
}

export default TextIcon
