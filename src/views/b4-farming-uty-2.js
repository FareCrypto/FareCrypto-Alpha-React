import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import NavbarInteractive from '../components/navbar-interactive'
import Elemstgld from '../components/elemstgld'
import Elemstg from '../components/elemstg'
import './b4-farming-uty-2.css'

const B4FarmingUty2 = (props) => {
  return (
    <div className="b4-farming-uty2-container10">
      <Helmet>
        <title>b4-farming-uty-2 - FareCrypto.net</title>
        <meta
          name="description"
          content="Su FareCrypto potrai scoprire come trasformare il tempo libero in Crypto e NFT ed avviale la tua carriera da Crypto-Farmer anche da zero!"
        />
        <meta property="og:title" content="b4-farming-uty-2 - FareCrypto.net" />
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
        <NavbarInteractive rootClassName="navbar-interactiveroot-class-name29"></NavbarInteractive>
        <div className="b4-farming-uty2-container12">
          <h1 className="b4-farming-uty2-text1 text-big-B">Utility</h1>
          <button type="button" className="button">
            Tutorial
          </button>
          <span className="b4-farming-uty2-text2 text-medium-S">
            Sfrutta le risorse secondarie per accelerare, automatizzare,
            proteggere e migliorare l&apos;efficienza di altre risorse e
            strategie. Si consiglia di seguire il tutorial sulla manutenzione
            del dispositivo.
          </span>
        </div>
        <div className="b4-farming-uty2-container13">
          <Elemstgld
            difficolta="Difficoltà"
            rootClassName="elemstgldroot-class-name17"
          ></Elemstgld>
          <div className="b4-farming-uty2-container14">
            <Elemstg
              difficolta="Difficoltà"
              rootClassName="elemstgroot-class-name51"
            ></Elemstg>
            <div className="b4-farming-uty2-container15"></div>
            <Elemstg
              difficolta="Difficoltà"
              rootClassName="elemstgroot-class-name52"
            ></Elemstg>
            <div className="b4-farming-uty2-container16"></div>
            <Elemstg
              difficolta="Difficoltà"
              rootClassName="elemstgroot-class-name53"
            ></Elemstg>
            <div className="b4-farming-uty2-container17"></div>
          </div>
        </div>
        <div className="b4-farming-uty2-container18 link">
          <div className="b4-farming-uty2-container19 sb_tog">
            <svg viewBox="0 0 1024 1024" className="sb_tog_img">
              <path d="M128 256h768v86h-768v-86zM128 554v-84h768v84h-768zM128 768v-86h768v86h-768z"></path>
            </svg>
          </div>
          <div className="b4-farming-uty2-container20 sb_list">
            <span className="b4-farming-uty2-text3 text-small-S text-small-B">
              NAVIGAZIONE
            </span>
            <div
              data-thq="thq-dropdown"
              className="b4-farming-uty2-thq-dropdown1 list-item"
            >
              <div
                data-thq="thq-dropdown-toggle"
                className="b4-farming-uty2-dropdown-toggle10 link"
              >
                <span className="b4-farming-uty2-text4 sb_btn text-medium-S_nocolor">
                  Strategie
                </span>
                <div
                  data-thq="thq-dropdown-arrow"
                  className="b4-farming-uty2-dropdown-arrow1"
                >
                  <svg
                    viewBox="0 0 1024 1024"
                    className="b4-farming-uty2-icon3"
                  >
                    <path d="M426 726v-428l214 214z"></path>
                  </svg>
                </div>
              </div>
              <ul
                data-thq="thq-dropdown-list"
                className="b4-farming-uty2-dropdown-list1"
              >
                <li
                  data-thq="thq-dropdown"
                  className="b4-farming-uty2-dropdown10 list-item"
                >
                  <div
                    data-thq="thq-dropdown-toggle"
                    className="b4-farming-uty2-dropdown-toggle11"
                  >
                    <Link
                      to="/b2-farming-stg-1"
                      className="b4-farming-uty2-navlink10 text-small-M_nocolor sb_btn"
                    >
                      Strategie veloci
                    </Link>
                  </div>
                </li>
                <li
                  data-thq="thq-dropdown"
                  className="b4-farming-uty2-dropdown11 list-item"
                >
                  <div
                    data-thq="thq-dropdown-toggle"
                    className="b4-farming-uty2-dropdown-toggle12"
                  >
                    <Link
                      to="/b2-farming-stg-2"
                      className="b4-farming-uty2-navlink11 text-small-M_nocolor sb_btn"
                    >
                      Lungo Termine
                    </Link>
                  </div>
                </li>
                <li
                  data-thq="thq-dropdown"
                  className="b4-farming-uty2-dropdown12 list-item"
                >
                  <div
                    data-thq="thq-dropdown-toggle"
                    className="b4-farming-uty2-dropdown-toggle13"
                  >
                    <Link
                      to="/b2-farming-stg-3"
                      className="b4-farming-uty2-navlink12 text-small-M_nocolor sb_btn"
                    >
                      Guadagno Passivo
                    </Link>
                  </div>
                </li>
                <li
                  data-thq="thq-dropdown"
                  className="b4-farming-uty2-dropdown13 list-item"
                >
                  <div
                    data-thq="thq-dropdown-toggle"
                    className="b4-farming-uty2-dropdown-toggle14"
                  >
                    <Link
                      to="/b2-farming-stg-4"
                      className="b4-farming-uty2-navlink13 text-small-M_nocolor sb_btn"
                    >
                      Speciali
                    </Link>
                  </div>
                </li>
              </ul>
            </div>
            <div
              data-thq="thq-dropdown"
              className="b4-farming-uty2-thq-dropdown2 list-item"
            >
              <div
                data-thq="thq-dropdown-toggle"
                className="b4-farming-uty2-dropdown-toggle15 link"
              >
                <span className="b4-farming-uty2-text5 sb_btn text-medium-S_nocolor">
                  Risorse
                </span>
                <div
                  data-thq="thq-dropdown-arrow"
                  className="b4-farming-uty2-dropdown-arrow2"
                >
                  <svg
                    viewBox="0 0 1024 1024"
                    className="b4-farming-uty2-icon5"
                  >
                    <path d="M426 726v-428l214 214z"></path>
                  </svg>
                </div>
              </div>
              <ul
                data-thq="thq-dropdown-list"
                className="b4-farming-uty2-dropdown-list2"
              >
                <li
                  data-thq="thq-dropdown"
                  className="b4-farming-uty2-dropdown14 list-item"
                >
                  <div
                    data-thq="thq-dropdown-toggle"
                    className="b4-farming-uty2-dropdown-toggle16"
                  >
                    <Link
                      to="/b3-farming-rss-1"
                      className="b4-farming-uty2-navlink14 text-small-M_nocolor sb_btn"
                    >
                      Free Crypto
                    </Link>
                  </div>
                </li>
                <li
                  data-thq="thq-dropdown"
                  className="b4-farming-uty2-dropdown15 list-item"
                >
                  <div
                    data-thq="thq-dropdown-toggle"
                    className="b4-farming-uty2-dropdown-toggle17"
                  >
                    <Link
                      to="/b3-farming-rss-2"
                      className="b4-farming-uty2-navlink15 text-small-M_nocolor sb_btn"
                    >
                      Investimento
                    </Link>
                  </div>
                </li>
                <li
                  data-thq="thq-dropdown"
                  className="b4-farming-uty2-dropdown16 list-item"
                >
                  <div
                    data-thq="thq-dropdown-toggle"
                    className="b4-farming-uty2-dropdown-toggle18"
                  >
                    <Link
                      to="/b3-farming-rss-3"
                      className="b4-farming-uty2-navlink16 text-small-M_nocolor sb_btn"
                    >
                      Casinò &amp; Betting
                    </Link>
                  </div>
                </li>
                <li
                  data-thq="thq-dropdown"
                  className="b4-farming-uty2-dropdown17 list-item"
                >
                  <div
                    data-thq="thq-dropdown-toggle"
                    className="b4-farming-uty2-dropdown-toggle19"
                  >
                    <Link
                      to="/b3-farming-rss-4"
                      className="b4-farming-uty2-navlink17 text-small-M_nocolor sb_btn"
                    >
                      Gaming &amp; NFTs
                    </Link>
                  </div>
                </li>
                <li
                  data-thq="thq-dropdown"
                  className="b4-farming-uty2-dropdown18 list-item"
                >
                  <div
                    data-thq="thq-dropdown-toggle"
                    className="b4-farming-uty2-dropdown-toggle20"
                  >
                    <Link
                      to="/b3-farming-rss-5"
                      className="b4-farming-uty2-navlink18 text-small-M_nocolor sb_btn"
                    >
                      Mining
                    </Link>
                  </div>
                </li>
              </ul>
            </div>
            <div
              data-thq="thq-dropdown"
              className="b4-farming-uty2-thq-dropdown3 list-item"
            >
              <div
                data-thq="thq-dropdown-toggle"
                className="b4-farming-uty2-dropdown-toggle21 link"
              >
                <span className="b4-farming-uty2-text6 sb_btn text-medium-S_nocolor">
                  Utility
                </span>
                <div
                  data-thq="thq-dropdown-arrow"
                  className="b4-farming-uty2-dropdown-arrow3"
                >
                  <svg
                    viewBox="0 0 1024 1024"
                    className="b4-farming-uty2-icon7"
                  >
                    <path d="M426 726v-428l214 214z"></path>
                  </svg>
                </div>
              </div>
              <ul
                data-thq="thq-dropdown-list"
                className="b4-farming-uty2-dropdown-list3"
              >
                <li
                  data-thq="thq-dropdown"
                  className="b4-farming-uty2-dropdown19 list-item"
                >
                  <div
                    data-thq="thq-dropdown-toggle"
                    className="b4-farming-uty2-dropdown-toggle22"
                  >
                    <Link
                      to="/b4-farming-uty-1"
                      className="b4-farming-uty2-navlink19 text-small-M_nocolor sb_btn"
                    >
                      Gestione
                    </Link>
                  </div>
                </li>
                <li
                  data-thq="thq-dropdown"
                  className="b4-farming-uty2-dropdown20 list-item"
                >
                  <div
                    data-thq="thq-dropdown-toggle"
                    className="b4-farming-uty2-dropdown-toggle23"
                  >
                    <Link
                      to="/b4-farming-uty-2"
                      className="b4-farming-uty2-navlink20 text-small-M_nocolor sb_btn"
                    >
                      Sicurezza
                    </Link>
                  </div>
                </li>
                <li
                  data-thq="thq-dropdown"
                  className="b4-farming-uty2-dropdown21 list-item"
                >
                  <div
                    data-thq="thq-dropdown-toggle"
                    className="b4-farming-uty2-dropdown-toggle24"
                  >
                    <Link
                      to="/b4-farming-uty-3"
                      className="b4-farming-uty2-navlink21 text-small-M_nocolor sb_btn"
                    >
                      Prestazioni
                    </Link>
                  </div>
                </li>
                <li
                  data-thq="thq-dropdown"
                  className="b4-farming-uty2-dropdown22 list-item"
                >
                  <div
                    data-thq="thq-dropdown-toggle"
                    className="b4-farming-uty2-dropdown-toggle25"
                  >
                    <Link
                      to="/b4-farming-uty-4"
                      className="b4-farming-uty2-navlink22 text-small-M_nocolor sb_btn"
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

export default B4FarmingUty2
