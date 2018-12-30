'use strict';

import React from 'react';
import {shallow} from 'enzyme';

import PlayerInject from 'inject!components/Player/Player';

describe('Player', () => {
  let connectMock, componentPropBindMock, connectWrapper;

  beforeEach(() => {
    connectMock = sinon.stub().returns(componentPropBindMock = sinon.stub());
    connectWrapper = PlayerInject({
      'react-redux': {
        connect: connectMock
      }
    }).default;
  })

  it('connect component to playerState on initial call', () => {
    expect(connectMock).to.be.calledOnce;
    expect(componentPropBindMock).to.be.calledOnce;

    const playerState = {playerState: {playerCar: null}};
    expect(connectMock.args[0][0](playerState)).to.be.deep.equal(playerState);
  });

  it('add {playerState.playerCar} to player className', () => {
    const Player = componentPropBindMock.args[0][0];

    const playerNoClassState = {playerCar: null};
    const wrapperNoClass = shallow(<Player playerState={playerNoClassState}/>);

    expect(wrapperNoClass.hasClass('player')).to.be.true;

    const playerStateClass = {playerCar: 'batmobile'};
    const wrapperClass = shallow(<Player playerState={playerStateClass}/>);
    expect(wrapperClass.hasClass('player player--batmobile')).to.be.true;
  });
});
