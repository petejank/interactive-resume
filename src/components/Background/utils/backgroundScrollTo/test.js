'use strict';

import BackgroundScrollTo from 'components/Background/BackgroundScrollTo';
import * as Constants from 'components/Background/Constants';

describe('BackgroundScrollTo', () => {
  beforeEach(() => {
    BackgroundScrollTo.resetIndex();
  });

  it('move forward and backward by one', () => {
    expect(BackgroundScrollTo.moveForward()).to.be.equal(1);
    expect(BackgroundScrollTo.moveForward()).to.be.equal(2);
    expect(BackgroundScrollTo.moveForward()).to.be.equal(3);
    expect(BackgroundScrollTo.moveForward()).to.be.equal(4);
    expect(BackgroundScrollTo.moveForward()).to.be.equal(5);
    expect(BackgroundScrollTo.moveForward()).to.be.equal(6);
    expect(BackgroundScrollTo.moveForward()).to.be.equal(7);
    expect(BackgroundScrollTo.moveForward()).to.be.equal(8);
    expect(BackgroundScrollTo.moveBackward()).to.be.equal(7);
    expect(BackgroundScrollTo.moveBackward()).to.be.equal(6);
    expect(BackgroundScrollTo.moveBackward()).to.be.equal(5);
    expect(BackgroundScrollTo.moveBackward()).to.be.equal(4);
    expect(BackgroundScrollTo.moveBackward()).to.be.equal(3);
    expect(BackgroundScrollTo.moveBackward()).to.be.equal(2);
    expect(BackgroundScrollTo.moveBackward()).to.be.equal(1);
    expect(BackgroundScrollTo.moveBackward()).to.be.equal(0);
  });

  it('move forward won\'t exceed max length', () => {
    for (let i = 0; i < Constants.BACKGROUND_SUBCLASSES.length; i++) {
      BackgroundScrollTo.moveForward();
    }

    expect(BackgroundScrollTo.getIndex()).to.be.equal(Constants.BACKGROUND_SUBCLASSES.length - 1);
  });

  it('move backward won\'t go below 0', () => {
    BackgroundScrollTo.moveBackward();
    expect(BackgroundScrollTo.getIndex()).to.be.equal(0);
  });
});
