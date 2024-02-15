import React, { Button, Flex, FormControl, Input, Text } from "@chakra-ui/react";
import { useState } from "react";
import TransactionForm from "../TransactionForm";

const Depot =  () => {
    const [amount, setAmount] = useState("")

    const handleSubmit = () => {
        window.location.href = "/dashboard"
    }

    return (<Flex
            justifyContent="center"
            alignItems="center"
            w="80%">
                <TransactionForm onSubmit={handleSubmit}>
                    <Text fontSize="2em">Add money</Text>

                    <FormControl
                        id="amount"
                        isRequired
                        w="80%">
                        <Input
                        type="number"
                        placeholder="Amount"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                        />
                    </FormControl>

                    <Button type="submit" colorScheme="blue" mt={4}>
                        Send
                    </Button>
                </TransactionForm>
        </Flex>
)
}
export default Depot;