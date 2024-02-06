import React, { Input } from "@chakra-ui/react";

const Button = (props) => {
    return (
        <Input
            {...props}
            type="button"
            value="Log Out"
            h="40px"
            w="25%"
            bgColor="cyan"
            border="0"
            borderRadius="1em"/>
    )
};

export default Button;