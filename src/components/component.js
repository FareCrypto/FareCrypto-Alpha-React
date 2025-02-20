import React from 'react'

import './component.css'

const AppComponent = (props) => {
  return (
    <div className="component-container">
      <span className="component-text10 FLX_txt_med_small-2">
        <span>
          Puoi usare decine di risorse gratuite per accumulare un piccolo budget
          da poter investire, semplicemente sfruttando il tempo libero!
        </span>
        <br></br>
        <br></br>
        <span className="component-text14">(1)</span>
        <span className="component-text15">
          <span
            dangerouslySetInnerHTML={{
              __html: ' ',
            }}
          />
        </span>
        <span className="component-text16">Il Wallet</span>
        <br className="component-text17"></br>
        <br className="component-text18"></br>
        <span className="component-text19">FaucetPay</span>
        <span>
          {' '}
          è essenziale per ricevere frazioni di Crypto molto piccole ed è
          indispensabile per i Faucets.
        </span>
        <br></br>
        <br></br>
        <span className="component-text23">(2)</span>
        <span className="component-text24">
          <span
            dangerouslySetInnerHTML={{
              __html: ' ',
            }}
          />
        </span>
        <span className="component-text25">Orientamento ad Obbiettivo</span>
        <br className="component-text26"></br>
        <br className="component-text27"></br>
        <span>
          -
          <span
            dangerouslySetInnerHTML={{
              __html: ' ',
            }}
          />
        </span>
        <span className="component-text29">Opzione 1:</span>
        <span className="component-text30">
          {' '}
          Guadagni piccoli ma molto veloci tramite i Faucets
        </span>
        <span> </span>
        <span className="component-text32">
          (buon rendimento iniziale - Consigliato)
        </span>
        <span>.</span>
        <br></br>
        <span>
          L&apos;obbiettivo è raggiungere il budget di 5 USDT nel tuo wallet per
          poter iniziare ad applicare le strategie più sicure.
        </span>
        <br className="component-text36"></br>
        <br className="component-text37"></br>
        <span>
          -
          <span
            dangerouslySetInnerHTML={{
              __html: ' ',
            }}
          />
        </span>
        <span className="component-text39">Opzione 2:</span>
        <span className="component-text40">
          {' '}
          Guadagni più lenti con potenziale maggiore tramite Videogiochi, Casinò
          ed altre risorse
        </span>
        <span> </span>
        <span className="component-text42">
          (rendimento elevato ma anche più lento e difficile)
        </span>
        <span>.</span>
        <br></br>
        <span>
          L&apos;obbiettivo di questa modalità è raggiungere il
          <span
            dangerouslySetInnerHTML={{
              __html: ' ',
            }}
          />
        </span>
        <span className="component-text46">limite minimo di prelievo</span>
        <span> </span>
        <span className="component-text48">
          (in media 10 USDT o equivalenti)
        </span>
        <span> con cui iniziare a guadagnare più velocemente.</span>
        <br></br>
        <br></br>
        <span className="component-text52">(3)</span>
        <span className="component-text53">
          <span
            dangerouslySetInnerHTML={{
              __html: ' ',
            }}
          />
        </span>
        <span className="component-text54">Pronti? Via!</span>
        <br className="component-text55"></br>
        <br className="component-text56"></br>
        <br></br>
      </span>
    </div>
  )
}

export default AppComponent
