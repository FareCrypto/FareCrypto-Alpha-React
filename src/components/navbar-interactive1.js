import React from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

import CookiesModal from './cookies-modal'
import './navbar-interactive1.css'

const NavbarInteractive1 = (props) => {
  return (
    <header
      className={`navbar-interactive1-container10 ${props.rootClassName} `}
    >
      <header
        data-thq="thq-navbar"
        className="navbar-interactive1-navbar-interactive"
      >
        <a href="https://farecrypto.net/" className="navbar-interactive1-link1">
          <img src={props.imageSrc112} className="navbar-interactive1-image" />
        </a>
        <div
          data-thq="thq-navbar-nav"
          className="navbar-interactive1-desktop-menu"
        >
          <nav className="navbar-interactive1-links">
            <div
              data-thq="thq-dropdown"
              className="dsk-menu-mainLinks list-item"
            >
              <Link to="/">
                <div
                  data-thq="thq-dropdown-toggle"
                  className="navbar-interactive1-dropdown-toggle10 link dsk-menu-mainlink"
                >
                  <span className="navbar-interactive1-text100 FLX_txt_med_small-2_nocolor">
                    HOME
                  </span>
                </div>
              </Link>
            </div>
            <div
              data-thq="thq-dropdown"
              className="dsk-menu-mainLinks list-item"
            >
              <Link to="/b1-farming">
                <div
                  data-thq="thq-dropdown-toggle"
                  className="navbar-interactive1-dropdown-toggle11 link dsk-menu-mainlink"
                >
                  <span className="navbar-interactive1-text101 FLX_txt_med_small-2_nocolor">
                    Farming
                  </span>
                  <div
                    data-thq="thq-dropdown-arrow"
                    className="navbar-interactive1-dropdown-arrow1"
                  >
                    <svg
                      viewBox="0 0 1024 1024"
                      className="navbar-interactive1-icon10"
                    >
                      <path d="M426 726v-428l214 214z"></path>
                    </svg>
                  </div>
                </div>
              </Link>
              <ul data-thq="thq-dropdown-list" className="dsk-menu-ul">
                <li
                  data-thq="thq-dropdown"
                  className="dsk-menu-sub link list-item"
                >
                  <Link to="/b2-farming-stg-1">
                    <div
                      data-thq="thq-dropdown-toggle"
                      className="navbar-interactive1-dropdown-toggle12 link"
                    >
                      <span className="navbar-interactive1-text102 FLX_txt_med_small-2_nocolor">
                        Strategie
                      </span>
                    </div>
                  </Link>
                </li>
                <li
                  data-thq="thq-dropdown"
                  className="dsk-menu-sub link list-item"
                >
                  <div
                    data-thq="thq-dropdown-toggle"
                    className="navbar-interactive1-dropdown-toggle13 link"
                  >
                    <span className="navbar-interactive1-text103 FLX_txt_med_small-2_nocolor">
                      Risorse
                    </span>
                  </div>
                </li>
                <li
                  data-thq="thq-dropdown"
                  className="dsk-menu-sub link list-item"
                >
                  <div
                    data-thq="thq-dropdown-toggle"
                    className="navbar-interactive1-dropdown-toggle14 link"
                  >
                    <span className="navbar-interactive1-text104 FLX_txt_med_small-2_nocolor">
                      Utility
                    </span>
                  </div>
                </li>
                <li
                  data-thq="thq-dropdown"
                  className="dsk-menu-sub link list-item"
                >
                  <Link to="/c3-fc-crowdfunding">
                    <div
                      data-thq="thq-dropdown-toggle"
                      className="navbar-interactive1-dropdown-toggle15 link"
                    >
                      <span className="navbar-interactive1-text105 FLX_txt_med_small-2_nocolor">
                        <span className="navbar-interactive1-text106">F</span>
                        <span className="navbar-interactive1-text107">C</span>
                        <span>-Crowdfunding</span>
                      </span>
                    </div>
                  </Link>
                </li>
              </ul>
            </div>
            <div
              data-thq="thq-dropdown"
              className="dsk-menu-mainLinks list-item"
            >
              <Link to="/c1-fcinside">
                <div
                  data-thq="thq-dropdown-toggle"
                  className="navbar-interactive1-dropdown-toggle16 link dsk-menu-mainlink"
                >
                  <span className="navbar-interactive1-text109 FLX_txt_med_small-2_nocolor">
                    <span className="navbar-interactive1-text110">F</span>
                    <span>C</span>
                    <span>-INSIDE</span>
                  </span>
                  <div
                    data-thq="thq-dropdown-arrow"
                    className="navbar-interactive1-dropdown-arrow2"
                  >
                    <svg
                      viewBox="0 0 1024 1024"
                      className="navbar-interactive1-icon12"
                    >
                      <path d="M426 726v-428l214 214z"></path>
                    </svg>
                  </div>
                </div>
              </Link>
              <ul data-thq="thq-dropdown-list" className="dsk-menu-ul">
                <li
                  data-thq="thq-dropdown"
                  className="navbar-interactive1-dropdown5 link list-item"
                >
                  <Link to="/c2-fcinside-discover-us">
                    <div
                      data-thq="thq-dropdown-toggle"
                      className="navbar-interactive1-dropdown-toggle17 link"
                    >
                      <span className="navbar-interactive1-text113 FLX_txt_med_small-2_nocolor">
                        <span>
                          Scopri
                          <span
                            dangerouslySetInnerHTML={{
                              __html: ' ',
                            }}
                          />
                        </span>
                        <span className="navbar-interactive1-text115"> F</span>
                        <span className="navbar-interactive1-text116">are</span>
                        <span className="navbar-interactive1-text117">C</span>
                        <span>rypto</span>
                      </span>
                    </div>
                  </Link>
                </li>
                <li
                  data-thq="thq-dropdown"
                  className="navbar-interactive1-dropdown6 link list-item"
                >
                  <Link to="/d3-other-contacts">
                    <div
                      data-thq="thq-dropdown-toggle"
                      className="navbar-interactive1-dropdown-toggle18 link"
                    >
                      <span className="navbar-interactive1-text119 FLX_txt_med_small-2_nocolor">
                        Contatti
                      </span>
                    </div>
                  </Link>
                </li>
                <li
                  data-thq="thq-dropdown"
                  className="navbar-interactive1-dropdown7 link list-item"
                >
                  <Link to="/d4-other-legal">
                    <div
                      data-thq="thq-dropdown-toggle"
                      className="navbar-interactive1-dropdown-toggle19 link"
                    >
                      <span className="navbar-interactive1-text120 FLX_txt_med_small-2_nocolor">
                        Legal
                      </span>
                    </div>
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
        </div>
        <div
          name="notify"
          onclick="openNotifyBox()"
          className="navbar-interactive1-container11"
        >
          <svg viewBox="0 0 1024 1024" className="navbar-interactive1-icon14">
            <path d="M521.143 969.143c0-5.143-4-9.143-9.143-9.143-45.143 0-82.286-37.143-82.286-82.286 0-5.143-4-9.143-9.143-9.143s-9.143 4-9.143 9.143c0 55.429 45.143 100.571 100.571 100.571 5.143 0 9.143-4 9.143-9.143zM140.571 804.571h742.857c-102.286-115.429-152-272-152-475.429 0-73.714-69.714-182.857-219.429-182.857s-219.429 109.143-219.429 182.857c0 203.429-49.714 360-152 475.429zM987.429 804.571c0 40-33.143 73.143-73.143 73.143h-256c0 80.571-65.714 146.286-146.286 146.286s-146.286-65.714-146.286-146.286h-256c-40 0-73.143-33.143-73.143-73.143 84.571-71.429 182.857-199.429 182.857-475.429 0-109.714 90.857-229.714 242.286-252-2.857-6.857-4.571-14.286-4.571-22.286 0-30.286 24.571-54.857 54.857-54.857s54.857 24.571 54.857 54.857c0 8-1.714 15.429-4.571 22.286 151.429 22.286 242.286 142.286 242.286 252 0 276 98.286 404 182.857 475.429z"></path>
          </svg>
          <strong
            id="notifyAlert"
            className="navbar-interactive1-text121 FLX_txt_small"
          >
            !
          </strong>
          <animate-on-reveal
            animation="fadeInDown"
            duration="700ms"
            delay="0s"
            direction="alternate"
            easing="ease"
            iteration="1"
          >
            <div
              id="notifybox"
              data-thq-animate-on-reveal="true"
              className="navbar-interactive1-container12"
            >
              <div className="navbar-interactive1-container13">
                <div
                  onClick="notifyTypeSystem()"
                  className="navbar-interactive1-container14 link"
                >
                  <strong className="FLX_txt_small_nocolor">SISTEMA</strong>
                </div>
                <div
                  onClick="notifyTypePersonal()"
                  className="navbar-interactive1-container15 link"
                >
                  <strong className="FLX_txt_small_nocolor">PERSONALI</strong>
                </div>
              </div>
              <animate-on-reveal
                animation="fadeIn"
                duration="500ms"
                delay="0s"
                direction="alternate"
                easing="ease"
                iteration="1"
              >
                <div
                  id="systemNotifyBox"
                  data-thq-animate-on-reveal="true"
                  className="navbar-interactive1-container16"
                >
                  <div id="notify1" className="notify">
                    <svg
                      viewBox="0 0 1024 1024"
                      className="navbar-interactive1-icon16"
                    >
                      <path d="M1024 429.256c0-200.926-58.792-363.938-131.482-365.226 0.292-0.006 0.578-0.030 0.872-0.030h-82.942c0 0-194.8 146.336-475.23 203.754-8.56 45.292-14.030 99.274-14.030 161.502s5.466 116.208 14.030 161.5c280.428 57.418 475.23 203.756 475.23 203.756h82.942c-0.292 0-0.578-0.024-0.872-0.032 72.696-1.288 131.482-164.298 131.482-365.224zM864.824 739.252c-9.382 0-19.532-9.742-24.746-15.548-12.63-14.064-24.792-35.96-35.188-63.328-23.256-61.232-36.066-143.31-36.066-231.124 0-87.81 12.81-169.89 36.066-231.122 10.394-27.368 22.562-49.266 35.188-63.328 5.214-5.812 15.364-15.552 24.746-15.552 9.38 0 19.536 9.744 24.744 15.552 12.634 14.064 24.796 35.958 35.188 63.328 23.258 61.23 36.068 143.312 36.068 231.122 0 87.804-12.81 169.888-36.068 231.124-10.39 27.368-22.562 49.264-35.188 63.328-5.208 5.806-15.36 15.548-24.744 15.548zM251.812 429.256c0-51.95 3.81-102.43 11.052-149.094-47.372 6.554-88.942 10.324-140.34 10.324-67.058 0-67.058 0-67.058 0l-55.466 94.686v88.17l55.46 94.686c0 0 0 0 67.060 0 51.398 0 92.968 3.774 140.34 10.324-7.236-46.664-11.048-97.146-11.048-149.096zM368.15 642.172l-127.998-24.51 81.842 321.544c4.236 16.634 20.744 25.038 36.686 18.654l118.556-47.452c15.944-6.376 22.328-23.964 14.196-39.084l-123.282-229.152zM864.824 548.73c-3.618 0-7.528-3.754-9.538-5.992-4.87-5.42-9.556-13.86-13.562-24.408-8.962-23.6-13.9-55.234-13.9-89.078s4.938-65.478 13.9-89.078c4.006-10.548 8.696-18.988 13.562-24.408 2.010-2.24 5.92-5.994 9.538-5.994 3.616 0 7.53 3.756 9.538 5.994 4.87 5.42 9.556 13.858 13.56 24.408 8.964 23.598 13.902 55.234 13.902 89.078 0 33.842-4.938 65.478-13.902 89.078-4.004 10.548-8.696 18.988-13.56 24.408-2.008 2.238-5.92 5.992-9.538 5.992z"></path>
                    </svg>
                    <span className="navbar-interactive1-text124 FLX_txt_small1">
                      <span className="navbar-interactive1-text125">
                        Attenzione ai
                      </span>
                      <span className="navbar-interactive1-text126">
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </span>
                      <span className="navbar-interactive1-text127">
                        cloni malvagi
                      </span>
                      <span className="navbar-interactive1-text128">!</span>
                      <br></br>
                      <span>
                        I nostri domini ufficiali sono
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </span>
                      <span className="navbar-interactive1-text131">www</span>
                      <span>. </span>
                      <span className="navbar-interactive1-text133">
                        FareCrypto
                      </span>
                      <span>
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </span>
                      <span className="navbar-interactive1-text135">.</span>
                      <span className="navbar-interactive1-text136">NET</span>
                      <span> o </span>
                      <span className="navbar-interactive1-text138">.</span>
                      <span className="navbar-interactive1-text139">EU</span>
                      <span className="navbar-interactive1-text140"> !</span>
                      <br></br>
                      <span>
                        Altri domini come
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </span>
                      <span className="navbar-interactive1-text143">.com</span>
                      <span>
                        ,
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </span>
                      <span className="navbar-interactive1-text145">.it</span>
                      <span>
                        ,
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </span>
                      <span className="navbar-interactive1-text147">.io</span>
                      <span>
                        , ecc.. NON sono nostri e potrebbero compromettere i
                        tuoi accounts, dispositivi, fondi e privacy! 
                      </span>
                      <span>
                        Consigliamo di diffidare e segnalare tali cloni tramite
                        il Support o dai
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
                        className="navbar-interactive1-link2"
                      >
                        Contatti
                      </a>
                      <span>. Grazie della collaborazione!</span>
                      <br></br>
                    </span>
                    <svg
                      onclick="closeNotify1()"
                      viewBox="0 0 1024 1024"
                      aria-label="Close"
                      className="navbar-interactive1-icon18 closeNotify"
                    >
                      <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                    </svg>
                  </div>
                  <div className="navbar-interactive1-container18"></div>
                  <i className="navbar-interactive1-text152 FLX_txt_small2">
                    Al momento non ci sono altre comunicazioni.
                  </i>
                </div>
              </animate-on-reveal>
              <animate-on-reveal
                animation="fadeIn"
                duration="500ms"
                delay="0s"
                direction="alternate"
                easing="ease"
                iteration="1"
              >
                <div
                  id="personalNotifyBox"
                  data-thq-animate-on-reveal="true"
                  className="navbar-interactive1-container19"
                >
                  <div className="navbar-interactive1-container20"></div>
                  <i className="navbar-interactive1-text153 FLX_txt_small2">
                    Al momento non ci sono altre comunicazioni.
                  </i>
                </div>
              </animate-on-reveal>
            </div>
          </animate-on-reveal>
          <div
            id="closeNotify"
            onClick="closeNotifyBox()"
            className="navbar-interactive1-container21"
          ></div>
        </div>
        <div
          data-thq="thq-dropdown"
          className="navbar-interactive1-side-bar list-item"
        >
          <div
            data-thq="thq-dropdown-toggle"
            className="navbar-interactive1-side-bar-toggle"
          >
            <div
              data-thq="thq-dropdown-arrow"
              className="navbar-interactive1-side-bar-icon"
            >
              <svg
                viewBox="0 0 1024 1024"
                className="navbar-interactive1-icon20"
              >
                <path d="M810.667 725.333h-597.333c-47.061 0-85.333 38.272-85.333 85.333s38.272 85.333 85.333 85.333h597.333c47.061 0 85.333-38.272 85.333-85.333s-38.272-85.333-85.333-85.333z"></path>
                <path d="M810.667 426.667h-597.333c-47.061 0-85.333 38.272-85.333 85.333s38.272 85.333 85.333 85.333h597.333c47.061 0 85.333-38.272 85.333-85.333s-38.272-85.333-85.333-85.333z"></path>
                <path d="M810.667 128h-597.333c-47.061 0-85.333 38.272-85.333 85.333s38.272 85.333 85.333 85.333h597.333c47.061 0 85.333-38.272 85.333-85.333s-38.272-85.333-85.333-85.333z"></path>
              </svg>
            </div>
          </div>
          <ul
            data-thq="thq-dropdown-list"
            className="navbar-interactive1-side-bar-content"
          >
            <li
              data-thq="thq-dropdown"
              className="navbar-interactive1-main1 list-item"
            >
              <div
                data-thq="thq-dropdown-toggle"
                className="navbar-interactive1-main2"
              >
                <div className="navbar-interactive1-container22"></div>
                <Link to="/">
                  <div className="navbar-interactive1-container23 link">
                    <svg
                      viewBox="0 0 877.7142857142857 1024"
                      className="navbar-interactive1-icon24"
                    >
                      <path d="M658.286 457.143v109.714c0 9.714-8.571 18.286-18.286 18.286h-201.143v109.714c0 10.286-8 18.286-18.286 18.286-5.143 0-9.714-2.286-13.714-5.714l-182.286-182.286c-3.429-3.429-5.143-8.571-5.143-13.143s1.714-9.714 5.143-13.143l182.857-182.857c3.429-3.429 8.571-5.143 13.143-5.143 9.714 0 18.286 8.571 18.286 18.286v109.714h201.143c9.714 0 18.286 8.571 18.286 18.286zM749.714 512c0-171.429-139.429-310.857-310.857-310.857s-310.857 139.429-310.857 310.857 139.429 310.857 310.857 310.857 310.857-139.429 310.857-310.857zM877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
                    </svg>
                    <h1 className="FLX_txt_big_nocolor navbar-interactive1-text154">
                      Home
                    </h1>
                    <svg
                      viewBox="0 0 1024 1024"
                      className="navbar-interactive1-icon26"
                    >
                      <path d="M426 854h-212v-342h-128l426-384 426 384h-128v342h-212v-256h-172v256z"></path>
                    </svg>
                  </div>
                </Link>
                <div className="navbar-interactive1-container24"></div>
                <Link to="/b1-farming">
                  <div className="navbar-interactive1-container25 link">
                    <svg
                      viewBox="0 0 877.7142857142857 1024"
                      className="navbar-interactive1-icon28"
                    >
                      <path d="M658.286 457.143v109.714c0 9.714-8.571 18.286-18.286 18.286h-201.143v109.714c0 10.286-8 18.286-18.286 18.286-5.143 0-9.714-2.286-13.714-5.714l-182.286-182.286c-3.429-3.429-5.143-8.571-5.143-13.143s1.714-9.714 5.143-13.143l182.857-182.857c3.429-3.429 8.571-5.143 13.143-5.143 9.714 0 18.286 8.571 18.286 18.286v109.714h201.143c9.714 0 18.286 8.571 18.286 18.286zM749.714 512c0-171.429-139.429-310.857-310.857-310.857s-310.857 139.429-310.857 310.857 139.429 310.857 310.857 310.857 310.857-139.429 310.857-310.857zM877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
                    </svg>
                    <h1 className="FLX_txt_big_nocolor navbar-interactive1-text155">
                      Farming
                    </h1>
                    <svg
                      viewBox="0 0 1024 1024"
                      className="navbar-interactive1-icon30"
                    >
                      <path d="M426 854h-212v-342h-128l426-384 426 384h-128v342h-212v-256h-172v256z"></path>
                    </svg>
                  </div>
                </Link>
                <Link to="/b2-farming-stg-1">
                  <div className="navbar-interactive1-container26 link">
                    <svg
                      viewBox="0 0 877.7142857142857 1024"
                      className="navbar-interactive1-icon32"
                    >
                      <path d="M658.286 457.143v109.714c0 9.714-8.571 18.286-18.286 18.286h-201.143v109.714c0 10.286-8 18.286-18.286 18.286-5.143 0-9.714-2.286-13.714-5.714l-182.286-182.286c-3.429-3.429-5.143-8.571-5.143-13.143s1.714-9.714 5.143-13.143l182.857-182.857c3.429-3.429 8.571-5.143 13.143-5.143 9.714 0 18.286 8.571 18.286 18.286v109.714h201.143c9.714 0 18.286 8.571 18.286 18.286zM749.714 512c0-171.429-139.429-310.857-310.857-310.857s-310.857 139.429-310.857 310.857 139.429 310.857 310.857 310.857 310.857-139.429 310.857-310.857zM877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
                    </svg>
                    <h1 className="FLX_txt_med_big_nocolor navbar-interactive1-text156">
                      Strategie
                    </h1>
                    <svg
                      viewBox="0 0 1024 1024"
                      className="navbar-interactive1-icon34"
                    >
                      <path d="M470 384l60 60-154 154h392v-428h86v512h-478l154 154-60 60-256-256z"></path>
                    </svg>
                  </div>
                </Link>
                <div className="navbar-interactive1-container27 link">
                  <svg
                    viewBox="0 0 877.7142857142857 1024"
                    className="navbar-interactive1-icon36"
                  >
                    <path d="M658.286 457.143v109.714c0 9.714-8.571 18.286-18.286 18.286h-201.143v109.714c0 10.286-8 18.286-18.286 18.286-5.143 0-9.714-2.286-13.714-5.714l-182.286-182.286c-3.429-3.429-5.143-8.571-5.143-13.143s1.714-9.714 5.143-13.143l182.857-182.857c3.429-3.429 8.571-5.143 13.143-5.143 9.714 0 18.286 8.571 18.286 18.286v109.714h201.143c9.714 0 18.286 8.571 18.286 18.286zM749.714 512c0-171.429-139.429-310.857-310.857-310.857s-310.857 139.429-310.857 310.857 139.429 310.857 310.857 310.857 310.857-139.429 310.857-310.857zM877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
                  </svg>
                  <h1 className="FLX_txt_med_big_nocolor navbar-interactive1-text157">
                    Risorse
                  </h1>
                  <svg
                    viewBox="0 0 1024 1024"
                    className="navbar-interactive1-icon38"
                  >
                    <path d="M470 384l60 60-154 154h392v-428h86v512h-478l154 154-60 60-256-256z"></path>
                  </svg>
                </div>
                <div className="navbar-interactive1-container28 link">
                  <svg
                    viewBox="0 0 877.7142857142857 1024"
                    className="navbar-interactive1-icon40"
                  >
                    <path d="M658.286 457.143v109.714c0 9.714-8.571 18.286-18.286 18.286h-201.143v109.714c0 10.286-8 18.286-18.286 18.286-5.143 0-9.714-2.286-13.714-5.714l-182.286-182.286c-3.429-3.429-5.143-8.571-5.143-13.143s1.714-9.714 5.143-13.143l182.857-182.857c3.429-3.429 8.571-5.143 13.143-5.143 9.714 0 18.286 8.571 18.286 18.286v109.714h201.143c9.714 0 18.286 8.571 18.286 18.286zM749.714 512c0-171.429-139.429-310.857-310.857-310.857s-310.857 139.429-310.857 310.857 139.429 310.857 310.857 310.857 310.857-139.429 310.857-310.857zM877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
                  </svg>
                  <h1 className="FLX_txt_med_big_nocolor navbar-interactive1-text158">
                    Utility
                  </h1>
                  <svg
                    viewBox="0 0 1024 1024"
                    className="navbar-interactive1-icon42"
                  >
                    <path d="M470 384l60 60-154 154h392v-428h86v512h-478l154 154-60 60-256-256z"></path>
                  </svg>
                </div>
                <Link to="/c3-fc-crowdfunding">
                  <div className="navbar-interactive1-container29 link">
                    <svg
                      viewBox="0 0 877.7142857142857 1024"
                      className="navbar-interactive1-icon44"
                    >
                      <path d="M658.286 457.143v109.714c0 9.714-8.571 18.286-18.286 18.286h-201.143v109.714c0 10.286-8 18.286-18.286 18.286-5.143 0-9.714-2.286-13.714-5.714l-182.286-182.286c-3.429-3.429-5.143-8.571-5.143-13.143s1.714-9.714 5.143-13.143l182.857-182.857c3.429-3.429 8.571-5.143 13.143-5.143 9.714 0 18.286 8.571 18.286 18.286v109.714h201.143c9.714 0 18.286 8.571 18.286 18.286zM749.714 512c0-171.429-139.429-310.857-310.857-310.857s-310.857 139.429-310.857 310.857 139.429 310.857 310.857 310.857 310.857-139.429 310.857-310.857zM877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
                    </svg>
                    <h1 className="FLX_txt_med_big_nocolor navbar-interactive1-text159">
                      <span>F</span>
                      <span>C</span>
                      <span>-Crowdfunding</span>
                    </h1>
                    <svg
                      viewBox="0 0 1024 1024"
                      className="navbar-interactive1-icon46"
                    >
                      <path d="M470 384l60 60-154 154h392v-428h86v512h-478l154 154-60 60-256-256z"></path>
                    </svg>
                  </div>
                </Link>
                <div className="navbar-interactive1-container30"></div>
                <Link to="/c1-fcinside">
                  <div className="navbar-interactive1-container31 link">
                    <svg
                      viewBox="0 0 877.7142857142857 1024"
                      className="navbar-interactive1-icon48"
                    >
                      <path d="M658.286 457.143v109.714c0 9.714-8.571 18.286-18.286 18.286h-201.143v109.714c0 10.286-8 18.286-18.286 18.286-5.143 0-9.714-2.286-13.714-5.714l-182.286-182.286c-3.429-3.429-5.143-8.571-5.143-13.143s1.714-9.714 5.143-13.143l182.857-182.857c3.429-3.429 8.571-5.143 13.143-5.143 9.714 0 18.286 8.571 18.286 18.286v109.714h201.143c9.714 0 18.286 8.571 18.286 18.286zM749.714 512c0-171.429-139.429-310.857-310.857-310.857s-310.857 139.429-310.857 310.857 139.429 310.857 310.857 310.857 310.857-139.429 310.857-310.857zM877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
                    </svg>
                    <h1 className="FLX_txt_big_nocolor navbar-interactive1-text163">
                      FC-Inside
                    </h1>
                    <svg
                      viewBox="0 0 1024 1024"
                      className="navbar-interactive1-icon50"
                    >
                      <path d="M426 854h-212v-342h-128l426-384 426 384h-128v342h-212v-256h-172v256z"></path>
                    </svg>
                  </div>
                </Link>
                <Link to="/c2-fcinside-discover-us">
                  <div className="navbar-interactive1-container32 link">
                    <svg
                      viewBox="0 0 877.7142857142857 1024"
                      className="navbar-interactive1-icon52"
                    >
                      <path d="M658.286 457.143v109.714c0 9.714-8.571 18.286-18.286 18.286h-201.143v109.714c0 10.286-8 18.286-18.286 18.286-5.143 0-9.714-2.286-13.714-5.714l-182.286-182.286c-3.429-3.429-5.143-8.571-5.143-13.143s1.714-9.714 5.143-13.143l182.857-182.857c3.429-3.429 8.571-5.143 13.143-5.143 9.714 0 18.286 8.571 18.286 18.286v109.714h201.143c9.714 0 18.286 8.571 18.286 18.286zM749.714 512c0-171.429-139.429-310.857-310.857-310.857s-310.857 139.429-310.857 310.857 139.429 310.857 310.857 310.857 310.857-139.429 310.857-310.857zM877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
                    </svg>
                    <h1 className="FLX_txt_med_big_nocolor navbar-interactive1-text164">
                      <span>
                        Scopri
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </span>
                      <span>F</span>
                      <span>are</span>
                      <span>C</span>
                      <span>rypto</span>
                    </h1>
                    <svg
                      viewBox="0 0 1024 1024"
                      className="navbar-interactive1-icon54"
                    >
                      <path d="M470 384l60 60-154 154h392v-428h86v512h-478l154 154-60 60-256-256z"></path>
                    </svg>
                  </div>
                </Link>
                <Link to="/d3-other-contacts">
                  <div className="navbar-interactive1-container33 link">
                    <svg
                      viewBox="0 0 877.7142857142857 1024"
                      className="navbar-interactive1-icon56"
                    >
                      <path d="M658.286 457.143v109.714c0 9.714-8.571 18.286-18.286 18.286h-201.143v109.714c0 10.286-8 18.286-18.286 18.286-5.143 0-9.714-2.286-13.714-5.714l-182.286-182.286c-3.429-3.429-5.143-8.571-5.143-13.143s1.714-9.714 5.143-13.143l182.857-182.857c3.429-3.429 8.571-5.143 13.143-5.143 9.714 0 18.286 8.571 18.286 18.286v109.714h201.143c9.714 0 18.286 8.571 18.286 18.286zM749.714 512c0-171.429-139.429-310.857-310.857-310.857s-310.857 139.429-310.857 310.857 139.429 310.857 310.857 310.857 310.857-139.429 310.857-310.857zM877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
                    </svg>
                    <h1 className="FLX_txt_med_big_nocolor navbar-interactive1-text170">
                      Contatti
                    </h1>
                    <svg
                      viewBox="0 0 1024 1024"
                      className="navbar-interactive1-icon58"
                    >
                      <path d="M470 384l60 60-154 154h392v-428h86v512h-478l154 154-60 60-256-256z"></path>
                    </svg>
                  </div>
                </Link>
                <Link to="/d4-other-legal">
                  <div className="navbar-interactive1-container34 link">
                    <svg
                      viewBox="0 0 877.7142857142857 1024"
                      className="navbar-interactive1-icon60"
                    >
                      <path d="M658.286 457.143v109.714c0 9.714-8.571 18.286-18.286 18.286h-201.143v109.714c0 10.286-8 18.286-18.286 18.286-5.143 0-9.714-2.286-13.714-5.714l-182.286-182.286c-3.429-3.429-5.143-8.571-5.143-13.143s1.714-9.714 5.143-13.143l182.857-182.857c3.429-3.429 8.571-5.143 13.143-5.143 9.714 0 18.286 8.571 18.286 18.286v109.714h201.143c9.714 0 18.286 8.571 18.286 18.286zM749.714 512c0-171.429-139.429-310.857-310.857-310.857s-310.857 139.429-310.857 310.857 139.429 310.857 310.857 310.857 310.857-139.429 310.857-310.857zM877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
                    </svg>
                    <h1 className="FLX_txt_med_big_nocolor navbar-interactive1-text171">
                      Legal
                    </h1>
                    <svg
                      viewBox="0 0 1024 1024"
                      className="navbar-interactive1-icon62"
                    >
                      <path d="M470 384l60 60-154 154h392v-428h86v512h-478l154 154-60 60-256-256z"></path>
                    </svg>
                  </div>
                </Link>
                <div className="navbar-interactive1-container35">
                  <div className="navbar-interactive1-if-logged">
                    <div className="navbar-interactive1-user-box1">
                      <div className="navbar-interactive1-container36">
                        <strong className="navbar-interactive1-text172 FLX_h4_nocolor">
                          Utente
                        </strong>
                      </div>
                      <div className="navbar-interactive1-username">
                        <svg
                          viewBox="0 0 1024 1024"
                          className="navbar-interactive1-icon64"
                        >
                          <path d="M870.286 765.143c-14.857-106.857-58.286-201.714-155.429-214.857-50.286 54.857-122.857 89.714-202.857 89.714s-152.571-34.857-202.857-89.714c-97.143 13.143-140.571 108-155.429 214.857 79.429 112 210.286 185.714 358.286 185.714s278.857-73.714 358.286-185.714zM731.429 365.714c0-121.143-98.286-219.429-219.429-219.429s-219.429 98.286-219.429 219.429 98.286 219.429 219.429 219.429 219.429-98.286 219.429-219.429zM1024 512c0 281.714-228.571 512-512 512-282.857 0-512-229.714-512-512 0-282.857 229.143-512 512-512s512 229.143 512 512z"></path>
                        </svg>
                        <span
                          id="username"
                          className="navbar-interactive1-text173 FLX_txt_med_big_nocolor"
                        >
                           
                        </span>
                        <svg
                          viewBox="0 0 1024 1024"
                          className="navbar-interactive1-icon66"
                        >
                          <path d="M512 662q62 0 106-44t44-106-44-106-106-44-106 44-44 106 44 106 106 44zM830 554l90 70q14 10 4 28l-86 148q-8 14-26 8l-106-42q-42 30-72 42l-16 112q-4 18-20 18h-172q-16 0-20-18l-16-112q-38-16-72-42l-106 42q-18 6-26-8l-86-148q-10-18 4-28l90-70q-2-14-2-42t2-42l-90-70q-14-10-4-28l86-148q8-14 26-8l106 42q42-30 72-42l16-112q4-18 20-18h172q16 0 20 18l16 112q38 16 72 42l106-42q18-6 26 8l86 148q10 18-4 28l-90 70q2 14 2 42t-2 42z"></path>
                        </svg>
                        <svg
                          viewBox="0 0 1024 1024"
                          className="navbar-interactive1-icon68"
                        >
                          <path d="M512 662q62 0 106-44t44-106-44-106-106-44-106 44-44 106 44 106 106 44zM830 554l90 70q14 10 4 28l-86 148q-8 14-26 8l-106-42q-42 30-72 42l-16 112q-4 18-20 18h-172q-16 0-20-18l-16-112q-38-16-72-42l-106 42q-18 6-26-8l-86-148q-10-18 4-28l90-70q-2-14-2-42t2-42l-90-70q-14-10-4-28l86-148q8-14 26-8l106 42q42-30 72-42l16-112q4-18 20-18h172q16 0 20 18l16 112q38 16 72 42l106-42q18-6 26 8l86 148q10 18-4 28l-90 70q2 14 2 42t-2 42z"></path>
                        </svg>
                      </div>
                      <div className="navbar-interactive1-container37">
                        <div className="navbar-interactive1-container38 link">
                          <svg
                            viewBox="0 0 1024 1024"
                            className="navbar-interactive1-icon70"
                          >
                            <path d="M262.14 0c-113.728 206.032-132.89 520.304 313.86 509.824v-253.824l384 384-384 384v-248.372c-534.96 13.942-594.572-472.214-313.86-775.628z"></path>
                          </svg>
                          <span className="navbar-interactive1-text174 link FLX_txt_small">
                            Profilo
                          </span>
                        </div>
                        <div className="navbar-interactive1-container39">
                          <svg
                            viewBox="0 0 760.0274285714286 1024"
                            className="navbar-interactive1-icon72"
                          >
                            <path d="M666.857 365.714c7.429 76-24.571 121.714-74.857 147.429 83.429 20 136 69.714 125.714 181.143-13.143 138.857-116 176-263.429 184v145.714h-88v-143.429c-22.286 0-45.714 0-69.714-0.571v144h-88v-145.714c-20.571 0-41.143-0.571-62.286-0.571h-114.286l17.714-104.571c64.571 1.143 63.429 0 63.429 0 24.571 0 31.429-17.714 33.143-29.143v-229.714h9.143c-3.429-0.571-6.857-0.571-9.143-0.571v-164c-3.429-18.286-14.857-38.857-50.857-38.857 0 0 1.143-1.143-63.429 0v-93.714l121.143 0.571c17.714 0 36.571 0 55.429-0.571v-144h88v141.143c23.429-0.571 46.857-1.143 69.714-1.143v-140h88v144c113.143 9.714 202.857 44.571 212.571 148.571zM544 677.143c0-113.143-186.286-96.571-245.714-96.571v193.143c59.429 0 245.714 12.571 245.714-96.571zM503.429 405.143c0-103.429-155.429-88-205.143-88v175.429c49.714 0 205.143 11.429 205.143-87.429z"></path>
                          </svg>
                          <svg
                            viewBox="0 0 1024 1024"
                            className="navbar-interactive1-icon74"
                          >
                            <path d="M512 662q62 0 106-44t44-106-44-106-106-44-106 44-44 106 44 106 106 44zM830 554l90 70q14 10 4 28l-86 148q-8 14-26 8l-106-42q-42 30-72 42l-16 112q-4 18-20 18h-172q-16 0-20-18l-16-112q-38-16-72-42l-106 42q-18 6-26-8l-86-148q-10-18 4-28l90-70q-2-14-2-42t2-42l-90-70q-14-10-4-28l86-148q8-14 26-8l106 42q42-30 72-42l16-112q4-18 20-18h172q16 0 20 18l16 112q38 16 72 42l106-42q18-6 26 8l86 148q10 18-4 28l-90 70q2 14 2 42t-2 42z"></path>
                          </svg>
                          <span className="navbar-interactive1-text175 link FLX_txt_small">
                            Gestione fondi
                          </span>
                        </div>
                        <div className="navbar-interactive1-container40">
                          <svg
                            viewBox="0 0 1024 1024"
                            className="navbar-interactive1-icon76"
                          >
                            <path d="M512 0c282.857 0 512 229.143 512 512s-229.143 512-512 512-512-229.143-512-512 229.143-512 512-512zM512 73.143c-74.286 0-144.571 18.857-206.286 51.429l110.857 110.857c30.286-10.286 62.286-16 95.429-16 33.714 0 65.143 5.714 95.429 16l110.857-110.857c-61.714-32.571-132-51.429-206.286-51.429zM124.571 718.286l110.857-110.857c-10.286-30.286-16-62.286-16-95.429 0-33.714 5.714-65.143 16-95.429l-110.857-110.857c-32.571 61.714-51.429 132-51.429 206.286s18.857 144.571 51.429 206.286zM512 950.857c74.286 0 144.571-18.857 206.286-51.429l-110.857-110.857c-30.286 10.286-61.714 16-95.429 16-33.143 0-65.143-5.714-95.429-16l-110.857 110.857c61.714 32.571 132 51.429 206.286 51.429zM512 731.429c121.143 0 219.429-98.286 219.429-219.429s-98.286-219.429-219.429-219.429-219.429 98.286-219.429 219.429 98.286 219.429 219.429 219.429zM788.571 607.429l110.857 110.857c32.571-61.714 51.429-132 51.429-206.286s-18.857-144.571-51.429-206.286l-110.857 110.857c10.286 30.286 16 62.286 16 95.429s-5.714 65.143-16 95.429z"></path>
                          </svg>
                          <span className="navbar-interactive1-text176 link FLX_txt_small">
                            Ticket Support
                          </span>
                        </div>
                        <div className="navbar-interactive1-container41">
                          <svg
                            viewBox="0 0 1024 1024"
                            className="navbar-interactive1-icon78"
                          >
                            <path d="M768 640v-128h-320v-128h320v-128l192 192zM704 576v256h-320v192l-384-192v-832h704v320h-64v-256h-512l256 128v576h256v-192z"></path>
                          </svg>
                          <span className="navbar-interactive1-text177 link FLX_txt_small">
                            Logout
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="navbar-interactive1-if-unlogged">
                    <div className="navbar-interactive1-user-box2">
                      <div className="navbar-interactive1-container42">
                        <strong className="navbar-interactive1-text178 FLX_h4_nocolor">
                          Account
                        </strong>
                      </div>
                      <div className="navbar-interactive1-container43">
                        <div className="navbar-interactive1-buttons-unlogged">
                          <button
                            type="button"
                            className="navbar-interactive1-button1 FLX_txt_small button1"
                          >
                            <span className="navbar-interactive1-text179">
                              accedi
                            </span>
                          </button>
                          <button
                            type="button"
                            className="navbar-interactive1-button2 button2 FLX_txt_small"
                          >
                            <span className="navbar-interactive1-text180">
                              registrati
                            </span>
                            <i className="navbar-interactive1-text181 blue_glow">
                              BETA
                            </i>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="navbar-interactive1-nav">
                    <div className="navbar-interactive1-container44">
                      <strong className="navbar-interactive1-text182 FLX_h4_nocolor">
                        Menu
                      </strong>
                    </div>
                    <div className="navbar-interactive1-container45">
                      <div className="navbar-interactive1-container46">
                        <svg
                          viewBox="0 0 1024 1024"
                          className="navbar-interactive1-icon80"
                        >
                          <path d="M426 854h-212v-342h-128l426-384 426 384h-128v342h-212v-256h-172v256z"></path>
                        </svg>
                        <Link
                          to="/z2-rss-index"
                          className="navbar-interactive1-navlink26"
                        >
                          <strong className="navbar-interactive1-text183 FLX_txt_med_big link">
                            <span className="navbar-interactive1-text184">
                              Home
                            </span>
                            <br></br>
                            <span>Pagina principale</span>
                            <br></br>
                          </strong>
                        </Link>
                      </div>
                      <span className="navbar-interactive1-text188 link FLX_txt_med_small">
                        Benvenuto!
                      </span>
                      <span className="navbar-interactive1-text189 link FLX_txt_med_small">
                        Pre-Esplorazione
                      </span>
                      <span className="navbar-interactive1-text190 link FLX_txt_med_small">
                        Inizio rapido
                      </span>
                      <span className="navbar-interactive1-text191 link FLX_txt_med_small">
                        Notes
                      </span>
                    </div>
                    <div className="navbar-interactive1-container47">
                      <div className="navbar-interactive1-container48">
                        <svg
                          viewBox="0 0 1024 1024"
                          className="navbar-interactive1-icon82"
                        >
                          <path d="M426 854h-212v-342h-128l426-384 426 384h-128v342h-212v-256h-172v256z"></path>
                        </svg>
                        <Link
                          to="/z2-rss-index"
                          className="navbar-interactive1-navlink27"
                        >
                          <strong className="navbar-interactive1-text192 FLX_txt_med_big link">
                            Utility
                          </strong>
                        </Link>
                      </div>
                      <span className="navbar-interactive1-text193 link FLX_txt_med_small">
                        Strumenti
                      </span>
                      <span className="navbar-interactive1-text194 link FLX_txt_med_small">
                        Tutorials
                      </span>
                      <span className="navbar-interactive1-text195 link FLX_txt_med_small">
                        Sicurezza
                      </span>
                    </div>
                    <div className="navbar-interactive1-container49">
                      <div className="navbar-interactive1-container50">
                        <svg
                          viewBox="0 0 1024 1024"
                          className="navbar-interactive1-icon84"
                        >
                          <path d="M426 854h-212v-342h-128l426-384 426 384h-128v342h-212v-256h-172v256z"></path>
                        </svg>
                        <Link
                          to="/z2-rss-index"
                          className="navbar-interactive1-navlink28"
                        >
                          <strong className="navbar-interactive1-text196 FLX_txt_med_big link">
                            FC-Inside
                          </strong>
                        </Link>
                      </div>
                      <span className="navbar-interactive1-text197 link FLX_txt_med_small">
                        Scopri FareCrypto
                      </span>
                      <span className="navbar-interactive1-text198 link FLX_txt_med_small">
                        F.A.Q.
                      </span>
                      <span className="navbar-interactive1-text199 link FLX_txt_med_small">
                        Ticket Support
                      </span>
                      <span className="navbar-interactive1-text200 link FLX_txt_med_small">
                        Contatti
                      </span>
                      <span className="navbar-interactive1-text201 link FLX_txt_med_small">
                        Legal
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </header>
      <CookiesModal rootClassName="cookies-modalroot-class-name1"></CookiesModal>
    </header>
  )
}

NavbarInteractive1.defaultProps = {
  imageSrc112: '/copia%20di%20logofcb-400h-1500h.png',
  rootClassName: '',
}

NavbarInteractive1.propTypes = {
  imageSrc112: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default NavbarInteractive1
