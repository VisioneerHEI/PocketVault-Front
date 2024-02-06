import React from "react";
import { Avatar, Flex } from "@chakra-ui/react";

import * as token from "../../../utils/token.js"

import "./navBar.css"
import Button from "../../../components/button.jsx";

const NavBar = () => {
    return (
        <Flex
            h="70px"
            w="100%"
            position="absolute"
            top="0"
            left="0"
            paddingTop="10px"
            className="to-blur">
            <Flex
                w="60%">
            </Flex>
            <Flex
                h="100%"
                alignItems="center"
                w="40%"
                justifyContent="end"
                gap="50px"
                paddingRight="50px"
                >
                <Button 
                    onClick={()=>{
                        token.dump();
                        window.location.href = "/login";
                    }}/>
                <Avatar
                    w="10%"
                    bgColor="black"
                    borderRadius="100%"></Avatar>
            </Flex>
        </Flex>
    )
};

export default NavBar;