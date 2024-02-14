import React, { Flex, Text } from '@chakra-ui/react'
import { useEffect } from 'react'

import Form from '../../components/form'
import FormButton from '../../components/formButton'
import InputForm from '../../components/inputForm'
import useError from '../../hooks/useError'
import useInput from '../../hooks/useInput'
import { verify } from '../../utils/password'
import color from '../../utils/theme'

const SignUp = () => {
  const [, , modifyName] = useInput('')
  const [, , modifyMail] = useInput('')
  const [password, , modifyPassword] = useInput('')
  const [confirmPassword, , modifyConfirmPassword] = useInput('')

  const [error, setError] = useError('', 5000)

  const submit = () => {
    if (!verify(password, confirmPassword)) {
      setError('Password error')
    }
  }

  useEffect(() => {}, [error])

  return (
    <Flex
      w='100vw'
      h='100vh'
      flexDir='column'
      justifyContent='center'
      alignItems='center'
    >
      <Form
        name='SignUp'
        additional={
          <Text fontSize='small'>If you want to connect to an another account <Text color={color.primary}><a href='/login'>Login</a></Text></Text>
                }
        inputs={
          <>
            <InputForm placeholder='name' onChange={modifyName} />
            <InputForm placeholder='mail' onChange={modifyMail} />
            <InputForm placeholder='password' onChange={modifyPassword} />
            <InputForm placeholder='confirm password' onChange={modifyConfirmPassword} />
            <FormButton
              value='Create'
              backgroundColor='cyan'
              color='white'
              onClick={submit}
            />
          </>
                }
        reverse
        error={error}
      />
    </Flex>
  )
}

export default SignUp
