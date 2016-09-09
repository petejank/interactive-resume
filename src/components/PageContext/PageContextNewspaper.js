'use strict';

import './assets/page-context-newspaper.scss';

import React from 'react';
import TooltipModal from 'components/TooltipModal/TooltipModal';

export default React.createClass({
  render() {
    return (
      <TooltipModal tooltipText="About me" modalClass="modal-dialog-newspaper">
        <section>
          <div className="page-context-newspaper">
            <h2 className="page-context-newspaper__header">
              All About Piotr Jankowski
              <span className="page-context-newspaper__subheader">
                Extra, extra, read all about it!
              </span>
            </h2>
            <div className="page-context-newspaper__text">
              <p>
                <strong>Who am I?</strong>
              </p>
              <p>
                My name is Piotr, and I am a developer with strong focus on front-end, though I'm not limiting myself only
                to this area of expertise.
              </p>
              <p>
                <strong>So, what is your profession?</strong>
              </p>
              <p>
                I enjoy making web applications, hybrid mobile apps and.. games. Last one currently for pure fun.
                No challenge is to great and sky is the limit.
              </p>
              <p>
                <strong>But what for!?</strong>
              </p>
              <p>
                Why I actually do this? Due to pure love of development. It's basically like Lego bricks -
                enjoyable, challenging, and unquestionably awesome.
              </p>
              <p>
                <strong>I hate you!</strong>
              </p>
              <p>
                I encourage you to check out this modest resume of mine, you'll certainly find some nifty stuff about me or
                just have some fun scrolling back and forth.
              </p>
            </div>
          </div>
        </section>
      </TooltipModal>
    );
  }
});
