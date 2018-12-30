'use strict';

import React from 'react';
import {shallow} from 'enzyme';
import ModalInject from 'inject!components/Modal/Modal';

describe('Modal', () => {
  let ModalComp;

  before(() => {
    ModalComp = ModalInject({
      'react-bootstrap': {
        Modal: getModalMockup()
      }
    }).default;
  });

  it('show modal on init', () => {
    const wrapper = shallow(<ModalComp/>);
    expect(wrapper.state('showModal')).to.be.true;
  });

  it('attach properties to modal on render', () => {
    const onEnterFn = () => {};
    const onExitedFn = () => {};

    const wrapper = shallow(<ModalComp onExited={onExitedFn} onEnter={onEnterFn}/>);
    const wrapperInstance = wrapper.instance();
    expect(wrapper.props().show).to.be.true;
    expect(wrapper.props().onHide).to.be.equal(wrapperInstance.close);
    expect(wrapper.props().onExited).to.be.equal(onExitedFn);
    expect(wrapper.props().onEnter).to.be.equal(onEnterFn);
  });

  it('toggle modal display', () => {
    const wrapper = shallow(<ModalComp/>);
    const wrapperInstance = wrapper.instance();
    wrapperInstance.close();
    expect(wrapper.state('showModal')).to.be.false;
    wrapperInstance.open();
    expect(wrapper.state('showModal')).to.be.true;
  });

  it('attach class to modal dialog', () => {
    const wrapper = shallow(<ModalComp/>);
  });

  it('render passed children', () => {
    const wrapper = shallow(
      <ModalComp>
        <div className="someChildClass"></div>
      </ModalComp>
    );

    expect(wrapper.find('.someChildClass')).to.have.length(1);
  });

  function getModalMockup() {
    const modal = React.createClass({
      displayName: 'Modal',
      render() {}
    });

    modal.Body = React.createClass({
      displayName: 'ModalBody',
      render() {}
    });

    modal.Header = React.createClass({
      displayName: 'ModalHeader',
      render() {}
    });

    return modal;
  }
})
