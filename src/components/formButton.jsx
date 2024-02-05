import { Input } from '@chakra-ui/react'

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

export default FormButton
