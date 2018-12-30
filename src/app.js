'use strict'

import 'assets/styles/base.scss'

import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import store from 'store/store'
import PageContext from 'components/PageContext/PageContext'
import PageScroll from 'components/PageScroll/PageScroll'
import CarPicker from 'components/CarPicker/CarPicker'
import scroll from 'other/scroll'

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
