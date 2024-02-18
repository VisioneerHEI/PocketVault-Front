import React, { Flex, Text } from '@chakra-ui/react'
import Form from '../../components/form'
import FormButton from '../../components/formButton'
import InputForm from '../../components/inputForm'
import useInput from '../../hooks/useInput'
import * as axios from '../../utils/axios.js'
import color from '../../utils/theme'

const Login = () => {
  const [, , modifyAccount] = useInput('')
  const [, , modifyPassword] = useInput('')

  const handleLogin = () => {
    return axios.login()
  }

  return (
    <Flex
      w='100vw'
      h='100vh'
      flexDir='column'
      justifyContent='center'
      alignItems='center'
    >
      <Form
        name='Login'
        additional={<Text fontSize='small' color={color.primary}><a href='/signUp'>Sign Up now</a></Text>}
        inputs={
          <>
            <InputForm placeholder='Email or UserName' onChange={modifyAccount} />
            <InputForm placeholder='Password' onChange={modifyPassword} />
            <FormButton
              value='Login'
              backgroundColor='cyan'
              color='white'
              onClick={handleLogin}
            />
          </>
                    }
      />
    </Flex>
  )
}

export default Login
