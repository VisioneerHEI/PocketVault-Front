import React from "react";
import { Flex } from "@chakra-ui/react";
import Card from "./card";

const Main = () => {
    return (
        <Flex
            h="100%"
            w="100%"
            flexDir="row"
            wrap="wrap"
            justifyContent="space-evenly"
            overflowX="hidden"
            margin="0"
            padding="0">
                <Card
                    h="500px">
                        <Card
                            display="t"></Card>
                        <Card
                            display="t"></Card>
                        <Card
                            display="t"></Card>
                        <Card
                            display="t"></Card>
                </Card>
                <Card
                    h="500px">
                        <Card
                            display="t"></Card>
                        <Card
                            display="t"></Card>
                        <Card
                            display="t"></Card>
                        <Card
                            display="t"></Card>
                </Card>
        </Flex>
    )
};

export default Main;