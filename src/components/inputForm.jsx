import React from 'react'
import { Input } from '@chakra-ui/react'
import PropTypes from 'prop-types'

const InputForm = ({ placeholder, onChange, isPassword }) => {
  return (
    <Input
      minH='20px'
      h='10vh'
      w='80%'
      padding='0 1em 0 1em'
      placeholder={placeholder || 'Default input form'}
      onChange={onChange}
      borderRadius='.5em'
      border='0'
      type={isPassword ? "password" : "text"}
    />
  )
}

InputForm.propTypes = {
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
  isPassword: PropTypes.bool,
}

export default InputForm
