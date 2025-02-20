import React from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

import './navbar-interactive.css'

const NavbarInteractive = (props) => {
  return (
    <div className={`navbar-interactive-container10 ${props.rootClassName} `}>
      <header
        data-thq="thq-navbar"
        className="navbar-interactive-navbar-interactive1"
      >
        <Link to="/" className="navbar-interactive-navlink10">
          <img
            src={props.imageSrc}
            loading="eager"
            className="navbar-interactive-image"
          />
        </Link>
        <div
          data-thq="thq-navbar-nav"
          className="navbar-interactive-desktop-menu"
        ></div>
        <div
          data-thq="thq-mobile-menu"
          className="navbar-interactive-mobile-menu1"
        >
          <animate-on-reveal
            animation="fadeIn"
            duration="1s"
            delay="0s"
            direction="normal"
            easing="ease-in-out"
            iteration="1"
          >
            <div
              data-thq-animate-on-reveal="true"
              className="navbar-interactive-nav1"
            >
              <div
                data-thq="thq-close-menu"
                className="navbar-interactive-close-menu1"
              >
                <svg
                  viewBox="0 0 1024 1024"
                  className="navbar-interactive-icon100"
                >
                  <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                </svg>
              </div>
              <div className="navbar-interactive-container11">
                <nav className="navbar-interactive-links1">
                  <nav className="navbar-interactive-links2">
                    <div
                      data-thq="thq-dropdown"
                      className="navbar-interactive-thq-dropdown10 dsk-menu-mainLinks list-item"
                    >
                      <Link to="/">
                        <div
                          data-thq="thq-dropdown-toggle"
                          className="navbar-interactive-dropdown-toggle10 mob-menu-mainlink link"
                        >
                          <div className="navbar-interactive-container12">
                            <svg
                              viewBox="0 0 1024 1024"
                              className="navbar-interactive-icon102"
                            >
                              <path d="M1024 590.444l-512-397.426-512 397.428v-162.038l512-397.426 512 397.428zM896 576v384h-256v-256h-256v256h-256v-384l384-288z"></path>
                            </svg>
                            <svg
                              viewBox="0 0 1024 1024"
                              className="navbar-interactive-icon104"
                            >
                              <path d="M1024 590.444l-512-397.426-512 397.428v-162.038l512-397.426 512 397.428zM896 576v384h-256v-256h-256v256h-256v-384l384-288z"></path>
                            </svg>
                          </div>
                          <span className="navbar-interactive-text10 text-medium-M">
                            {props.text141}
                          </span>
                        </div>
                      </Link>
                    </div>
                  </nav>
                  <nav className="navbar-interactive-links3">
                    <div
                      data-thq="thq-dropdown"
                      className="navbar-interactive-thq-dropdown11 dsk-menu-mainLinks list-item"
                    >
                      <Link to="/b1-farming">
                        <div
                          data-thq="thq-dropdown-toggle"
                          className="navbar-interactive-dropdown-toggle11 mob-menu-mainlink link"
                        >
                          <div className="navbar-interactive-container13">
                            <svg
                              viewBox="0 0 1024 1024"
                              className="navbar-interactive-icon106"
                            >
                              <path d="M1011.328 134.496c-110.752-83.928-281.184-134.034-455.91-134.034-216.12 0-392.226 75.456-483.16 207.020-42.708 61.79-66.33 134.958-70.208 217.474-3.454 73.474 8.884 154.726 36.684 242.146 94.874-284.384 359.82-507.102 665.266-507.102 0 0-285.826 75.232-465.524 308.192-0.112 0.138-2.494 3.090-6.614 8.698-36.080 48.278-67.538 103.162-91.078 165.328-39.87 94.83-76.784 224.948-76.784 381.782h128c0 0-19.43-122.222 14.36-262.79 55.89 7.556 105.858 11.306 150.852 11.306 117.678 0 201.37-25.46 263.388-80.124 55.568-48.978 86.198-114.786 118.624-184.456 49.524-106.408 105.654-227.010 268.654-320.152 9.33-5.332 15.362-14.992 16.056-25.716s-4.040-21.080-12.606-27.572z"></path>
                            </svg>
                            <svg
                              viewBox="0 0 1024 1024"
                              className="navbar-interactive-icon108"
                            >
                              <path d="M1011.328 134.496c-110.752-83.928-281.184-134.034-455.91-134.034-216.12 0-392.226 75.456-483.16 207.020-42.708 61.79-66.33 134.958-70.208 217.474-3.454 73.474 8.884 154.726 36.684 242.146 94.874-284.384 359.82-507.102 665.266-507.102 0 0-285.826 75.232-465.524 308.192-0.112 0.138-2.494 3.090-6.614 8.698-36.080 48.278-67.538 103.162-91.078 165.328-39.87 94.83-76.784 224.948-76.784 381.782h128c0 0-19.43-122.222 14.36-262.79 55.89 7.556 105.858 11.306 150.852 11.306 117.678 0 201.37-25.46 263.388-80.124 55.568-48.978 86.198-114.786 118.624-184.456 49.524-106.408 105.654-227.010 268.654-320.152 9.33-5.332 15.362-14.992 16.056-25.716s-4.040-21.080-12.606-27.572z"></path>
                            </svg>
                          </div>
                          <span className="navbar-interactive-text11 text-medium-M">
                            {props.text15}
                          </span>
                        </div>
                      </Link>
                    </div>
                    <div
                      data-thq="thq-dropdown"
                      className="navbar-interactive-thq-dropdown12 dsk-menu-mainLinks list-item"
                    >
                      <Link
                        to="/b2-farming-stg-1"
                        className="navbar-interactive-navlink13"
                      >
                        <div
                          data-thq="thq-dropdown-toggle"
                          className="navbar-interactive-dropdown-toggle12 mob-menu-mainlink link"
                        >
                          <div className="navbar-interactive-container14">
                            <svg
                              viewBox="0 0 1024 1024"
                              className="navbar-interactive-icon110"
                            >
                              <path d="M128 896h896v128h-1024v-1024h128zM288 832c-53.020 0-96-42.98-96-96s42.98-96 96-96c2.828 0 5.622 0.148 8.388 0.386l103.192-171.986c-9.84-15.070-15.58-33.062-15.58-52.402 0-53.020 42.98-96 96-96s96 42.98 96 96c0 19.342-5.74 37.332-15.58 52.402l103.192 171.986c2.766-0.238 5.56-0.386 8.388-0.386 2.136 0 4.248 0.094 6.35 0.23l170.356-298.122c-10.536-15.408-16.706-34.036-16.706-54.11 0-53.020 42.98-96 96-96s96 42.98 96 96c0 53.020-42.98 96-96 96-2.14 0-4.248-0.094-6.35-0.232l-170.356 298.124c10.536 15.406 16.706 34.036 16.706 54.11 0 53.020-42.98 96-96 96s-96-42.98-96-96c0-19.34 5.74-37.332 15.578-52.402l-103.19-171.984c-2.766 0.238-5.56 0.386-8.388 0.386s-5.622-0.146-8.388-0.386l-103.192 171.986c9.84 15.068 15.58 33.060 15.58 52.4 0 53.020-42.98 96-96 96z"></path>
                            </svg>
                            <svg
                              viewBox="0 0 1024 1024"
                              className="navbar-interactive-icon112"
                            >
                              <path d="M128 896h896v128h-1024v-1024h128zM288 832c-53.020 0-96-42.98-96-96s42.98-96 96-96c2.828 0 5.622 0.148 8.388 0.386l103.192-171.986c-9.84-15.070-15.58-33.062-15.58-52.402 0-53.020 42.98-96 96-96s96 42.98 96 96c0 19.342-5.74 37.332-15.58 52.402l103.192 171.986c2.766-0.238 5.56-0.386 8.388-0.386 2.136 0 4.248 0.094 6.35 0.23l170.356-298.122c-10.536-15.408-16.706-34.036-16.706-54.11 0-53.020 42.98-96 96-96s96 42.98 96 96c0 53.020-42.98 96-96 96-2.14 0-4.248-0.094-6.35-0.232l-170.356 298.124c10.536 15.406 16.706 34.036 16.706 54.11 0 53.020-42.98 96-96 96s-96-42.98-96-96c0-19.34 5.74-37.332 15.578-52.402l-103.19-171.984c-2.766 0.238-5.56 0.386-8.388 0.386s-5.622-0.146-8.388-0.386l-103.192 171.986c9.84 15.068 15.58 33.060 15.58 52.4 0 53.020-42.98 96-96 96z"></path>
                            </svg>
                          </div>
                          <span className="navbar-interactive-text12 text-medium-S">
                            {props.text16}
                          </span>
                        </div>
                      </Link>
                    </div>
                    <div className="navbar-interactive-container15"></div>
                    <div
                      data-thq="thq-dropdown"
                      className="navbar-interactive-thq-dropdown13 dsk-menu-mainLinks list-item"
                    >
                      <div
                        data-thq="thq-dropdown-toggle"
                        className="navbar-interactive-dropdown-toggle13 mob-menu-mainlink link"
                      >
                        <div className="navbar-interactive-container16">
                          <svg
                            viewBox="0 0 1024 1024"
                            className="navbar-interactive-icon114"
                          >
                            <path d="M490 256q0 48 24 105t58 91l-418 418q-26-26-26-60v-596q0-34 26-60t60-26h308q-32 60-32 128zM554 256q0-88 63-151t151-63 151 63 63 151-63 151-151 63-151-63-63-151zM536 612q104-78 232-78 66 0 128 22v254q0 34-26 60t-60 26h-298v-234q0-30 24-50z"></path>
                          </svg>
                          <svg
                            viewBox="0 0 1024 1024"
                            className="navbar-interactive-icon116"
                          >
                            <path d="M490 256q0 48 24 105t58 91l-418 418q-26-26-26-60v-596q0-34 26-60t60-26h308q-32 60-32 128zM554 256q0-88 63-151t151-63 151 63 63 151-63 151-151 63-151-63-63-151zM536 612q104-78 232-78 66 0 128 22v254q0 34-26 60t-60 26h-298v-234q0-30 24-50z"></path>
                          </svg>
                        </div>
                        <span className="navbar-interactive-text13 text-medium-S">
                          {props.text17}
                        </span>
                      </div>
                    </div>
                    <div className="navbar-interactive-container17"></div>
                    <div
                      data-thq="thq-dropdown"
                      className="navbar-interactive-thq-dropdown14 dsk-menu-mainLinks list-item"
                    >
                      <div
                        data-thq="thq-dropdown-toggle"
                        className="navbar-interactive-dropdown-toggle14 mob-menu-mainlink link"
                      >
                        <div className="navbar-interactive-container18">
                          <svg
                            viewBox="0 0 1024 1024"
                            className="navbar-interactive-icon118"
                          >
                            <path d="M832 64h-640l-192 192v672c0 17.674 14.326 32 32 32h960c17.672 0 32-14.326 32-32v-672l-192-192zM640 640v192h-256v-192h-192l320-256 320 256h-192zM154.51 192l64-64h586.976l64 64h-714.976z"></path>
                          </svg>
                          <svg
                            viewBox="0 0 1024 1024"
                            className="navbar-interactive-icon120"
                          >
                            <path d="M832 64h-640l-192 192v672c0 17.674 14.326 32 32 32h960c17.672 0 32-14.326 32-32v-672l-192-192zM640 640v192h-256v-192h-192l320-256 320 256h-192zM154.51 192l64-64h586.976l64 64h-714.976z"></path>
                          </svg>
                        </div>
                        <span className="navbar-interactive-text14 text-medium-S">
                          {props.text18}
                        </span>
                      </div>
                    </div>
                  </nav>
                  <nav className="navbar-interactive-links4">
                    <div
                      data-thq="thq-dropdown"
                      className="navbar-interactive-thq-dropdown15 dsk-menu-mainLinks list-item"
                    >
                      <Link to="/c1-fcinside">
                        <div
                          data-thq="thq-dropdown-toggle"
                          className="navbar-interactive-dropdown-toggle15 mob-menu-mainlink link"
                        >
                          <div className="navbar-interactive-container19">
                            <svg
                              viewBox="0 0 1024 1024"
                              className="navbar-interactive-icon122"
                            >
                              <path d="M1024 397.050l-353.78-51.408-158.22-320.582-158.216 320.582-353.784 51.408 256 249.538-60.432 352.352 316.432-166.358 316.432 166.358-60.434-352.352 256.002-249.538z"></path>
                            </svg>
                            <svg
                              viewBox="0 0 1024 1024"
                              className="navbar-interactive-icon124"
                            >
                              <path d="M1024 397.050l-353.78-51.408-158.22-320.582-158.216 320.582-353.784 51.408 256 249.538-60.432 352.352 316.432-166.358 316.432 166.358-60.434-352.352 256.002-249.538z"></path>
                            </svg>
                          </div>
                          <span className="navbar-interactive-text15 text-medium-M">
                            <span className="navbar-interactive-text16">F</span>
                            <span>C</span>
                            <span>-INSIDE</span>
                          </span>
                        </div>
                      </Link>
                    </div>
                    <div
                      data-thq="thq-dropdown"
                      className="navbar-interactive-thq-dropdown16 dsk-menu-mainLinks list-item"
                    >
                      <Link
                        to="/c2-fcinside-discover-us"
                        className="navbar-interactive-navlink15"
                      >
                        <div
                          data-thq="thq-dropdown-toggle"
                          className="navbar-interactive-dropdown-toggle16 mob-menu-mainlink link"
                        >
                          <div className="navbar-interactive-container20">
                            <svg
                              viewBox="0 0 1024 1024"
                              className="navbar-interactive-icon126"
                            >
                              <path d="M533.333 234.667c-11.776 0-21.333 9.557-21.333 21.333s9.557 21.333 21.333 21.333c46.208 0 83.797 37.589 83.797 83.797 0 11.776 9.557 21.333 21.333 21.333s21.333-9.557 21.333-21.333c0-69.717-56.747-126.464-126.464-126.464z"></path>
                              <path d="M533.333 42.667c-176.469 0-320 143.531-320 320 0 63.403 18.773 124.672 54.357 177.707 0.981 2.005 2.091 3.925 3.413 5.76 77.867 111.189 91.563 146.347 91.563 179.2v128c0 23.552 19.115 42.667 42.667 42.667h85.333c0 11.093 4.693 22.187 12.373 30.293 8.107 7.68 19.2 12.373 30.293 12.373 11.093 0 22.187-4.693 30.293-12.373 7.68-8.107 12.373-19.2 12.373-30.293h85.333c23.552 0 42.667-19.115 42.667-42.667v-128c0-33.365 13.611-68.693 90.965-179.157 38.187-54.4 58.368-117.845 58.368-183.509 0-176.469-143.531-320-320-320zM618.667 810.667h-170.667v-42.667h170.667v42.667zM725.12 497.195c-62.549 89.301-91.435 140.331-101.76 185.472h-47.36v-85.333c0-23.552-19.115-42.667-42.667-42.667s-42.667 19.115-42.667 42.667v85.333h-47.488c-10.24-43.947-38.315-93.867-98.389-180.053-0.939-1.877-2.048-3.712-3.285-5.504-28.032-39.851-42.837-86.357-42.837-134.443 0-129.408 105.259-234.667 234.667-234.667s234.667 105.259 234.667 234.667c0 48.043-14.805 94.549-42.88 134.528z"></path>
                            </svg>
                            <svg
                              viewBox="0 0 1024 1024"
                              className="navbar-interactive-icon129"
                            >
                              <path d="M533.333 234.667c-11.776 0-21.333 9.557-21.333 21.333s9.557 21.333 21.333 21.333c46.208 0 83.797 37.589 83.797 83.797 0 11.776 9.557 21.333 21.333 21.333s21.333-9.557 21.333-21.333c0-69.717-56.747-126.464-126.464-126.464z"></path>
                              <path d="M533.333 42.667c-176.469 0-320 143.531-320 320 0 63.403 18.773 124.672 54.357 177.707 0.981 2.005 2.091 3.925 3.413 5.76 77.867 111.189 91.563 146.347 91.563 179.2v128c0 23.552 19.115 42.667 42.667 42.667h85.333c0 11.093 4.693 22.187 12.373 30.293 8.107 7.68 19.2 12.373 30.293 12.373 11.093 0 22.187-4.693 30.293-12.373 7.68-8.107 12.373-19.2 12.373-30.293h85.333c23.552 0 42.667-19.115 42.667-42.667v-128c0-33.365 13.611-68.693 90.965-179.157 38.187-54.4 58.368-117.845 58.368-183.509 0-176.469-143.531-320-320-320zM618.667 810.667h-170.667v-42.667h170.667v42.667zM725.12 497.195c-62.549 89.301-91.435 140.331-101.76 185.472h-47.36v-85.333c0-23.552-19.115-42.667-42.667-42.667s-42.667 19.115-42.667 42.667v85.333h-47.488c-10.24-43.947-38.315-93.867-98.389-180.053-0.939-1.877-2.048-3.712-3.285-5.504-28.032-39.851-42.837-86.357-42.837-134.443 0-129.408 105.259-234.667 234.667-234.667s234.667 105.259 234.667 234.667c0 48.043-14.805 94.549-42.88 134.528z"></path>
                            </svg>
                          </div>
                          <span className="navbar-interactive-text19 text-medium-S">
                            <span>S</span>
                            <span className="navbar-interactive-text21">
                              copri
                            </span>
                            <span>
                              <span
                                dangerouslySetInnerHTML={{
                                  __html: ' ',
                                }}
                              />
                            </span>
                            <span className="navbar-interactive-text23">F</span>
                            <span className="navbar-interactive-text24">
                              are
                            </span>
                            <span className="navbar-interactive-text25">C</span>
                            <span className="navbar-interactive-text26">
                              rypto
                            </span>
                          </span>
                        </div>
                      </Link>
                    </div>
                    <div className="navbar-interactive-container21"></div>
                    <div
                      data-thq="thq-dropdown"
                      className="navbar-interactive-thq-dropdown17 dsk-menu-mainLinks list-item"
                    >
                      <Link
                        to="/c3-fc-crowdfunding"
                        className="navbar-interactive-navlink16"
                      >
                        <div
                          data-thq="thq-dropdown-toggle"
                          className="navbar-interactive-dropdown-toggle17 mob-menu-mainlink link"
                        >
                          <div className="navbar-interactive-container22">
                            <svg
                              viewBox="0 0 1024 1024"
                              className="navbar-interactive-icon132"
                            >
                              <path d="M960 256h-256v-64c0-35.2-28.8-64-64-64h-256c-35.204 0-64 28.8-64 64v64h-256c-35.2 0-64 28.8-64 64v576c0 35.202 28.796 64 64 64h896c35.2 0 64-28.798 64-64v-576c0-35.2-28.8-64-64-64zM384 192.116c0.034-0.040 0.074-0.082 0.114-0.116h255.772c0.042 0.034 0.082 0.076 0.118 0.116v63.884h-256.004v-63.884zM960 512h-128v96c0 17.602-14.4 32-32 32h-64c-17.604 0-32-14.398-32-32v-96h-384v96c0 17.602-14.4 32-32 32h-64c-17.602 0-32-14.398-32-32v-96h-128v-64h896v64z"></path>
                            </svg>
                            <svg
                              viewBox="0 0 1024 1024"
                              className="navbar-interactive-icon134"
                            >
                              <path d="M960 256h-256v-64c0-35.2-28.8-64-64-64h-256c-35.204 0-64 28.8-64 64v64h-256c-35.2 0-64 28.8-64 64v576c0 35.202 28.796 64 64 64h896c35.2 0 64-28.798 64-64v-576c0-35.2-28.8-64-64-64zM384 192.116c0.034-0.040 0.074-0.082 0.114-0.116h255.772c0.042 0.034 0.082 0.076 0.118 0.116v63.884h-256.004v-63.884zM960 512h-128v96c0 17.602-14.4 32-32 32h-64c-17.604 0-32-14.398-32-32v-96h-384v96c0 17.602-14.4 32-32 32h-64c-17.602 0-32-14.398-32-32v-96h-128v-64h896v64z"></path>
                            </svg>
                          </div>
                          <span className="navbar-interactive-text27 text-medium-S">
                            {props.text19}
                          </span>
                        </div>
                      </Link>
                    </div>
                    <div className="navbar-interactive-container23"></div>
                    <div
                      data-thq="thq-dropdown"
                      className="navbar-interactive-thq-dropdown18 dsk-menu-mainLinks list-item"
                    >
                      <Link
                        to="/c4-fcinside-services"
                        className="navbar-interactive-navlink17"
                      >
                        <div
                          data-thq="thq-dropdown-toggle"
                          className="navbar-interactive-dropdown-toggle18 mob-menu-mainlink link"
                        >
                          <div className="navbar-interactive-container24">
                            <svg
                              viewBox="0 0 1024 1024"
                              className="navbar-interactive-icon136"
                            >
                              <path d="M704 64l-320 320h-192l-192 256c0 0 203.416-56.652 322.066-30.084l-322.066 414.084 421.902-328.144c58.838 134.654-37.902 328.144-37.902 328.144l256-192v-192l320-320 64-320-320 64z"></path>
                            </svg>
                            <svg
                              viewBox="0 0 1024 1024"
                              className="navbar-interactive-icon138"
                            >
                              <path d="M704 64l-320 320h-192l-192 256c0 0 203.416-56.652 322.066-30.084l-322.066 414.084 421.902-328.144c58.838 134.654-37.902 328.144-37.902 328.144l256-192v-192l320-320 64-320-320 64z"></path>
                            </svg>
                          </div>
                          <span className="navbar-interactive-text28 text-medium-S">
                            {props.text20}
                          </span>
                        </div>
                      </Link>
                    </div>
                  </nav>
                  <nav className="navbar-interactive-links5">
                    <div
                      data-thq="thq-dropdown"
                      className="navbar-interactive-thq-dropdown19 dsk-menu-mainLinks list-item"
                    >
                      <Link to="/d1-other">
                        <div
                          data-thq="thq-dropdown-toggle"
                          className="navbar-interactive-dropdown-toggle19 mob-menu-mainlink link"
                        >
                          <div className="navbar-interactive-container25">
                            <svg
                              viewBox="0 0 1024 1024"
                              className="navbar-interactive-icon140"
                            >
                              <path d="M992.262 871.396l-242.552-206.294c-25.074-22.566-51.89-32.926-73.552-31.926 57.256-67.068 91.842-154.078 91.842-249.176 0-212.078-171.922-384-384-384-212.076 0-384 171.922-384 384s171.922 384 384 384c95.098 0 182.108-34.586 249.176-91.844-1 21.662 9.36 48.478 31.926 73.552l206.294 242.552c35.322 39.246 93.022 42.554 128.22 7.356s31.892-92.898-7.354-128.22zM384 640c-141.384 0-256-114.616-256-256s114.616-256 256-256 256 114.616 256 256-114.614 256-256 256zM448 192h-128v128h-128v128h128v128h128v-128h128v-128h-128z"></path>
                            </svg>
                            <svg
                              viewBox="0 0 1024 1024"
                              className="navbar-interactive-icon142"
                            >
                              <path d="M992.262 871.396l-242.552-206.294c-25.074-22.566-51.89-32.926-73.552-31.926 57.256-67.068 91.842-154.078 91.842-249.176 0-212.078-171.922-384-384-384-212.076 0-384 171.922-384 384s171.922 384 384 384c95.098 0 182.108-34.586 249.176-91.844-1 21.662 9.36 48.478 31.926 73.552l206.294 242.552c35.322 39.246 93.022 42.554 128.22 7.356s31.892-92.898-7.354-128.22zM384 640c-141.384 0-256-114.616-256-256s114.616-256 256-256 256 114.616 256 256-114.614 256-256 256zM448 192h-128v128h-128v128h128v128h128v-128h128v-128h-128z"></path>
                            </svg>
                          </div>
                          <span className="navbar-interactive-text29 text-medium-M">
                            {props.text21}
                          </span>
                        </div>
                      </Link>
                    </div>
                    <div
                      data-thq="thq-dropdown"
                      className="navbar-interactive-thq-dropdown20 dsk-menu-mainLinks list-item"
                    >
                      <Link
                        to="/d2-other-tutorials"
                        className="navbar-interactive-navlink19"
                      >
                        <div
                          data-thq="thq-dropdown-toggle"
                          className="navbar-interactive-dropdown-toggle20 mob-menu-mainlink link"
                        >
                          <div className="navbar-interactive-container26">
                            <svg
                              viewBox="0 0 1024 1024"
                              className="navbar-interactive-icon144"
                            >
                              <path d="M512 0c-282.77 0-512 229.228-512 512 0 282.77 229.228 512 512 512 282.77 0 512-229.23 512-512 0-282.772-229.23-512-512-512zM704 256c35.346 0 64 42.98 64 96s-28.654 96-64 96-64-42.98-64-96 28.654-96 64-96zM352 312.062c59.646 0 102 22.332 102 57.282 0 7.398 3.812 42.994-0.17 49.594-14.828-24.576-54.81-42.188-101.83-42.188s-87.002 17.612-101.83 42.188c-3.982-6.6-0.17-42.196-0.17-49.594 0-34.95 42.354-57.282 102-57.282zM500.344 832c-119.242 0-223.858-64.28-282.892-160.952 70.41 55.060 194.534 65.81 325.288 39.978 140.248-27.706 249.11-91.542 288.454-176.594-21.654 167.96-161.518 297.568-330.85 297.568z"></path>
                            </svg>
                            <svg
                              viewBox="0 0 1024 1024"
                              className="navbar-interactive-icon146"
                            >
                              <path d="M512 0c-282.77 0-512 229.228-512 512 0 282.77 229.228 512 512 512 282.77 0 512-229.23 512-512 0-282.772-229.23-512-512-512zM704 256c35.346 0 64 42.98 64 96s-28.654 96-64 96-64-42.98-64-96 28.654-96 64-96zM352 312.062c59.646 0 102 22.332 102 57.282 0 7.398 3.812 42.994-0.17 49.594-14.828-24.576-54.81-42.188-101.83-42.188s-87.002 17.612-101.83 42.188c-3.982-6.6-0.17-42.196-0.17-49.594 0-34.95 42.354-57.282 102-57.282zM500.344 832c-119.242 0-223.858-64.28-282.892-160.952 70.41 55.060 194.534 65.81 325.288 39.978 140.248-27.706 249.11-91.542 288.454-176.594-21.654 167.96-161.518 297.568-330.85 297.568z"></path>
                            </svg>
                          </div>
                          <span className="navbar-interactive-text30 text-medium-S">
                            {props.text22}
                          </span>
                        </div>
                      </Link>
                    </div>
                    <div className="navbar-interactive-container27"></div>
                    <div
                      data-thq="thq-dropdown"
                      className="navbar-interactive-thq-dropdown21 dsk-menu-mainLinks list-item"
                    >
                      <Link
                        to="/d3-other-contacts"
                        className="navbar-interactive-navlink20"
                      >
                        <div
                          data-thq="thq-dropdown-toggle"
                          className="navbar-interactive-dropdown-toggle21 mob-menu-mainlink link"
                        >
                          <div className="navbar-interactive-container28">
                            <svg
                              viewBox="0 0 1152 1024"
                              className="navbar-interactive-icon148"
                            >
                              <path d="M1088 901.166c0 45.5 26.028 84.908 64 104.184v15.938c-10.626 1.454-21.472 2.224-32.5 2.224-68.008 0-129.348-28.528-172.722-74.264-26.222 6.982-54.002 10.752-82.778 10.752-159.058 0-288-114.616-288-256s128.942-256 288-256c159.058 0 288 114.616 288 256 0 55.348-19.764 106.592-53.356 148.466-6.824 14.824-10.644 31.312-10.644 48.7zM512 0c278.458 0 504.992 180.614 511.836 405.52-49.182-21.92-103.586-33.52-159.836-33.52-95.56 0-185.816 33.446-254.138 94.178-70.846 62.972-109.862 147.434-109.862 237.822 0 44.672 9.544 87.888 27.736 127.788-5.228 0.126-10.468 0.212-15.736 0.212-27.156 0-53.81-1.734-79.824-5.044-109.978 109.978-241.25 129.7-368.176 132.596v-26.916c68.536-33.578 128-94.74 128-164.636 0-9.754-0.758-19.33-2.164-28.696-115.796-76.264-189.836-192.754-189.836-323.304 0-229.75 229.23-416 512-416z"></path>
                            </svg>
                            <svg
                              viewBox="0 0 1152 1024"
                              className="navbar-interactive-icon150"
                            >
                              <path d="M1088 901.166c0 45.5 26.028 84.908 64 104.184v15.938c-10.626 1.454-21.472 2.224-32.5 2.224-68.008 0-129.348-28.528-172.722-74.264-26.222 6.982-54.002 10.752-82.778 10.752-159.058 0-288-114.616-288-256s128.942-256 288-256c159.058 0 288 114.616 288 256 0 55.348-19.764 106.592-53.356 148.466-6.824 14.824-10.644 31.312-10.644 48.7zM512 0c278.458 0 504.992 180.614 511.836 405.52-49.182-21.92-103.586-33.52-159.836-33.52-95.56 0-185.816 33.446-254.138 94.178-70.846 62.972-109.862 147.434-109.862 237.822 0 44.672 9.544 87.888 27.736 127.788-5.228 0.126-10.468 0.212-15.736 0.212-27.156 0-53.81-1.734-79.824-5.044-109.978 109.978-241.25 129.7-368.176 132.596v-26.916c68.536-33.578 128-94.74 128-164.636 0-9.754-0.758-19.33-2.164-28.696-115.796-76.264-189.836-192.754-189.836-323.304 0-229.75 229.23-416 512-416z"></path>
                            </svg>
                          </div>
                          <span className="navbar-interactive-text31 text-medium-S">
                            {props.text23}
                          </span>
                        </div>
                      </Link>
                    </div>
                    <div className="navbar-interactive-container29"></div>
                    <div
                      data-thq="thq-dropdown"
                      className="navbar-interactive-thq-dropdown22 dsk-menu-mainLinks list-item"
                    >
                      <Link
                        to="/d4-other-legal"
                        className="navbar-interactive-navlink21"
                      >
                        <div
                          data-thq="thq-dropdown-toggle"
                          className="navbar-interactive-dropdown-toggle22 mob-menu-mainlink link"
                        >
                          <div className="navbar-interactive-container30">
                            <svg
                              viewBox="0 0 1024 1024"
                              className="navbar-interactive-icon152"
                            >
                              <path d="M320 192c0-106.039 85.961-192 192-192s192 85.961 192 192c0 106.039-85.961 192-192 192s-192-85.961-192-192zM768.078 448h-35.424l-199.104 404.244 74.45-372.244-96-96-96 96 74.45 372.244-199.102-404.244h-35.424c-127.924 0-127.924 85.986-127.924 192v320h768v-320c0-106.014 0-192-127.922-192z"></path>
                            </svg>
                            <svg
                              viewBox="0 0 1024 1024"
                              className="navbar-interactive-icon154"
                            >
                              <path d="M320 192c0-106.039 85.961-192 192-192s192 85.961 192 192c0 106.039-85.961 192-192 192s-192-85.961-192-192zM768.078 448h-35.424l-199.104 404.244 74.45-372.244-96-96-96 96 74.45 372.244-199.102-404.244h-35.424c-127.924 0-127.924 85.986-127.924 192v320h768v-320c0-106.014 0-192-127.922-192z"></path>
                            </svg>
                          </div>
                          <span className="navbar-interactive-text32 text-medium-S">
                            {props.text24}
                          </span>
                        </div>
                      </Link>
                    </div>
                  </nav>
                </nav>
                <div className="navbar-interactive-btn-group">
                  <div className="navbar-interactive-container31">
                    <Link
                      to="/c4-fcinside-services"
                      className="navbar-interactive-navlink22 text-medium-S button button1"
                    >
                      <span className="navbar-interactive-text33">
                        {props.text26}
                      </span>
                      <span className="navbar-interactive-text34">
                        {props.text27}
                      </span>
                    </Link>
                    <span className="navbar-interactive-text35 text-small-SS">
                      {props.text25}
                    </span>
                  </div>
                  <Link
                    to="/d2-other-tutorials"
                    className="navbar-interactive-navlink23 text-medium-S button2 button"
                  >
                    <span className="navbar-interactive-text36">
                      {props.text5}
                    </span>
                    <span className="navbar-interactive-text37">
                      {props.text6}
                    </span>
                  </Link>
                </div>
              </div>
              <div className="navbar-interactive-buttons"></div>
            </div>
          </animate-on-reveal>
          <animate-on-reveal
            animation="fadeIn"
            duration="1s"
            delay="0s"
            direction="normal"
            easing="ease"
            iteration="1"
          >
            <nav
              data-thq-animate-on-reveal="true"
              className="navbar-interactive-links6"
            ></nav>
          </animate-on-reveal>
          <div className="navbar-interactive-icon-group">
            <svg viewBox="0 0 731.4285714285713 1024" className="btn_icon_2">
              <path d="M731.429 799.429c0 83.429-54.857 151.429-121.714 151.429h-488c-66.857 0-121.714-68-121.714-151.429 0-150.286 37.143-324 186.857-324 46.286 45.143 109.143 73.143 178.857 73.143s132.571-28 178.857-73.143c149.714 0 186.857 173.714 186.857 324zM585.143 292.571c0 121.143-98.286 219.429-219.429 219.429s-219.429-98.286-219.429-219.429 98.286-219.429 219.429-219.429 219.429 98.286 219.429 219.429z"></path>
            </svg>
          </div>
          <div className="navbar-interactive-container32"></div>
        </div>
        <div
          data-thq="thq-burger-menu"
          className="navbar-interactive-burger-menu1"
        >
          <svg viewBox="0 0 1024 1024" className="navbar-interactive-icon158">
            <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
          </svg>
        </div>
        <div className="navbar-interactive-container33"></div>
        <nav className="navbar-interactive-links7">
          <div
            data-thq="thq-dropdown"
            className="navbar-interactive-thq-dropdown23 dsk-menu-mainLinks list-item"
          >
            <Link to="/">
              <div
                data-thq="thq-dropdown-toggle"
                className="navbar-interactive-dropdown-toggle23 link dsk-menu-mainlink"
              >
                <div className="navbar-interactive-container34">
                  <svg
                    viewBox="0 0 1024 1024"
                    className="navbar-interactive-icon160"
                  >
                    <path d="M1024 590.444l-512-397.426-512 397.428v-162.038l512-397.426 512 397.428zM896 576v384h-256v-256h-256v256h-256v-384l384-288z"></path>
                  </svg>
                  <svg
                    viewBox="0 0 1024 1024"
                    className="navbar-interactive-icon162"
                  >
                    <path d="M1024 590.444l-512-397.426-512 397.428v-162.038l512-397.426 512 397.428zM896 576v384h-256v-256h-256v256h-256v-384l384-288z"></path>
                  </svg>
                </div>
                <span className="navbar-interactive-text38 FLX_txt_med_small-2_nocolor">
                  {props.text}
                </span>
              </div>
            </Link>
          </div>
          <div
            data-thq="thq-dropdown"
            className="navbar-interactive-thq-dropdown24 dsk-menu-mainLinks list-item"
          >
            <Link to="/b1-farming">
              <div
                data-thq="thq-dropdown-toggle"
                className="navbar-interactive-dropdown-toggle24 link dsk-menu-mainlink"
              >
                <div className="navbar-interactive-container35">
                  <svg
                    viewBox="0 0 1024 1024"
                    className="navbar-interactive-icon164"
                  >
                    <path d="M1011.328 134.496c-110.752-83.928-281.184-134.034-455.91-134.034-216.12 0-392.226 75.456-483.16 207.020-42.708 61.79-66.33 134.958-70.208 217.474-3.454 73.474 8.884 154.726 36.684 242.146 94.874-284.384 359.82-507.102 665.266-507.102 0 0-285.826 75.232-465.524 308.192-0.112 0.138-2.494 3.090-6.614 8.698-36.080 48.278-67.538 103.162-91.078 165.328-39.87 94.83-76.784 224.948-76.784 381.782h128c0 0-19.43-122.222 14.36-262.79 55.89 7.556 105.858 11.306 150.852 11.306 117.678 0 201.37-25.46 263.388-80.124 55.568-48.978 86.198-114.786 118.624-184.456 49.524-106.408 105.654-227.010 268.654-320.152 9.33-5.332 15.362-14.992 16.056-25.716s-4.040-21.080-12.606-27.572z"></path>
                  </svg>
                  <svg
                    viewBox="0 0 1024 1024"
                    className="navbar-interactive-icon166"
                  >
                    <path d="M1011.328 134.496c-110.752-83.928-281.184-134.034-455.91-134.034-216.12 0-392.226 75.456-483.16 207.020-42.708 61.79-66.33 134.958-70.208 217.474-3.454 73.474 8.884 154.726 36.684 242.146 94.874-284.384 359.82-507.102 665.266-507.102 0 0-285.826 75.232-465.524 308.192-0.112 0.138-2.494 3.090-6.614 8.698-36.080 48.278-67.538 103.162-91.078 165.328-39.87 94.83-76.784 224.948-76.784 381.782h128c0 0-19.43-122.222 14.36-262.79 55.89 7.556 105.858 11.306 150.852 11.306 117.678 0 201.37-25.46 263.388-80.124 55.568-48.978 86.198-114.786 118.624-184.456 49.524-106.408 105.654-227.010 268.654-320.152 9.33-5.332 15.362-14.992 16.056-25.716s-4.040-21.080-12.606-27.572z"></path>
                  </svg>
                </div>
                <span className="navbar-interactive-text39 FLX_txt_med_small-2_nocolor">
                  {props.text1}
                </span>
                <div
                  data-thq="thq-dropdown-arrow"
                  className="navbar-interactive-dropdown-arrow1"
                >
                  <svg
                    viewBox="0 0 1024 1024"
                    className="navbar-interactive-icon168"
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
                    className="navbar-interactive-dropdown-toggle25 link"
                  >
                    <div className="navbar-interactive-container36">
                      <svg
                        viewBox="0 0 1024 1024"
                        className="navbar-interactive-icon170"
                      >
                        <path d="M128 896h896v128h-1024v-1024h128zM288 832c-53.020 0-96-42.98-96-96s42.98-96 96-96c2.828 0 5.622 0.148 8.388 0.386l103.192-171.986c-9.84-15.070-15.58-33.062-15.58-52.402 0-53.020 42.98-96 96-96s96 42.98 96 96c0 19.342-5.74 37.332-15.58 52.402l103.192 171.986c2.766-0.238 5.56-0.386 8.388-0.386 2.136 0 4.248 0.094 6.35 0.23l170.356-298.122c-10.536-15.408-16.706-34.036-16.706-54.11 0-53.020 42.98-96 96-96s96 42.98 96 96c0 53.020-42.98 96-96 96-2.14 0-4.248-0.094-6.35-0.232l-170.356 298.124c10.536 15.406 16.706 34.036 16.706 54.11 0 53.020-42.98 96-96 96s-96-42.98-96-96c0-19.34 5.74-37.332 15.578-52.402l-103.19-171.984c-2.766 0.238-5.56 0.386-8.388 0.386s-5.622-0.146-8.388-0.386l-103.192 171.986c9.84 15.068 15.58 33.060 15.58 52.4 0 53.020-42.98 96-96 96z"></path>
                      </svg>
                      <svg
                        viewBox="0 0 1024 1024"
                        className="navbar-interactive-icon172"
                      >
                        <path d="M128 896h896v128h-1024v-1024h128zM288 832c-53.020 0-96-42.98-96-96s42.98-96 96-96c2.828 0 5.622 0.148 8.388 0.386l103.192-171.986c-9.84-15.070-15.58-33.062-15.58-52.402 0-53.020 42.98-96 96-96s96 42.98 96 96c0 19.342-5.74 37.332-15.58 52.402l103.192 171.986c2.766-0.238 5.56-0.386 8.388-0.386 2.136 0 4.248 0.094 6.35 0.23l170.356-298.122c-10.536-15.408-16.706-34.036-16.706-54.11 0-53.020 42.98-96 96-96s96 42.98 96 96c0 53.020-42.98 96-96 96-2.14 0-4.248-0.094-6.35-0.232l-170.356 298.124c10.536 15.406 16.706 34.036 16.706 54.11 0 53.020-42.98 96-96 96s-96-42.98-96-96c0-19.34 5.74-37.332 15.578-52.402l-103.19-171.984c-2.766 0.238-5.56 0.386-8.388 0.386s-5.622-0.146-8.388-0.386l-103.192 171.986c9.84 15.068 15.58 33.060 15.58 52.4 0 53.020-42.98 96-96 96z"></path>
                      </svg>
                    </div>
                    <span className="navbar-interactive-text40 FLX_txt_med_small-2_nocolor">
                      Strategie
                    </span>
                  </div>
                </Link>
              </li>
              <li
                data-thq="thq-dropdown"
                className="dsk-menu-sub link list-item"
              >
                <Link to="/b3-farming-rss-1">
                  <div
                    data-thq="thq-dropdown-toggle"
                    className="navbar-interactive-dropdown-toggle26 link"
                  >
                    <div className="navbar-interactive-container37">
                      <svg
                        viewBox="0 0 1024 1024"
                        className="navbar-interactive-icon174"
                      >
                        <path d="M490 256q0 48 24 105t58 91l-418 418q-26-26-26-60v-596q0-34 26-60t60-26h308q-32 60-32 128zM554 256q0-88 63-151t151-63 151 63 63 151-63 151-151 63-151-63-63-151zM536 612q104-78 232-78 66 0 128 22v254q0 34-26 60t-60 26h-298v-234q0-30 24-50z"></path>
                      </svg>
                      <svg
                        viewBox="0 0 1024 1024"
                        className="navbar-interactive-icon176"
                      >
                        <path d="M490 256q0 48 24 105t58 91l-418 418q-26-26-26-60v-596q0-34 26-60t60-26h308q-32 60-32 128zM554 256q0-88 63-151t151-63 151 63 63 151-63 151-151 63-151-63-63-151zM536 612q104-78 232-78 66 0 128 22v254q0 34-26 60t-60 26h-298v-234q0-30 24-50z"></path>
                      </svg>
                    </div>
                    <span className="navbar-interactive-text41 FLX_txt_med_small-2_nocolor">
                      Risorse
                    </span>
                  </div>
                </Link>
              </li>
              <li
                data-thq="thq-dropdown"
                className="dsk-menu-sub link list-item"
              >
                <Link to="/b4-farming-uty-1">
                  <div
                    data-thq="thq-dropdown-toggle"
                    className="navbar-interactive-dropdown-toggle27 link"
                  >
                    <div className="navbar-interactive-container38">
                      <svg
                        viewBox="0 0 1024 1024"
                        className="navbar-interactive-icon178"
                      >
                        <path d="M832 64h-640l-192 192v672c0 17.674 14.326 32 32 32h960c17.672 0 32-14.326 32-32v-672l-192-192zM640 640v192h-256v-192h-192l320-256 320 256h-192zM154.51 192l64-64h586.976l64 64h-714.976z"></path>
                      </svg>
                      <svg
                        viewBox="0 0 1024 1024"
                        className="navbar-interactive-icon180"
                      >
                        <path d="M832 64h-640l-192 192v672c0 17.674 14.326 32 32 32h960c17.672 0 32-14.326 32-32v-672l-192-192zM640 640v192h-256v-192h-192l320-256 320 256h-192zM154.51 192l64-64h586.976l64 64h-714.976z"></path>
                      </svg>
                    </div>
                    <span className="navbar-interactive-text42 FLX_txt_med_small-2_nocolor">
                      Utility
                    </span>
                  </div>
                </Link>
              </li>
            </ul>
          </div>
          <div
            data-thq="thq-dropdown"
            className="navbar-interactive-thq-dropdown25 dsk-menu-mainLinks list-item"
          >
            <Link to="/c1-fcinside">
              <div
                data-thq="thq-dropdown-toggle"
                className="navbar-interactive-dropdown-toggle28 link dsk-menu-mainlink"
              >
                <div className="navbar-interactive-container39">
                  <svg
                    viewBox="0 0 1024 1024"
                    className="navbar-interactive-icon182"
                  >
                    <path d="M1024 397.050l-353.78-51.408-158.22-320.582-158.216 320.582-353.784 51.408 256 249.538-60.432 352.352 316.432-166.358 316.432 166.358-60.434-352.352 256.002-249.538z"></path>
                  </svg>
                  <svg
                    viewBox="0 0 1024 1024"
                    className="navbar-interactive-icon184"
                  >
                    <path d="M1024 397.050l-353.78-51.408-158.22-320.582-158.216 320.582-353.784 51.408 256 249.538-60.432 352.352 316.432-166.358 316.432 166.358-60.434-352.352 256.002-249.538z"></path>
                  </svg>
                </div>
                <span className="navbar-interactive-text43 FLX_txt_med_small-2_nocolor">
                  <span className="navbar-interactive-text44">F</span>
                  <span>C</span>
                  <span>-INSIDE</span>
                </span>
                <div
                  data-thq="thq-dropdown-arrow"
                  className="navbar-interactive-dropdown-arrow2"
                >
                  <svg
                    viewBox="0 0 1024 1024"
                    className="navbar-interactive-icon186"
                  >
                    <path d="M426 726v-428l214 214z"></path>
                  </svg>
                </div>
              </div>
            </Link>
            <ul data-thq="thq-dropdown-list" className="dsk-menu-ul">
              <li
                data-thq="thq-dropdown"
                className="navbar-interactive-dropdown4 link list-item"
              >
                <Link to="/c2-fcinside-discover-us">
                  <div
                    data-thq="thq-dropdown-toggle"
                    className="navbar-interactive-dropdown-toggle29 link"
                  >
                    <div className="navbar-interactive-container40">
                      <svg
                        viewBox="0 0 1024 1024"
                        className="navbar-interactive-icon188"
                      >
                        <path d="M384 512h-320v-128h320v-128l192 192-192 192zM1024 0v832l-384 192v-192h-384v-256h64v192h320v-576l256-128h-576v256h-64v-320z"></path>
                      </svg>
                      <svg
                        viewBox="0 0 1024 1024"
                        className="navbar-interactive-icon190"
                      >
                        <path d="M384 512h-320v-128h320v-128l192 192-192 192zM1024 0v832l-384 192v-192h-384v-256h64v192h320v-576l256-128h-576v256h-64v-320z"></path>
                      </svg>
                    </div>
                    <span className="navbar-interactive-text47 FLX_txt_med_small-2_nocolor">
                      Scopri FareCrypto
                    </span>
                  </div>
                </Link>
              </li>
              <li
                data-thq="thq-dropdown"
                className="navbar-interactive-dropdown5 link list-item"
              >
                <Link to="/c3-fc-crowdfunding">
                  <div
                    data-thq="thq-dropdown-toggle"
                    className="navbar-interactive-dropdown-toggle30 link"
                  >
                    <div className="navbar-interactive-container41">
                      <svg
                        viewBox="0 0 1024 1024"
                        className="navbar-interactive-icon192"
                      >
                        <path d="M960 256h-256v-64c0-35.2-28.8-64-64-64h-256c-35.204 0-64 28.8-64 64v64h-256c-35.2 0-64 28.8-64 64v576c0 35.202 28.796 64 64 64h896c35.2 0 64-28.798 64-64v-576c0-35.2-28.8-64-64-64zM384 192.116c0.034-0.040 0.074-0.082 0.114-0.116h255.772c0.042 0.034 0.082 0.076 0.118 0.116v63.884h-256.004v-63.884zM960 512h-128v96c0 17.602-14.4 32-32 32h-64c-17.604 0-32-14.398-32-32v-96h-384v96c0 17.602-14.4 32-32 32h-64c-17.602 0-32-14.398-32-32v-96h-128v-64h896v64z"></path>
                      </svg>
                      <svg
                        viewBox="0 0 1024 1024"
                        className="navbar-interactive-icon194"
                      >
                        <path d="M960 256h-256v-64c0-35.2-28.8-64-64-64h-256c-35.204 0-64 28.8-64 64v64h-256c-35.2 0-64 28.8-64 64v576c0 35.202 28.796 64 64 64h896c35.2 0 64-28.798 64-64v-576c0-35.2-28.8-64-64-64zM384 192.116c0.034-0.040 0.074-0.082 0.114-0.116h255.772c0.042 0.034 0.082 0.076 0.118 0.116v63.884h-256.004v-63.884zM960 512h-128v96c0 17.602-14.4 32-32 32h-64c-17.604 0-32-14.398-32-32v-96h-384v96c0 17.602-14.4 32-32 32h-64c-17.602 0-32-14.398-32-32v-96h-128v-64h896v64z"></path>
                      </svg>
                    </div>
                    <span className="navbar-interactive-text48 FLX_txt_med_small-2_nocolor">
                      FC-Crowdfunding
                    </span>
                  </div>
                </Link>
              </li>
              <li
                data-thq="thq-dropdown"
                className="navbar-interactive-dropdown6 link list-item"
              >
                <Link to="/c4-fcinside-services">
                  <div
                    data-thq="thq-dropdown-toggle"
                    className="navbar-interactive-dropdown-toggle31 link"
                  >
                    <div className="navbar-interactive-container42">
                      <svg
                        viewBox="0 0 1024 1024"
                        className="navbar-interactive-icon196"
                      >
                        <path d="M704 64l-320 320h-192l-192 256c0 0 203.416-56.652 322.066-30.084l-322.066 414.084 421.902-328.144c58.838 134.654-37.902 328.144-37.902 328.144l256-192v-192l320-320 64-320-320 64z"></path>
                      </svg>
                      <svg
                        viewBox="0 0 1024 1024"
                        className="navbar-interactive-icon198"
                      >
                        <path d="M704 64l-320 320h-192l-192 256c0 0 203.416-56.652 322.066-30.084l-322.066 414.084 421.902-328.144c58.838 134.654-37.902 328.144-37.902 328.144l256-192v-192l320-320 64-320-320 64z"></path>
                      </svg>
                    </div>
                    <span className="navbar-interactive-text49 FLX_txt_med_small-2_nocolor">
                      Servizi
                    </span>
                  </div>
                </Link>
              </li>
            </ul>
          </div>
          <div
            data-thq="thq-dropdown"
            className="navbar-interactive-thq-dropdown26 dsk-menu-mainLinks list-item"
          >
            <Link to="/d1-other">
              <div
                data-thq="thq-dropdown-toggle"
                className="navbar-interactive-dropdown-toggle32 link dsk-menu-mainlink"
              >
                <div className="navbar-interactive-container43">
                  <svg
                    viewBox="0 0 1024 1024"
                    className="navbar-interactive-icon200"
                  >
                    <path d="M992.262 871.396l-242.552-206.294c-25.074-22.566-51.89-32.926-73.552-31.926 57.256-67.068 91.842-154.078 91.842-249.176 0-212.078-171.922-384-384-384-212.076 0-384 171.922-384 384s171.922 384 384 384c95.098 0 182.108-34.586 249.176-91.844-1 21.662 9.36 48.478 31.926 73.552l206.294 242.552c35.322 39.246 93.022 42.554 128.22 7.356s31.892-92.898-7.354-128.22zM384 640c-141.384 0-256-114.616-256-256s114.616-256 256-256 256 114.616 256 256-114.614 256-256 256zM448 192h-128v128h-128v128h128v128h128v-128h128v-128h-128z"></path>
                  </svg>
                  <svg
                    viewBox="0 0 1024 1024"
                    className="navbar-interactive-icon202"
                  >
                    <path d="M992.262 871.396l-242.552-206.294c-25.074-22.566-51.89-32.926-73.552-31.926 57.256-67.068 91.842-154.078 91.842-249.176 0-212.078-171.922-384-384-384-212.076 0-384 171.922-384 384s171.922 384 384 384c95.098 0 182.108-34.586 249.176-91.844-1 21.662 9.36 48.478 31.926 73.552l206.294 242.552c35.322 39.246 93.022 42.554 128.22 7.356s31.892-92.898-7.354-128.22zM384 640c-141.384 0-256-114.616-256-256s114.616-256 256-256 256 114.616 256 256-114.614 256-256 256zM448 192h-128v128h-128v128h128v128h128v-128h128v-128h-128z"></path>
                  </svg>
                </div>
                <span className="navbar-interactive-text50 FLX_txt_med_small-2_nocolor">
                  {props.text2}
                </span>
                <div
                  data-thq="thq-dropdown-arrow"
                  className="navbar-interactive-dropdown-arrow3"
                >
                  <svg
                    viewBox="0 0 1024 1024"
                    className="navbar-interactive-icon204"
                  >
                    <path d="M426 726v-428l214 214z"></path>
                  </svg>
                </div>
              </div>
            </Link>
            <ul data-thq="thq-dropdown-list" className="dsk-menu-ul">
              <li
                data-thq="thq-dropdown"
                className="navbar-interactive-dropdown7 link list-item"
              >
                <Link to="/d2-other-tutorials">
                  <div
                    data-thq="thq-dropdown-toggle"
                    className="navbar-interactive-dropdown-toggle33 link"
                  >
                    <div className="navbar-interactive-container44">
                      <svg
                        viewBox="0 0 1024 1024"
                        className="navbar-interactive-icon206"
                      >
                        <path d="M512 0c-282.77 0-512 229.228-512 512 0 282.77 229.228 512 512 512 282.77 0 512-229.23 512-512 0-282.772-229.23-512-512-512zM704 256c35.346 0 64 42.98 64 96s-28.654 96-64 96-64-42.98-64-96 28.654-96 64-96zM352 312.062c59.646 0 102 22.332 102 57.282 0 7.398 3.812 42.994-0.17 49.594-14.828-24.576-54.81-42.188-101.83-42.188s-87.002 17.612-101.83 42.188c-3.982-6.6-0.17-42.196-0.17-49.594 0-34.95 42.354-57.282 102-57.282zM500.344 832c-119.242 0-223.858-64.28-282.892-160.952 70.41 55.060 194.534 65.81 325.288 39.978 140.248-27.706 249.11-91.542 288.454-176.594-21.654 167.96-161.518 297.568-330.85 297.568z"></path>
                      </svg>
                      <svg
                        viewBox="0 0 1024 1024"
                        className="navbar-interactive-icon208"
                      >
                        <path d="M512 0c-282.77 0-512 229.228-512 512 0 282.77 229.228 512 512 512 282.77 0 512-229.23 512-512 0-282.772-229.23-512-512-512zM704 256c35.346 0 64 42.98 64 96s-28.654 96-64 96-64-42.98-64-96 28.654-96 64-96zM352 312.062c59.646 0 102 22.332 102 57.282 0 7.398 3.812 42.994-0.17 49.594-14.828-24.576-54.81-42.188-101.83-42.188s-87.002 17.612-101.83 42.188c-3.982-6.6-0.17-42.196-0.17-49.594 0-34.95 42.354-57.282 102-57.282zM500.344 832c-119.242 0-223.858-64.28-282.892-160.952 70.41 55.060 194.534 65.81 325.288 39.978 140.248-27.706 249.11-91.542 288.454-176.594-21.654 167.96-161.518 297.568-330.85 297.568z"></path>
                      </svg>
                    </div>
                    <span className="navbar-interactive-text51 FLX_txt_med_small-2_nocolor">
                      Tutorials
                    </span>
                  </div>
                </Link>
              </li>
              <li
                data-thq="thq-dropdown"
                className="navbar-interactive-dropdown8 link list-item"
              >
                <Link to="/d3-other-contacts">
                  <div
                    data-thq="thq-dropdown-toggle"
                    className="navbar-interactive-dropdown-toggle34 link"
                  >
                    <div className="navbar-interactive-container45">
                      <svg
                        viewBox="0 0 1152 1024"
                        className="navbar-interactive-icon210"
                      >
                        <path d="M1088 901.166c0 45.5 26.028 84.908 64 104.184v15.938c-10.626 1.454-21.472 2.224-32.5 2.224-68.008 0-129.348-28.528-172.722-74.264-26.222 6.982-54.002 10.752-82.778 10.752-159.058 0-288-114.616-288-256s128.942-256 288-256c159.058 0 288 114.616 288 256 0 55.348-19.764 106.592-53.356 148.466-6.824 14.824-10.644 31.312-10.644 48.7zM512 0c278.458 0 504.992 180.614 511.836 405.52-49.182-21.92-103.586-33.52-159.836-33.52-95.56 0-185.816 33.446-254.138 94.178-70.846 62.972-109.862 147.434-109.862 237.822 0 44.672 9.544 87.888 27.736 127.788-5.228 0.126-10.468 0.212-15.736 0.212-27.156 0-53.81-1.734-79.824-5.044-109.978 109.978-241.25 129.7-368.176 132.596v-26.916c68.536-33.578 128-94.74 128-164.636 0-9.754-0.758-19.33-2.164-28.696-115.796-76.264-189.836-192.754-189.836-323.304 0-229.75 229.23-416 512-416z"></path>
                      </svg>
                      <svg
                        viewBox="0 0 1152 1024"
                        className="navbar-interactive-icon212"
                      >
                        <path d="M1088 901.166c0 45.5 26.028 84.908 64 104.184v15.938c-10.626 1.454-21.472 2.224-32.5 2.224-68.008 0-129.348-28.528-172.722-74.264-26.222 6.982-54.002 10.752-82.778 10.752-159.058 0-288-114.616-288-256s128.942-256 288-256c159.058 0 288 114.616 288 256 0 55.348-19.764 106.592-53.356 148.466-6.824 14.824-10.644 31.312-10.644 48.7zM512 0c278.458 0 504.992 180.614 511.836 405.52-49.182-21.92-103.586-33.52-159.836-33.52-95.56 0-185.816 33.446-254.138 94.178-70.846 62.972-109.862 147.434-109.862 237.822 0 44.672 9.544 87.888 27.736 127.788-5.228 0.126-10.468 0.212-15.736 0.212-27.156 0-53.81-1.734-79.824-5.044-109.978 109.978-241.25 129.7-368.176 132.596v-26.916c68.536-33.578 128-94.74 128-164.636 0-9.754-0.758-19.33-2.164-28.696-115.796-76.264-189.836-192.754-189.836-323.304 0-229.75 229.23-416 512-416z"></path>
                      </svg>
                    </div>
                    <span className="navbar-interactive-text52 FLX_txt_med_small-2_nocolor">
                      Contatti
                    </span>
                  </div>
                </Link>
              </li>
              <li
                data-thq="thq-dropdown"
                className="navbar-interactive-dropdown9 link list-item"
              >
                <Link to="/d4-other-legal">
                  <div
                    data-thq="thq-dropdown-toggle"
                    className="navbar-interactive-dropdown-toggle35 link"
                  >
                    <div className="navbar-interactive-container46">
                      <svg
                        viewBox="0 0 1024 1024"
                        className="navbar-interactive-icon214"
                      >
                        <path d="M320 192c0-106.039 85.961-192 192-192s192 85.961 192 192c0 106.039-85.961 192-192 192s-192-85.961-192-192zM768.078 448h-35.424l-199.104 404.244 74.45-372.244-96-96-96 96 74.45 372.244-199.102-404.244h-35.424c-127.924 0-127.924 85.986-127.924 192v320h768v-320c0-106.014 0-192-127.922-192z"></path>
                      </svg>
                      <svg
                        viewBox="0 0 1024 1024"
                        className="navbar-interactive-icon216"
                      >
                        <path d="M320 192c0-106.039 85.961-192 192-192s192 85.961 192 192c0 106.039-85.961 192-192 192s-192-85.961-192-192zM768.078 448h-35.424l-199.104 404.244 74.45-372.244-96-96-96 96 74.45 372.244-199.102-404.244h-35.424c-127.924 0-127.924 85.986-127.924 192v320h768v-320c0-106.014 0-192-127.922-192z"></path>
                      </svg>
                    </div>
                    <span className="navbar-interactive-text53 FLX_txt_med_small-2_nocolor">
                      Legal
                    </span>
                  </div>
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </header>
      <header
        data-thq="thq-navbar"
        className="navbar-interactive-navbar-interactive2"
      >
        <div
          data-thq="thq-burger-menu"
          className="navbar-interactive-burger-menu2"
        >
          <svg
            viewBox="0 0 1024 1024"
            className="navbar-interactive-icon218 btn_icon_2"
          >
            <path d="M521.143 969.143c0-5.143-4-9.143-9.143-9.143-45.143 0-82.286-37.143-82.286-82.286 0-5.143-4-9.143-9.143-9.143s-9.143 4-9.143 9.143c0 55.429 45.143 100.571 100.571 100.571 5.143 0 9.143-4 9.143-9.143zM140.571 804.571h742.857c-102.286-115.429-152-272-152-475.429 0-73.714-69.714-182.857-219.429-182.857s-219.429 109.143-219.429 182.857c0 203.429-49.714 360-152 475.429zM987.429 804.571c0 40-33.143 73.143-73.143 73.143h-256c0 80.571-65.714 146.286-146.286 146.286s-146.286-65.714-146.286-146.286h-256c-40 0-73.143-33.143-73.143-73.143 84.571-71.429 182.857-199.429 182.857-475.429 0-109.714 90.857-229.714 242.286-252-2.857-6.857-4.571-14.286-4.571-22.286 0-30.286 24.571-54.857 54.857-54.857s54.857 24.571 54.857 54.857c0 8-1.714 15.429-4.571 22.286 151.429 22.286 242.286 142.286 242.286 252 0 276 98.286 404 182.857 475.429z"></path>
          </svg>
        </div>
        <div
          data-thq="thq-mobile-menu"
          className="navbar-interactive-mobile-menu2"
        >
          <animate-on-reveal
            animation="fadeIn"
            duration="700ms"
            delay="0s"
            direction="normal"
            easing="ease"
            iteration="1"
          >
            <div
              data-thq-animate-on-reveal="true"
              className="navbar-interactive-nav2"
            >
              <div
                data-thq="thq-close-menu"
                className="navbar-interactive-close-menu2"
              >
                <div className="navbar-interactive-container47">
                  <h1 className="navbar-interactive-text54 text-small-M_nocolor">
                    CLOSE
                  </h1>
                  <svg
                    viewBox="0 0 1024 1024"
                    className="navbar-interactive-icon220"
                  >
                    <path d="M362 214l214 298-214 298h-192l214-298-214-298h192zM662 214l212 298-212 298h-192l212-298-212-298h192z"></path>
                  </svg>
                </div>
                <div className="navbar-interactive-container48"></div>
              </div>
            </div>
          </animate-on-reveal>
          <animate-on-reveal
            animation="fadeIn"
            duration="700ms"
            delay="0s"
            direction="normal"
            easing="ease"
            iteration="1"
          >
            <div
              data-thq-animate-on-reveal="true"
              className="navbar-interactive-container49"
            >
              <div className="navbar-interactive-container50">
                <h1 className="navbar-interactive-text55 text-medium-S">
                  Notifiche
                </h1>
              </div>
            </div>
          </animate-on-reveal>
          <animate-on-reveal
            animation="fadeIn"
            duration="700ms"
            delay="0s"
            direction="normal"
            easing="ease"
            iteration="1"
          >
            <div
              data-thq-animate-on-reveal="true"
              className="navbar-interactive-container51"
            >
              <div id="notifybox" className="navbar-interactive-container52">
                <div className="navbar-interactive-container53">
                  <div
                    onClick="notifyTypeSystem()"
                    className="navbar-interactive-container54 link"
                  >
                    <strong className="FLX_txt_small_nocolor">SISTEMA</strong>
                  </div>
                  <div
                    onClick="notifyTypePersonal()"
                    className="navbar-interactive-container55 link"
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
                    className="navbar-interactive-container56"
                  >
                    <div
                      id="notify1"
                      className="navbar-interactive-container57 notify"
                    >
                      <svg
                        viewBox="0 0 1024 1024"
                        className="navbar-interactive-icon222"
                      >
                        <path d="M1024 429.256c0-200.926-58.792-363.938-131.482-365.226 0.292-0.006 0.578-0.030 0.872-0.030h-82.942c0 0-194.8 146.336-475.23 203.754-8.56 45.292-14.030 99.274-14.030 161.502s5.466 116.208 14.030 161.5c280.428 57.418 475.23 203.756 475.23 203.756h82.942c-0.292 0-0.578-0.024-0.872-0.032 72.696-1.288 131.482-164.298 131.482-365.224zM864.824 739.252c-9.382 0-19.532-9.742-24.746-15.548-12.63-14.064-24.792-35.96-35.188-63.328-23.256-61.232-36.066-143.31-36.066-231.124 0-87.81 12.81-169.89 36.066-231.122 10.394-27.368 22.562-49.266 35.188-63.328 5.214-5.812 15.364-15.552 24.746-15.552 9.38 0 19.536 9.744 24.744 15.552 12.634 14.064 24.796 35.958 35.188 63.328 23.258 61.23 36.068 143.312 36.068 231.122 0 87.804-12.81 169.888-36.068 231.124-10.39 27.368-22.562 49.264-35.188 63.328-5.208 5.806-15.36 15.548-24.744 15.548zM251.812 429.256c0-51.95 3.81-102.43 11.052-149.094-47.372 6.554-88.942 10.324-140.34 10.324-67.058 0-67.058 0-67.058 0l-55.466 94.686v88.17l55.46 94.686c0 0 0 0 67.060 0 51.398 0 92.968 3.774 140.34 10.324-7.236-46.664-11.048-97.146-11.048-149.096zM368.15 642.172l-127.998-24.51 81.842 321.544c4.236 16.634 20.744 25.038 36.686 18.654l118.556-47.452c15.944-6.376 22.328-23.964 14.196-39.084l-123.282-229.152zM864.824 548.73c-3.618 0-7.528-3.754-9.538-5.992-4.87-5.42-9.556-13.86-13.562-24.408-8.962-23.6-13.9-55.234-13.9-89.078s4.938-65.478 13.9-89.078c4.006-10.548 8.696-18.988 13.562-24.408 2.010-2.24 5.92-5.994 9.538-5.994 3.616 0 7.53 3.756 9.538 5.994 4.87 5.42 9.556 13.858 13.56 24.408 8.964 23.598 13.902 55.234 13.902 89.078 0 33.842-4.938 65.478-13.902 89.078-4.004 10.548-8.696 18.988-13.56 24.408-2.008 2.238-5.92 5.992-9.538 5.992z"></path>
                      </svg>
                      <span className="navbar-interactive-text58 FLX_txt_small1">
                        <span className="navbar-interactive-text59">
                          Attenzione ai
                        </span>
                        <span className="navbar-interactive-text60">
                          <span
                            dangerouslySetInnerHTML={{
                              __html: ' ',
                            }}
                          />
                        </span>
                        <span className="navbar-interactive-text61">
                          cloni malvagi
                        </span>
                        <span className="navbar-interactive-text62">!</span>
                        <br></br>
                        <span>
                          I nostri domini ufficiali sono
                          <span
                            dangerouslySetInnerHTML={{
                              __html: ' ',
                            }}
                          />
                        </span>
                        <span className="navbar-interactive-text65">www</span>
                        <span>. </span>
                        <span className="navbar-interactive-text67">
                          FareCrypto
                        </span>
                        <span>
                          <span
                            dangerouslySetInnerHTML={{
                              __html: ' ',
                            }}
                          />
                        </span>
                        <span className="navbar-interactive-text69">.</span>
                        <span className="navbar-interactive-text70">NET</span>
                        <span> o </span>
                        <span className="navbar-interactive-text72">.</span>
                        <span className="navbar-interactive-text73">EU</span>
                        <span className="navbar-interactive-text74"> !</span>
                        <br></br>
                        <span>
                          Altri domini come
                          <span
                            dangerouslySetInnerHTML={{
                              __html: ' ',
                            }}
                          />
                        </span>
                        <span className="navbar-interactive-text77">.com</span>
                        <span>
                          ,
                          <span
                            dangerouslySetInnerHTML={{
                              __html: ' ',
                            }}
                          />
                        </span>
                        <span className="navbar-interactive-text79">.it</span>
                        <span>
                          ,
                          <span
                            dangerouslySetInnerHTML={{
                              __html: ' ',
                            }}
                          />
                        </span>
                        <span className="navbar-interactive-text81">.io</span>
                        <span>
                          , ecc.. NON sono nostri e potrebbero compromettere i
                          tuoi accounts, dispositivi, fondi e privacy! 
                        </span>
                        <span>
                          Consigliamo di diffidare e segnalare tali cloni
                          tramite il Support o dai
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
                          className="navbar-interactive-link"
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
                        className="closeNotify"
                      >
                        <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                      </svg>
                    </div>
                    <div className="navbar-interactive-container58"></div>
                    <div className="navbar-interactive-container59">
                      <i className="navbar-interactive-text86 FLX_txt_small2">
                        Al momento non ci sono altre comunicazioni.
                      </i>
                    </div>
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
                    className="navbar-interactive-container60"
                  >
                    <div className="navbar-interactive-container61"></div>
                    <div className="navbar-interactive-container62">
                      <i className="navbar-interactive-text87 FLX_txt_small2">
                        Al momento non ci sono altre comunicazioni.
                      </i>
                    </div>
                  </div>
                </animate-on-reveal>
              </div>
            </div>
          </animate-on-reveal>
        </div>
      </header>
    </div>
  )
}

