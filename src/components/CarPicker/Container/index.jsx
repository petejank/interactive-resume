import React, {PropTypes} from 'react'

import CarPickerPick from './Pick'

const CarPickerContainer = ({pickCarHandler}) => (
  <div className='car-picker-container'>
    <h1 className='car-picker-container__header'>
      Pick your car
      <span className='car-picker-container__header-subtext'>For the ride!</span>
    </h1>
    <div className='car-picker-container__box'>
      <CarPickerPick pickerClass='atruck' pickCarHandler={pickCarHandler} />
    </div>
    <div className='car-picker-container__box'>
      <CarPickerPick pickerClass='batmobil' pickCarHandler={pickCarHandler} />
    </div>
  </div>
)

CarPickerContainer.propTypes = {
  pickCarHandler: PropTypes.func.isRequired
}

export default CarPickerContainer
