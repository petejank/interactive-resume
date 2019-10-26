import React from 'react'

import TooltipModal from 'components/TooltipModal'

const PageContextMobile = () => (
  <TooltipModal tooltipText='Selfie... I mean mobile apps time' modalClass='modal-dialog-mobile'>
    <section>
      <div className='page-context-mobile'>
        <header>
          <h2 className='page-context-mobile__header'>
            Mobile development
          </h2>
          <p className='page-context-mobile__subheader'>Tapping is pretty popular nowadays</p>
        </header>
        <p>
          Here's
          <span className='emboss-dark-yellow'>
            a small assembly of languages/techs I use to make mobile tapping magic happen.
          </span>
        </p>
        <p>
          Most of my techniques are focused around applying front-end web technologies to native application wrappers:
        </p>
        <ul>
          <li>PhoneGap/Apache Cordova</li>
          <li>HTML/CSS/JavaScript as base of development</li>
          <li>plenty of libraries/frameworks mentioned in WebDev section</li>
        </ul>
      </div>
      <div className='page-context-mobile__footer' />
    </section>
  </TooltipModal>
)

export default PageContextMobile
