import React, {PureComponent} from 'react'

import TooltipModal from 'components/TooltipModal'

const SUCCESS_STATUS_REGEXP = /^20/
const MAIL = 'piotr.jankowski.resume' + '@gmail.com'

export default class PageContextContact extends PureComponent {
  state = {
    status: 'idle',
    payload: {
      name: '',
      senderEmail: '',
      message: ''
    }
  }

  render() {
    const {name, senderEmail, message, status} = this.state

    return (
      <TooltipModal
        tooltipText='Contact the author'
        modalClass='modal-dialog-contact'
        additionalClass='tooltip--building'
        enterCallback={this.modalEnter}
      >
        <section>
          <header>
            <div className='page-context-contact'>
              <h2 className='page-context-contact__header'>
                Contact time!
              </h2>
              <p className='page-context-contact__subheader'>Here you can send me something nice</p>
            </div>
          </header>
          {status === 'sent' && (
            <div className='page-context-contact__form-status page-context-contact__form-status--success'>
              Message successfully sent. We'll be in touch!
            </div>
          )}
          {status === 'error' && (
            <div className='page-context-contact__form-status page-context-contact__form-status--error'>
              An error occurred while trying to send the message. Please try again
            </div>
          )}
          <div className='page-context-contact__twitter'>
            You can also contact me on Twitter:
            <a
              href='https://twitter.com/likeadev'
              className='twitter-follow-button not-rendered'
              data-show-count='false'
              data-size='large'
            >
              Follow @likeadev
            </a>
          </div>
          <form className='page-context-contact__form' onSubmit={this.handleSubmit}>
            <label htmlFor='contact-name' className='page-context-contact__form-label'>
              Name:
            </label>
            <input
              id='contact-name'
              className='page-context-contact__form-input'
              name='name'
              value={name}
              onChange={this.handleChange}
            />
            <label htmlFor='contact-email' className='page-context-contact__form-label'>
              E-mail:
            </label>
            <input
              id='contact-email'
              className='page-context-contact__form-input'
              name='senderEmail'
              value={senderEmail}
              onChange={this.handleChange}
            />
            <label htmlFor='contact-message' className='page-context-contact__form-label'>
              Message:
            </label>
            <textarea
              id='contact-message'
              className='page-context-contact__form-input page-context-contact__form-input--textarea'
              name='message'
              value={message}
              onChange={this.handleChange}
            />
            <button className='page-context-contact__form-submit' type='submit'>Send</button>
            {status === 'sending' && (
              <div className='page-context-contact__form-overlay'>
                Sending...
              </div>
            )}
          </form>
        </section>
      </TooltipModal>
    )
  }

  modalEnter() {
    window.twttr && window.twttr.widgets.load()
  }

  handleSubmit = (event) => {
    event.preventDefault()

    const {payload} = this.state
    // Thrivial hidden verification
    if (payload.name && payload.senderEmail && payload.message) {
      this.setState({
        status: 'sending'
      })

      fetch(`https://formspree.io/${MAIL}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
      })
        .then(({status}) => {
          this.setState({status: SUCCESS_STATUS_REGEXP.test(status.toString()) ? 'sent' : 'error'})
        })
    }
  }

  handleChange = ({target: {name, value}}) => {
    this.setState({
      payload: {
        ...this.state.payload,
        [name]: value
      }
    })
  }
}
