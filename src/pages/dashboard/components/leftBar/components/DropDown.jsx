import React from "react";
import { Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon, Text } from "@chakra-ui/react";
import PropTypes from 'prop-types'; 

const DropDown = ({toDisplay}) => {
    /**
     * toDisplay is like that: 
     * toDisplay = [
                        {'name': "DashBoard", 'content': [1, 2, 3]}
                    ]
     */
    return (
        <Accordion
            w="100%">
            {toDisplay.map((e)=>{
                return (                    
                    <AccordionItem key={`itemdrop${e}`}>
                        <AccordionButton
                            h="50px"
                            justifyContent="space-between"
                            bgColor="transparent"
                            border="0">
                            <Text>{e.name}</Text>
                            <AccordionIcon />
                        </AccordionButton>
                        {e.content.map(e => {
                        return (
                            <AccordionPanel key={`drop${e}`}>
                                <AccordionButton
                                    h="50px"
                                    justifyContent="space-between"
                                    bgColor="cyan"
                                    border="0"
                                    onClick={()=>{
                                        console.log("clicked" + e);
                                    }}>
                                    <Text>{e}</Text>
                                </AccordionButton>
                            </AccordionPanel>
                            )
                        })}
                    </AccordionItem>
                )
            })}
        </Accordion>
    )
};

DropDown.propTypes = {
    toDisplay: PropTypes.array
}

export default DropDown;