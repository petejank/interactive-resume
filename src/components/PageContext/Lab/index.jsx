import React from 'react'

import TooltipModal from 'components/TooltipModal'
import PageContextLabAccordion from './Accordion'
import entries from './utils/entries'
import oldEntries from './utils/oldEntries'

const PageContextLabel = () => (
  <TooltipModal tooltipText='Quickly, drink this!' modalClass='modal-dialog-lab'>
    <section>
      <div className='page-context-lab'>
        <header>
          <h2 className='page-context-lab__header'>
            Personal laboratory
          </h2>
          <p className='page-context-lab__subheader'>
            Things tend to explode here
          </p>
        </header>
        <div className='page-context-lab__text-box'>
          <p>
            I put all the passion I can into my work. Best proof of that will be my personal projects,
            crafted with love. Below is the list of my latest creations.
          </p>
          <p>
            <span className='emboss-dark-yellow'>Click on a position</span> to check out it's details.
          </p>
          <PageContextLabAccordion entries={entries} />
        </div>
        <div className='page-context-lab__text-box'>
          <p>
            Also in the past I commited a few projects that are currently not mantained, but are worth
            mentioning.
          </p>
          <p>
            <span className='emboss-dark-yellow'>Click on a position</span> to check out it's details.
          </p>
          <PageContextLabAccordion entries={oldEntries} />
        </div>
      </div>
    </section>
  </TooltipModal>
)

export default PageContextLabel
