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
                    fontWeight="1em">Last Spending</Text>
                <Divider orientation="h" />
                <Stat>
                    <StatLabel>Collected Fees</StatLabel>
                    <StatNumber>$12.000.00</StatNumber>
                    <StatHelpText>
                        <StatArrow type="increase" />
                        Feb 12 - Feb 8
                    </StatHelpText>
                </Stat>
            </Flex>
        </Card>
    )
};

export default Spending;