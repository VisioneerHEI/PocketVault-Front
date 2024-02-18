import React from 'react'
import { Input } from '@chakra-ui/react'
import PropTypes from 'prop-types'
import color from '../utils/theme'

const FormButton = ({ value, onClick }) => {
  return (
    <Input
      type='button'
      value={value}
      w='85%'
      h='50px'
      border='0'
      backgroundColor={color.primary}
      color={color.light}
      fontFamily='monospace'
      onClick={onClick}
    />
  )
}

FormButton.propTypes = {
  value: PropTypes.string,
  onClick: PropTypes.func
}

export default FormButton
