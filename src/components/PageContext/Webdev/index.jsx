import React from 'react'

import TooltipModal from 'components/TooltipModal'

const PageContextWebdev = () => (
  <TooltipModal tooltipText='Check out those webdev skills' modalClass='modal-dialog-webdev'>
    <section>
      <div className='page-context-webdev'>
        <header>
          <h2 className='page-context-webdev__header'>
            Web development skills
          </h2>
          <p className='page-context-webdev__subheader'>Both front-end and back-end</p>
        </header>
        <p>
          Currently I use following technologies/languages:
        </p>
        <ul>
          <li>HTML/CSS (SASS/JSS/Stylus)</li>
          <li>Vanilla JavaScript</li>
          <li>TypeScript</li>
          <li>React with Redux</li>
          <li>Vue.js with Vuex</li>
          <li>Jest</li>
          <li>Node.js with Express</li>
          <li>Yarn</li>
          <li>Electron</li>
          <li>Webpack</li>
          <li>Docker</li>
          <li>Postgres</li>
          <li>Python</li>
          <li>Tiny amounts of Ruby/Rails</li>
          <li>Git</li>
        </ul>
        <p>
          Here are the things that I used in the past:
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
