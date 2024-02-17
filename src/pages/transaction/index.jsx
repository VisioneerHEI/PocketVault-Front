import React from 'react'
import RigthBar from './components/RigthBar'
import PropTypes from 'prop-types'
import MainLayer from '../../components/MainLayer'

const Transaction = ({ page }) => {
  return (
    <MainLayer>
      <RigthBar page={page} />
    </MainLayer>
  )
}

Transaction.propTypes = {
  page: PropTypes.element
}

export default Transaction
