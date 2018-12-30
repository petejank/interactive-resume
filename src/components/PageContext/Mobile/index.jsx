import React from 'react'

import TooltipModal from 'components/TooltipModal'

const PageContextMobile = () => (
  <TooltipModal tooltipText='Selfie.. I mean mobile apps time' modalClass='modal-dialog-mobile'>
    <section>
      <div className='page-context-mobile'>
        <h2 className='page-context-mobile__header'>
          Mobile Development Is The Key
          <span className='page-context-mobile__subheader'> Well, tapping is popular nowadays</span>
        </h2>
        <p>
          Here's <span className='emboss-dark-yellow'>a small assembly of languages/techs I use to make mobile
          tapping magic happen.</span> Most of my techniques are focused around applying web front-end technologies
          to native application wrappers:
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
