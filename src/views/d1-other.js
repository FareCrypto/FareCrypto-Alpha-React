import React from 'react'
import { Link } from 'react-router-dom'

import Script from 'dangerous-html/react'
import { Helmet } from 'react-helmet'

import NavbarInteractive from '../components/navbar-interactive'
import './d1-other.css'

const D1Other = (props) => {
  return (
    <div className="d1-other-container10">
      <Helmet>
        <title>d1-other - FareCrypto.net</title>
        <meta
          name="description"
          content="Su FareCrypto potrai scoprire come trasformare il tempo libero in Crypto e NFT ed avviale la tua carriera da Crypto-Farmer anche da zero!"
        />
        <meta property="og:title" content="d1-other - FareCrypto.net" />
        <meta
          property="og:description"
          content="Su FareCrypto potrai scoprire come trasformare il tempo libero in Crypto e NFT ed avviale la tua carriera da Crypto-Farmer anche da zero!"
        />
        <meta
          property="og:image"
          content="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/96126f84-3d02-484f-9938-f21158ba03bc/53757f96-2178-4619-9dd4-454e310e2259?org_if_sml=1&amp;force_format=original"
        />
      </Helmet>
      <NavbarInteractive rootClassName="navbar-interactiveroot-class-name10"></NavbarInteractive>
      <div className="d1-other-container11">
        <div className="d1-other-container12">
          <div className="d1-other-container13">
            <img
              alt="image"
              src="/unsplash-image-1500h.jpeg"
              className="d1-other-image"
            />
          </div>
          <div className="d1-other-container14"></div>
          <div className="d1-other-container15"></div>
        </div>
        <div className="d1-other-banner">
          <h1 className="d1-other-text1 text-big-S FLX_h1_small">
            Scegliere una sezione
          </h1>
        </div>
        <div className="d1-other-btn-group">
          <Link to="/d2-other-tutorials" className="d1-other-navlink1">
            <div className="d1-other-container16 link">
              <div className="d1-other-container17 fci-rot-plus"></div>
              <div className="d1-other-container18">
                <h1 className="d1-other-text2 FLX_h4_nocolor">Tutorials</h1>
              </div>
            </div>
          </Link>
          <Link to="/d3-other-contacts" className="d1-other-navlink2">
            <div className="d1-other-container19 link">
              <div className="d1-other-container20 fci-rot-plus"></div>
              <div className="d1-other-container21">
                <h1 className="d1-other-text3 FLX_h4_nocolor">Contatti</h1>
              </div>
            </div>
          </Link>
          <Link to="/d4-other-legal" className="d1-other-navlink3">
            <div className="d1-other-container22 link">
              <div className="d1-other-container23 fci-rot-plus"></div>
              <div className="d1-other-container24">
                <h1 className="d1-other-text4 FLX_h4_nocolor">Legal</h1>
              </div>
            </div>
          </Link>
          <div className="d1-other-container25">
            <div className="d1-other-container26">
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
      </div>
    </div>
  )
}

export default D1Other
