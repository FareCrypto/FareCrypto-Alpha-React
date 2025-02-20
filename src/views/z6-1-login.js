import React from 'react'

import { Helmet } from 'react-helmet'

import NavbarInteractive1 from '../components/navbar-interactive1'
import Footer from '../components/footer'
import './z6-1-login.css'

const Z61Login = (props) => {
  return (
    <div className="z61-login-container10">
      <Helmet>
        <title>z6-1-login - FareCrypto.net</title>
        <meta
          name="description"
          content="Su FareCrypto potrai scoprire come trasformare il tempo libero in Crypto e NFT ed avviale la tua carriera da Crypto-Farmer anche da zero!"
        />
        <meta property="og:title" content="z6-1-login - FareCrypto.net" />
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
        className="z61-login-image"
      />
      <div id="login-page" className="z61-login-body body">
        <strong id="faq-point" className="z61-login-text1 FLX_h2">
          <span className="z61-login-text2">A</span>
          <span>ccesso</span>
        </strong>
        <div className="z61-login-container11 wide_container">
          <form className="z61-login-form">
            <div className="z61-login-container12">
              <div className="z61-login-container13">
                <strong className="z61-login-text4 FLX_txt_med_small">
                  E-Mail o Username:
                </strong>
              </div>
              <div className="z61-login-container14">
                <input
                  type="email"
                  required
                  className="z61-login-textinput1 input"
                />
              </div>
            </div>
            <div className="z61-login-container15">
              <div className="z61-login-container16">
                <strong className="z61-login-text5 FLX_txt_med_small">
                  Password:
                </strong>
              </div>
              <div className="z61-login-container17">
                <input
                  type="password"
                  required
                  maxlength="20"
                  minlength="8"
                  placeholder="Password"
                  className="z61-login-textinput2 input"
                />
              </div>
            </div>
            <div className="z61-login-container18">
              <div className="z61-login-container19">
                <input type="checkbox" className="z61-login-checkbox" />
                <label className="z61-login-text6 FLX_txt_small">
                  Resta collegato
                </label>
              </div>
              <div className="z61-login-container20">
                <a
                  href="https://#"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="z61-login-link"
                >
                  <label className="z61-login-text7 link FLX_txt_small">
                    Password dimenticata?
                  </label>
                </a>
              </div>
            </div>
            <div className="z61-login-container21">
              <button type="button" className="z61-login-button button2">
                Accedi
              </button>
            </div>
            <animate-on-reveal
              animation="fadeIn"
              duration="1000ms"
              delay="0s"
              direction="normal"
              easing="ease"
              iteration="1"
            >
              <div
                id="login-error-box"
                data-thq-animate-on-reveal="true"
                className="z61-login-container22"
              >
                <strong id="login-error" className="FLX_txt_med_small">
                   
                </strong>
              </div>
            </animate-on-reveal>
            <animate-on-reveal
              animation="fadeIn"
              duration="1000ms"
              delay="0s"
              direction="normal"
              easing="ease"
              iteration="1"
            >
              <div
                id="login-success-box"
                data-thq-animate-on-reveal="true"
                className="z61-login-container23"
              >
                <strong id="login-success" className="FLX_txt_med_small">
                   
                </strong>
              </div>
            </animate-on-reveal>
          </form>
        </div>
      </div>
      <Footer rootClassName="footerroot-class-name18"></Footer>
    </div>
  )
}

export default Z61Login
