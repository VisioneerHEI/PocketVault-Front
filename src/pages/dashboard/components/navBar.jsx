import React from "react";
import { Avatar, Flex } from "@chakra-ui/react";

import * as token from "../../../utils/token.js"

import "./navBar.css"
import Button from "../../../components/button.jsx";
import Divider from "../../../components/divider/index.jsx";

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
                w="70%">
            </Flex>
            <Flex
                h="100%"
                alignItems="center"
                w="30%"
                justifyContent="end"
                gap="25px"
                paddingRight="50px"
                >
                <Button 
                    onClick={()=>{
                        token.dump();
                        window.location.href = "/login";
                    }}/>
                <Divider orientation="v" />
                <Avatar
                    w="15%"
                    bgColor="black"
                    borderRadius="100%"></Avatar>
            </Flex>
        </Flex>
    )
};

export default NavBar;