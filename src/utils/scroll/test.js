'use strict';

import ScrollInject from 'inject!other/scroll';

describe('scroll', () => {
  let scroll, windowMock, documentMock;

  beforeEach(() => {
    windowMock = {
      $window: {
        scrollTop: sinon.stub().returns(20),
        height: sinon.stub().returns(10),
        on: sinon.stub()
      }
    };

    documentMock = {
      $document: {
        height: sinon.stub().returns(20)
      }
    };

    scroll = ScrollInject({
      'utils/window': windowMock,
      'utils/document': documentMock
    }).default;
  });

  it('return window scroll offset', () => {
    expect(scroll.getScrollY()).to.be.equal(20);
  });

  it('return maximum scroll position', () => {
    expect(scroll.getMaxScrollY()).to.be.equal(10);
  });

  it('return maximum scroll position', () => {
    scroll.getScrollY = () => 20;
    scroll.getMaxScrollY = () => 10;
    expect(scroll.getScrollCompletion()).to.be.equal(2);
  });

  it('attach reset scroll position on window close', () => {
    scroll.resetScroll();
    expect(windowMock.$window.on).to.be.calledOnce;
    expect(windowMock.$window.on.args[0][0]).to.be.equal('beforeunload');

    windowMock.$window.on.args[0][1]();
    expect(windowMock.$window.scrollTop).to.be.calledOnce;
    expect(windowMock.$window.scrollTop).to.be.calledWith(0);
  });
});
