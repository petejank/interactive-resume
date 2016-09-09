'use strict';

import './assets/car-picker-container.scss';
import React, {PropTypes} from 'react';

import CarPickerPick from './CarPickerPick';

export default React.createClass({
  propTypes: {
    pickCarHandler: PropTypes.func.isRequired
  },
  render() {
    return (
      <div className="car-picker-container">
        <h1 className="car-picker-container__header">
          Pick your car
          <span className="car-picker-container__header-subtext">For the ride!</span>
        </h1>
        <div className="car-picker-container__box">
          <CarPickerPick pickerClass="atruck" pickCarHandler={this.props.pickCarHandler}/>
        </div>
        <div className="car-picker-container__box">
          <CarPickerPick pickerClass="batmobil" pickCarHandler={this.props.pickCarHandler}/>
        </div>
      </div>
    );
  }
});
