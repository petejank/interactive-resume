'use strict';

import './assets/page-context-contact.scss';
import './assets/page-context-contact-form.scss';

import React from 'react';

import TooltipModal from 'components/TooltipModal/TooltipModal';

const SUCCESS_STATUS_REGEXP = /^20/
// Just some bot scanning protection
const MAIL = 'piotr.jankowski.resume' + '@gmail.com';

export default React.createClass({
  getInitialState() {
    return {
      status: 'idle',
      payload: {
        name: '',
        senderEmail: '',
        message: ''
      }
    };
  },
  modalEnter() {
    window.twttr && window.twttr.widgets.load();
  },
  handleSubmit(event) {
    event.preventDefault();

    const {payload} = this.state
    // Thrivial hidden verification
    if (payload.name && payload.senderEmail && payload.message) {
      this.setState({
        status: 'sending'
      });

      fetch(`https://formspree.io/${MAIL}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      })
      .then(({status}) => {
        this.setState({status: SUCCESS_STATUS_REGEXP.test(status.toString()) ? 'sent' : 'error'});
      });
    }
  },
  inputChange({target: {name, value}}) {
    this.setState({
      payload: {
        ...this.state.payload,
        [name]: value
      }
    });
  },
  render() {
    return (
      <TooltipModal tooltipText="Want to contact the author?" modalClass="modal-dialog-contact"
        additionalClass="tooltip--building" enterCallback={this.modalEnter}>
        <section>
          {/* Page contact form header */}
          <div className="page-context-contact">
            <h2 className="page-context-contact__header">
              Contact time!
              <span className="page-context-contact__subheader">Here you can send me something nice</span>
            </h2>
          </div>
          {/* Success status notifier */}
          {
            this.state.status === 'sent' ?
              <div className="page-context-contact-form__status page-context-contact-form__status--success">
                Message successfully sent. We'll be in touch!
              </div> : null
          }
          {/* Error status notifier */}
          {
            this.state.status === 'error' ?
              <div className="page-context-contact-form__status page-context-contact-form__status--error">
                An error occurred while trying to send the message. Please try again
              </div> : null
          }
          <div className="page-context-contact__twitter">
            You can also contact me on twitter
            <a href="https://twitter.com/likeadev" className="twitter-follow-button" data-show-count="false"
              data-size="large">
              Follow @likeadev
            </a>
          </div>
          {/* Contact form*/}
          <form className="page-context-contact-form" onSubmit={this.handleSubmit}>
            <label htmlFor="contact-name" className="page-context-contact-form__label">
              Name:
            </label>
            <input id="contact-name" className="page-context-contact-form__input" name="name"
              value={this.state.name} onChange={this.inputChange}/>
            <label htmlFor="contact-email" className="page-context-contact-form__label">
              E-mail:
            </label>
            <input id="contact-email" className="page-context-contact-form__input" name="senderEmail"
              value={this.state.senderEmail} onChange={this.inputChange}/>
            <label htmlFor="contact-message" className="page-context-contact-form__label">
              Message:
            </label>
            <textarea id="contact-message"
              className="page-context-contact-form__input page-context-contact-form__input--textarea"
              name="message" value={this.state.message} onChange={this.inputChange}></textarea>
            <button className="page-context-contact-form__submit" type="submit">Send</button>
            {/* Sending notifier */}
            {
              this.state.status === 'sending' ?
                <div className="page-context-contact-form__overlay">
                  Sending...
                </div> : null
            }
          </form>
        </section>
      </TooltipModal>
    );
  }
});
