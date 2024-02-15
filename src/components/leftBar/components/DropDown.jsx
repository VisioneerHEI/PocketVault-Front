import React from 'react'
import { Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon, Text, Flex, Icon } from '@chakra-ui/react'
import PropTypes from 'prop-types'
import color, { transColor } from '../../../utils/theme'

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
              <Flex>
                <Text
                  display={["none", "none", "block"]}>{e.name}
                </Text>
                <Icon
                  display={["block", "block", "none"]}>{e.icon}
                </Icon>
              </Flex>
              <AccordionIcon display={["none", "none", "block"]} />
            </AccordionButton>
            {e.content.map(f => {
              return (
                <AccordionPanel key={`drop${e.name}${f}`} padding="0">
                  <AccordionButton
                    h='50px'
                    justifyContent='space-between'
                    bgColor={color.light}
                    border='0'
                    onClick={() => {
                      if (f.redirect){
                        window.location.href = f.redirect
                      }
                    }}
                    transitionDuration="400ms"
                    _hover={{
                      bgColor: transColor.primary(.5)
                    }}
                  >
                    <Flex>
                      <Text
                        display={["none", "none", "block"]}>{f.name}
                      </Text>
                      <Icon
                        display={["block", "block", "none"]}>{f.icon}
                      </Icon>
                    </Flex>
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
