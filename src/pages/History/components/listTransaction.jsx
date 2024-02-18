import { Flex, Text } from "@chakra-ui/react"
import React from "react"
import PropTypes from 'prop-types'
import Transaction from "./TransactionRepr"

const ListTransaction = ({ content }) => {
    return (
        <Flex
            flexDir="column"
            w={["100%", "100%", "90%"]}
            gap="50px">
            <Text fontSize="1.5em">Transactions</Text>
            {
                Array.isArray(content) ?
                content.map((transaction, i)=>{
                    return (
                        <Transaction key={i} transaction={transaction} />
                    )
                })
                :
                <></>
            }
        </Flex>
    )
}

ListTransaction.propTypes = {
    content: PropTypes.array,
}

export default ListTransaction