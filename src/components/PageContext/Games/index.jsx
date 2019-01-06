import React from 'react'

import TooltipModal from 'components/TooltipModal'

const PageContextGames = () => (
  <TooltipModal tooltipText='Anyone up for a game?' modalClass='modal-dialog-games'>
    <section>
      <div className='page-context-games'>
        <header>
          <div className='page-context-games__header-box'>
            <h2 className='page-context-games__header'>
              Games development
            </h2>
            <p className='page-context-games__subheader'>
              The arcade machine!
            </p>
          </div>
        </header>
        <section>
          <div className='page-context-games__text-box'>
            <h3 className='page-context-games__section-header'>
              What is this?
            </h3>
            <p>
              This is an arcade machine. Back in the days we used to play old school games on them, like Pac-Man and stuff.
              <span className='page-context-games__emboss'> I enjoy developing small
              games and tinkering with game engines, below you'll find tiny list of technologies I use</span>.
            </p>
          </div>
        </section>
        <section>
          <div className='page-context-games__text-box page-context-games__text-box--small-margin-top'>
            <h3 className='page-context-games__section-header'>
              Technologies used for game dev:
            </h3>
            <ul>
              <li>Unity3D with C#</li>
              <li>PhaserJS with JavaScript</li>
            </ul>
          </div>
        </section>
      </div>
    </section>
  </TooltipModal>
)

export default PageContextGames
