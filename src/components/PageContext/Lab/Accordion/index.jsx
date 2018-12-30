import React, {PropTypes, PureComponent} from 'react'

import {PanelGroup, Panel} from 'react-bootstrap'

export default class PageContextLabAccordion extends PureComponent {
  static propTypes = {
    entries: PropTypes.array.isRequired
  }

  render() {
    const labEntries = this.props.entries.map((entry, index) => {
      return (
        <Panel bsClass='page-context-accordion__header' key={index} eventKey={index}>
          <Panel.Heading>
            <Panel.Title toggle>
              {this._accordionHeader(entry)}
            </Panel.Title>
          </Panel.Heading>
          <Panel.Body collapsible>
            <a className='page-context-accordion__orange-link' href={'http://' + entry.link}>{entry.link}</a>
            <div className='page-context-accordion__margined-description'>
              {entry.description}
            </div>
          </Panel.Body>
        </Panel>
      )
    })

    return (
      <PanelGroup id='lab-accordion' bsClass='page-context-accordion'>
        {labEntries}
      </PanelGroup>
    )
  }

  _accordionHeader(entry) {
    return (
      <div>
        <div className='page-context-accordion__left-info accordion__left-info--right'>
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
}
