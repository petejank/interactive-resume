import React, {PureComponent} from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import {Modal as ReactModal} from 'react-bootstrap'

export default class Modal extends PureComponent {
  static propTypes = {
    children: PropTypes.node.isRequired,
    onExited: PropTypes.func.isRequired,
    onEnter: PropTypes.func.isRequired,
    modalClass: PropTypes.string
  }

  state = {
    showModal: true
  }

  render() {
    const {modalClass, onExited, onEnter, children} = this.props
    const dialogClassName = classNames({[modalClass]: modalClass})

    return (
      <ReactModal show={this.state.showModal} onHide={this.close} onExited={onExited}
        onEnter={onEnter} dialogClassName={dialogClassName}>
        <ReactModal.Header closeButton closeLabel='' />
        <ReactModal.Body>
          {children}
        </ReactModal.Body>
      </ReactModal>
    )
  }

  close = () => {
    this.setState({showModal: false})
  }
}
