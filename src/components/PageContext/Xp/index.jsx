import React from 'react'

import TooltipModal from 'components/TooltipModal'

import PageContextXpAccordion from './Accordion'

const PageContextXp = () => (
  <TooltipModal tooltipText='My experience' modalClass='modal-dialog-xp'>
    <section>
      <div className='page-context-xp'>
        <header>
          <h2 className='page-context-xp__header'>
            My work experience
          </h2>
          <p className='page-context-xp__subheader'>
            I used to work in awesome places. Also in some nasty ones.
          </p>
        </header>
        <div className='page-context-xp__text'>
          <p>
            <span className='emboss-dark-yellow'>This is my commercial work history</span>.
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

export default PageContextXp
