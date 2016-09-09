'use strict';

import React from 'react';
import {shallow} from 'enzyme';

import Vehicle from 'components/Vehicle/Vehicle';

describe('Vehicle', () => {
  it('fails to render when {vehicleClass} is not passed', () => {
    const stub = sinon.stub(console, 'error');

    try {
      shallow(<Vehicle/>);
    } catch(error) {
      // Dummy
    }

    expect(stub).to.be.calledOnce;
    expect(stub.args[0][0]).to.contain(
      'Warning: Failed prop type: Required prop `vehicleClass` was not specified in `Vehicle`'
    );

    console.error.restore();
  });

  it('add {vehicleClass} to vehicle className', () => {
    const wrapper = shallow(<Vehicle vehicleClass={'jeep'}/>);
    expect(wrapper.hasClass('vehicle vehicle--jeep')).to.be.true;
  });
});
