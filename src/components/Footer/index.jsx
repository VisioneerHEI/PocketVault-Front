import { Box, Container, Stack, Text, useColorModeValue } from "@chakra-ui/react"
import React from "react"
import { FaInstagram, FaGithub, FaYoutube } from "react-icons/fa"
import SocialButton from "./SocialButton"

const Footer = () => {
    return (
        <Box
          bg={useColorModeValue('gray.50', 'gray.900')}
          color={useColorModeValue('gray.700', 'gray.200')}>
          <Container
            as={Stack}
            maxW={'6xl'}
            py={4}
            direction={{ base: 'column', md: 'row' }}
            spacing={4}
            justify={{ base: 'center', md: 'space-between' }}
            align={{ base: 'center', md: 'center' }}>
            <Text>© CopyRight 2024. Visioneer Team</Text>
            <Stack direction={'row'} spacing={6}>
              <SocialButton label={'Github'} href={'https://github.com/VisioneerHEI/PocketVault-Front'}>
                <FaGithub />
              </SocialButton>
              <SocialButton label={'YouTube'} href={'#'}>
                <FaYoutube />
              </SocialButton>
              <SocialButton label={'Instagram'} href={'#'}>
                <FaInstagram />
              </SocialButton>
            </Stack>
          </Container>
        </Box>
      )
}

export default Footer