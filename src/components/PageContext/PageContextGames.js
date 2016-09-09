'use strict';

import './assets/page-context-games.scss';
import 'assets/styles/emboss.scss';
import 'assets/styles/utilities.scss';

import React from 'react';
import TooltipModal from 'components/TooltipModal/TooltipModal';

export default React.createClass({
  render() {
    return (
      <TooltipModal tooltipText="Anyone up for a game?" modalClass="modal-dialog-games">
        <section>
          <div className="page-context-games">
            <h2 className="page-context-games__header">
              The Arcade Machine
              <span className="page-context-games__subheader">
                Pew pew pew!
              </span>
            </h2>
            <div className="page-context-games__text-box">
              <p>
                <strong>What is this madness?</strong>
              </p>
              <p>
                This is an arcade machine. Back in the days we used to play old school games on them, like Pac-Man and stuff.
                But we're not here for that. <span className="page-context-games__emboss">Since I enjoy developing small games and tinkering with
                game engines, below you'll find tiny list of technologies I use</span>.
              </p>
            </div>
            <div className="page-context-games__text-box small-margin-top">
              <p>
                <strong>Show it to me!</strong>
              </p>
              <p>
                Here you are:
              </p>
              <ul>
                <li>Unity3D with C#</li>
                <li>PhaserJS with JavaScript</li>
              </ul>
            </div>
          </div>
        </section>
      </TooltipModal>
    );
  }
});