NavbarInteractive.defaultProps = {
  text6: '',
  text26: 'Inizio rapido',
  text141: 'HOME',
  text1: 'Farming',
  text18: 'Utility',
  text5: 'Inizio da Zero',
  text22: 'Tutorials',
  text27:
    '                                                                     ',
  text17: 'Risorse',
  text25: 'FREE',
  text23: 'Contatti',
  text16: 'Strategie',
  text24: 'Legal',
  text15: 'Farming',
  text2: 'Altro',
  text20: 'Servizi',
  text19: 'FC-Crowdfunding',
  rootClassName: '',
  imageSrc: '/copia%20di%20logofcb-400h-1500h.png',
  text21: 'aLTRO',
  text: 'HOME',
}

NavbarInteractive.propTypes = {
  text6: PropTypes.string,
  text26: PropTypes.string,
  text141: PropTypes.string,
  text1: PropTypes.string,
  text18: PropTypes.string,
  text5: PropTypes.string,
  text22: PropTypes.string,
  text27: PropTypes.string,
  text17: PropTypes.string,
  text25: PropTypes.string,
  text23: PropTypes.string,
  text16: PropTypes.string,
  text24: PropTypes.string,
  text15: PropTypes.string,
  text2: PropTypes.string,
  text20: PropTypes.string,
  text19: PropTypes.string,
  rootClassName: PropTypes.string,
  imageSrc: PropTypes.string,
  text21: PropTypes.string,
  text: PropTypes.string,
}

export default NavbarInteractive
