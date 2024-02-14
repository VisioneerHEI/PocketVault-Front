import React from 'react'
import { Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon, Text } from '@chakra-ui/react'
import PropTypes from 'prop-types'
import color, { transColor } from '../../../../../utils/theme'

const DropDown = ({ toDisplay }) => {
  /**
     * toDisplay is like that:
     * toDisplay = [
                        {'name': "DashBoard", 'content': [1, 2, 3]}
                    ]
     */
  return (
    <Accordion
      w='100%'
    >
      {toDisplay.map((e) => {
        return (
          <AccordionItem key={`itemdrop${e}`} border="0" >
            <AccordionButton
              h='50px'
              justifyContent='space-between'
              bgColor='transparent'
              border='0'
              transitionDuration="400ms"
              _hover={{
                bgColor: transColor.dark(.2)
              }}
            >
              <Text>{e.name}</Text>
              <AccordionIcon />
            </AccordionButton>
            {e.content.map(e => {
              return (
                <AccordionPanel key={`drop${e}`} padding="0">
                  <AccordionButton
                    h='50px'
                    justifyContent='space-between'
                    bgColor={color.light}
                    border='0'
                    onClick={() => {
                      console.log('clicked' + e)
                    }}
                    transitionDuration="400ms"
                    _hover={{
                      bgColor: transColor.primary(.5)
                    }}
                  >
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
}

DropDown.propTypes = {
  toDisplay: PropTypes.array
}

export default DropDown
