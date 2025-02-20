import React from 'react'

import Script from 'dangerous-html/react'
import { Helmet } from 'react-helmet'

import NavbarInteractive1 from '../components/navbar-interactive1'
import Footer from '../components/footer'
import './z6-registration.css'

const Z6Registration = (props) => {
  return (
    <div className="z6-registration-container10">
      <Helmet>
        <title>z6-registration - FareCrypto.net</title>
        <meta
          name="description"
          content="Su FareCrypto potrai scoprire come trasformare il tempo libero in Crypto e NFT ed avviale la tua carriera da Crypto-Farmer anche da zero!"
        />
        <meta property="og:title" content="z6-registration - FareCrypto.net" />
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
        className="z6-registration-image"
      />
      <div id="registration-page" className="z6-registration-body body">
        <div id="wip-alert" className="z6-registration-container11">
          <strong className="z6-registration-text10 FLX_txt_med_small-2">
            ATTENZIONE:
          </strong>
          <span className="z6-registration-text11 FLX_txt_small">
            <span>
              Questa versione è ancora grezza e potrebbe presentare difetti
              grafici o malfunzionamenti.
            </span>
            <br></br>
            <span>
              Si prega di segnalare eventuali errori affinché vengano
              tempestivamente risolti.
            </span>
            <br className="z6-registration-text15"></br>
            <span className="z6-registration-text16">
              I tuoi dati ed eventuali fondi sono al sicuro!
            </span>
            <span> Grazie della collaborazione!</span>
          </span>
          <strong className="z6-registration-text18 link FLX_txt_med_small-2">
            <span>Vai al</span>
            <br></br>
            <span>Support</span>
          </strong>
          <svg
            onClick="closeWipAlert()"
            viewBox="0 0 1024 1024"
            className="z6-registration-icon1"
          >
            <path d="M512 0c-282.77 0-512 229.23-512 512s229.23 512 512 512 512-229.23 512-512-229.23-512-512-512zM512 928c-229.75 0-416-186.25-416-416s186.25-416 416-416 416 186.25 416 416-186.25 416-416 416z"></path>
            <path d="M672 256l-160 160-160-160-96 96 160 160-160 160 96 96 160-160 160 160 96-96-160-160 160-160z"></path>
          </svg>
          <div>
            <div className="z6-registration-container13">
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
        <strong className="z6-registration-text22 FLX_h2">
          <span className="z6-registration-text23">R</span>
          <span>egistrazione</span>
        </strong>
        <div className="z6-registration-container14 wide_container">
          <form className="z6-registration-form">
            <div className="z6-registration-container15">
              <div className="z6-registration-container16">
                <strong className="z6-registration-text25 FLX_txt_med_small">
                  Username:
                </strong>
              </div>
              <div className="z6-registration-container17">
                <input
                  type="text"
                  required
                  placeholder="Username"
                  className="z6-registration-textinput1 input"
                />
              </div>
              <div className="z6-registration-container18">
                <i className="z6-registration-text26 FLX_txt_small2">
                  <span className="z6-registration-text27">
                    Nome unico e pubblico, non modificabile in futuro.
                  </span>
                  <br></br>
                </i>
              </div>
            </div>
            <div className="z6-registration-container19">
              <div className="z6-registration-container20">
                <strong className="z6-registration-text29 FLX_txt_med_small">
                  Indirizzo E-Mail:
                </strong>
              </div>
              <div className="z6-registration-container21">
                <input
                  type="email"
                  required
                  placeholder="email@example.com"
                  className="z6-registration-textinput2 input"
                />
              </div>
              <div className="z6-registration-container22">
                <i className="z6-registration-text30 FLX_txt_small2">
                  Usa un indirizzo e-mail valido. Riceverai un codice per
                  abilitare l&apos;accesso al tuo account.
                </i>
              </div>
            </div>
            <div className="z6-registration-container23">
              <div className="z6-registration-container24">
                <strong className="z6-registration-text31 FLX_txt_med_small">
                  Password:
                </strong>
              </div>
              <div className="z6-registration-container25">
                <input
                  type="password"
                  required
                  maxlength="20"
                  minlength="8"
                  placeholder="Password"
                  className="z6-registration-textinput3 input"
                />
              </div>
              <div className="z6-registration-container26">
                <i className="z6-registration-text32 FLX_txt_small2">
                  Lunghezza 8-20 caratteri. Deve contenere almeno una lettera
                  maiuscola, una minuscola, un numero e un carattere speciale (!
                  £ ? . , ^ ç &amp; % $, ecc..).
                </i>
              </div>
            </div>
            <div className="z6-registration-container27">
              <div className="z6-registration-container28">
                <strong className="z6-registration-text33 FLX_txt_med_small">
                  Ripeti password:
                </strong>
              </div>
              <div className="z6-registration-container29">
                <input
                  type="password"
                  required
                  maxlength="20"
                  minlength="8"
                  placeholder="Ripeti password"
                  className="z6-registration-textinput4 input"
                />
              </div>
              <div className="z6-registration-container30">
                <i className="z6-registration-text34 FLX_txt_small2">
                  Conferma la password.
                </i>
              </div>
            </div>
            <div className="z6-registration-container31">
              <input
                type="checkbox"
                required
                className="z6-registration-checkbox1"
              />
              <label className="z6-registration-text35 FLX_txt_small1">
                <span>
                  Continuando la registrazione dichiaro di essere maggiorenne e
                  di accettare i Termini &amp; Condizioni di utilizzo e la
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
                  className="z6-registration-link"
                >
                  Privacy Policy
                </a>
                <span> di FareCrypto.</span>
              </label>
            </div>
            <div className="z6-registration-container32">
              <input
                type="checkbox"
                required
                className="z6-registration-checkbox2"
              />
              <label className="z6-registration-text38 FLX_txt_small1">
                Riconosco che i contenuti presenti sulla piattaforma possono
                creare potenziali perdite di denaro e dipendenze legate al gioco
                d&apos;azzardo e comprendo che un uso corretto delle strategie
                può aiutarmi a ridurre il rischio.
              </label>
            </div>
            <div className="z6-registration-container33">
              <button type="button" className="z6-registration-button button2">
                Registrazione
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
                id="registration-error-box"
                data-thq-animate-on-reveal="true"
                className="z6-registration-container34"
              >
                <strong id="registration-error" className="FLX_txt_med_small">
                   
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
                id="registration-success-box"
                data-thq-animate-on-reveal="true"
                className="z6-registration-container35"
              >
                <strong id="registration-success" className="FLX_txt_med_small">
                   
                </strong>
              </div>
            </animate-on-reveal>
          </form>
        </div>
      </div>
      <Footer rootClassName="footerroot-class-name17"></Footer>
    </div>
  )
}

export default Z6Registration
