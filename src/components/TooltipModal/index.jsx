import React, {PureComponent} from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import Modal from 'components/Modal'

export default class TooltipModal extends PureComponent {
  static propTypes = {
    tooltipText: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
    modalClass: PropTypes.string,
    additionalClass: PropTypes.string,
    enterCallback: PropTypes.func
  }

  state = {
    showModal: false
  }

  render() {
    const {tooltipText, additionalClass, enterCallback, modalClass, children} = this.props
    const tooltipClass = classNames('tooltip', {
      [additionalClass]: additionalClass
    })

    return (
      <>
        <button className={tooltipClass} onClick={this.handleClick}>
          <div className='tooltip__exclamation'>!</div>
          <div className='tooltip__text-box'>
            <div className='tooltip__text'>{tooltipText}</div>
          </div>
          <div className='tooltip__arrow' />
        </button>
        {this.state.showModal && (
          <Modal onExited={this.handleExited} onEnter={enterCallback} modalClass={modalClass}>
            {children}
          </Modal>
        )}
      </>
    )
  }

  handleClick = () => {
    this.setState({showModal: true})
  }

  handleExited = () => {
    this.setState({showModal: false})
  }
}
