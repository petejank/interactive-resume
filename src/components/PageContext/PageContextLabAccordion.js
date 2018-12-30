'use strict'

import './assets/page-context-accordion.scss'

import React, {PropTypes} from 'react'
import {Accordion, Panel} from 'react-bootstrap'

export default React.createClass({
  PropTypes: {
    entries: PropTypes.array.isRequired
  },
  render() {
    const labEntries = this.props.entries.map((entry, index) => {
      return (
        <Panel bsClass='page-context-accordion__header' key={index} eventKey={index}
          header={getAccordionHeader(entry)}>
          <a className='page-context-accordion__orange-link' href={'http://' + entry.link}>{entry.link}</a>
          <div className='page-context-accordion__margined-description'>
            {entry.description}
          </div>
        </Panel>
      )
    })

    return (
      <Accordion bsClass='page-context-accordion'>
        {labEntries}
      </Accordion>
    )
  }
})

function getAccordionHeader(entry) {
  return (
    <div>
      <div className='page-context-accordion__left-info page-context-accordion__left-info--right'>
        {entry.type}
      </div>
      <div className='page-context-accordion__text-box'>
        <div className='page-context-accordion__text'>
          {entry.title}
        </div>
      </div>
    </div>
  )
}
