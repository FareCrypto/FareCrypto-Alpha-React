import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import NavbarInteractive from '../components/navbar-interactive'
import Elemstgld from '../components/elemstgld'
import Elemstg from '../components/elemstg'
import './b3-farming-rss-3.css'

const B3FarmingRss3 = (props) => {
  return (
    <div className="b3-farming-rss3-container10">
      <Helmet>
        <title>b3-farming-rss-3 - FareCrypto.net</title>
        <meta
          name="description"
          content="Su FareCrypto potrai scoprire come trasformare il tempo libero in Crypto e NFT ed avviale la tua carriera da Crypto-Farmer anche da zero!"
        />
        <meta property="og:title" content="b3-farming-rss-3 - FareCrypto.net" />
        <meta
          property="og:description"
          content="Su FareCrypto potrai scoprire come trasformare il tempo libero in Crypto e NFT ed avviale la tua carriera da Crypto-Farmer anche da zero!"
        />
        <meta
          property="og:image"
          content="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/96126f84-3d02-484f-9938-f21158ba03bc/53757f96-2178-4619-9dd4-454e310e2259?org_if_sml=1&amp;force_format=original"
        />
      </Helmet>
      <div className="main-body">
        <NavbarInteractive rootClassName="navbar-interactiveroot-class-name25"></NavbarInteractive>
        <div className="b3-farming-rss3-container12">
          <h1 className="b3-farming-rss3-text1 text-big-B">Risorse</h1>
          <Link
            to="/b3-farming-rss-1"
            className="b3-farming-rss3-navlink10 button button1"
          >
            <svg viewBox="0 0 1024 1024" className="b3-farming-rss3-icon10">
              <path d="M682 576q26 0 45-18t19-46-19-46-45-18-45 18-19 46 19 46 45 18zM512 682v-340h426v340h-426zM896 768v42q0 34-26 60t-60 26h-596q-36 0-61-25t-25-61v-596q0-36 25-61t61-25h596q34 0 60 26t26 60v42h-384q-36 0-61 25t-25 61v340q0 36 25 61t61 25h384z"></path>
            </svg>
            <span>wallets</span>
          </Link>
          <Link
            to="/d2-other-tutorials"
            className="b3-farming-rss3-navlink11 button"
          >
            Tutorial
          </Link>
          <span className="b3-farming-rss3-text3 text-medium-S">
            <span>
              Puoi guadagnare e gestire le crypto tramite innumerevoli modalità,
              incluso il Free Farming consente di iniziare realmente da zero
              sfruttando i minuti liberi!
            </span>
            <br></br>
          </span>
        </div>
        <div className="b3-farming-rss3-container13">
          <Elemstgld
            difficolta="Difficoltà"
            rootClassName="elemstgldroot-class-name13"
          ></Elemstgld>
          <div className="b3-farming-rss3-container14">
            <Elemstg
              difficolta="Difficoltà"
              rootClassName="elemstgroot-class-name39"
            ></Elemstg>
            <div className="b3-farming-rss3-container15"></div>
            <Elemstg
              difficolta="Difficoltà"
              rootClassName="elemstgroot-class-name40"
            ></Elemstg>
            <div className="b3-farming-rss3-container16"></div>
            <Elemstg
              difficolta="Difficoltà"
              rootClassName="elemstgroot-class-name41"
            ></Elemstg>
            <div className="b3-farming-rss3-container17"></div>
          </div>
        </div>
        <div className="b3-farming-rss3-container18 link">
          <div className="b3-farming-rss3-container19 sb_tog">
            <svg viewBox="0 0 1024 1024" className="sb_tog_img">
              <path d="M128 256h768v86h-768v-86zM128 554v-84h768v84h-768zM128 768v-86h768v86h-768z"></path>
            </svg>
          </div>
          <div className="b3-farming-rss3-container20 sb_list">
            <span className="b3-farming-rss3-text6 text-small-S text-small-B">
              NAVIGAZIONE
            </span>
            <div
              data-thq="thq-dropdown"
              className="b3-farming-rss3-thq-dropdown1 list-item"
            >
              <div
                data-thq="thq-dropdown-toggle"
                className="b3-farming-rss3-dropdown-toggle10 link"
              >
                <span className="b3-farming-rss3-text7 sb_btn text-medium-S_nocolor">
                  Strategie
                </span>
                <div
                  data-thq="thq-dropdown-arrow"
                  className="b3-farming-rss3-dropdown-arrow1"
                >
                  <svg
                    viewBox="0 0 1024 1024"
                    className="b3-farming-rss3-icon14"
                  >
                    <path d="M426 726v-428l214 214z"></path>
                  </svg>
                </div>
              </div>
              <ul
                data-thq="thq-dropdown-list"
                className="b3-farming-rss3-dropdown-list1"
              >
                <li
                  data-thq="thq-dropdown"
                  className="b3-farming-rss3-dropdown10 list-item"
                >
                  <div
                    data-thq="thq-dropdown-toggle"
                    className="b3-farming-rss3-dropdown-toggle11"
                  >
                    <Link
                      to="/b2-farming-stg-1"
                      className="b3-farming-rss3-navlink12 text-small-M_nocolor sb_btn"
                    >
                      Strategie veloci
                    </Link>
                  </div>
                </li>
                <li
                  data-thq="thq-dropdown"
                  className="b3-farming-rss3-dropdown11 list-item"
                >
                  <div
                    data-thq="thq-dropdown-toggle"
                    className="b3-farming-rss3-dropdown-toggle12"
                  >
                    <Link
                      to="/b2-farming-stg-2"
                      className="b3-farming-rss3-navlink13 text-small-M_nocolor sb_btn"
                    >
                      Lungo Termine
                    </Link>
                  </div>
                </li>
                <li
                  data-thq="thq-dropdown"
                  className="b3-farming-rss3-dropdown12 list-item"
                >
                  <div
                    data-thq="thq-dropdown-toggle"
                    className="b3-farming-rss3-dropdown-toggle13"
                  >
                    <Link
                      to="/b2-farming-stg-3"
                      className="b3-farming-rss3-navlink14 text-small-M_nocolor sb_btn"
                    >
                      Guadagno Passivo
                    </Link>
                  </div>
                </li>
                <li
                  data-thq="thq-dropdown"
                  className="b3-farming-rss3-dropdown13 list-item"
                >
                  <div
                    data-thq="thq-dropdown-toggle"
                    className="b3-farming-rss3-dropdown-toggle14"
                  >
                    <Link
                      to="/b2-farming-stg-4"
                      className="b3-farming-rss3-navlink15 text-small-M_nocolor sb_btn"
                    >
                      Speciali
                    </Link>
                  </div>
                </li>
              </ul>
            </div>
            <div
              data-thq="thq-dropdown"
              className="b3-farming-rss3-thq-dropdown2 list-item"
            >
              <div
                data-thq="thq-dropdown-toggle"
                className="b3-farming-rss3-dropdown-toggle15 link"
              >
                <span className="b3-farming-rss3-text8 sb_btn text-medium-S_nocolor">
                  Risorse
                </span>
                <div
                  data-thq="thq-dropdown-arrow"
                  className="b3-farming-rss3-dropdown-arrow2"
                >
                  <svg
                    viewBox="0 0 1024 1024"
                    className="b3-farming-rss3-icon16"
                  >
                    <path d="M426 726v-428l214 214z"></path>
                  </svg>
                </div>
              </div>
              <ul
                data-thq="thq-dropdown-list"
                className="b3-farming-rss3-dropdown-list2"
              >
                <li
                  data-thq="thq-dropdown"
                  className="b3-farming-rss3-dropdown14 list-item"
                >
                  <div
                    data-thq="thq-dropdown-toggle"
                    className="b3-farming-rss3-dropdown-toggle16"
                  >
                    <Link
                      to="/b3-farming-rss-1"
                      className="b3-farming-rss3-navlink16 text-small-M_nocolor sb_btn"
                    >
                      Free Crypto
                    </Link>
                  </div>
                </li>
                <li
                  data-thq="thq-dropdown"
                  className="b3-farming-rss3-dropdown15 list-item"
                >
                  <div
                    data-thq="thq-dropdown-toggle"
                    className="b3-farming-rss3-dropdown-toggle17"
                  >
                    <Link
                      to="/b3-farming-rss-2"
                      className="b3-farming-rss3-navlink17 text-small-M_nocolor sb_btn"
                    >
                      Investimento
                    </Link>
                  </div>
                </li>
                <li
                  data-thq="thq-dropdown"
                  className="b3-farming-rss3-dropdown16 list-item"
                >
                  <div
                    data-thq="thq-dropdown-toggle"
                    className="b3-farming-rss3-dropdown-toggle18"
                  >
                    <Link
                      to="/b3-farming-rss-3"
                      className="b3-farming-rss3-navlink18 text-small-M_nocolor sb_btn"
                    >
                      Casinò &amp; Betting
                    </Link>
                  </div>
                </li>
                <li
                  data-thq="thq-dropdown"
                  className="b3-farming-rss3-dropdown17 list-item"
                >
                  <div
                    data-thq="thq-dropdown-toggle"
                    className="b3-farming-rss3-dropdown-toggle19"
                  >
                    <Link
                      to="/b3-farming-rss-4"
                      className="b3-farming-rss3-navlink19 text-small-M_nocolor sb_btn"
                    >
                      Gaming &amp; NFTs
                    </Link>
                  </div>
                </li>
                <li
                  data-thq="thq-dropdown"
                  className="b3-farming-rss3-dropdown18 list-item"
                >
                  <div
                    data-thq="thq-dropdown-toggle"
                    className="b3-farming-rss3-dropdown-toggle20"
                  >
                    <Link
                      to="/b3-farming-rss-5"
                      className="b3-farming-rss3-navlink20 text-small-M_nocolor sb_btn"
                    >
                      Mining
                    </Link>
                  </div>
                </li>
              </ul>
            </div>
            <div
              data-thq="thq-dropdown"
              className="b3-farming-rss3-thq-dropdown3 list-item"
            >
              <div
                data-thq="thq-dropdown-toggle"
                className="b3-farming-rss3-dropdown-toggle21 link"
              >
                <span className="b3-farming-rss3-text9 sb_btn text-medium-S_nocolor">
                  Utility
                </span>
                <div
                  data-thq="thq-dropdown-arrow"
                  className="b3-farming-rss3-dropdown-arrow3"
                >
                  <svg
                    viewBox="0 0 1024 1024"
                    className="b3-farming-rss3-icon18"
                  >
                    <path d="M426 726v-428l214 214z"></path>
                  </svg>
                </div>
              </div>
              <ul
                data-thq="thq-dropdown-list"
                className="b3-farming-rss3-dropdown-list3"
              >
                <li
                  data-thq="thq-dropdown"
                  className="b3-farming-rss3-dropdown19 list-item"
                >
                  <div
                    data-thq="thq-dropdown-toggle"
                    className="b3-farming-rss3-dropdown-toggle22"
                  >
                    <Link
                      to="/b4-farming-uty-1"
                      className="b3-farming-rss3-navlink21 text-small-M_nocolor sb_btn"
                    >
                      Gestione
                    </Link>
                  </div>
                </li>
                <li
                  data-thq="thq-dropdown"
                  className="b3-farming-rss3-dropdown20 list-item"
                >
                  <div
                    data-thq="thq-dropdown-toggle"
                    className="b3-farming-rss3-dropdown-toggle23"
                  >
                    <Link
                      to="/b4-farming-uty-2"
                      className="b3-farming-rss3-navlink22 text-small-M_nocolor sb_btn"
                    >
                      Sicurezza
                    </Link>
                  </div>
                </li>
                <li
                  data-thq="thq-dropdown"
                  className="b3-farming-rss3-dropdown21 list-item"
                >
                  <div
                    data-thq="thq-dropdown-toggle"
                    className="b3-farming-rss3-dropdown-toggle24"
                  >
                    <Link
                      to="/b4-farming-uty-3"
                      className="b3-farming-rss3-navlink23 text-small-M_nocolor sb_btn"
                    >
                      Prestazioni
                    </Link>
                  </div>
                </li>
                <li
                  data-thq="thq-dropdown"
                  className="b3-farming-rss3-dropdown22 list-item"
                >
                  <div
                    data-thq="thq-dropdown-toggle"
                    className="b3-farming-rss3-dropdown-toggle25"
                  >
                    <Link
                      to="/b4-farming-uty-4"
                      className="b3-farming-rss3-navlink24 text-small-M_nocolor sb_btn"
                    >
                      Automazione
                    </Link>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default B3FarmingRss3
