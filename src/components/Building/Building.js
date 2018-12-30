'use strict'

import './assets/building.scss'

import React, {PropTypes} from 'react'
import classNames from 'classnames'

export default React.createClass({
  propTypes: {
    buildingClass: PropTypes.string.isRequired
  },
  render() {
    const buildingClass = classNames({
      'building': true,
      [`building--${this.props.buildingClass}`]: true
    })

    return (
      <section>
        <div className={buildingClass}>
          {this.props.children}
        </div>
      </section>
    )
  }
})
