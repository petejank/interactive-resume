import React from 'react';
import {mount, shallow} from 'enzyme';
import BackgroundInject from 'inject!components/Background/Background';
import * as Constants from 'components/Background/Constants';

describe('Background', () => {
  let Background, storeMock, backgroundScroll, backgroundScrollTo, windowMock;

  beforeEach(() => {
    storeMock = {
      subscribe: () => {
        // Empty dummy
      }
    };

    backgroundScroll = sinon.stub();
    backgroundScrollTo = {
      moveForward: sinon.stub().returns(1),
      moveBackward: sinon.stub().returns(0)
    };

    windowMock = sinon.stub();
    windowMock.setTimeout = sinon.stub();

    Background = BackgroundInject({
      'store/store': storeMock,
      './BackgroundScroll': backgroundScroll,
      './BackgroundScrollTo': backgroundScrollTo,
      'utils/window': windowMock
    }).default;
  });

  it('initialy set state on component render', () => {
    const wrapper = shallow(<Background/>);
    expect(wrapper.state()).to.be.deep.equal({
      arrowInterface: true,
      initialDisplay: true,
      backgroundClass: ''
    });
  });

  it('render passed children', () => {
    const wrapper = shallow(
      <Background>
        <div className="someChildClass"></div>
      </Background>
    );

    expect(wrapper.find('.someChildClass')).to.have.length(1);
  });

  describe('on mount when player car name set', () => {
    let unsubscribeMock;
    beforeEach(() => {
      unsubscribeMock = sinon.stub();
      storeMock.subscribe = sinon.stub().returns(unsubscribeMock);
      storeMock.getState = sinon.stub().returns({playerState: {playerCar: 'batmobile'}});
    });

    describe('for small screens', () => {
      let wrapper;

      beforeEach(() => {
        windowMock.screen = {
          width: Constants.BACKGROUND_MIN_ARROW_DISPLAY_RES - 1 // Breakpoint for large screens
        };
        windowMock.ontouchstart = true;
        windowMock.navigator = {
          msMaxTouchPoints: 3
        };

        wrapper = mount(<Background/>);
        storeMock.subscribe.args[0][0]();
      });

      it('display arrow interface by default', () => {
        expect(wrapper.find('.background__scroll-info').text()).to.be.equal('Tap these arrows to move');
        expect(unsubscribeMock).to.be.calledOnce;
      });

      it('on backward arrow click change background class and remove initial info', () => {
        wrapper.find('.background__arrow--left').simulate('click');
        expect(wrapper.state()).to.be.deep.equal({
          arrowInterface: true,
          initialDisplay: false,
          backgroundClass: 'background--tunnel'
        });

        expect(wrapper.find('.background').hasClass('background--tunnel')).to.be.true;
        testInfoRemoval(wrapper);
      });

      it('on forward arrow click change background class and remove initial info', () => {
        wrapper.find('.background__arrow--right').simulate('click');
        expect(wrapper.state()).to.be.deep.equal({
          arrowInterface: true,
          initialDisplay: false,
          backgroundClass: 'background--welcome'
        });

        expect(wrapper.find('.background').hasClass('background--welcome')).to.be.true;
        testInfoRemoval(wrapper);
      });
    });

    it('attach scroll interface for large screens', () => {
      windowMock.$window = {
        scroll: sinon.stub()
      };
      windowMock.screen = {
        width: Constants.BACKGROUND_MIN_ARROW_DISPLAY_RES
      };
      windowMock.navigator = {
        msMaxTouchPoints: 0
      };

      const wrapper = shallow(<Background/>);
      storeMock.subscribe.args[0][0]();
      expect(wrapper.state('arrowInterface')).to.be.false;
      expect(windowMock.$window.scroll).to.be.calledOnce;
      expect(unsubscribeMock).to.be.calledOnce;
    });

    it('on scroll remove initial display info and scroll background', () => {
      windowMock.$window = {
        scroll: sinon.stub()
      };
      windowMock.screen = {
        width: Constants.BACKGROUND_MIN_ARROW_DISPLAY_RES
      };
      windowMock.navigator = {
        msMaxTouchPoints: 0
      };

      // Mounting due to ref test
      const wrapper = mount(<Background/>);
      storeMock.subscribe.args[0][0]();

      windowMock.$window.scroll.args[0][0]();
      expect(backgroundScroll).to.be.calledOnce;
      expect(backgroundScroll).to.be.calledWith(wrapper.instance().$backgroundElm);
      // Scroll info box removal
      expect(wrapper.state('initialDisplay')).to.be.false;
      expect(windowMock.setTimeout).to.be.calledOnce;
      expect(windowMock.setTimeout.args[0][1]).to.be.equal(Constants.BACKGROUND_INFO_TIMEOUT);

      testInfoRemoval(wrapper);
    });

    function testInfoRemoval(wrapper) {
      const compInstance = wrapper.instance();
      const removeStub = sinon.stub(compInstance.$backgroundInterfaceInfo, 'remove');
      windowMock.setTimeout.args[0][0]();
      expect(removeStub).to.be.calledOnce;
      compInstance.$backgroundInterfaceInfo.remove.restore();
    }
  });
});
