'use strict'

import './assets/page-context-accordion.scss'

import React from 'react'
import {Accordion, Panel} from 'react-bootstrap'
import {history} from './PageContextXpHistory'

export default React.createClass({
  render() {
    const historyEntries = history.map((historyEntry, index) => {
      return (
        <Panel bsClass='page-context-accordion__header' key={index} eventKey={index}
          header={getAccordionHeader(historyEntry)}>
          {historyEntry.description}
        </Panel>
      )
    })

    return (
      <Accordion bsClass='page-context-accordion'>
        {historyEntries}
      </Accordion>
    )
  }
})

function getAccordionHeader(historyEntry) {
  return (
    <div>
      <div className='page-context-accordion__left-info'>
        {historyEntry.timespan}
      </div>
      <div className='page-context-accordion__text-box'>
        <div className='page-context-accordion__text'>
          {historyEntry.jobTitle}
        </div>
        <div className='page-context-accordion__text'>
          {historyEntry.company}
        </div>
      </div>
    </div>
  )
}
