'use strict'

import './assets/page-context-xp.scss'
import 'assets/styles/emboss.scss'

import React from 'react'
import TooltipModal from 'components/TooltipModal/TooltipModal'
import PageContextXpAccordion from './PageContextXpAccordion'

export default React.createClass({
  render() {
    return (
      <TooltipModal tooltipText='My experience' modalClass='modal-dialog-xp'>
        <section>
          <div className='page-context-xp'>
            <h2 className='page-context-xp__header'>
              My Work Experience
              <span className='page-context-xp__subheader'>
                I used to work in awesome places.. and also some nasty ones!
              </span>
            </h2>
            <div className='page-context-xp__text'>
              <p>
                So yeah, <span className='emboss-dark-yellow'>this is my commercial work history from different companies</span>.
                I was also working on minor stuff during my university years, but I didn't include that here.
              </p>
              <p>
                <span className='emboss-dark-yellow'>Click on a position</span> to check out it's details.
              </p>
              <PageContextXpAccordion />
            </div>
          </div>
        </section>
      </TooltipModal>
    )
  }
})
