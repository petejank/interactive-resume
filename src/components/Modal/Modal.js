'use strict'

import './assets/modal.scss'

import React, {PropTypes} from 'react'
import classNames from 'classnames'
import {Modal} from 'react-bootstrap'

export default React.createClass({
  propTypes: {
    modalClass: PropTypes.string,
    onExited: PropTypes.func,
    onEnter: PropTypes.func
  },
  getInitialState() {
    return {
      showModal: true
    }
  },
  close() {
    this.setState({showModal: false})
  },
  open() {
    this.setState({showModal: true})
  },
  render() {
    const modalClass = classNames({
      [`${this.props.modalClass}`]: this.props.modalClass
    })

    return (
      <Modal show={this.state.showModal} onHide={this.close} onExited={this.props.onExited}
        onEnter={this.props.onEnter} dialogClassName={modalClass}>
        <Modal.Header closeButton closeLabel={false} />
        <Modal.Body>
          {this.props.children}
        </Modal.Body>
      </Modal>
    )
  }
})
