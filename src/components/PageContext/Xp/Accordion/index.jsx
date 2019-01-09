import React, {PureComponent, Fragment} from 'react'

import {PanelGroup, Panel} from 'react-bootstrap'
import history from './utils/history'

export default class PageContextXpAccordion extends PureComponent {
  render() {
    const historyEntries = history.map((historyEntry, index) => {
      return (
        <Panel bsClass='page-context-accordion__header' key={index} eventKey={index}>
          <Panel.Heading>
            <Panel.Title toggle>
              {this._accordionHeader(historyEntry)}
            </Panel.Title>
          </Panel.Heading>
          <Panel.Body collapsible>
            {historyEntry.description}
          </Panel.Body>
        </Panel>
      )
    })

    return (
      <PanelGroup id='xp-accordion' bsClass='page-context-accordion'>
        {historyEntries}
      </PanelGroup>
    )
  }

  _accordionHeader({timespan, jobTitle, company}) {
    return (
      <Fragment>
        <div className='page-context-accordion__left-info'>
          {timespan}
        </div>
        <div className='page-context-accordion__text-box'>
          <div className='page-context-accordion__text'>
            {jobTitle}
          </div>
          {company && (
            <div className='page-context-accordion__text'>
              {company}
            </div>
          )}
        </div>
      </Fragment>
    )
  }
}
