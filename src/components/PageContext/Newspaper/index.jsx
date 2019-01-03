import React from 'react'

import TooltipModal from 'components/TooltipModal'

const PageContextNewspaper = () => (
  <TooltipModal tooltipText='About me' modalClass='modal-dialog-newspaper'>
    <section>
      <div className='page-context-newspaper'>
        <header>
          <h2 className='page-context-newspaper__header'>
            About me
          </h2>
          <p className='page-context-newspaper__subheader'>
            Extra, extra, read all about it!
          </p>
        </header>
        <div className='page-context-newspaper__text'>
          <section>
            <h3 className='page-context-newspaper__section-header'>
              Who am I?
            </h3>
            <p>
              My name is Piotr, and I am a developer with strong focus on front-end, though I'm not limiting myself only
              to this area of expertise.
            </p>
          </section>
          <section>
            <h3 className='page-context-newspaper__section-header'>
              So, what is your profession?
            </h3>
            <p>
              I enjoy making web applications, hybrid mobile apps and sometimes games. Last one currently for pure fun.
              No challenge is too great and sky is the limit.
            </p>
          </section>
          <section>
            <h3 className='page-context-newspaper__section-header'>
              But what for!?
            </h3>
            <p>
              Why I actually do this? Due to pure love of development. It's basically like Lego bricks -
              enjoyable, challenging, and unquestionably awesome.
            </p>
          </section>
          <section>
            <h3 className='page-context-newspaper__section-header'>
              I would like to know more
            </h3>
            <p>
              I encourage you to check out this modest resume of mine, you'll certainly find some nifty stuff about me or
              just have some fun scrolling back and forth.
            </p>
          </section>
        </div>
      </div>
    </section>
  </TooltipModal>
)

export default PageContextNewspaper
