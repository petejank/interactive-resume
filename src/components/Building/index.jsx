import React, {PropTypes} from 'react'
import classNames from 'classnames'

const Building = ({buildingClass, children}) => {
  const className = classNames('building', `building--${buildingClass}`)

  return (
    <section>
      <div className={className}>
        {children}
      </div>
    </section>
  )
}

Building.propTypes = {
  buildingClass: PropTypes.string.isRequired,
  children: PropTypes.node
}

export default Building
