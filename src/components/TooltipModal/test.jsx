'use strict';

import React from 'react';
import {shallow} from 'enzyme';

import TooltipModal from 'components/TooltipModal/TooltipModal';

describe('TooltipModal', () => {
  it('fails to render when {tooltipText} is not passed', () => {
    const stub = sinon.stub(console, 'error');

    try {
      shallow(<TooltipModal/>);
    } catch(error) {
      // Dummy
    }

    expect(stub).to.be.calledOnce;
    expect(stub.args[0][0]).to.contain(
      'Warning: Failed prop type: Required prop `tooltipText` was not specified in `TooltipModal`'
    );
    console.error.restore();
  });

  it('render passed {tooltipText}', () => {
    const wrapper = shallow(<TooltipModal tooltipText={'testTooltipText'}/>);
    expect(wrapper.find('.tooltip__text').contains('testTooltipText')).to.be.true;
  });

  it('don\'t render modal on init', () => {
    const wrapper = shallow(<TooltipModal tooltipText={'modalInitTest'}/>);
    expect(wrapper.state('showModal')).to.be.false;
    expect(wrapper.find('Modal')).to.have.length(0);
  });

  it('add {additionalClass} to tooltip className', () => {
    const wrapperNoClass = shallow(<TooltipModal tooltipText={'classTest'}/>);

    expect(wrapperNoClass.find('a').hasClass('tooltip')).to.be.true;

    const wrapperClass = shallow(
      <TooltipModal additionalClass={'tooltip-extra-class'} tooltipText={'classTest'}/>
    );

    expect(wrapperClass.find('a').hasClass('tooltip tooltip-extra-class')).to.be.true;
  });

  it('toggle modal render with passed properties and children', () => {
    const enterCallback = sinon.stub();
    const wrapper = shallow(
      <TooltipModal tooltipText={'modalToggleTest'} enterCallback={enterCallback} modalClass={'classOfModal'}>
        <div className="childrenClass"></div>
      </TooltipModal>
    );

    wrapper.find('a').simulate('click');
    const modalElm = wrapper.find('Modal');
    expect(modalElm).to.have.length(1);
    // Check for attached props
    expect(modalElm.props().onExited).to.be.equal(wrapper.instance().removeModal);
    expect(modalElm.props().onEnter).to.be.equal(enterCallback);
    expect(modalElm.props().modalClass).to.be.equal('classOfModal');
    // Check for children
    expect(modalElm.find('.childrenClass')).to.have.length(1);

    wrapper.instance().removeModal();
    expect(wrapper.state('showModal')).to.be.false;
  });
});
