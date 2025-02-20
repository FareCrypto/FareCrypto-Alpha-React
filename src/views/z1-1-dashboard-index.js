import React from 'react'

import Script from 'dangerous-html/react'
import { Helmet } from 'react-helmet'

import NavbarInteractive1 from '../components/navbar-interactive1'
import Footer from '../components/footer'
import './z1-1-dashboard-index.css'

const Z11DashboardIndex = (props) => {
  return (
    <div className="z11-dashboard-index-container10">
      <Helmet>
        <title>z1-1-dashboard-index - FareCrypto.net</title>
        <meta
          name="description"
          content="Su FareCrypto potrai scoprire come trasformare il tempo libero in Crypto e NFT ed avviale la tua carriera da Crypto-Farmer anche da zero!"
        />
        <meta
          property="og:title"
          content="z1-1-dashboard-index - FareCrypto.net"
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
        className="z11-dashboard-index-image"
      />
      <div id="dashboard-page" className="z11-dashboard-index-body body">
        <div id="wip-alert" className="z11-dashboard-index-container11">
          <strong className="z11-dashboard-index-text10 FLX_txt_med_small-2">
            ATTENZIONE:
          </strong>
          <div className="z11-dashboard-index-container12">
            <span className="z11-dashboard-index-text11 FLX_txt_small">
              Questa versione è ancora grezza e potrebbe presentare difetti
              grafici o malfunzionamenti.
            </span>
            <span className="z11-dashboard-index-text12 FLX_txt_small">
              Si prega di segnalare eventuali errori affinché vengano
              tempestivamente risolti.
            </span>
            <span className="z11-dashboard-index-text13 FLX_txt_small">
              <span className="z11-dashboard-index-text14">
                I tuoi dati ed eventuali fondi sono al sicuro!
              </span>
              <span> Grazie della collaborazione!</span>
            </span>
          </div>
          <strong className="z11-dashboard-index-text16 link FLX_txt_med_small-2">
            <span>Vai al </span>
            <span>Support</span>
          </strong>
          <svg
            onClick="closeWipAlert()"
            viewBox="0 0 1024 1024"
            className="z11-dashboard-index-icon10"
          >
            <path d="M512 0c-282.77 0-512 229.23-512 512s229.23 512 512 512 512-229.23 512-512-229.23-512-512-512zM512 928c-229.75 0-416-186.25-416-416s186.25-416 416-416 416 186.25 416 416-186.25 416-416 416z"></path>
            <path d="M672 256l-160 160-160-160-96 96 160 160-160 160 96 96 160-160 160 160 96-96-160-160 160-160z"></path>
          </svg>
          <div>
            <div className="z11-dashboard-index-container14">
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
        <strong className="z11-dashboard-index-text19 FLX_h2">
          <span className="z11-dashboard-index-text20">D</span>
          <span>ashboard</span>
        </strong>
        <div className="z11-dashboard-index-user-data">
          <div className="z11-dashboard-index-container15">
            <div className="z11-dashboard-index-container16">
              <div className="z11-dashboard-index-container17">
                <strong className="FLX_txt_med_big">Ciao </strong>
                <strong id="username" className="username FLX_txt_med_big">
                   
                </strong>
                <strong className="FLX_txt_med_big"> !</strong>
              </div>
              <div className="z11-dashboard-index-container18">
                <strong className="FLX_txt_med_small">Livello:</strong>
                <strong
                  id="user_role-suspended"
                  className="FLX_txt_med_small role-suspended"
                >
                  Sospeso
                </strong>
                <strong
                  id="user_role-regular"
                  className="role-regular FLX_txt_med_small"
                >
                  Regular
                </strong>
                <strong
                  id="user_role-pro"
                  className="role-pro FLX_txt_med_small"
                >
                  PRO
                </strong>
                <strong
                  id="user_role-vip"
                  className="role-vip FLX_txt_med_small"
                >
                  VIP
                </strong>
              </div>
            </div>
            <div className="z11-dashboard-index-container19">
              <span className="z11-dashboard-index-text30 link FLX_txt_med_small">
                Aggiorna profilo
              </span>
              <span className="z11-dashboard-index-text31 link FLX_txt_med_small-2">
                Logout
              </span>
            </div>
          </div>
          <div className="z11-dashboard-index-container20">
            <div className="z11-dashboard-index-container21">
              <div className="z11-dashboard-index-container22">
                <div className="z11-dashboard-index-container23">
                  <strong className="z11-dashboard-index-text32 FLX_txt_med_small-2">
                    Nome:
                  </strong>
                </div>
                <div className="z11-dashboard-index-container24">
                  <span className="z11-dashboard-index-text33 FLX_txt_med_small-2">
                    -----
                  </span>
                  <svg
                    viewBox="0 0 1024 1024"
                    className="z11-dashboard-index-icon13"
                  >
                    <path d="M512 854q140 0 241-101t101-241-101-241-241-101-241 101-101 241 101 241 241 101zM512 86q176 0 301 125t125 301-125 301-301 125-301-125-125-301 125-301 301-125zM554 298v172h172v84h-172v172h-84v-172h-172v-84h172v-172h84z"></path>
                  </svg>
                </div>
              </div>
              <div className="z11-dashboard-index-container25">
                <div className="z11-dashboard-index-container26">
                  <strong className="z11-dashboard-index-text34 FLX_txt_med_small-2">
                    Cognome:
                  </strong>
                </div>
                <div className="z11-dashboard-index-container27">
                  <span className="z11-dashboard-index-text35 FLX_txt_med_small-2">
                    -----
                  </span>
                  <svg
                    viewBox="0 0 1024 1024"
                    className="z11-dashboard-index-icon15"
                  >
                    <path d="M512 854q140 0 241-101t101-241-101-241-241-101-241 101-101 241 101 241 241 101zM512 86q176 0 301 125t125 301-125 301-301 125-301-125-125-301 125-301 301-125zM554 298v172h172v84h-172v172h-84v-172h-172v-84h172v-172h84z"></path>
                  </svg>
                </div>
              </div>
              <div className="z11-dashboard-index-container28">
                <div className="z11-dashboard-index-container29">
                  <strong className="z11-dashboard-index-text36 FLX_txt_med_small-2">
                    Data di nascita:
                  </strong>
                </div>
                <div className="z11-dashboard-index-container30">
                  <span className="z11-dashboard-index-text37 FLX_txt_med_small-2">
                    --/--/----
                  </span>
                  <svg
                    viewBox="0 0 1024 1024"
                    className="z11-dashboard-index-icon17"
                  >
                    <path d="M512 854q140 0 241-101t101-241-101-241-241-101-241 101-101 241 101 241 241 101zM512 86q176 0 301 125t125 301-125 301-301 125-301-125-125-301 125-301 301-125zM554 298v172h172v84h-172v172h-84v-172h-172v-84h172v-172h84z"></path>
                  </svg>
                </div>
              </div>
              <div className="z11-dashboard-index-container31">
                <div className="z11-dashboard-index-container32">
                  <strong className="z11-dashboard-index-text38 FLX_txt_med_small-2">
                    E-Mail:
                  </strong>
                </div>
                <div className="z11-dashboard-index-container33">
                  <span className="z11-dashboard-index-text39 FLX_txt_med_small-2">
                     
                  </span>
                  <svg
                    viewBox="0 0 1024 1024"
                    className="z11-dashboard-index-icon19"
                  >
                    <path d="M469.333 128h-298.667c-35.328 0-67.413 14.379-90.496 37.504s-37.504 55.168-37.504 90.496v597.333c0 35.328 14.379 67.413 37.504 90.496s55.168 37.504 90.496 37.504h597.333c35.328 0 67.413-14.379 90.496-37.504s37.504-55.168 37.504-90.496v-298.667c0-23.552-19.115-42.667-42.667-42.667s-42.667 19.115-42.667 42.667v298.667c0 11.776-4.736 22.4-12.501 30.165s-18.389 12.501-30.165 12.501h-597.333c-11.776 0-22.4-4.736-30.165-12.501s-12.501-18.389-12.501-30.165v-597.333c0-11.776 4.736-22.4 12.501-30.165s18.389-12.501 30.165-12.501h298.667c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667zM759.168 76.501l-405.333 405.333c-5.205 5.163-9.259 11.947-11.221 19.84l-42.667 170.667c-1.664 6.4-1.792 13.568 0 20.693 5.717 22.869 28.885 36.779 51.755 31.061l170.667-42.667c7.125-1.749 14.080-5.504 19.84-11.221l405.333-405.333c25.984-25.984 38.997-60.16 38.997-94.165s-13.013-68.181-38.997-94.165-60.203-39.040-94.208-39.040-68.181 13.013-94.165 38.997zM819.499 136.832c9.344-9.344 21.504-13.995 33.835-13.995s24.491 4.651 33.835 13.995 13.995 21.504 13.995 33.835-4.651 24.491-13.995 33.835l-396.971 396.971-90.197 22.571 22.571-90.197z"></path>
                  </svg>
                </div>
              </div>
              <div className="z11-dashboard-index-container34">
                <div className="z11-dashboard-index-container35">
                  <strong className="z11-dashboard-index-text40 FLX_txt_med_small-2">
                    Password:
                  </strong>
                </div>
                <div className="z11-dashboard-index-container36">
                  <span className="z11-dashboard-index-text41 FLX_txt_med_small-2">
                    ✱✱✱✱✱✱✱✱
                  </span>
                  <svg
                    viewBox="0 0 1024 1024"
                    className="z11-dashboard-index-icon21"
                  >
                    <path d="M469.333 128h-298.667c-35.328 0-67.413 14.379-90.496 37.504s-37.504 55.168-37.504 90.496v597.333c0 35.328 14.379 67.413 37.504 90.496s55.168 37.504 90.496 37.504h597.333c35.328 0 67.413-14.379 90.496-37.504s37.504-55.168 37.504-90.496v-298.667c0-23.552-19.115-42.667-42.667-42.667s-42.667 19.115-42.667 42.667v298.667c0 11.776-4.736 22.4-12.501 30.165s-18.389 12.501-30.165 12.501h-597.333c-11.776 0-22.4-4.736-30.165-12.501s-12.501-18.389-12.501-30.165v-597.333c0-11.776 4.736-22.4 12.501-30.165s18.389-12.501 30.165-12.501h298.667c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667zM759.168 76.501l-405.333 405.333c-5.205 5.163-9.259 11.947-11.221 19.84l-42.667 170.667c-1.664 6.4-1.792 13.568 0 20.693 5.717 22.869 28.885 36.779 51.755 31.061l170.667-42.667c7.125-1.749 14.080-5.504 19.84-11.221l405.333-405.333c25.984-25.984 38.997-60.16 38.997-94.165s-13.013-68.181-38.997-94.165-60.203-39.040-94.208-39.040-68.181 13.013-94.165 38.997zM819.499 136.832c9.344-9.344 21.504-13.995 33.835-13.995s24.491 4.651 33.835 13.995 13.995 21.504 13.995 33.835-4.651 24.491-13.995 33.835l-396.971 396.971-90.197 22.571 22.571-90.197z"></path>
                  </svg>
                </div>
              </div>
            </div>
            <div className="z11-dashboard-index-container37">
              <div className="z11-dashboard-index-container38">
                <header
                  data-thq="thq-navbar"
                  className="z11-dashboard-index-info-dd1"
                >
                  <div
                    data-thq="thq-burger-menu"
                    className="z11-dashboard-index-open-info1"
                  >
                    <a
                      href="#dashboard-page"
                      className="z11-dashboard-index-link1"
                    >
                      <strong className="z11-dashboard-index-text42 FLX_txt_med_big">
                        Risorse salvate
                      </strong>
                    </a>
                  </div>
                  <div
                    data-thq="thq-mobile-menu"
                    className="z11-dashboard-index-content1"
                  >
                    <div className="z11-dashboard-index-container39">
                      <div className="z11-dashboard-index-container40">
                        <strong className="z11-dashboard-index-text43 FLX_txt_big">
                          Elementi salvati
                        </strong>
                      </div>
                      <div className="z11-dashboard-index-container41"></div>
                    </div>
                    <div className="z11-dashboard-index-container42">
                      <div
                        data-thq="thq-close-menu"
                        className="z11-dashboard-index-close-menu1"
                      >
                        <svg
                          viewBox="0 0 1024 1024"
                          className="z11-dashboard-index-icon23"
                        >
                          <path d="M658 708l-60 60-256-256 256-256 60 60-196 196z"></path>
                        </svg>
                      </div>
                    </div>
                  </div>
                </header>
              </div>
              <div className="z11-dashboard-index-container43">
                <header
                  data-thq="thq-navbar"
                  className="z11-dashboard-index-info-dd2"
                >
                  <div
                    data-thq="thq-burger-menu"
                    className="z11-dashboard-index-open-info2"
                  >
                    <a
                      href="#dashboard-page"
                      className="z11-dashboard-index-link2"
                    >
                      <strong className="z11-dashboard-index-text44 FLX_txt_med_big">
                        Strategie preferite
                      </strong>
                    </a>
                  </div>
                  <div
                    data-thq="thq-mobile-menu"
                    className="z11-dashboard-index-content2"
                  >
                    <div className="z11-dashboard-index-container44">
                      <div className="z11-dashboard-index-container45">
                        <strong className="z11-dashboard-index-text45 FLX_txt_big">
                          Elementi salvati
                        </strong>
                      </div>
                      <div className="z11-dashboard-index-container46"></div>
                    </div>
                    <div className="z11-dashboard-index-container47">
                      <div
                        data-thq="thq-close-menu"
                        className="z11-dashboard-index-close-menu2"
                      >
                        <svg
                          viewBox="0 0 1024 1024"
                          className="z11-dashboard-index-icon25"
                        >
                          <path d="M658 708l-60 60-256-256 256-256 60 60-196 196z"></path>
                        </svg>
                      </div>
                    </div>
                  </div>
                </header>
              </div>
            </div>
          </div>
        </div>
        <div className="z11-dashboard-index-fc-wallet">
          <div className="z11-dashboard-index-container48">
            <div className="z11-dashboard-index-container49">
              <div className="z11-dashboard-index-container50">
                <strong className="z11-dashboard-index-text46 FLX_txt_med_big">
                  Il mio FC-Wallet
                </strong>
                <div className="tooltip">
                  <div
                    data-thq="thq-dropdown"
                    className="z11-dashboard-index-thq-dropdown list-item"
                  >
                    <div
                      data-thq="thq-dropdown-toggle"
                      className="z11-dashboard-index-dropdown-toggle1"
                    >
                      <svg
                        viewBox="0 0 1024 1024"
                        className="z11-dashboard-index-icon27"
                      >
                        <path d="M448 304c0-26.4 21.6-48 48-48h32c26.4 0 48 21.6 48 48v32c0 26.4-21.6 48-48 48h-32c-26.4 0-48-21.6-48-48v-32z"></path>
                        <path d="M640 768h-256v-64h64v-192h-64v-64h192v256h64z"></path>
                        <path d="M512 0c-282.77 0-512 229.23-512 512s229.23 512 512 512 512-229.23 512-512-229.23-512-512-512zM512 928c-229.75 0-416-186.25-416-416s186.25-416 416-416 416 186.25 416 416-186.25 416-416 416z"></path>
                      </svg>
                    </div>
                    <ul
                      data-thq="thq-dropdown-list"
                      className="z11-dashboard-index-dropdown-list FLX_txt_small"
                    >
                      <li
                        data-thq="thq-dropdown"
                        className="z11-dashboard-index-dropdown1 list-item"
                      >
                        <div
                          data-thq="thq-dropdown-toggle"
                          className="z11-dashboard-index-dropdown-toggle2"
                        >
                          <span className="z11-dashboard-index-text47">
                            <span>
                              I tuoi fondi sono rappresentati in USDT.
                            </span>
                            <br></br>
                          </span>
                        </div>
                      </li>
                      <li
                        data-thq="thq-dropdown"
                        className="z11-dashboard-index-dropdown2 list-item"
                      >
                        <div
                          data-thq="thq-dropdown-toggle"
                          className="z11-dashboard-index-dropdown-toggle3"
                        >
                          <span className="z11-dashboard-index-text50">
                            In fase di prelievo puoi scegliere la Crypto
                            desiderata.
                          </span>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="z11-dashboard-index-container52">
                <span
                  id="dashboard-deposit"
                  className="z11-dashboard-index-text51 link FLX_txt_med_small"
                >
                  Deposito fondi
                </span>
                <span
                  id="dashboard-withdraw"
                  className="z11-dashboard-index-text52 link FLX_txt_med_small"
                >
                  Prelievo Crypto
                </span>
              </div>
            </div>
            <div className="z11-dashboard-index-container53">
              <div className="z11-dashboard-index-container54">
                <strong className="FLX_txt_med_small">
                  Saldo disponibile:
                </strong>
                <div className="z11-dashboard-index-container55">
                  <span className="z11-dashboard-index-text54 FLX_txt_med_small">
                    0.0000
                  </span>
                  <strong className="FLX_txt_med_small">USDT</strong>
                </div>
              </div>
              <div className="z11-dashboard-index-container56">
                <div className="z11-dashboard-index-container57">
                  <strong className="FLX_txt_med_small">Saldo in </strong>
                  <strong className="link FLX_txt_med_small">Staking</strong>
                  <strong className="FLX_txt_med_small">:</strong>
                </div>
                <div className="z11-dashboard-index-container58">
                  <span className="z11-dashboard-index-text59 FLX_txt_med_small">
                    0.0000
                  </span>
                  <strong className="FLX_txt_med_small">USDT</strong>
                </div>
              </div>
              <div className="z11-dashboard-index-container59">
                <div className="z11-dashboard-index-container60">
                  <strong className="FLX_txt_med_small">
                    In elaborazione
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </strong>
                  <strong className="FLX_txt_med_small">
                    <span> </span>
                    <span className="z11-dashboard-index-text64">(</span>
                    <span className="z11-dashboard-index-text65">entrata</span>
                    <span className="z11-dashboard-index-text66">)</span>
                    <span>:</span>
                  </strong>
                </div>
                <div className="z11-dashboard-index-container61">
                  <span className="z11-dashboard-index-text68 FLX_txt_med_small">
                    0.0000
                  </span>
                  <strong className="FLX_txt_med_small">USDT</strong>
                </div>
              </div>
              <div className="z11-dashboard-index-container62">
                <div className="z11-dashboard-index-container63">
                  <strong className="FLX_txt_med_small">
                    In elaborazione
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </strong>
                  <strong className="FLX_txt_med_small">
                    <span> </span>
                    <span className="z11-dashboard-index-text73">(</span>
                    <span className="z11-dashboard-index-text74">uscita</span>
                    <span className="z11-dashboard-index-text75">)</span>
                    <span>:</span>
                  </strong>
                </div>
                <div className="z11-dashboard-index-container64">
                  <span className="z11-dashboard-index-text77 FLX_txt_med_small">
                    0.0000
                  </span>
                  <strong className="FLX_txt_med_small">USDT</strong>
                </div>
              </div>
            </div>
          </div>
          <div className="bg_workinprogress"></div>
        </div>
        <div className="z11-dashboard-index-container66">
          <header
            data-thq="thq-navbar"
            className="z11-dashboard-index-info-dd3"
          >
            <div
              data-thq="thq-burger-menu"
              className="z11-dashboard-index-open-info3"
            >
              <a href="#dashboard-page" className="z11-dashboard-index-link3">
                <strong className="z11-dashboard-index-text79 FLX_txt_big">
                  Storico movimenti
                </strong>
              </a>
            </div>
            <div
              data-thq="thq-mobile-menu"
              className="z11-dashboard-index-content3"
            >
              <div className="z11-dashboard-index-container67">
                <div
                  data-thq="thq-close-menu"
                  className="z11-dashboard-index-close-menu3"
                >
                  <svg
                    viewBox="0 0 1024 1024"
                    className="z11-dashboard-index-close-icon1"
                  >
                    <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                  </svg>
                </div>
              </div>
              <div className="z11-dashboard-index-container68">
                <strong className="z11-dashboard-index-text80 FLX_txt_big">
                  Elementi salvati
                </strong>
              </div>
              <div className="z11-dashboard-index-container69"></div>
            </div>
          </header>
        </div>
        <div className="z11-dashboard-index-container70">
          <header
            data-thq="thq-navbar"
            className="z11-dashboard-index-info-dd4"
          >
            <div
              data-thq="thq-burger-menu"
              className="z11-dashboard-index-open-info4"
            >
              <a href="#dashboard-page" className="z11-dashboard-index-link4">
                <strong className="z11-dashboard-index-text81 FLX_txt_big">
                  Storico Tickets
                </strong>
              </a>
            </div>
            <div
              data-thq="thq-mobile-menu"
              className="z11-dashboard-index-content4"
            >
              <div className="z11-dashboard-index-container71">
                <div
                  data-thq="thq-close-menu"
                  className="z11-dashboard-index-close-menu4"
                >
                  <svg
                    viewBox="0 0 1024 1024"
                    className="z11-dashboard-index-close-icon2"
                  >
                    <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                  </svg>
                </div>
              </div>
              <div className="z11-dashboard-index-container72">
                <strong className="z11-dashboard-index-text82 FLX_txt_big">
                  Elementi salvati
                </strong>
              </div>
              <div className="z11-dashboard-index-container73"></div>
            </div>
          </header>
        </div>
      </div>
      <Footer rootClassName="footerroot-class-name25"></Footer>
    </div>
  )
}

export default Z11DashboardIndex
