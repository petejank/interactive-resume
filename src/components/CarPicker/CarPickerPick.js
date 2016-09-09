'use strict';

import './assets/car-picker-pick.scss';
import React, {PropTypes} from 'react';
import classNames from 'classnames';

const pickTexts = {
  'batmobil': '90s Batmobil',
  'atruck': 'A-team Truck'
};

const buttonTexts = {
  'batmobil': 'Batman!',
  'atruck': 'Hannibal!'
};

export default React.createClass({
  propTypes: {
    pickCarHandler: PropTypes.func.isRequired,
    pickerClass: PropTypes.string.isRequired
  },
  handleButtonClick() {
    this.props.pickCarHandler(this.props.pickerClass);
  },
  render() {
    const carClass = classNames({
      [`car-picker-pick__${this.props.pickerClass}`]: true
    });

    return (
      <div className="car-picker-pick">
        {/* Actuall car selection box */}
        <div className="car-picker-pick__box">
          <div className="car-picker-pick__graphic">
            <div className={carClass}></div>
          </div>
          <div className="car-picker-pick__text">
            {pickTexts[this.props.pickerClass]}
          </div>
        </div>
        <a tabIndex="0" className="car-picker-pick__button" onClick={this.handleButtonClick}>
          {buttonTexts[this.props.pickerClass]}
        </a>
      </div>
    );
  }
});
