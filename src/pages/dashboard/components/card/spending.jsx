import Card from ".";
import React, { Stat, StatNumber, StatLabel, StatHelpText, StatArrow, Text, Flex } from "@chakra-ui/react"
import Divider from "../../../../components/divider";

const Spending = () => {
    return (
        <Card
            display="t">
            <Flex
                w="100%"
                h="100%"
                flexDir="column"
                justifyContent="space-evenly"
                alignItems="center">
                <Text
                    fontSize="larger"
                    fontFamily="sans-serif"
                    fontWeight="1em">Last Transaction</Text>
                <Divider orientation="h" />
                <Stat>
                    <StatLabel>Transaction</StatLabel>
                    <StatNumber>$12.000.00</StatNumber>
                    <StatHelpText>
                        <StatArrow type="increase" />
                        07/02/2024
                    </StatHelpText>
                </Stat>
                <Stat>
                    <StatLabel>Transaction</StatLabel>
                    <StatNumber>$120.00</StatNumber>
                    <StatHelpText>
                        <StatArrow type="decrease" />
                        17/02/2024
                    </StatHelpText>
                </Stat>
            </Flex>
        </Card>
    )
};

export default Spending;