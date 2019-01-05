import React, {PureComponent} from 'react'

import CarPicker from 'components/CarPicker'
import PageContext from 'components/PageContext'
import PageScroll from 'components/PageScroll'
import {Provider} from 'store'

export default class MainContainer extends PureComponent {
  state = {
    playerCar: null
  }

  render() {
    const {playerCar} = this.state

    return (
      <section>
        <Provider value={this.state}>
          <CarPicker pickCarHandler={this.pickCarHandler} hide={!!playerCar} />
          <PageScroll />
          <PageContext />
        </Provider>
      </section>
    )
  }

  pickCarHandler = (playerCar) => {
    this.setState({playerCar})
  }
}
