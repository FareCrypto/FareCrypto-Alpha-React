import React from 'react'

import Script from 'dangerous-html/react'
import { Helmet } from 'react-helmet'

import NavbarInteractive from '../components/navbar-interactive'
import Footer from '../components/footer'
import './c4-fcinside-services.css'

const C4FcinsideServices = (props) => {
  return (
    <div className="c4-fcinside-services-container1">
      <Helmet>
        <title>c4-fcinside-services - FareCrypto.net</title>
        <meta
          name="description"
          content="Su FareCrypto potrai scoprire come trasformare il tempo libero in Crypto e NFT ed avviale la tua carriera da Crypto-Farmer anche da zero!"
        />
        <meta
          property="og:title"
          content="c4-fcinside-services - FareCrypto.net"
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
      <NavbarInteractive rootClassName="navbar-interactiveroot-class-name9"></NavbarInteractive>
      <div className="main-body">
        <div className="c4-fcinside-services-container3">
          <div className="c4-fcinside-services-container4 fbox2">
            <div className="c4-fcinside-services-container5">
              <h1 className="c4-fcinside-services-text1 text-big-B">Servizi</h1>
            </div>
            <div className="c4-fcinside-services-container6 wide_container">
              <div className="c4-fcinside-services-container7">
                <svg
                  viewBox="0 0 1024 1024"
                  className="c4-fcinside-services-icon1 wip-rot-plus"
                >
                  <path d="M768 554q70 0 120 51t50 121-50 120-120 50-120-50-50-120 50-121 120-51zM512 128q70 0 120 50t50 120-50 121-120 51-120-51-50-121 50-120 120-50zM256 554q70 0 120 51t50 121-50 120-120 50-120-50-50-120 50-121 120-51z"></path>
                </svg>
                <svg
                  viewBox="0 0 1024 1024"
                  className="c4-fcinside-services-icon3 wip-rot-minus"
                >
                  <path d="M768 554q70 0 120 51t50 121-50 120-120 50-120-50-50-120 50-121 120-51zM768 640q-34 0-60 26t-26 60 26 59 60 25 60-25 26-59-26-60-60-26zM512 128q70 0 120 50t50 120-50 121-120 51-120-51-50-121 50-120 120-50zM512 214q-34 0-60 25t-26 59 26 60 60 26 60-26 26-60-26-59-60-25zM256 554q70 0 120 51t50 121-50 120-120 50-120-50-50-120 50-121 120-51zM256 640q-34 0-60 26t-26 60 26 59 60 25 60-25 26-59-26-60-60-26z"></path>
                </svg>
              </div>
              <h1 className="c4-fcinside-services-text2 FLX_h1_small">
                <span className="c4-fcinside-services-text3">Sistema</span>
                <span> in costruzione</span>
              </h1>
              <div className="c4-fcinside-services-container8">
                <div className="c4-fcinside-services-container9">
                  <React.Fragment>
                    <React.Fragment>
                      <style
                        dangerouslySetInnerHTML={{
                          __html:
                            '\n  @-webkit-keyframes wip-rot-plus {\n    from {\n      -webkit-transform: rotate(0deg);\n      -o-transform: rotate(0deg);\n      transform: rotate(0deg);\n    }\n    to {\n      -webkit-transform: rotate(360deg);\n      -o-transform: rotate(360deg);\n      transform: rotate(360deg);\n    }\n  }\n  @keyframes wip-rot-plus {\n    from {\n      -ms-transform: rotate(0deg);\n      -moz-transform: rotate(0deg);\n      -webkit-transform: rotate(0deg);\n      -o-transform: rotate(0deg);\n      transform: rotate(0deg);\n    }\n    to {\n      -ms-transform: rotate(360deg);\n      -moz-transform: rotate(360deg);\n      -webkit-transform: rotate(360deg);\n      -o-transform: rotate(360deg);\n      transform: rotate(360deg);\n    }\n  }\n\n  @-webkit-keyframes wip-rot-minus {\n    from {\n      -webkit-transform: rotate(0deg);\n      -o-transform: rotate(0deg);\n      transform: rotate(0deg);\n    }\n    to {\n      -webkit-transform: rotate(-360deg);\n      -o-transform: rotate(-360deg);\n      transform: rotate(-360deg);\n    }\n  }\n  @keyframes wip-rot-minus {\n    from {\n      -ms-transform: rotate(0deg);\n      -moz-transform: rotate(0deg);\n      -webkit-transform: rotate(0deg);\n      -o-transform: rotate(0deg);\n      transform: rotate(0deg);\n    }\n    to {\n      -ms-transform: rotate(-360deg);\n      -moz-transform: rotate(-360deg);\n      -webkit-transform: rotate(-360deg);\n      -o-transform: rotate(-360deg);\n      transform: rotate(-360deg);\n    }\n  }\n',
                        }}
                      />
                    </React.Fragment>
                  </React.Fragment>
                </div>
              </div>
            </div>
            <span className="c4-fcinside-services-text5 text-medium-S">
              <span>
                Stiamo lavorando ad una serie di servizi da inserire con i
                prossimi aggiornamenti.
              </span>
              <br></br>
              <span>
                Partecipa al piano di Crowdfunding per sostenere gli sviluppi e
                guadagnare da essi!
              </span>
            </span>
          </div>
        </div>
        <Footer rootClassName="footerroot-class-name49"></Footer>
      </div>
    </div>
  )
}

export default C4FcinsideServices
