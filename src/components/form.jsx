import { Avatar, Flex, Input, Text } from "@chakra-ui/react";
import { useEffect } from "react";
import InputForm from "./inputForm";

import "./form.css"

const Form = ({name, additional, inputs, reverse, error}) => {
    useEffect(()=>{
        console.log("render");
    }, [error])

    return (
        <Flex
            w="90%"
            h="90%"
            bgColor="white"
            boxShadow=".01em .01em 50em grey"
            borderRadius="1em"
            className="toHidden"
            position="relative">
            <Flex
                bgColor="cyan"
                w="600px"
                h="500px"
                borderRadius="50px"
                position="absolute"
                right="-200px"
                transform="rotate(45deg)"
                opacity=".5"/>
            <Flex
                bgColor="cyan"
                w="550px"
                h="600px"
                borderRadius="50px"
                position="absolute"
                right="-200px"
                transform="rotate(45deg)"
                opacity=".6"/>
            <Flex
                w="50%"
                h="100%"
                flexDir="column"
                alignItems="center">
                    <Flex
                        fontFamily="cursive"
                        fontSize="3em"
                        h="30%"
                        w="100%"
                        justifyContent="center"
                        alignItems="center">
                        <Flex
                            flexDir="row">
                            <Text
                                color="yellow">Poket</Text>
                            <Text>Vault</Text>
                        </Flex>
                    </Flex>
                    <Flex
                        flexDir="column"
                        h="60%"
                        w="60%"
                        justifyContent="space-around"
                        alignItems="center">
                        <Text
                            fontFamily="monospace"
                            fontSize="2em">{name}</Text>
                        {inputs}
                        {additional}
                    </Flex>
                </Flex>
            <Flex
                w="50%"
                h="100%"
                justifyContent="center"
                alignItems="center">
                    <Flex
                        h="50%"
                        w="40%"
                        justifyContent="center"
                        alignItems="center"
                        backgroundColor="Window"
                        zIndex="1"
                        flexDir="column"
                        borderRadius=".2em"
                        shadow=".01em .01em .5em gray">
                        <Avatar borderRadius="100%" backgroundColor="black" w="50px" h="50px" />
                        <Text
                            textAlign="center"
                            fontSize="x-large">
                            Welcome Back
                        </Text>
                        <Text
                            textAlign="center"
                            fontSize="small"
                            w="80%">
                            Your favorite virtual wallet management application
                        </Text>
                    </Flex>
                </Flex>
        </Flex>
    )
};

export default Form;