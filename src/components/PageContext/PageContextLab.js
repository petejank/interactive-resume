'use strict';

import './assets/page-context-lab.scss';
import 'assets/styles/emboss.scss';

import React from 'react';

import TooltipModal from 'components/TooltipModal/TooltipModal';
import PageContextLabAccordion from './PageContextLabAccordion';
import entries from './PageContextLabEntries';
import oldEntries from './PageContextLabOldEntries';

export default React.createClass({
  render() {
    return (
      <TooltipModal tooltipText="Quickly, drink this and check the projects!" modalClass="modal-dialog-lab">
        <section>
          <div className="page-context-lab">
            <h2 className="page-context-lab__header">
              Personal Laboratory
              <span className="page-context-lab__subheader">Stuff tends to explode here</span>
            </h2>
            <div className="page-context-lab__text-box">
              <p>
                And this is my favorite place, where dreams come true. I put all the passion I can into my work. Best
                proof of that will be my personal projects, crafted with love. Below is the list of my latest creations.
              </p>
              <p>
                <span className="emboss-dark-yellow">Click on a position</span> to check out it's details.
              </p>
              <PageContextLabAccordion entries={entries}/>
            </div>
            <div className="page-context-lab__text-box">
              <p>
                Also in the past I commited a few projects that are currently not mantained, but are worth
                mentioning.
              </p>
              <p>
                <span className="emboss-dark-yellow">Click on a position</span> to check out it's details.
              </p>
              <PageContextLabAccordion entries={oldEntries}/>
            </div>
          </div>
        </section>
      </TooltipModal>
    );
  }
});
