import React from 'react'
import { Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon } from '@chakra-ui/react'
import PropTypes from 'prop-types'
import color, { transColor } from '../../../utils/theme'
import TextIcon from '../../TextIcon'

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
          <AccordionItem key={`itemdrop${e}`} border='0'>
            <AccordionButton
              h='4em'
              justifyContent='space-between'
              bgColor='transparent'
              border='0'
              transitionDuration='400ms'
              _hover={{
                bgColor: transColor.dark(0.2)
              }}
            >
              <TextIcon text={e.name} icon={e.icon} />
              <AccordionIcon display={['none', 'none', 'block']} />
            </AccordionButton>
            {e.content.map(f => {
              return (
                <AccordionPanel key={`drop${e.name}${f}`} padding='0'>
                  <AccordionButton
                    h='4em'
                    justifyContent='space-between'
                    bgColor={color.light}
                    border='0'
                    onClick={() => {
                      if (f.redirect) {
                        window.location.href = f.redirect
                      }
                    }}
                    transitionDuration='400ms'
                    _hover={{
                      bgColor: transColor.primary(0.5)
                    }}
                  >
                    <TextIcon text={f.name} icon={f.icon} />
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
