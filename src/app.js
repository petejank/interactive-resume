import '@babel/polyfill'
import 'whatwg-fetch'

import 'assets/styles/base.sass'

import React from 'react'
import ReactDOM from 'react-dom'

import MainContainer from 'components/Main'
import scroll from 'utils/scroll'

scroll.resetScroll()

ReactDOM.render((
  <article>
    <MainContainer />
  </article>
), document.getElementById('wrapper'))
