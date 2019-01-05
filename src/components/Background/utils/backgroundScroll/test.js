'use strict';

import BackgroundScrollInject from 'inject!components/Background/BackgroundScroll';
import * as Constants from 'components/Background/Constants';

describe('BackgroundScroll', () => {
  it('animate passed element', () => {
    const scrollValue = 0.5;
    const scrollStub = {
      getScrollCompletion: sinon.stub().returns(scrollValue)
    };

    const backgroundElm = {
      animate: sinon.stub()
    };

    const backgroundScroll = BackgroundScrollInject({
      'utils/scroll': scrollStub
    }).default;

    backgroundScroll(backgroundElm);
    expect(backgroundElm.animate).to.be.calledOnce;
    expect(scrollStub.getScrollCompletion).to.be.calledTwice;

    expect(backgroundElm.animate.args[0][0]).to.be.deep.equal({
      top: Constants.SCROLL_MAX_TOP * scrollValue,
      left: Constants.SCROLL_MAX_LEFT * scrollValue
    });

    expect(backgroundElm.animate.args[0][1]).to.be.deep.equal({
      duration: Constants.SCROLL_DURATION,
      queue: false,
      easing: 'swing'
    });
  });
});
