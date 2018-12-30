import React, {PropTypes, PureComponent} from 'react'
import classNames from 'classnames'
import {Modal as ReactModal} from 'react-bootstrap'

export default class Modal extends PureComponent {
  static propTypes = {
    children: PropTypes.node.isRequired,
    modalClass: PropTypes.string,
    onExited: PropTypes.func,
    onEnter: PropTypes.func
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

  open = () => {
    this.setState({showModal: true})
  }
}
