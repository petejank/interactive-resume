import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

const Vehicle = ({vehicleClass}) => {
  const className = classNames('vehicle', `vehicle--${vehicleClass}`)

  return (
    <div className={className} />
  )
}

Vehicle.propTypes = {
  vehicleClass: PropTypes.string.isRequired
}

export default Vehicle
