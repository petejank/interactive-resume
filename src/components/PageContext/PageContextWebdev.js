'use strict'

import './assets/page-context-webdev.scss'
import 'assets/styles/emboss.scss'

import React from 'react'
import TooltipModal from 'components/TooltipModal/TooltipModal'

export default React.createClass({
  render() {
    return (
      <TooltipModal tooltipText='Check those webdev skills!' modalClass='modal-dialog-webdev'>
        <section>
          <div className='page-context-webdev'>
            <h2 className='page-context-webdev__header'>
              The Legend Of The WebDev!
              <span className='page-context-webdev__subheader'> I wouldn't say "legend", but duuhhhh..</span>
            </h2>
            <p>
              Below are listed all languages/technologies and other stuff I use in web development.
              <span className='emboss-dark-yellow'> Most of my attention is of course focused on front side of the web:</span>
            </p>
            <ul>
              <li>HTML/CSS (SASS mostly)</li>
              <li>Vanilla JavaScript</li>
              <li>Angular 1.x</li>
              <li>ReactJS with Redux</li>
              <li>Backbone.js with Marionette</li>
              <li>Phaser (JavaScript game framework)</li>
              <li>Karma with Jasmine or Mocha with Chai and Sinon.JS</li>
              <li>Node.js</li>
              <li>MongoDB and MySQL</li>
              <li>Webpack</li>
              <li>Gulp</li>
              <li>Grunt</li>
            </ul>
            <p>
              And down here there's something that
              <span className='emboss-dark-yellow'> I have used in the past and still know the drill. </span>
              But I don't think I would want to use it in the future:
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
  }
})
