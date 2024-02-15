import { Flex } from "@chakra-ui/react";
import React from "react";
import RigthBar from "./components/RigthBar";
import PropTypes from 'prop-types'
import LeftBar from "../../components/leftBar";

const Transaction = ({ page }) => {
    return <Flex
                h='100%'
                w='100%'
                >
                    <LeftBar />
                    <RigthBar page={page} />
                </Flex>
};

Transaction.propTypes = {
    page: PropTypes.element,
}

export default Transaction;