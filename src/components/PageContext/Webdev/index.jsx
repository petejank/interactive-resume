import React from 'react'

import TooltipModal from 'components/TooltipModal'

const PageContextWebdev = () => (
  <TooltipModal tooltipText='Web development' modalClass='modal-dialog-webdev'>
    <section>
      <div className='page-context-webdev'>
        <header>
          <h2 className='page-context-webdev__header'>
            Web development skills
          </h2>
          <p className='page-context-webdev__subheader'>Both in front-end and back-end</p>
        </header>
        <p>
          Below are listed all languages/technologies I currently use.
          <span className='emboss-dark-yellow'> Most of my attention is focused on front side of the web:</span>
        </p>
        <ul>
          <li>HTML/CSS (SASS/Stylus mostly)</li>
          <li>Vanilla JavaScript</li>
          <li>ReactJS with Redux</li>
          <li>Jest</li>
          <li>Node.js</li>
          <li>Postgres</li>
          <li>Webpack</li>
          <li>Python</li>
          <li>Tiny amounts of Ruby/Rails</li>
          <li>Git</li>
        </ul>
        <p>
          Here you'll find things that
          <span className='emboss-dark-yellow'> I have used in the past and still know the drill. </span>
        </p>
        <ul>
          <li>AngularJS</li>
          <li>Backbone.js with Marionette</li>
          <li>Phaser (JavaScript game framework)</li>
          <li>Karma with Jasmine or Mocha with Chai and Sinon.JS</li>
          <li>MySQL</li>
          <li>Gulp</li>
          <li>Grunt</li>
        </ul>
        <p>
          And down here there are things that I used to know but I don't think I would want to use them in the future:
        </p>
        <ul>
          <li>PHP</li>
          <li>Wordpress</li>
        </ul>
      </div>
      <div className='page-context-webdev__footer' />
    </section>
  </TooltipModal>
)

export default PageContextWebdev
