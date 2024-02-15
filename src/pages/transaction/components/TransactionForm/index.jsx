import React, { Flex } from "@chakra-ui/react";
import PropTypes from 'prop-types'

const TransactionForm =  ({ children, onSubmit }) => {

    const handleSubmit = (event) => {
      event.preventDefault();
      onSubmit()
    };

    return <form onSubmit={handleSubmit}>
            <Flex
                justifyContent="space-evenly"
                alignItems="center"
                flexDir="column"
                h="30em"
                w="25em"
                borderRadius="1em"
                bgColor="white"
                maxW="80vw">
                {children}
            </Flex>
        </form>
}

TransactionForm.propTypes = {
    children: PropTypes.element,
    onSubmit: PropTypes.func,
}

export default TransactionForm;