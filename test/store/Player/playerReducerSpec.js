'use strict';

import playerReducer from 'store/Player/PlayerReducer';

describe('playerReducer', () => {
  it('return default player state when no state passed', () => {
    expect(playerReducer(undefined, {})).to.be.deep.equal({playerCar: null});
  });

  it('current state is returned when action type is unknown', () => {
    expect(playerReducer({playerCar: 'somecar'}, {type: 'unknownType'})).to.be.deep.equal({playerCar: 'somecar'});
  });

  it('set player car type on SELECT_PLAYER_CAR action', () => {
    const newStateBatmobile = playerReducer(undefined, {type: 'SELECT_PLAYER_CAR', value: 'batmobile'});
    expect(newStateBatmobile).to.be.deep.equal({playerCar: 'batmobile'});

    const newStateAtruck = playerReducer(newStateBatmobile, {type: 'SELECT_PLAYER_CAR', value: 'atruck'});
    expect(newStateAtruck).to.be.deep.equal({playerCar: 'atruck'});
  });
});
