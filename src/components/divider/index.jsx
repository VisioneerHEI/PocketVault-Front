import React, { Divider as Dv } from '@chakra-ui/react'
import PropTypes from 'prop-types'

const Divider = ({ orientation }) => {
  return (
    <>
      <Dv orientation={orientation == 'h' ? 'horizontal' : 'vertical'} transform='scale(.8)' />
    </>
  )
}

Divider.propTypes = {
  orientation: PropTypes.string
}

export default Divider
