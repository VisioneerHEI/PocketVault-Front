import React from 'react'
import { Input } from '@chakra-ui/react'
import PropTypes from 'prop-types'

const FormButton = ({ value, backgroundColor, color, onClick }) => {
  return (
    <Input
      type='button'
      value={value}
      w='85%'
      h='50px'
      border='0'
      backgroundColor={backgroundColor}
      color={color}
      fontFamily='monospace'
      onClick={onClick}
    />
  )
}

FormButton.propTypes = {
  value: PropTypes.string,
  backgroundColor: PropTypes.string,
  color: PropTypes.string,
  onClick: PropTypes.func
}

export default FormButton
