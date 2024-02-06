import React from "react";
import { Flex, Divider, Text } from "@chakra-ui/react";
import DropDown from "./components/DropDown";

const LeftBar = () => {
    return (
        <Flex
            bgColor="grey"
            h="100%"
            w="20%"
            zIndex="11"
            flexDir="column"
            justifyContent="space-between"
            alignItems="center">
            <Flex
                h="100%"
                w="100%"
                flexDir="column"
                alignItems="center">
                <Text>PocketVault</Text>
                <Divider orientation="horizontal" color="black"></Divider>
                <DropDown toDisplay={[
                        {'name': "DashBoard", 'content': ["solde", "transfert", "depot"]},
                        {'name': "Extras", 'content': ["vendre", "historique"]},
                        {'name': "Internationals", 'content': ["bourse"]},
                        {'name': "Contacts", 'content': ["Support", "Social Media"]},
                    ]} />
            </Flex>
        </Flex>
    )
};

export default LeftBar;