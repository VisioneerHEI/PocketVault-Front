import React, { Flex, FormControl, FormLabel, Input, Text } from "@chakra-ui/react";
import { useState } from "react";
import TransactionForm from "../TransactionForm";
import ButtonGroup from "../TransactionForm/ButtonGroup";

const Retrait =  () => {
    const [amount, setAmount] = useState("")

    const handleSubmit = () => {
        window.location.href = "/dashboard"
    }

    return (<Flex
            justifyContent="center"
            alignItems="center"
            w="80%">
                <TransactionForm onSubmit={handleSubmit}>
                    <Text fontSize="2em">Get money</Text>

                    <Flex
                        w="100%"
                        justifyContent="center"
                        alignItems="center">
                        <FormControl
                            id="amount"
                            isRequired
                            w="60%"
                            paddingY="1em">
                            <Input
                            type="range"
                            value={amount}
                            onChange={(e) => setAmount(e.target.value)}
                            />
                        </FormControl>
                        <FormLabel>{amount}</FormLabel>
                    </Flex>

                    <ButtonGroup />
                </TransactionForm>
        </Flex>
)
}
export default Retrait;