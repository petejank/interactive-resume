'use strict';

import './assets/tooltip.scss';

import React, {PropTypes} from 'react';
import classNames from 'classnames';
import Modal from 'components/Modal/Modal';

export default React.createClass({
  propTypes: {
    tooltipText: PropTypes.string.isRequired,
    modalClass: PropTypes.string,
    additionalClass: PropTypes.string,
    enterCallback: PropTypes.func
  },
  getInitialState() {
    return {
      showModal: false
    };
  },
  showModal() {
    this.setState({showModal: true});
  },
  removeModal() {
    this.setState({showModal: false});
  },
  render() {
    const tooltipClass = classNames({
      'tooltip': true,
      [`${this.props.additionalClass}`]: this.props.additionalClass
    });

    return (
      <div>
        <a className={tooltipClass} onClick={this.showModal}>
          <div className="tooltip__exclamation">!</div>
          <div className="tooltip__text-box">
            <div className="tooltip__text">{this.props.tooltipText}</div>
          </div>
          <div className="tooltip__arrow"></div>
        </a>
        {this.state.showModal ?
          <Modal onExited={this.removeModal} onEnter={this.props.enterCallback} modalClass={this.props.modalClass}>
            {this.props.children}
          </Modal> : null}
      </div>
    );
  }
});
