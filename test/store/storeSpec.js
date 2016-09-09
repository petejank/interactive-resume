'use strict';

import StoreInject from 'inject!store/store';

describe('store', () => {
  let reduxMock, playerReducerMock;

  beforeEach(() => {
    reduxMock = {
      createStore: sinon.stub(),
      combineReducers: sinon.stub().returns('combineReducers')
    };

    playerReducerMock = sinon.stub();
  });

  it('creates store with player state reducer', () => {
    const store = StoreInject({
      'redux': reduxMock,
      './Player/PlayerReducer': playerReducerMock
    }).default;

    expect(reduxMock.combineReducers).to.be.calledOnce;
    expect(reduxMock.combineReducers).to.be.calledWith({playerState: playerReducerMock});

    expect(reduxMock.createStore).to.be.calledOnce;
    expect(reduxMock.createStore).to.be.calledWith('combineReducers');
  });
});
