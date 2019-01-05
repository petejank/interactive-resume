import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import CarPickerPick from './Pick'

const CarPicker = ({pickCarHandler, hide}) => {
  const carPickerClass = classnames('car-picker', {
    'car-picker--hide': hide
  })

  return (
    <div className={carPickerClass}>
      <div className='car-picker__background'>
        <div className='car-picker__car-selection'>
          <h1 className='car-picker__header'>
            Pick your car
            <span className='car-picker__header-subtext'>For the ride!</span>
          </h1>
          <div className='car-picker__box'>
            <CarPickerPick pickerClass='atruck' pickCarHandler={pickCarHandler} />
          </div>
          <div className='car-picker__box'>
            <CarPickerPick pickerClass='batmobil' pickCarHandler={pickCarHandler} />
          </div>
        </div>
      </div>
    </div>
  )
}

CarPicker.propTypes = {
  pickCarHandler: PropTypes.func.isRequired,
  hide: PropTypes.bool.isRequired
}

export default CarPicker
