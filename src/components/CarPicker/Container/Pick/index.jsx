import React, {PureComponent} from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

const pickTexts = {
  'batmobil': '90s Batmobil',
  'atruck': 'A-team Truck'
}

const buttonTexts = {
  'batmobil': 'Batman!',
  'atruck': 'Hannibal!'
}

export default class CarPickerPick extends PureComponent {
  static propTypes = {
    pickCarHandler: PropTypes.func.isRequired,
    pickerClass: PropTypes.string.isRequired
  }

  render() {
    const {pickerClass} = this.props
    const carClass = classNames(`car-picker-pick__${pickerClass}`)

    return (
      <div className='car-picker-pick'>
        <div className='car-picker-pick__box'>
          <div className='car-picker-pick__graphic'>
            <div className={carClass} />
          </div>
          <div className='car-picker-pick__text'>
            {pickTexts[pickerClass]}
          </div>
        </div>
        <button className='car-picker-pick__button' onClick={this.handleButtonClick}>
          {buttonTexts[pickerClass]}
        </button>
      </div>
    )
  }

  handleButtonClick = () => {
    const {pickCarHandler, pickerClass} = this.props
    pickCarHandler(pickerClass)
  }
}
