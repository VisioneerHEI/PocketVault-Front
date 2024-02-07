import React from "react";
import { Flex } from "@chakra-ui/react";
import PropTypes from 'prop-types';

const Card = ({h, children, display}) => {
    return (
        <Flex
            h={h ? h : "49%"}
            w="49%"
            border="0 solid"
            borderRadius="1em"
            wrap="wrap"
            flexDir="row"
            justifyContent="space-evenly"
            margin="0"
            padding="0"
            opacity={display ? ".9" : "1"}
            bgColor={display ? "grey" : ""}>
            {children}
        </Flex>
    )
};

Card.propTypes = {
    h: PropTypes.string,
    children: PropTypes.element,
    display: PropTypes.bool,
};

export default Card;