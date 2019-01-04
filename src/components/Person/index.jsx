import React, {memo} from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

const Person = ({personClass, children}) => {
  const className = classNames('person', `person--${personClass}`)

  return (
    <div className={className}>
      {children}
    </div>
  )
}

Person.propTypes = {
  personClass: PropTypes.string.isRequired,
  children: PropTypes.node
}

export default memo(Person)
