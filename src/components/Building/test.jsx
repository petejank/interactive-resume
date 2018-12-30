'use strict';

import React from 'react';
import {shallow} from 'enzyme';

import Building from 'components/Building/Building';

describe('Building', () => {
  it('fails to render when {buildingClass} is not passed', () => {
    const stub = sinon.stub(console, 'error');

    try {
      shallow(<Building/>);
    } catch(error) {
      // Dummy
    }

    expect(stub).to.be.calledOnce;
    expect(stub.args[0][0]).to.contain(
      'Warning: Failed prop type: Required prop `buildingClass` was not specified in `Building`'
    );

    console.error.restore();
  });

  it('add {buildingClass} to building className', () => {
    const wrapper = shallow(<Building buildingClass={'lab'}/>);
    expect(wrapper.find('.building').hasClass('building building--lab')).to.be.true;
  });

  it('add {buildingClass} to building className', () => {
    const wrapper = shallow(
      <Building buildingClass={'dummyClass'}>
        <div className="childClass"></div>
      </Building>
    );

    expect(wrapper.find('.building .childClass')).to.have.length(1);
  });
});
