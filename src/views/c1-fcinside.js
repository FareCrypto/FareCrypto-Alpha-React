import React from 'react'
import { Link } from 'react-router-dom'

import Script from 'dangerous-html/react'
import { Helmet } from 'react-helmet'

import NavbarInteractive from '../components/navbar-interactive'
import Footer from '../components/footer'
import './c1-fcinside.css'

const C1Fcinside = (props) => {
  return (
    <div className="c1-fcinside-container10">
      <Helmet>
        <title>c1-fcinside - FareCrypto.net</title>
        <meta
          name="description"
          content="Su FareCrypto potrai scoprire come trasformare il tempo libero in Crypto e NFT ed avviale la tua carriera da Crypto-Farmer anche da zero!"
        />
        <meta property="og:title" content="c1-fcinside - FareCrypto.net" />
        <meta
          property="og:description"
          content="Su FareCrypto potrai scoprire come trasformare il tempo libero in Crypto e NFT ed avviale la tua carriera da Crypto-Farmer anche da zero!"
        />
        <meta
          property="og:image"
          content="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/96126f84-3d02-484f-9938-f21158ba03bc/53757f96-2178-4619-9dd4-454e310e2259?org_if_sml=1&amp;force_format=original"
        />
      </Helmet>
      <NavbarInteractive rootClassName="navbar-interactiveroot-class-name6"></NavbarInteractive>
      <div className="c1-fcinside-container11">
        <div className="c1-fcinside-container12">
          <div className="c1-fcinside-container13">
            <img
              alt="image"
              src="/unsplash-image-1500h.jpeg"
              className="c1-fcinside-image"
            />
          </div>
          <div className="c1-fcinside-container14"></div>
          <div className="c1-fcinside-container15"></div>
        </div>
        <div className="c1-fcinside-banner">
          <div className="c1-fcinside-container16">
            <h1 className="c1-fcinside-text10 text-big-B">
              <span className="c1-fcinside-text11">F</span>
              <span>are</span>
              <span className="c1-fcinside-text13">C</span>
              <span>rypto-</span>
              <span className="c1-fcinside-text15">Inside</span>
            </h1>
            <Link
              to="/d2-other-tutorials"
              className="c1-fcinside-navlink1 button"
            >
              Tutorial
            </Link>
            <span className="c1-fcinside-text16 text-medium-S">
              <span>
                Tramite le seguenti sezioni potrai conoscere il progetto più da
                vicino, investire su di esso o richiedere servizi unici e
                personalizzabili in base alle tue necessità.
              </span>
              <br></br>
            </span>
          </div>
          <div className="c1-fcinside-btn-group">
            <Link
              to="/c2-fcinside-discover-us"
              className="c1-fcinside-navlink2"
            >
              <div className="c1-fcinside-container17 link">
                <div className="c1-fcinside-container18 fci-rot-plus"></div>
                <div className="c1-fcinside-container19">
                  <h1 className="c1-fcinside-text19 FLX_h4_nocolor">
                    <span className="c1-fcinside-text20">Scopri</span>
                    <span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <span className="c1-fcinside-text22">Fare</span>
                    <span className="c1-fcinside-text23">Crypto</span>
                  </h1>
                  <span className="c1-fcinside-text24 FLX_txt_med_small-2">
                    <span>Per esplorare il progetto e la piattaforma</span>
                    <span>
                       nei loro dettagli e rimanere aggiornati sui progressi!
                    </span>
                    <br></br>
                  </span>
                </div>
              </div>
            </Link>
            <Link to="/c3-fc-crowdfunding" className="c1-fcinside-navlink3">
              <div className="c1-fcinside-container20 link">
                <div className="c1-fcinside-container21 fci-rot-plus"></div>
                <div className="c1-fcinside-container22">
                  <h1 className="c1-fcinside-text28 FLX_h4_nocolor">
                    FC-Crowdfunding
                  </h1>
                  <span className="c1-fcinside-text29 FLX_txt_med_small-2">
                    Uno speciale sistema d&apos;investimento interno che premia
                    gli utenti fino al +100% all&apos;anno su tutti i risparmi
                    assegnati. Una valida alternativa per fare Crypto-Farming
                    senza usare il tuo tempo!😊
                  </span>
                </div>
              </div>
            </Link>
            <div className="c1-fcinside-container23 link">
              <div className="c1-fcinside-container24 fci-rot-plus"></div>
              <div className="c1-fcinside-container25">
                <h1 className="c1-fcinside-text30 FLX_h4_nocolor">Servizi</h1>
                <span className="c1-fcinside-text31 FLX_txt_med_small-2">
                  <span className="c1-fcinside-text32">Work in progress..</span>
                  <br></br>
                  <span>
                    Stiamo realizzando qualcosa di molto utile e vantaggioso per
                    i nostri utenti!
                  </span>
                  <br></br>
                  <span>
                    Questo aggiornamento sarà introdotto con la chiusura della
                    versione Beta.
                  </span>
                  <br></br>
                </span>
              </div>
            </div>
            <div className="c1-fcinside-container26">
              <div className="c1-fcinside-container27">
                <React.Fragment>
                  <React.Fragment>
                    <style
                      dangerouslySetInnerHTML={{
                        __html:
                          '\n  @-webkit-keyframes fci-rot-plus {\n    from {\n      -webkit-transform: rotate(0deg);\n      -o-transform: rotate(0deg);\n      transform: rotate(0deg);\n    }\n    to {\n      -webkit-transform: rotate(360deg);\n      -o-transform: rotate(360deg);\n      transform: rotate(360deg);\n    }\n  }\n  @keyframes fci-rot-plus {\n    from {\n      -ms-transform: rotate(0deg);\n      -moz-transform: rotate(0deg);\n      -webkit-transform: rotate(0deg);\n      -o-transform: rotate(0deg);\n      transform: rotate(0deg);\n    }\n    to {\n      -ms-transform: rotate(360deg);\n      -moz-transform: rotate(360deg);\n      -webkit-transform: rotate(360deg);\n      -o-transform: rotate(360deg);\n      transform: rotate(360deg);\n    }\n  }\n',
                      }}
                    />
                  </React.Fragment>
                </React.Fragment>
              </div>
            </div>
          </div>
          <strong className="c1-fcinside-text38 FLX_txt_med_small">
            <br></br>
            <span>Stavi cercando altro?</span>
          </strong>
          <Link to="/d1-other" className="c1-fcinside-navlink4">
            <strong className="c1-fcinside-text41 link FLX_txt_med_small">
              ► ALTRO ◀
            </strong>
          </Link>
        </div>
        <Footer rootClassName="footerroot-class-name43"></Footer>
      </div>
    </div>
  )
}

export default C1Fcinside
