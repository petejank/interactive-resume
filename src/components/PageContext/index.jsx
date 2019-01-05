import React, {PureComponent, createRef} from 'react'
import ReactDOM from 'react-dom'

import Background from 'components/Background'
import Lamps from 'components/Lamps'
import Trees from 'components/Trees'
import Player from 'components/Player'
import Building from 'components/Building'
import Vehicle from 'components/Vehicle'
import Person from 'components/Person'
import JumpingShadow from 'components/Person/JumpingShadow'
import PageContextNewspaper from './Newspaper'
import PageContextXp from './Xp'
import PageContextWebdev from './Webdev'
import PageContextGames from './Games'
import PageContextMobile from './Mobile'
import PageContextLab from './Lab'
import PageContextContact from './Contact'

import * as constants from './constants'
import getCenteredOffset from './utils/getCenteredOffset'
import {MainContext} from 'store'

export default class PageContext extends PureComponent {
  static contextType = MainContext

  state = {
    pageContextTransform: null
  }

  constructor(props) {
    super(props)

    this.playerWrapperRef = createRef()
  }

  componentDidUpdate() {
    if (this.context.playerCar && !this.state.pageContextTransform) {
      // Center on player's car
      const positionX = getCenteredOffset(ReactDOM.findDOMNode(this.playerWrapperRef.current).getBoundingClientRect())
      this.setState({pageContextTransform: `translate3D(${positionX}, 0, 0)`})
      // Restore document's scroll
      document.body.className = constants.BODY_ACTIVE_CLASS
    }
  }

  render() {
    const {playerCar} = this.context
    const {pageContextTransform} = this.state

    return (
      <div className='page-context' style={{transform: pageContextTransform}}>
        <Player playerCar={playerCar} ref={this.playerWrapperRef} />
        <Background playerCar={playerCar}>
          {/* Decorations */}
          <Building buildingClass='tunnel' />
          <Lamps />
          <Trees />
          {/* Buildings, exclamation marks and people */}
          <Building buildingClass='welcome'>
            <Person personClass='beach1' />
            <Person personClass='beach2' />
            <Person personClass='guy1-briefcase' />
            <Person personClass='guy2-bag' />
          </Building>
          <Building buildingClass='newsstand'>
            <Person personClass='guy3-briefcase' />
            <Person personClass='guy4-newspaper'>
              <PageContextNewspaper />
            </Person>
          </Building>
          <Building buildingClass='xp'>
            <Person personClass='guy5-jumping1'>
              <JumpingShadow />
            </Person>
            <Person personClass='guy6-jumping2'>
              <JumpingShadow />
            </Person>
            <Person personClass='guy7-cheering'>
              <PageContextXp />
            </Person>
            <Person personClass='girl8-sitting' />
            <Person personClass='guy9-fishing' />
          </Building>
          <Building buildingClass='webdev'>
            <Person personClass='guy10-bag' />
            <Person personClass='guy11-bag' />
            <Person personClass='girl12-laptop'>
              <PageContextWebdev />
            </Person>
            <Person personClass='guy13-jumping'>
              <JumpingShadow />
            </Person>
          </Building>
          <Building buildingClass='arcade'>
            <Person personClass='guy14-skating' />
            <Person personClass='girl15-gameboy'>
              <PageContextGames />
            </Person>
          </Building>
          <Building buildingClass='mobile'>
            <Person personClass='guy16-manhole' />
            <Person personClass='guy17-photo'>
              <PageContextMobile />
            </Person>
            <Person personClass='radio' />
            <Person personClass='pair18-photo' />
          </Building>
          <Building buildingClass='lab'>
            <Person personClass='guy19-icecream' />
            <Person personClass='guy20-mib' />
            <Person personClass='guy21-doc'>
              <PageContextLab />
            </Person>
            <Person personClass='guy22-doc2' />
          </Building>
          <Building buildingClass='contact'>
            <PageContextContact />
          </Building>
          <Building buildingClass='police-line'>
            <Vehicle vehicleClass='police-x' />
            <Vehicle vehicleClass='police-y' />
          </Building>
        </Background>
      </div>
    )
  }
}
