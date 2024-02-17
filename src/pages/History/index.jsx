import { Flex } from "@chakra-ui/react";
import React from "react"
import MainLayer from "../../components/MainLayer";
import Graph from "../dashboard/components/card/graph";
import Spending from "../dashboard/components/card/spending";

const transactions = [
    {
        value: 5000000,
        date: "01/01/2023"
    },
    {
        value: 5000000,
        date: "01/01/2023"
    },
    {
        value: 5000000,
        date: "01/01/2023"
    },
    {
        value: 5000000,
        date: "01/01/2023"
    },
    {
        value: 5000000,
        date: "01/01/2023"
    },
    {
        value: 5000000,
        date: "01/01/2023"
    },
    {
        value: -5000000,
        date: "01/01/2023"
    },
    {
        value: -5000000,
        date: "01/01/2023"
    },
    {
        value: -5000000,
        date: "01/01/2023"
    },
    {
        value: -5000000,
        date: "01/01/2023"
    },
    {
        value: -5000000,
        date: "01/01/2023"
    },
    {
        value: -5000000,
        date: "01/01/2023"
    },
    {
        value: -5000000,
        date: "01/01/2023"
    },
    {
        value: -5000000,
        date: "01/01/2023"
    },
    {
        value: -5000000,
        date: "01/01/2023"
    },
    {
        value: -5000000,
        date: "01/01/2023"
    },
    {
        value: -5000000,
        date: "01/01/2023"
    },
]

const History = () => {
    return (
    <MainLayer>
        <Flex
            h='100%'
            w='100%'
            flexDir='row'
            wrap='wrap'
            justifyContent='space-evenly'
            overflowX='hidden'
            margin='0'
            padding='0'
            paddingTop='90px'
            gap=".5em"
            >
                <Graph h="500px" fullW={true} />
                <Spending fullH={true} content={transactions} />
                <Spending isCrypto={true} fullH={true} content={transactions} />
        </Flex>
    </MainLayer>
    )
};

export default History;