import React from 'react'
import PropTypes from 'prop-types'
import { useColorModeValue, VisuallyHidden, chakra } from '@chakra-ui/react'

const SocialButton = ({
  children,
  label,
  href,
}) => {
  return (
    <chakra.button
      bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
      rounded={'full'}
      w={8}
      h={8}
      cursor={'pointer'}
      as={'a'}
      href={href}
      display={'inline-flex'}
      alignItems={'center'}
      justifyContent={'center'}
      transition={'background 0.3s ease'}
      _hover={{
        bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
      }}>
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  )
}

SocialButton.propTypes = {
  children: PropTypes.element,
  label: PropTypes.string,
  href: PropTypes.string,
}

export default SocialButton
