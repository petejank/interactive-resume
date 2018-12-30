'use strict'

import './assets/vehicle.scss'

import React, {PropTypes} from 'react'
import classNames from 'classnames'

export default React.createClass({
  propTypes: {
    vehicleClass: PropTypes.string.isRequired
  },
  render() {
    const vehicleClass = classNames({
      'vehicle': true,
      [`vehicle--${this.props.vehicleClass}`]: true
    })

    return (
      <div className={vehicleClass} />
    )
  }
})
