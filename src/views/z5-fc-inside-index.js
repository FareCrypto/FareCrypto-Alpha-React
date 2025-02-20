import React from 'react'

import Script from 'dangerous-html/react'
import { Helmet } from 'react-helmet'

import NavbarInteractive1 from '../components/navbar-interactive1'
import Footer from '../components/footer'
import './z5-fc-inside-index.css'

const Z5FcInsideIndex = (props) => {
  return (
    <div className="z5-fc-inside-index-container1">
      <Helmet>
        <title>z5-fc-inside-index - FareCrypto.net</title>
        <meta
          name="description"
          content="Su FareCrypto potrai scoprire come trasformare il tempo libero in Crypto e NFT ed avviale la tua carriera da Crypto-Farmer anche da zero!"
        />
        <meta
          property="og:title"
          content="z5-fc-inside-index - FareCrypto.net"
        />
        <meta
          property="og:description"
          content="Su FareCrypto potrai scoprire come trasformare il tempo libero in Crypto e NFT ed avviale la tua carriera da Crypto-Farmer anche da zero!"
        />
        <meta
          property="og:image"
          content="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/96126f84-3d02-484f-9938-f21158ba03bc/53757f96-2178-4619-9dd4-454e310e2259?org_if_sml=1&amp;force_format=original"
        />
      </Helmet>
      <NavbarInteractive1></NavbarInteractive1>
      <img
        alt="image"
        src="/external/copia%20di%20logofcb-400h-1300w-1500h-1300w.png"
        className="z5-fc-inside-index-image"
      />
      <div id="login-page" className="z5-fc-inside-index-body body">
        <div id="wip-alert" className="z5-fc-inside-index-container2">
          <strong className="z5-fc-inside-index-text10 FLX_txt_med_small-2">
            ATTENZIONE:
          </strong>
          <span className="z5-fc-inside-index-text11 FLX_txt_small">
            <span>
              Questa versione è ancora grezza e potrebbe presentare difetti
              grafici o malfunzionamenti.
            </span>
            <br></br>
            <span>
              Si prega di segnalare eventuali errori affinché vengano
              tempestivamente risolti.
            </span>
            <br className="z5-fc-inside-index-text15"></br>
            <span className="z5-fc-inside-index-text16">
              I tuoi dati ed eventuali fondi sono al sicuro!
            </span>
            <span> Grazie della collaborazione!</span>
          </span>
          <strong className="z5-fc-inside-index-text18 link FLX_txt_med_small-2">
            <span>Vai al</span>
            <br></br>
            <span>Support</span>
          </strong>
          <svg
            onClick="closeWipAlert()"
            viewBox="0 0 1024 1024"
            className="z5-fc-inside-index-icon1"
          >
            <path d="M512 0c-282.77 0-512 229.23-512 512s229.23 512 512 512 512-229.23 512-512-229.23-512-512-512zM512 928c-229.75 0-416-186.25-416-416s186.25-416 416-416 416 186.25 416 416-186.25 416-416 416z"></path>
            <path d="M672 256l-160 160-160-160-96 96 160 160-160 160 96 96 160-160 160 160 96-96-160-160 160-160z"></path>
          </svg>
          <div>
            <div className="z5-fc-inside-index-container4">
              <React.Fragment>
                <Script>{`
function closeWipAlert() {
  document.getElementById("wip-alert").style.display = "none";
}
`}</Script>
              </React.Fragment>
            </div>
          </div>
        </div>
        <div className="z5-fc-inside-index-container5">
          <strong className="z5-fc-inside-index-text22 FLX_h2">
            <span className="z5-fc-inside-index-text23">F</span>
            <span>are</span>
            <span className="z5-fc-inside-index-text25">C</span>
            <span>rypto</span>
          </strong>
          <strong className="z5-fc-inside-index-text27 FLX_h2">-</strong>
          <strong className="z5-fc-inside-index-text28 FLX_h2">
            <span className="z5-fc-inside-index-text29">I</span>
            <span>nside</span>
          </strong>
        </div>
        <div className="z5-fc-inside-index-container6 wide_container">
          <div className="z5-fc-inside-index-container7">
            <div className="z5-fc-inside-index-container8">
              <span className="z5-fc-inside-index-text31 FLX_txt_small">
                <span className="z5-fc-inside-index-text32">F</span>
                <span className="z5-fc-inside-index-text33">are</span>
                <span className="z5-fc-inside-index-text34">C</span>
                <span className="z5-fc-inside-index-text35">rypto</span>
                <span>
                  {' '}
                  è una piattaforma dedicata al
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span>
                  Crypto-Farming, in una completa rivisitazione che elimina la
                  necessità di investire dei fondi propri e rende ogni contenuto
                  adatto anche ai principianti fornendo percorsi preimpostati e
                  guide dettagliate per raggiungere l&apos;obbiettivo.
                </span>
                <br></br>
              </span>
              <span className="z5-fc-inside-index-text39 FLX_txt_small">
                <span>
                  Con il Crypto-Farming viene sfruttata la flessibilità delle
                  Crypto per incrementarne gradualmente (e proporzionalmente) la
                  quantità, attraverso innumerevoli fonti e potenti strategie
                  accessibili liberamente.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <a
                  href="https://#"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="z5-fc-inside-index-link1"
                >
                  Continua a leggere...
                </a>
                <br></br>
              </span>
            </div>
            <div className="z5-fc-inside-index-container9">
              <span className="z5-fc-inside-index-text42 FLX_txt_small">
                <span className="z5-fc-inside-index-text43">
                  Abbiamo a cuore i nostri utenti!
                </span>
                <br></br>
                <span>
                  Tutte le risorse, le strategie e le utility presenti su
                  FareCrypto sono state testate e verificate per diverso tempo
                  prima di essere pubblicate; mentre le risorse rivelatesi
                  fasulle o truffaldine saranno inserite nella futura 
                </span>
                <span className="z5-fc-inside-index-text46">
                  BadChain List ©
                </span>
                <span>.</span>
                <br></br>
                <span>
                  Forniamo inoltre articoli e consigli volti a migliorare la
                  sicurezza online e le prestazioni dei dispositivi.
                </span>
                <br></br>
              </span>
              <span className="z5-fc-inside-index-text51 FLX_txt_small">
                <span className="z5-fc-inside-index-text52">
                  BadChain List 
                </span>
                <span className="z5-fc-inside-index-text53">©</span>
                <span>
                  {' '}
                  è un secondo progetto legato a FareCrypto, che mira al
                  raccogliere dati, esperienze e segnalazioni degli utenti
                  collaboratori, sulle attività fraudolente o truffaldine da
                  parte di risorse appartenenti a pirati informatici ed
                  organizzazioni non in regola.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <a
                  href="https://#"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="z5-fc-inside-index-link2"
                >
                  Scopri di più...
                </a>
                <br></br>
              </span>
            </div>
          </div>
        </div>
      </div>
      <Footer rootClassName="footerroot-class-name31"></Footer>
    </div>
  )
}

export default Z5FcInsideIndex
