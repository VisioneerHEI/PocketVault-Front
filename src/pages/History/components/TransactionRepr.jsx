import { Flex, Stat, StatArrow, StatHelpText, StatLabel, StatNumber } from "@chakra-ui/react"
import React from "react"
import PropTypes from 'prop-types'
import Divider from "../../../components/divider"

const Transaction = ({ transaction }) => {
    return (
        <Flex
            w="100%"
            h="100px"
            justifyContent="end"
            flexDir="column">
            <Flex
                flexDir="row">
                <Stat>
                    <StatLabel>{transaction.date}</StatLabel>
                    <StatHelpText>
                        <StatLabel textDecorationLine="underline">Amount : </StatLabel>
                        <StatNumber>{Math.abs(transaction.value)}</StatNumber>
                    </StatHelpText>
                </Stat>
                <Stat>
                    <StatLabel textDecorationLine="underline">Type :</StatLabel>
                    <StatLabel>
                        {transaction.value >= 0 ? 'increase' : 'decrease'}
                        <StatArrow type={transaction.value >= 0 ? 'increase' : 'decrease'} />
                    </StatLabel>
                </Stat>
            </Flex>
            <Divider orientation="h" />
        </Flex>
    )
}

Transaction.propTypes = {
    transaction: PropTypes.object,
}

export default Transaction;