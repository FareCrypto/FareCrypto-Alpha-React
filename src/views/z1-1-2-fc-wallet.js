import React from 'react'

import Script from 'dangerous-html/react'
import { Helmet } from 'react-helmet'

import NavbarInteractive1 from '../components/navbar-interactive1'
import Footer from '../components/footer'
import './z1-1-2-fc-wallet.css'

const Z112FcWallet = (props) => {
  return (
    <div className="z112-fc-wallet-container1">
      <Helmet>
        <title>z1-1-2-fc-wallet - FareCrypto.net</title>
        <meta
          name="description"
          content="Su FareCrypto potrai scoprire come trasformare il tempo libero in Crypto e NFT ed avviale la tua carriera da Crypto-Farmer anche da zero!"
        />
        <meta property="og:title" content="z1-1-2-fc-wallet - FareCrypto.net" />
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
        className="z112-fc-wallet-image"
      />
      <div id="dashboard-fcw-main" className="z112-fc-wallet-body body">
        <div className="z112-fc-wallet-container2 wide_container">
          <div className="z112-fc-wallet-container3">
            <svg
              viewBox="0 0 1024 1024"
              className="z112-fc-wallet-icon1 wip-rot-plus"
            >
              <path d="M768 554q70 0 120 51t50 121-50 120-120 50-120-50-50-120 50-121 120-51zM512 128q70 0 120 50t50 120-50 121-120 51-120-51-50-121 50-120 120-50zM256 554q70 0 120 51t50 121-50 120-120 50-120-50-50-120 50-121 120-51z"></path>
            </svg>
            <svg
              viewBox="0 0 1024 1024"
              className="z112-fc-wallet-icon3 wip-rot-minus"
            >
              <path d="M768 554q70 0 120 51t50 121-50 120-120 50-120-50-50-120 50-121 120-51zM768 640q-34 0-60 26t-26 60 26 59 60 25 60-25 26-59-26-60-60-26zM512 128q70 0 120 50t50 120-50 121-120 51-120-51-50-121 50-120 120-50zM512 214q-34 0-60 25t-26 59 26 60 60 26 60-26 26-60-26-59-60-25zM256 554q70 0 120 51t50 121-50 120-120 50-120-50-50-120 50-121 120-51zM256 640q-34 0-60 26t-26 60 26 59 60 25 60-25 26-59-26-60-60-26z"></path>
            </svg>
          </div>
          <h1 className="z112-fc-wallet-text1 FLX_h1_small">
            <span className="z112-fc-wallet-text2">Area</span>
            <span> in costruzione</span>
          </h1>
          <div className="z112-fc-wallet-container4">
            <div className="z112-fc-wallet-container5">
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
      <Footer rootClassName="footerroot-class-name23"></Footer>
    </div>
  )
}

export default Z112FcWallet
