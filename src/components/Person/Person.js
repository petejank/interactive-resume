'use strict'

import './assets/person.scss'

import React, {PropTypes} from 'react'
import classNames from 'classnames'

export default React.createClass({
  propTypes: {
    personClass: PropTypes.string.isRequired
  },
  render() {
    const personClass = classNames({
      'person': true,
      [`person--${this.props.personClass}`]: true
    })

    return (
      <div className={personClass}>
        {this.props.children}
      </div>
    )
  }
})
