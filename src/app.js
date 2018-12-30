'use strict'

import '@babel/polyfill'
import 'whatwg-fetch'

import 'assets/styles/base.scss'

import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'

import PageContext from 'components/PageContext'
import PageScroll from 'components/PageScroll'
import CarPicker from 'components/CarPicker'
import scroll from 'other/scroll'
import store from 'store'

scroll.resetScroll()

ReactDOM.render((
  <Provider store={store}>
    <article>
      <CarPicker>
        <PageScroll />
        <PageContext />
      </CarPicker>
    </article>
  </Provider>
), document.getElementById('wrapper'))
