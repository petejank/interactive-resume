'use strict';

import React from 'react';
import {shallow} from 'enzyme';

import Person from 'components/Person/Person';

describe('Person', () => {
  it('fails to render when {personClass} is not passed', () => {
    const stub = sinon.stub(console, 'error');

    try {
      shallow(<Person/>);
    } catch(error) {
      // Dummy
    }

    expect(stub).to.be.calledOnce;
    expect(stub.args[0][0]).to.contain(
      'Warning: Failed prop type: Required prop `personClass` was not specified in `Person`'
    );

    console.error.restore();
  });

  it('add {personClass} to person className', () => {
    const wrapper = shallow(<Person personClass={'jeep'}/>);
    expect(wrapper.hasClass('person person--jeep')).to.be.true;
  });
});
