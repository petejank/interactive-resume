'use strict';

import './assets/background.scss';

import React from 'react';
import store from 'store/store';
import backgroundScroll from './BackgroundScroll';
import backgroundScrollTo from './BackgroundScrollTo';

import * as Constants from './Constants';

export default React.createClass({
  getInitialState() {
    return {
      arrowInterface: true,
      initialDisplay: true,
      backgroundClass: ''
    };
  },
  move(direction) {
    const directionFunction = `move${direction}`;

    this.setState({
      backgroundClass: `${Constants.BACKGROUND_PREFIX}${Constants.BACKGROUND_SUBCLASSES[backgroundScrollTo[directionFunction]()]}`
    });

    if (this.state.initialDisplay) {
      removeInfo.call(this);
    }
  },
  componentWillMount() {
    const unsubscribe = store.subscribe(() => {
      if (store.getState().playerState.playerCar) {
        // Desktop interface
        if (window.screen.width >= Constants.BACKGROUND_MIN_ARROW_DISPLAY_RES &&
          !('ontouchstart' in window || window.navigator.msMaxTouchPoints)) {
          this.setState({arrowInterface: false});
          window.addEventListener('scroll', (event) => {
            if (this.state.initialDisplay) {
              removeInfo.call(this);
            }

            backgroundScroll(this.backgroundElm);
          });
        }

        unsubscribe();
      }
    });
  },
  render() {
    return (
      <div className={'background ' + this.state.backgroundClass}
        ref={backgroundElm => this.backgroundElm = backgroundElm}>
        {getBottomScreenInterface.call(this)}
        {this.props.children}
      </div>
    );
  }
});

function getBottomScreenInterface() {
  if (this.state.arrowInterface) {
    return (
      <div>
        <a className="background__arrow background__arrow--left" onClick={() => this.move('Backward')}></a>
        <div className="background__scroll-info background__scroll-info--mobile"
          ref={backgroundInterfaceInfo => this.backgroundInterfaceInfo = backgroundInterfaceInfo}>
            Tap these arrows to move
          </div>
        <a className="background__arrow background__arrow--right" onClick={() => this.move('Forward')}></a>
      </div>
    );
  }

  return (
    <div className="background__scroll-info"
      ref={backgroundInterfaceInfo => this.backgroundInterfaceInfo = backgroundInterfaceInfo}>
        Scroll to move the car
      </div>
  );
}

function removeInfo() {
  this.setState({initialDisplay: false});
  // Remove scroll info
  window.setTimeout(() => {
    this.backgroundInterfaceInfo.parentNode.removeChild(this.backgroundInterfaceInfo)
  }, Constants.BACKGROUND_INFO_TIMEOUT);
}
