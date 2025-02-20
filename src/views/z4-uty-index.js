import React from 'react'

import Script from 'dangerous-html/react'
import { Helmet } from 'react-helmet'

import NavbarInteractive from '../components/navbar-interactive'
import Footer from '../components/footer'
import './z4-uty-index.css'

const Z4UtyIndex = (props) => {
  return (
    <div className="z4-uty-index-container1">
      <Helmet>
        <title>z4-uty-index - FareCrypto.net</title>
        <meta
          name="description"
          content="Su FareCrypto potrai scoprire come trasformare il tempo libero in Crypto e NFT ed avviale la tua carriera da Crypto-Farmer anche da zero!"
        />
        <meta property="og:title" content="z4-uty-index - FareCrypto.net" />
        <meta
          property="og:description"
          content="Su FareCrypto potrai scoprire come trasformare il tempo libero in Crypto e NFT ed avviale la tua carriera da Crypto-Farmer anche da zero!"
        />
        <meta
          property="og:image"
          content="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/96126f84-3d02-484f-9938-f21158ba03bc/53757f96-2178-4619-9dd4-454e310e2259?org_if_sml=1&amp;force_format=original"
        />
      </Helmet>
      <NavbarInteractive rootClassName="navbar-interactiveroot-class-name2"></NavbarInteractive>
      <img
        alt="image"
        src="/external/copia%20di%20logofcb-400h-1300w-1500h-1300w.png"
        className="z4-uty-index-image"
      />
      <div id="uty-page" className="z4-uty-index-body body">
        <div className="z4-uty-index-container2 wide_container">
          <div className="z4-uty-index-container3">
            <svg
              viewBox="0 0 1024 1024"
              className="z4-uty-index-icon1 wip-rot-plus"
            >
              <path d="M768 554q70 0 120 51t50 121-50 120-120 50-120-50-50-120 50-121 120-51zM512 128q70 0 120 50t50 120-50 121-120 51-120-51-50-121 50-120 120-50zM256 554q70 0 120 51t50 121-50 120-120 50-120-50-50-120 50-121 120-51z"></path>
            </svg>
            <svg
              viewBox="0 0 1024 1024"
              className="z4-uty-index-icon3 wip-rot-minus"
            >
              <path d="M768 554q70 0 120 51t50 121-50 120-120 50-120-50-50-120 50-121 120-51zM768 640q-34 0-60 26t-26 60 26 59 60 25 60-25 26-59-26-60-60-26zM512 128q70 0 120 50t50 120-50 121-120 51-120-51-50-121 50-120 120-50zM512 214q-34 0-60 25t-26 59 26 60 60 26 60-26 26-60-26-59-60-25zM256 554q70 0 120 51t50 121-50 120-120 50-120-50-50-120 50-121 120-51zM256 640q-34 0-60 26t-26 60 26 59 60 25 60-25 26-59-26-60-60-26z"></path>
            </svg>
          </div>
          <h1 className="z4-uty-index-text1 FLX_h1_small">
            <span className="z4-uty-index-text2">Area</span>
            <span> in costruzione</span>
          </h1>
          <div className="z4-uty-index-container4">
            <div className="z4-uty-index-container5">
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
      </div>
      <Footer rootClassName="footerroot-class-name20"></Footer>
    </div>
  )
}

export default Z4UtyIndex
