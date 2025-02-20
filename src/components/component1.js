import React from 'react'

import Script from 'dangerous-html/react'

import './component1.css'

const Component1 = (props) => {
  return (
    <div className="component1-container1">
      <div className="component1-container2">
        <div className="component1-container3">
          <React.Fragment>
            <React.Fragment>
              <style
                dangerouslySetInnerHTML={{
                  __html:
                    '\n  body {\n    font-family: "Roboto", sans-serif;\n  }\n\n  .cookies-modal-container {\n    width: 100vw;\n    cursor: not-allowed;\n    height: 100vh;\n    display: none;\n    z-index: 9999;\n    align-items: center;\n    user-select: none;\n    pointer-events: none;\n    justify-content: center;\n    background-color: rgba(217, 217, 217, 0.5);\n  }\n  .cookies-modal-container1 {\n    animation-name: fadeIn;\n    animation-delay: 0s;\n    animation-duration: 2s;\n    animation-direction: normal;\n    animation-iteration-count: 1;\n    animation-timing-function: ease;\n  }\n  .cookies-modal-text {\n    align-self: center;\n    text-decoration: underline #33b5e5;\n  }\n  .cookies-modal-link {\n    text-decoration: underline;\n  }\n  .cookies-modal-button {\n    align-self: stretch;\n  }\n  .cookies-modal-button1 {\n    align-self: stretch;\n  }\n  .cookies-modal-text05 {\n    align-self: center;\n    text-align: center;\n  }\n  .cookies-modal-container3 {\n    top: NaNpx;\n    left: NaNpx;\n    position: absolute;\n  }\n  .cookies-modal-container4 {\n    display: contents;\n  }\n\n  .navbar-interactive-container {\n    top: 0;\n    left: 0;\n    right: 0;\n    display: flex;\n    z-index: 9000;\n    position: fixed;\n    max-width: 100%;\n    min-width: 100vw;\n    align-self: center;\n    box-shadow: 0px 5px 10px 0px #33b5e5;\n    max-height: 8vh;\n    min-height: 8vh;\n    background-color: #333;\n  }\n  .navbar-interactive-navbar-interactive {\n    flex: auto;\n    display: flex;\n    z-index: 9001;\n    position: relative;\n    max-width: 100%;\n    min-width: 100%;\n    align-self: stretch;\n    max-height: 100%;\n    min-height: 100%;\n    align-items: center;\n    padding-left: 3vh;\n    padding-right: 3vh;\n    justify-content: space-between;\n  }\n  .navbar-interactive-link {\n    display: contents;\n  }\n  .navbar-interactive-image {\n    flex: 0 0 auto;\n    z-index: 101;\n    max-height: 6vh;\n    min-height: 6vh;\n    text-decoration: none;\n  }\n  .navbar-interactive-text {\n    left: 9vh;\n    color: var(--dl-color-scheme-blue);\n    bottom: 1vh;\n    margin: auto;\n    position: absolute;\n    font-size: 80%;\n    align-self: center;\n  }\n  .navbar-interactive-desktop-menu {\n    top: 0px;\n    flex: 1;\n    left: 0px;\n    right: 0px;\n    bottom: 0px;\n    margin: auto;\n    z-index: 100;\n    position: absolute;\n    align-self: stretch;\n    align-items: stretch;\n    flex-direction: column;\n    justify-content: center;\n  }\n  .navbar-interactive-links {\n    top: 0px;\n    left: 0px;\n    right: 0px;\n    width: auto;\n    bottom: 0px;\n    margin: auto;\n    display: flex;\n    position: absolute;\n    align-items: center;\n    padding-left: 20%;\n    padding-right: 20%;\n    flex-direction: row;\n    justify-content: center;\n  }\n  .navbar-interactive-dropdown-toggle {\n    text-decoration: none;\n  }\n  .navbar-interactive-text001 {\n    cursor: pointer;\n    align-self: center;\n    font-style: normal;\n    font-weight: 500;\n    text-transform: uppercase;\n  }\n  .navbar-interactive-dropdown-arrow {\n    transition: 0.3s;\n  }\n  .navbar-interactive-icon {\n    width: 2vh;\n    height: 2vh;\n    transition: 0.3s;\n  }\n  .navbar-interactive-dropdown {\n    cursor: pointer;\n    display: inline-block;\n    position: relative;\n    transition: 0.5s;\n    text-shadow: 0 0 3px #33b5e5, 0 0 3px #33b5e5;\n  }\n  .navbar-interactive-dropdown:hover {\n    text-shadow: 0 0 4px #33b5e5, 0 0 4px #33b5e5;\n    background-image: radial-gradient(\n      circle at center,\n      rgba(51, 181, 229, 0.25) 0%,\n      rgb(51, 51, 51) 100%\n    );\n  }\n  .navbar-interactive-dropdown-toggle01 {\n    fill: #333;\n    color: var(--dl-color-gray-900);\n    width: 100%;\n    display: inline-flex;\n    padding: 1.5vh;\n    transition: 0.5s;\n    align-items: center;\n    text-decoration: none;\n  }\n  .navbar-interactive-dropdown-toggle01:hover {\n    fill: #fff;\n    color: #fff;\n    background-color: rgba(51, 181, 229, 0.25);\n  }\n  .navbar-interactive-text002 {\n    width: 100%;\n    display: flex;\n    font-style: normal;\n    text-align: left;\n    font-weight: 500;\n    justify-content: flex-start;\n  }\n  .navbar-interactive-dropdown-toggle02 {\n    text-decoration: none;\n  }\n  .navbar-interactive-text003 {\n    cursor: pointer;\n    align-self: center;\n    font-style: normal;\n    font-weight: 500;\n    text-transform: uppercase;\n  }\n  .navbar-interactive-dropdown-arrow1 {\n    transition: 0.3s;\n  }\n  .navbar-interactive-icon02 {\n    width: 2vh;\n    height: 2vh;\n    transition: 0.3s;\n  }\n  .navbar-interactive-dropdown-toggle03 {\n    fill: #333;\n    color: var(--dl-color-gray-900);\n    width: 100%;\n    display: inline-flex;\n    padding: 1.5vh;\n    transition: 0.5s;\n    align-items: center;\n    text-decoration: none;\n  }\n  .navbar-interactive-dropdown-toggle03:hover {\n    fill: #fff;\n    color: #fff;\n    background-color: rgba(51, 181, 229, 0.25);\n  }\n  .navbar-interactive-text004 {\n    width: 100%;\n    display: flex;\n    font-style: normal;\n    text-align: left;\n    font-weight: 500;\n    justify-content: flex-start;\n  }\n  .navbar-interactive-dropdown-toggle04 {\n    fill: #333;\n    color: var(--dl-color-gray-900);\n    width: 100%;\n    display: inline-flex;\n    padding: 1.5vh;\n    transition: 0.5s;\n    align-items: center;\n    text-decoration: none;\n  }\n  .navbar-interactive-dropdown-toggle04:hover {\n    fill: #fff;\n    color: #fff;\n    background-color: rgba(51, 181, 229, 0.25);\n  }\n  .navbar-interactive-text005 {\n    width: 100%;\n    display: flex;\n    font-style: normal;\n    text-align: left;\n    font-weight: 500;\n    justify-content: flex-start;\n  }\n  .navbar-interactive-dropdown-toggle05 {\n    fill: #333;\n    color: var(--dl-color-gray-900);\n    width: 100%;\n    display: inline-flex;\n    padding: 1.5vh;\n    transition: 0.5s;\n    align-items: center;\n    text-decoration: none;\n  }\n  .navbar-interactive-dropdown-toggle05:hover {\n    fill: #fff;\n    color: #fff;\n    background-color: rgba(51, 181, 229, 0.25);\n  }\n  .navbar-interactive-text006 {\n    width: 100%;\n    cursor: pointer;\n    display: flex;\n    font-style: normal;\n    text-align: center;\n    font-weight: 500;\n    justify-content: flex-start;\n  }\n  .navbar-interactive-dropdown-toggle06 {\n    fill: #333;\n    color: var(--dl-color-gray-900);\n    width: 100%;\n    display: inline-flex;\n    padding: 1.5vh;\n    transition: 0.5s;\n    align-items: center;\n    text-decoration: none;\n  }\n  .navbar-interactive-dropdown-toggle06:hover {\n    fill: #fff;\n    color: #fff;\n    background-color: rgba(51, 181, 229, 0.25);\n  }\n  .navbar-interactive-text007 {\n    width: 100%;\n    cursor: pointer;\n    display: flex;\n    font-style: normal;\n    text-align: center;\n    font-weight: 500;\n    justify-content: flex-start;\n  }\n  .navbar-interactive-text008 {\n    color: var(--dl-color-gray-white);\n  }\n  .navbar-interactive-text009 {\n    color: var(--dl-color-scheme-blue);\n  }\n  .navbar-interactive-dropdown-toggle07 {\n    text-decoration: none;\n  }\n  .navbar-interactive-text011 {\n    cursor: pointer;\n    align-self: center;\n    font-style: normal;\n    font-weight: 500;\n    text-transform: uppercase;\n  }\n  .navbar-interactive-text012 {\n    font-style: italic;\n    font-weight: 500;\n  }\n  .navbar-interactive-dropdown-arrow2 {\n    transition: 0.3s;\n  }\n  .navbar-interactive-icon04 {\n    width: 2vh;\n    height: 2vh;\n    transition: 0.3s;\n  }\n  .navbar-interactive-dropdown5 {\n    cursor: pointer;\n    display: inline-block;\n    position: relative;\n    transition: 0.5s;\n    text-shadow: 0 0 3px #33b5e5, 0 0 3px #33b5e5;\n  }\n  .navbar-interactive-dropdown5:hover {\n    text-shadow: 0 0 4px #33b5e5, 0 0 4px #33b5e5;\n    background-image: radial-gradient(\n      circle at center,\n      rgba(51, 181, 229, 0.25) 0%,\n      rgb(51, 51, 51) 100%\n    );\n  }\n  .navbar-interactive-dropdown-toggle08 {\n    fill: #333;\n    color: var(--dl-color-gray-900);\n    width: 100%;\n    display: inline-flex;\n    padding: 1.5vh;\n    transition: 0.5s;\n    align-items: center;\n    text-decoration: none;\n  }\n  .navbar-interactive-dropdown-toggle08:hover {\n    fill: #fff;\n    color: #fff;\n    background-color: rgba(51, 181, 229, 0.25);\n  }\n  .navbar-interactive-text015 {\n    width: 100%;\n    display: flex;\n    font-style: normal;\n    text-align: left;\n    font-weight: 500;\n    justify-content: flex-start;\n  }\n  .navbar-interactive-text017 {\n    color: var(--dl-color-gray-white);\n    font-style: italic;\n    font-weight: 500;\n  }\n  .navbar-interactive-text018 {\n    font-style: italic;\n    font-weight: 500;\n  }\n  .navbar-interactive-text019 {\n    color: var(--dl-color-scheme-blue);\n  }\n  .navbar-interactive-dropdown6 {\n    cursor: pointer;\n    display: inline-block;\n    position: relative;\n    transition: 0.5s;\n    text-shadow: 0 0 3px #33b5e5, 0 0 3px #33b5e5;\n  }\n  .navbar-interactive-dropdown6:hover {\n    text-shadow: 0 0 4px #33b5e5, 0 0 4px #33b5e5;\n    background-image: radial-gradient(\n      circle at center,\n      rgba(51, 181, 229, 0.25) 0%,\n      rgb(51, 51, 51) 100%\n    );\n  }\n  .navbar-interactive-dropdown-toggle09 {\n    fill: #333;\n    color: var(--dl-color-gray-900);\n    width: 100%;\n    display: inline-flex;\n    padding: 1.5vh;\n    transition: 0.5s;\n    align-items: center;\n    text-decoration: none;\n  }\n  .navbar-interactive-dropdown-toggle09:hover {\n    fill: #fff;\n    color: #fff;\n    background-color: rgba(51, 181, 229, 0.25);\n  }\n  .navbar-interactive-text021 {\n    width: 100%;\n    display: flex;\n    font-style: normal;\n    text-align: left;\n    font-weight: 500;\n    justify-content: flex-start;\n  }\n  .navbar-interactive-dropdown7 {\n    cursor: pointer;\n    display: inline-block;\n    position: relative;\n    transition: 0.5s;\n    text-shadow: 0 0 3px #33b5e5, 0 0 3px #33b5e5;\n  }\n  .navbar-interactive-dropdown7:hover {\n    text-shadow: 0 0 4px #33b5e5, 0 0 4px #33b5e5;\n    background-image: radial-gradient(\n      circle at center,\n      rgba(51, 181, 229, 0.25) 0%,\n      rgb(51, 51, 51) 100%\n    );\n  }\n  .navbar-interactive-dropdown-toggle10 {\n    fill: #333;\n    color: var(--dl-color-gray-900);\n    width: 100%;\n    display: inline-flex;\n    padding: 1.5vh;\n    transition: 0.5s;\n    align-items: center;\n    text-decoration: none;\n  }\n  .navbar-interactive-dropdown-toggle10:hover {\n    fill: #fff;\n    color: #fff;\n    background-color: rgba(51, 181, 229, 0.25);\n  }\n  .navbar-interactive-text022 {\n    width: 100%;\n    display: flex;\n    font-style: normal;\n    text-align: left;\n    font-weight: 500;\n    justify-content: flex-start;\n  }\n  .navbar-interactive-container01 {\n    top: 0px;\n    right: 0vh;\n    width: 8vh;\n    bottom: 0px;\n    height: 8vh;\n    margin: auto;\n    display: block;\n    padding: 2.5vh;\n    z-index: 101;\n    position: absolute;\n    align-items: center;\n    padding-bottom: 2.5vh;\n    justify-content: space-between;\n  }\n  .navbar-interactive-icon06 {\n    fill: #d9d9d9;\n    flex: 0 0 auto;\n    width: 3vh;\n    cursor: pointer;\n    height: 3vh;\n  }\n  .navbar-interactive-text023 {\n    top: 2vh;\n    right: 2vh;\n    cursor: default;\n    position: absolute;\n    text-shadow: 0 0 10px red, 0 0 10px red;\n    animation-name: rubberBand;\n    animation-delay: 5s;\n    animation-duration: 1s;\n    animation-direction: normal;\n    animation-iteration-count: infinite;\n    animation-timing-function: ease;\n  }\n  .navbar-interactive-container02 {\n    top: 8vh;\n    flex: 0 0 auto;\n    right: 0px;\n    display: none;\n    z-index: 4000;\n    overflow: hidden;\n    position: absolute;\n    max-width: 50vw;\n    min-width: 20vw;\n    max-height: 50vh;\n    min-height: 10vh;\n    align-items: stretch;\n    border-color: var(--dl-color-scheme-blue);\n    border-style: solid;\n    border-width: 2px;\n    border-radius: var(--dl-radius-radius-radius16);\n    flex-direction: column;\n    justify-content: flex-start;\n    background-color: #333;\n  }\n  .navbar-interactive-container03 {\n    flex: 0 0 auto;\n    width: 100%;\n    display: flex;\n    align-items: center;\n    border-color: var(--dl-color-scheme-blue);\n    border-width: 0px;\n    flex-direction: row;\n    justify-content: center;\n    border-bottom-width: 1px;\n  }\n  .navbar-interactive-container04 {\n    flex: 0 0 auto;\n    width: 50%;\n    height: 100%;\n    display: flex;\n    align-self: stretch;\n    box-shadow: 0px 0px 10px 0px #33b5e5 inset;\n    transition: 0.5s;\n    align-items: center;\n    padding-top: 1vh;\n    border-color: var(--dl-color-scheme-blue);\n    border-width: 0px;\n    padding-left: 3vh;\n    padding-right: 3vh;\n    flex-direction: column;\n    padding-bottom: 1vh;\n    justify-content: center;\n    border-right-width: 1px;\n  }\n  .navbar-interactive-container04:hover {\n    box-shadow: 0px 0px 15px 0px #33b5e5 inset;\n  }\n  .navbar-interactive-container05 {\n    flex: 0 0 auto;\n    width: 50%;\n    height: 100%;\n    display: flex;\n    align-self: stretch;\n    box-shadow: 0px 0px 10px 0px #33b5e5 inset;\n    transition: 0.5s;\n    align-items: center;\n    padding-top: 1vh;\n    padding-left: 3vh;\n    padding-right: 3vh;\n    flex-direction: column;\n    padding-bottom: 1vh;\n    justify-content: center;\n  }\n  .navbar-interactive-container05:hover {\n    box-shadow: 0px 0px 15px 0px #33b5e5 inset;\n  }\n  .navbar-interactive-container06 {\n    flex: 1;\n    position: relative;\n    max-width: 100%;\n    box-shadow: 0px 0px 10px 0px #33b5e5 inset;\n    align-items: stretch;\n    padding-top: 0.5vh;\n    padding-left: 0vh;\n    padding-right: 0vh;\n    flex-direction: column;\n    padding-bottom: 0.5vh;\n    justify-content: flex-start;\n  }\n  .navbar-interactive-icon08 {\n    fill: var(--dl-color-scheme-blue);\n    width: 2vh;\n    height: 2vh;\n    margin-right: 1vh;\n  }\n  .navbar-interactive-text026 {\n    flex: 1;\n    width: max-content;\n    text-align: left;\n  }\n  .navbar-interactive-text027 {\n    font-size: 110%;\n    line-height: 1.5;\n    text-decoration: underline;\n  }\n  .navbar-interactive-text028 {\n    font-size: 110%;\n    line-height: 1.5;\n  }\n  .navbar-interactive-text029 {\n    color: var(--dl-color-danger-700);\n    font-size: 110%;\n    line-height: 1.5;\n  }\n  .navbar-interactive-text030 {\n    font-size: 110%;\n    line-height: 1.5;\n  }\n  .navbar-interactive-text033 {\n    color: var(--dl-color-scheme-blue);\n  }\n  .navbar-interactive-text035 {\n    color: var(--dl-color-scheme-blue);\n    text-decoration: underline;\n  }\n  .navbar-interactive-text037 {\n    font-size: 110%;\n  }\n  .navbar-interactive-text038 {\n    color: var(--dl-color-scheme-blue);\n    font-size: 110%;\n  }\n  .navbar-interactive-text040 {\n    font-size: 110%;\n  }\n  .navbar-interactive-text041 {\n    color: var(--dl-color-scheme-blue);\n    font-size: 110%;\n  }\n  .navbar-interactive-text042 {\n    font-size: 110%;\n  }\n  .navbar-interactive-text045 {\n    color: var(--dl-color-danger-700);\n  }\n  .navbar-interactive-text047 {\n    color: var(--dl-color-danger-700);\n  }\n  .navbar-interactive-text049 {\n    color: var(--dl-color-danger-700);\n  }\n  .navbar-interactive-link1 {\n    text-decoration: underline;\n  }\n  .navbar-interactive-icon10 {\n    margin-left: 1vh;\n  }\n  .navbar-interactive-container08 {\n    top: -1px;\n    flex: 0 0 auto;\n    left: 0px;\n    width: 50%;\n    height: 1px;\n    position: absolute;\n    box-shadow: 0px 0px 10px 2px #33b5e5;\n  }\n  .navbar-interactive-text054 {\n    color: var(--dl-color-gray-700);\n    padding: 1vh;\n    text-align: center;\n  }\n  .navbar-interactive-container09 {\n    flex: 1;\n    display: flex;\n    position: relative;\n    max-width: 100%;\n    box-shadow: 0px 0px 10px 0px #33b5e5 inset;\n    align-items: stretch;\n    padding-top: 0.5vh;\n    padding-left: 0vh;\n    padding-right: 0vh;\n    flex-direction: column;\n    padding-bottom: 0.5vh;\n    justify-content: flex-start;\n  }\n  .navbar-interactive-container10 {\n    top: -1px;\n    flex: 0 0 auto;\n    right: 0px;\n    width: 50%;\n    height: 1px;\n    position: absolute;\n    box-shadow: 0px 0px 10px 2px #33b5e5;\n  }\n  .navbar-interactive-text055 {\n    color: var(--dl-color-gray-700);\n    padding: 1vh;\n    text-align: center;\n  }\n  .navbar-interactive-container11 {\n    top: NaNpx;\n    left: NaNpx;\n    position: absolute;\n  }\n  .navbar-interactive-container12 {\n    display: contents;\n  }\n  .navbar-interactive-container13 {\n    top: 2.5vh;\n    left: 2.5vh;\n    right: 2.5vh;\n    bottom: 2.5vh;\n    cursor: pointer;\n    margin: auto;\n    display: none;\n    z-index: 3999;\n    position: absolute;\n  }\n  .navbar-interactive-side-bar {\n    top: 0px;\n    fill: rgba(51, 181, 229, 0.8);\n    color: var(--dl-color-gray-white);\n    right: 0px;\n    width: 8vh;\n    bottom: 0px;\n    cursor: default;\n    margin: auto;\n    display: none;\n    z-index: 1000;\n    position: absolute;\n    align-self: stretch;\n    transition: 0.3s;\n    align-items: stretch;\n    flex-direction: column;\n  }\n  .navbar-interactive-side-bar:hover {\n    fill: var(--dl-color-scheme-blue);\n    color: var(--dl-color-scheme-blue);\n  }\n  .navbar-interactive-side-bar-toggle {\n    width: 100%;\n    height: 100%;\n    display: inline-flex;\n    padding: 1vh;\n    align-items: center;\n  }\n  .navbar-interactive-side-bar-icon {\n    width: 100%;\n    align-self: stretch;\n    transition: 0.3s;\n  }\n  .navbar-interactive-icon12 {\n    width: 24px;\n    height: 24px;\n  }\n  .navbar-interactive-side-bar-content {\n    right: 0px;\n    width: max-content;\n    display: none;\n    z-index: 3000;\n    overflow: hidden;\n    position: absolute;\n    animation: fadeInRight 1s;\n    max-width: 30vw;\n    min-width: 15vw;\n    max-height: 92vh;\n    min-height: 92vh;\n    transition: 0.3s;\n    align-items: stretch;\n    flex-direction: column;\n    list-style-type: none;\n    list-style-position: inside;\n  }\n  .navbar-interactive-main {\n    cursor: default;\n    height: 92vh;\n    display: inline-block;\n    position: relative;\n  }\n  .navbar-interactive-main1 {\n    width: 100%;\n    height: 100%;\n    display: inline-flex;\n    align-items: center;\n    flex-direction: column;\n    justify-content: flex-start;\n  }\n  .navbar-interactive-container14 {\n    flex: 0 0 auto;\n    display: flex;\n    align-items: flex-start;\n    flex-direction: column;\n  }\n  .navbar-interactive-container15 {\n    transition: 0.3s;\n    text-decoration: none;\n  }\n  .navbar-interactive-container15:hover {\n    transform: scale(1.05);\n    box-shadow: 0px 0px 25px 0px #33b5e5 inset;\n  }\n  .navbar-interactive-icon18 {\n    top: 0px;\n    flex: 0 0 auto;\n    width: 3vh;\n    bottom: 0px;\n    height: 3vh;\n    align-self: center;\n  }\n  .navbar-interactive-container16 {\n    transition: 0.3s;\n    text-decoration: none;\n  }\n  .navbar-interactive-container16:hover {\n    transform: scale(1.05);\n    box-shadow: 0px 0px 25px 0px #33b5e5 inset;\n  }\n  .navbar-interactive-icon22 {\n    width: 24px;\n    height: 24px;\n  }\n  .navbar-interactive-container17 {\n    flex: 0 0 auto;\n    display: flex;\n    align-items: flex-start;\n    flex-direction: column;\n  }\n  .navbar-interactive-container18 {\n    transition: 0.3s;\n    text-decoration: none;\n  }\n  .navbar-interactive-container18:hover {\n    transform: scale(1.05);\n    box-shadow: 0px 0px 25px 0px #33b5e5 inset;\n  }\n  .navbar-interactive-icon26 {\n    top: 0px;\n    flex: 0 0 auto;\n    width: 3vh;\n    bottom: 0px;\n    height: 3vh;\n    align-self: center;\n  }\n  .navbar-interactive-container19 {\n    transition: 0.3s;\n    text-decoration: none;\n  }\n  .navbar-interactive-container19:hover {\n    transform: scale(1.05);\n    box-shadow: 0px 0px 25px 0px #33b5e5 inset;\n  }\n  .navbar-interactive-icon30 {\n    width: 24px;\n    height: 24px;\n  }\n  .navbar-interactive-container20 {\n    transition: 0.3s;\n    text-decoration: none;\n  }\n  .navbar-interactive-container20:hover {\n    transform: scale(1.05);\n    box-shadow: 0px 0px 25px 0px #33b5e5 inset;\n  }\n  .navbar-interactive-icon34 {\n    width: 24px;\n    height: 24px;\n  }\n  .navbar-interactive-container21 {\n    transition: 0.3s;\n    text-decoration: none;\n  }\n  .navbar-interactive-container21:hover {\n    transform: scale(1.05);\n    box-shadow: 0px 0px 25px 0px #33b5e5 inset;\n  }\n  .navbar-interactive-icon38 {\n    width: 24px;\n    height: 24px;\n  }\n  .navbar-interactive-container22 {\n    transition: 0.3s;\n    text-decoration: none;\n  }\n  .navbar-interactive-container22:hover {\n    transform: scale(1.05);\n    box-shadow: 0px 0px 25px 0px #33b5e5 inset;\n  }\n  .navbar-interactive-icon42 {\n    width: 24px;\n    height: 24px;\n  }\n  .navbar-interactive-container23 {\n    flex: 0 0 auto;\n    display: flex;\n    align-items: flex-start;\n    flex-direction: column;\n  }\n  .navbar-interactive-container24 {\n    transition: 0.3s;\n    text-decoration: none;\n  }\n  .navbar-interactive-container24:hover {\n    transform: scale(1.05);\n    box-shadow: 0px 0px 25px 0px #33b5e5 inset;\n  }\n  .navbar-interactive-icon46 {\n    top: 0px;\n    flex: 0 0 auto;\n    width: 3vh;\n    bottom: 0px;\n    height: 3vh;\n    align-self: center;\n  }\n  .navbar-interactive-container25 {\n    transition: 0.3s;\n    text-decoration: none;\n  }\n  .navbar-interactive-container25:hover {\n    transform: scale(1.05);\n    box-shadow: 0px 0px 25px 0px #33b5e5 inset;\n  }\n  .navbar-interactive-icon50 {\n    width: 24px;\n    height: 24px;\n  }\n  .navbar-interactive-container26 {\n    transition: 0.3s;\n    text-decoration: none;\n  }\n  .navbar-interactive-container26:hover {\n    transform: scale(1.05);\n    box-shadow: 0px 0px 25px 0px #33b5e5 inset;\n  }\n  .navbar-interactive-icon54 {\n    width: 24px;\n    height: 24px;\n  }\n  .navbar-interactive-container27 {\n    transition: 0.3s;\n    text-decoration: none;\n  }\n  .navbar-interactive-container27:hover {\n    transform: scale(1.05);\n    box-shadow: 0px 0px 25px 0px #33b5e5 inset;\n  }\n  .navbar-interactive-icon58 {\n    width: 24px;\n    height: 24px;\n  }\n  .navbar-interactive-container28 {\n    display: flex;\n    align-self: stretch;\n    overflow-y: auto;\n    flex-direction: column;\n  }\n  .navbar-interactive-if-logged {\n    width: 100%;\n    display: none;\n  }\n  .navbar-interactive-user-box {\n    width: 100%;\n  }\n  .navbar-interactive-container29 {\n    width: 100%;\n    display: flex;\n    box-shadow: 0px 2px 10px 0px #33b5e5;\n    padding-top: 1vh;\n    border-color: var(--dl-color-scheme-blue);\n    border-width: 2px;\n    padding-left: 2vh;\n    padding-right: 2vh;\n    flex-direction: row;\n    padding-bottom: 1vh;\n    justify-content: space-between;\n    background-image: linear-gradient(\n      290deg,\n      rgb(0, 0, 0) 0%,\n      rgba(51, 181, 229, 0.5) 100%\n    );\n    border-left-width: 0px;\n    border-right-width: 0px;\n    border-bottom-width: 0px;\n  }\n  .navbar-interactive-text075 {\n    width: 100%;\n    align-self: center;\n    text-align: center;\n    letter-spacing: 2px;\n    text-transform: uppercase;\n  }\n  .navbar-interactive-username {\n    width: 100%;\n    display: flex;\n    position: relative;\n    padding-top: 1vh;\n    border-color: var(--dl-color-scheme-blue);\n    border-width: 1px;\n    padding-left: 2vh;\n    padding-right: 5vh;\n    flex-direction: row;\n    padding-bottom: 1vh;\n    justify-content: flex-start;\n    background-color: rgba(255, 255, 255, 0.1);\n    border-top-width: 0px;\n    border-left-width: 0px;\n    border-right-width: 0px;\n  }\n  .navbar-interactive-icon60 {\n    fill: var(--dl-color-scheme-blue);\n    flex: 1;\n    max-width: 4vh;\n    min-width: 2vh;\n    max-height: 4vh;\n    min-height: 2vh;\n    margin-right: 2vh;\n    border-radius: var(--dl-radius-radius-round);\n    background-color: var(--dl-color-scheme-white1);\n  }\n  .navbar-interactive-text076 {\n    cursor: pointer;\n    display: flex;\n    text-decoration: none;\n  }\n  .navbar-interactive-icon62 {\n    top: 0px;\n    fill: var(--dl-color-scheme-blue);\n    right: 1vh;\n    width: 2vh;\n    bottom: 1vh;\n    height: 2vh;\n    margin: auto;\n    position: absolute;\n    transition: 0.3s;\n    text-decoration: none;\n  }\n  .navbar-interactive-icon62:hover {\n    cursor: pointer;\n    z-index: 100;\n    animation-name: rotateOut;\n    animation-delay: 0s;\n    animation-duration: 1000ms;\n    animation-direction: normal;\n    animation-iteration-count: 1;\n    animation-timing-function: ease;\n  }\n  .navbar-interactive-icon64 {\n    top: 0.5vh;\n    fill: #d9d9d9;\n    right: 1.5vh;\n    width: 2vh;\n    bottom: 0px;\n    height: 2vh;\n    margin: auto;\n    position: absolute;\n    transition: 0.3s;\n    text-decoration: none;\n  }\n  .navbar-interactive-icon64:hover {\n    cursor: pointer;\n    animation-name: rotateIn;\n    animation-delay: 0s;\n    animation-duration: 1000ms;\n    animation-direction: normal;\n    animation-iteration-count: 1;\n    animation-timing-function: ease;\n  }\n  .navbar-interactive-container30 {\n    width: 100%;\n    display: flex;\n    flex-wrap: wrap;\n    box-shadow: 0px 0px 10px 0px #33b5e5;\n    padding-top: 0.5vh;\n    border-color: var(--dl-color-scheme-blue);\n    border-width: 2px;\n    padding-left: 1vh;\n    padding-right: 1vh;\n    flex-direction: row;\n    padding-bottom: 0.5vh;\n    justify-content: space-around;\n    background-color: rgba(255, 255, 255, 0.1);\n    border-left-width: 0px;\n    border-right-width: 0px;\n  }\n  .navbar-interactive-container31 {\n    margin: 0.5vh;\n    display: flex;\n    padding: 0.5vh;\n    transition: 0.3s;\n    align-items: center;\n    border-width: 0;\n    border-radius: var(--dl-radius-radius-radius8);\n    flex-direction: row;\n    justify-content: space-between;\n    text-decoration: none;\n  }\n  .navbar-interactive-container31:hover {\n    cursor: pointer;\n    box-shadow: 0px 0px 10px 0px #33b5e5 inset;\n  }\n  .navbar-interactive-container31:active {\n    box-shadow: 0px 0px 15px 0px #33b5e5 inset;\n  }\n  .navbar-interactive-icon66 {\n    fill: var(--dl-color-scheme-blue);\n    width: 2vh;\n    height: 2vh;\n    margin-right: 0.5vh;\n  }\n  .navbar-interactive-text077 {\n    display: flex;\n  }\n  .navbar-interactive-container32 {\n    margin: 0.5vh;\n    display: flex;\n    padding: 0.5vh;\n    transition: 0.3s;\n    align-items: center;\n    border-width: 0;\n    border-radius: var(--dl-radius-radius-radius8);\n    flex-direction: row;\n    justify-content: space-between;\n  }\n  .navbar-interactive-container32:hover {\n    cursor: pointer;\n    box-shadow: 0px 0px 10px 0px #33b5e5 inset;\n  }\n  .navbar-interactive-container32:active {\n    box-shadow: 0px 0px 15px 0px #33b5e5 inset;\n  }\n  .navbar-interactive-icon68 {\n    fill: var(--dl-color-scheme-gold);\n    width: 2vh;\n    height: 2vh;\n  }\n  .navbar-interactive-icon70 {\n    fill: var(--dl-color-scheme-white1);\n    width: 1vh;\n    height: 1vh;\n    margin-left: -1vh;\n  }\n  .navbar-interactive-text078 {\n    display: flex;\n    margin-left: 0.5vh;\n  }\n  .navbar-interactive-container33 {\n    margin: 0.5vh;\n    display: flex;\n    padding: 0.5vh;\n    transition: 0.3s;\n    align-items: center;\n    border-width: 0;\n    border-radius: var(--dl-radius-radius-radius8);\n    flex-direction: row;\n    justify-content: space-between;\n  }\n  .navbar-interactive-container33:hover {\n    cursor: pointer;\n    box-shadow: 0px 0px 10px 0px #33b5e5 inset;\n  }\n  .navbar-interactive-container33:active {\n    box-shadow: 0px 0px 15px 0px #33b5e5 inset;\n  }\n  .navbar-interactive-icon72 {\n    fill: var(--dl-color-success-700);\n    width: 2vh;\n    height: 2vh;\n    margin-right: 0.5vh;\n  }\n  .navbar-interactive-text079 {\n    display: flex;\n  }\n  .navbar-interactive-container34 {\n    margin: 0.5vh;\n    display: flex;\n    padding: 0.5vh;\n    transition: 0.3s;\n    align-items: center;\n    border-width: 0;\n    border-radius: var(--dl-radius-radius-radius8);\n    flex-direction: row;\n    justify-content: space-between;\n  }\n  .navbar-interactive-container34:hover {\n    cursor: pointer;\n    box-shadow: 0px 0px 10px 0px #33b5e5 inset;\n  }\n  .navbar-interactive-container34:active {\n    box-shadow: 0px 0px 15px 0px #33b5e5 inset;\n  }\n  .navbar-interactive-icon74 {\n    fill: var(--dl-color-danger-700);\n    width: 2vh;\n    height: 2vh;\n    margin-right: 0.5vh;\n  }\n  .navbar-interactive-text080 {\n    display: flex;\n  }\n  .navbar-interactive-if-unlogged {\n    width: 100%;\n    display: none;\n  }\n  .navbar-interactive-user-box1 {\n    width: 100%;\n  }\n  .navbar-interactive-container35 {\n    width: 100%;\n    display: flex;\n    box-shadow: 0px 2px 10px 0px #33b5e5;\n    padding-top: 1vh;\n    border-color: var(--dl-color-scheme-blue);\n    border-width: 2px;\n    padding-left: 2vh;\n    padding-right: 2vh;\n    flex-direction: row;\n    padding-bottom: 1vh;\n    justify-content: space-between;\n    background-image: linear-gradient(\n      290deg,\n      rgb(0, 0, 0) 0%,\n      rgba(51, 181, 229, 0.5) 100%\n    );\n    border-left-width: 0px;\n    border-right-width: 0px;\n    border-bottom-width: 0px;\n  }\n  .navbar-interactive-text081 {\n    width: 100%;\n    align-self: center;\n    text-align: center;\n    letter-spacing: 2px;\n    text-transform: uppercase;\n  }\n  .navbar-interactive-container36 {\n    width: 100%;\n    display: flex;\n    flex-wrap: wrap;\n    box-shadow: 0px 0px 10px 0px #33b5e5;\n    padding-top: 0.5vh;\n    border-color: var(--dl-color-scheme-blue);\n    border-width: 2px;\n    padding-left: 1vh;\n    padding-right: 1vh;\n    flex-direction: row;\n    padding-bottom: 0.5vh;\n    justify-content: space-around;\n    background-color: rgba(255, 255, 255, 0.1);\n    border-left-width: 0px;\n    border-right-width: 0px;\n  }\n  .navbar-interactive-buttons-unlogged {\n    display: flex;\n    padding: 2vh;\n    z-index: 101;\n    align-items: center;\n    flex-direction: row;\n    justify-content: space-between;\n  }\n  .navbar-interactive-button {\n    fill: var(--dl-color-scheme-white);\n    height: 4vh;\n    overflow: hidden;\n    margin-left: 0;\n    justify-content: flex-start;\n  }\n  .navbar-interactive-text082 {\n    align-self: center;\n  }\n  .navbar-interactive-button1 {\n    color: var(--dl-color-scheme-blue);\n    height: 4vh;\n    overflow: hidden;\n    position: relative;\n    margin-left: 3vh;\n    padding-top: 0.5vh;\n    padding-left: 1vh;\n    padding-right: 1vh;\n    flex-direction: row;\n    padding-bottom: 0.5vh;\n    justify-content: flex-start;\n    background-color: rgba(255, 255, 255, 0.9);\n  }\n  .navbar-interactive-text083 {\n    align-self: center;\n  }\n  .navbar-interactive-text084 {\n    color: var(--dl-color-gray-300);\n    right: 2px;\n    bottom: 2px;\n    position: absolute;\n    font-size: 60%;\n    align-self: center;\n  }\n  .navbar-interactive-nav {\n    width: 100%;\n    position: relative;\n    overflow-y: auto;\n  }\n  .navbar-interactive-container37 {\n    top: 0px;\n    left: 0px;\n    right: 0px;\n    width: 100%;\n    margin: auto;\n    display: flex;\n    z-index: 900;\n    position: sticky;\n    box-shadow: 0px 2px 10px 0px #33b5e5;\n    padding-top: 1vh;\n    border-color: var(--dl-color-scheme-blue);\n    border-width: 2px;\n    padding-left: 2vh;\n    padding-right: 2vh;\n    flex-direction: row;\n    padding-bottom: 1vh;\n    justify-content: space-between;\n    background-image: linear-gradient(\n      290deg,\n      rgb(0, 0, 0) 0%,\n      rgba(51, 181, 229, 0.5) 100%\n    );\n    border-left-width: 0px;\n    border-right-width: 0px;\n    border-bottom-width: 0px;\n  }\n  .navbar-interactive-text085 {\n    width: 100%;\n    align-self: center;\n    text-align: center;\n    letter-spacing: 2px;\n    text-transform: uppercase;\n  }\n  .navbar-interactive-container38 {\n    width: 100%;\n    display: flex;\n    border-color: var(--dl-color-scheme-blue);\n    border-width: 1px;\n    flex-direction: column;\n    background-color: rgba(255, 255, 255, 0.1);\n    border-top-width: 0px;\n    border-left-width: 0px;\n    border-right-width: 0px;\n  }\n  .navbar-interactive-container39 {\n    display: flex;\n    position: relative;\n    flex-direction: row;\n    justify-content: space-between;\n    background-color: rgba(0, 0, 0, 0.1);\n  }\n  .navbar-interactive-icon76 {\n    top: 0px;\n    flex: 0 0 auto;\n    left: 1vh;\n    width: 3vh;\n    bottom: 0px;\n    height: 3vh;\n    margin: auto;\n    position: absolute;\n    align-self: center;\n  }\n  .navbar-interactive-navlink22 {\n    display: contents;\n  }\n  .navbar-interactive-text086 {\n    width: 100%;\n    display: flex;\n    padding: 1vh;\n    transition: 0.3s;\n    flex-direction: row;\n    text-transform: uppercase;\n    justify-content: flex-end;\n    text-decoration: none;\n  }\n  .navbar-interactive-text086:hover {\n    cursor: pointer;\n    box-shadow: 0px 0px 10px 0px #33b5e5 inset;\n  }\n  .navbar-interactive-text086:active {\n    box-shadow: 0px 0px 15px 0px #33b5e5 inset;\n  }\n  .navbar-interactive-text087 {\n    width: 100%;\n    display: flex;\n    padding: 1vh;\n    transition: 0.3s;\n    flex-direction: row;\n    justify-content: flex-end;\n  }\n  .navbar-interactive-text087:hover {\n    cursor: pointer;\n    box-shadow: 0px 0px 10px 0px #33b5e5 inset;\n  }\n  .navbar-interactive-text087:active {\n    box-shadow: 0px 0px 15px 0px #33b5e5 inset;\n  }\n  .navbar-interactive-text091 {\n    display: flex;\n    transition: 0.3s;\n    padding-top: 1vh;\n    padding-left: 2vh;\n    padding-right: 2vh;\n    padding-bottom: 1vh;\n    justify-content: flex-end;\n  }\n  .navbar-interactive-text091:hover {\n    cursor: pointer;\n    box-shadow: 0px 0px 10px 0px #33b5e5 inset;\n  }\n  .navbar-interactive-text091:active {\n    box-shadow: 0px 0px 15px 0px #33b5e5 inset;\n  }\n  .navbar-interactive-text092 {\n    display: flex;\n    transition: 0.3s;\n    padding-top: 1vh;\n    padding-left: 2vh;\n    padding-right: 2vh;\n    padding-bottom: 1vh;\n    justify-content: flex-end;\n  }\n  .navbar-interactive-text092:hover {\n    cursor: pointer;\n    box-shadow: 0px 0px 10px 0px #33b5e5 inset;\n  }\n  .navbar-interactive-text092:active {\n    box-shadow: 0px 0px 15px 0px #33b5e5 inset;\n  }\n  .navbar-interactive-text093 {\n    display: flex;\n    transition: 0.3s;\n    padding-top: 1vh;\n    padding-left: 2vh;\n    padding-right: 2vh;\n    padding-bottom: 1vh;\n    justify-content: flex-end;\n  }\n  .navbar-interactive-text093:hover {\n    cursor: pointer;\n    box-shadow: 0px 0px 10px 0px #33b5e5 inset;\n  }\n  .navbar-interactive-text093:active {\n    box-shadow: 0px 0px 15px 0px #33b5e5 inset;\n  }\n  .navbar-interactive-text094 {\n    display: flex;\n    transition: 0.3s;\n    padding-top: 1vh;\n    padding-left: 2vh;\n    padding-right: 2vh;\n    padding-bottom: 1vh;\n    justify-content: flex-end;\n  }\n  .navbar-interactive-text094:hover {\n    cursor: pointer;\n    box-shadow: 0px 0px 10px 0px #33b5e5 inset;\n  }\n  .navbar-interactive-text094:active {\n    box-shadow: 0px 0px 15px 0px #33b5e5 inset;\n  }\n  .navbar-interactive-container40 {\n    width: 100%;\n    display: flex;\n    border-color: var(--dl-color-scheme-blue);\n    border-width: 1px;\n    flex-direction: column;\n    background-color: rgba(255, 255, 255, 0.1);\n    border-top-width: 0px;\n    border-left-width: 0px;\n    border-right-width: 0px;\n  }\n  .navbar-interactive-container41 {\n    display: flex;\n    position: relative;\n    flex-direction: row;\n    justify-content: space-between;\n    background-color: rgba(0, 0, 0, 0.1);\n  }\n  .navbar-interactive-icon78 {\n    top: 0px;\n    flex: 0 0 auto;\n    left: 1vh;\n    width: 3vh;\n    bottom: 0px;\n    height: 3vh;\n    margin: auto;\n    position: absolute;\n    align-self: center;\n  }\n  .navbar-interactive-navlink23 {\n    display: contents;\n  }\n  .navbar-interactive-text095 {\n    width: 100%;\n    display: flex;\n    padding: 1vh;\n    transition: 0.3s;\n    flex-direction: row;\n    text-transform: uppercase;\n    justify-content: flex-end;\n    text-decoration: none;\n  }\n  .navbar-interactive-text095:hover {\n    cursor: pointer;\n    box-shadow: 0px 0px 10px 0px #33b5e5 inset;\n  }\n  .navbar-interactive-text095:active {\n    box-shadow: 0px 0px 15px 0px #33b5e5 inset;\n  }\n  .navbar-interactive-text096 {\n    display: flex;\n    transition: 0.3s;\n    padding-top: 1vh;\n    padding-left: 2vh;\n    padding-right: 2vh;\n    padding-bottom: 1vh;\n    justify-content: flex-end;\n  }\n  .navbar-interactive-text096:hover {\n    cursor: pointer;\n    box-shadow: 0px 0px 10px 0px #33b5e5 inset;\n  }\n  .navbar-interactive-text096:active {\n    box-shadow: 0px 0px 15px 0px #33b5e5 inset;\n  }\n  .navbar-interactive-text097 {\n    display: flex;\n    transition: 0.3s;\n    padding-top: 1vh;\n    padding-left: 2vh;\n    padding-right: 2vh;\n    padding-bottom: 1vh;\n    justify-content: flex-end;\n  }\n  .navbar-interactive-text097:hover {\n    cursor: pointer;\n    box-shadow: 0px 0px 10px 0px #33b5e5 inset;\n  }\n  .navbar-interactive-text097:active {\n    box-shadow: 0px 0px 15px 0px #33b5e5 inset;\n  }\n  .navbar-interactive-text098 {\n    display: flex;\n    transition: 0.3s;\n    padding-top: 1vh;\n    padding-left: 2vh;\n    padding-right: 2vh;\n    padding-bottom: 1vh;\n    justify-content: flex-end;\n  }\n  .navbar-interactive-text098:hover {\n    cursor: pointer;\n    box-shadow: 0px 0px 10px 0px #33b5e5 inset;\n  }\n  .navbar-interactive-text098:active {\n    box-shadow: 0px 0px 15px 0px #33b5e5 inset;\n  }\n  .navbar-interactive-container42 {\n    width: 100%;\n    display: flex;\n    border-color: var(--dl-color-scheme-blue);\n    border-width: 1px;\n    flex-direction: column;\n    background-color: rgba(255, 255, 255, 0.1);\n    border-top-width: 0px;\n    border-left-width: 0px;\n    border-right-width: 0px;\n  }\n  .navbar-interactive-container43 {\n    display: flex;\n    position: relative;\n    flex-direction: row;\n    justify-content: space-between;\n    background-color: rgba(0, 0, 0, 0.1);\n  }\n  .navbar-interactive-icon80 {\n    top: 0px;\n    flex: 0 0 auto;\n    left: 1vh;\n    width: 3vh;\n    bottom: 0px;\n    height: 3vh;\n    margin: auto;\n    position: absolute;\n    align-self: center;\n  }\n  .navbar-interactive-navlink24 {\n    display: contents;\n  }\n  .navbar-interactive-text099 {\n    width: 100%;\n    display: flex;\n    padding: 1vh;\n    transition: 0.3s;\n    flex-direction: row;\n    text-transform: uppercase;\n    justify-content: flex-end;\n    text-decoration: none;\n  }\n  .navbar-interactive-text099:hover {\n    cursor: pointer;\n    box-shadow: 0px 0px 10px 0px #33b5e5 inset;\n  }\n  .navbar-interactive-text099:active {\n    box-shadow: 0px 0px 15px 0px #33b5e5 inset;\n  }\n  .navbar-interactive-text100 {\n    display: flex;\n    transition: 0.3s;\n    padding-top: 1vh;\n    padding-left: 2vh;\n    padding-right: 2vh;\n    padding-bottom: 1vh;\n    justify-content: flex-end;\n  }\n  .navbar-interactive-text100:hover {\n    cursor: pointer;\n    box-shadow: 0px 0px 10px 0px #33b5e5 inset;\n  }\n  .navbar-interactive-text100:active {\n    box-shadow: 0px 0px 15px 0px #33b5e5 inset;\n  }\n  .navbar-interactive-text101 {\n    display: flex;\n    transition: 0.3s;\n    padding-top: 1vh;\n    padding-left: 2vh;\n    padding-right: 2vh;\n    padding-bottom: 1vh;\n    justify-content: flex-end;\n  }\n  .navbar-interactive-text101:hover {\n    cursor: pointer;\n    box-shadow: 0px 0px 10px 0px #33b5e5 inset;\n  }\n  .navbar-interactive-text101:active {\n    box-shadow: 0px 0px 15px 0px #33b5e5 inset;\n  }\n  .navbar-interactive-text102 {\n    display: flex;\n    transition: 0.3s;\n    padding-top: 1vh;\n    padding-left: 2vh;\n    padding-right: 2vh;\n    padding-bottom: 1vh;\n    justify-content: flex-end;\n  }\n  .navbar-interactive-text102:hover {\n    cursor: pointer;\n    box-shadow: 0px 0px 10px 0px #33b5e5 inset;\n  }\n  .navbar-interactive-text102:active {\n    box-shadow: 0px 0px 15px 0px #33b5e5 inset;\n  }\n  .navbar-interactive-text103 {\n    display: flex;\n    transition: 0.3s;\n    padding-top: 1vh;\n    padding-left: 2vh;\n    padding-right: 2vh;\n    padding-bottom: 1vh;\n    justify-content: flex-end;\n  }\n  .navbar-interactive-text103:hover {\n    cursor: pointer;\n    box-shadow: 0px 0px 10px 0px #33b5e5 inset;\n  }\n  .navbar-interactive-text103:active {\n    box-shadow: 0px 0px 15px 0px #33b5e5 inset;\n  }\n  .navbar-interactive-text104 {\n    display: flex;\n    transition: 0.3s;\n    padding-top: 1vh;\n    padding-left: 2vh;\n    padding-right: 2vh;\n    padding-bottom: 1vh;\n    justify-content: flex-end;\n  }\n  .navbar-interactive-text104:hover {\n    cursor: pointer;\n    box-shadow: 0px 0px 10px 0px #33b5e5 inset;\n  }\n  .navbar-interactive-text104:active {\n    box-shadow: 0px 0px 15px 0px #33b5e5 inset;\n  }\n\n  @media (max-width: 1200px) {\n    .navbar-interactive-desktop-menu {\n      display: none;\n    }\n  }\n  @media (max-width: 991px) {\n    .navbar-interactive-text {\n      bottom: 0px;\n      font-style: italic;\n      font-weight: 500;\n    }\n    .navbar-interactive-links {\n      display: none;\n    }\n    .navbar-interactive-container01 {\n      right: 9vh;\n    }\n    .navbar-interactive-container02 {\n      max-width: 82vw;\n      min-width: 30vw;\n      max-height: 92vh;\n      min-height: 20vh;\n    }\n    .navbar-interactive-side-bar {\n      display: inline-block;\n    }\n    .navbar-interactive-icon12 {\n      width: 6vh;\n      height: 6vh;\n      padding: 0.5vh;\n    }\n    .navbar-interactive-side-bar-content {\n      width: max-content;\n      max-width: auto;\n      min-width: auto;\n      border-color: var(--dl-color-scheme-blue);\n      border-width: 0px;\n      background-image: linear-gradient(\n        270deg,\n        rgb(0, 0, 0) 0%,\n        rgba(0, 0, 0, 0.9) 100%\n      );\n      border-left-width: 2px;\n    }\n    .navbar-interactive-main1 {\n      max-width: 100vw;\n      min-width: max-content;\n      background-image: linear-gradient(\n        270deg,\n        rgba(51, 181, 229, 0.3) 0%,\n        rgba(51, 181, 229, 0) 100%\n      );\n    }\n    .navbar-interactive-container14 {\n      width: auto;\n      height: 2px;\n      align-self: stretch;\n      background-image: linear-gradient(\n        90deg,\n        rgba(255, 255, 255, 0) 0%,\n        rgba(255, 255, 255, 0.5) 50%,\n        rgba(255, 255, 255, 0) 100%\n      );\n    }\n    .navbar-interactive-container15 {\n      width: auto;\n      height: auto;\n      display: flex;\n      padding: 1vh;\n      align-self: stretch;\n      justify-content: flex-end;\n      background-image: linear-gradient(\n        90deg,\n        rgba(255, 255, 255, 0) 0%,\n        rgba(255, 255, 255, 0.1) 29%,\n        rgba(255, 255, 255, 0.1) 100%\n      );\n    }\n    .navbar-interactive-icon16 {\n      max-width: 2.5vh;\n      min-width: 2.5vh;\n      align-self: center;\n      margin-top: -0.5vh;\n      max-height: 2.5vh;\n      min-height: 2.5vh;\n      margin-left: 0.5vh;\n      margin-right: 3vh;\n      margin-bottom: -0.5vh;\n    }\n    .navbar-interactive-text056 {\n      width: max-content;\n      min-width: max-content;\n      align-self: center;\n      margin-left: auto;\n      letter-spacing: 1px;\n      text-transform: uppercase;\n    }\n    .navbar-interactive-icon18 {\n      margin-top: -0.5vh;\n      margin-left: 3vh;\n      margin-bottom: -0.5vh;\n    }\n    .navbar-interactive-container16 {\n      width: auto;\n      height: auto;\n      display: flex;\n      align-self: stretch;\n      padding-top: 1vh;\n      padding-left: 1vh;\n      padding-right: 1vh;\n      padding-bottom: 1vh;\n      justify-content: flex-end;\n    }\n    .navbar-interactive-icon20 {\n      max-width: 2.5vh;\n      min-width: 2.5vh;\n      align-self: center;\n      margin-top: -0.5vh;\n      max-height: 2.5vh;\n      min-height: 2.5vh;\n      margin-left: 0.5vh;\n      margin-right: 3vh;\n      margin-bottom: -0.5vh;\n    }\n    .navbar-interactive-text057 {\n      color: rgba(217, 217, 217, 0.8);\n      width: max-content;\n      min-width: max-content;\n      align-self: center;\n      font-style: italic;\n      font-weight: 700;\n      margin-left: auto;\n    }\n    .navbar-interactive-icon22 {\n      width: 2vh;\n      height: 2vh;\n      align-self: center;\n      margin-top: -0.5vh;\n      margin-left: 3vh;\n      margin-right: 1vh;\n      margin-bottom: -0.5vh;\n    }\n    .navbar-interactive-container17 {\n      width: auto;\n      height: 2px;\n      align-self: stretch;\n      background-image: linear-gradient(\n        90deg,\n        rgba(255, 255, 255, 0) 0%,\n        rgba(255, 255, 255, 0.5) 50%,\n        rgba(255, 255, 255, 0) 100%\n      );\n    }\n    .navbar-interactive-container18 {\n      width: auto;\n      height: auto;\n      display: flex;\n      padding: 1vh;\n      align-self: stretch;\n      justify-content: flex-end;\n      background-image: linear-gradient(\n        90deg,\n        rgba(255, 255, 255, 0) 0%,\n        rgba(255, 255, 255, 0.1) 29%,\n        rgba(255, 255, 255, 0.1) 100%\n      );\n    }\n    .navbar-interactive-icon24 {\n      max-width: 2.5vh;\n      min-width: 2.5vh;\n      align-self: center;\n      margin-top: -0.5vh;\n      max-height: 2.5vh;\n      min-height: 2.5vh;\n      margin-left: 0.5vh;\n      margin-right: 3vh;\n      margin-bottom: -0.5vh;\n    }\n    .navbar-interactive-text058 {\n      width: max-content;\n      min-width: max-content;\n      align-self: center;\n      margin-left: auto;\n      letter-spacing: 1px;\n      text-transform: uppercase;\n    }\n    .navbar-interactive-icon26 {\n      margin-top: -0.5vh;\n      margin-left: 3vh;\n      margin-bottom: -0.5vh;\n    }\n    .navbar-interactive-container19 {\n      width: auto;\n      height: auto;\n      display: flex;\n      align-self: stretch;\n      padding-top: 1vh;\n      padding-left: 1vh;\n      padding-right: 1vh;\n      padding-bottom: 1vh;\n      justify-content: flex-end;\n    }\n    .navbar-interactive-icon28 {\n      max-width: 2.5vh;\n      min-width: 2.5vh;\n      align-self: center;\n      margin-top: -0.5vh;\n      max-height: 2.5vh;\n      min-height: 2.5vh;\n      margin-left: 0.5vh;\n      margin-right: 3vh;\n      margin-bottom: -0.5vh;\n    }\n    .navbar-interactive-text059 {\n      color: rgba(217, 217, 217, 0.8);\n      width: max-content;\n      min-width: max-content;\n      align-self: center;\n      font-style: italic;\n      font-weight: 700;\n      margin-left: auto;\n    }\n    .navbar-interactive-icon30 {\n      width: 2vh;\n      height: 2vh;\n      align-self: center;\n      margin-top: -0.5vh;\n      margin-left: 3vh;\n      margin-right: 1vh;\n      margin-bottom: -0.5vh;\n    }\n    .navbar-interactive-container20 {\n      width: auto;\n      height: auto;\n      display: flex;\n      align-self: stretch;\n      padding-top: 1vh;\n      padding-left: 1vh;\n      padding-right: 1vh;\n      padding-bottom: 1vh;\n      justify-content: flex-end;\n    }\n    .navbar-interactive-icon32 {\n      max-width: 2.5vh;\n      min-width: 2.5vh;\n      align-self: center;\n      margin-top: -0.5vh;\n      max-height: 2.5vh;\n      min-height: 2.5vh;\n      margin-left: 0.5vh;\n      margin-right: 3vh;\n      margin-bottom: -0.5vh;\n    }\n    .navbar-interactive-text060 {\n      color: rgba(217, 217, 217, 0.8);\n      width: max-content;\n      min-width: max-content;\n      align-self: center;\n      font-style: italic;\n      font-weight: 700;\n      margin-left: auto;\n    }\n    .navbar-interactive-icon34 {\n      width: 2vh;\n      height: 2vh;\n      align-self: center;\n      margin-top: -0.5vh;\n      margin-left: 3vh;\n      margin-right: 1vh;\n      margin-bottom: -0.5vh;\n    }\n    .navbar-interactive-container21 {\n      width: auto;\n      height: auto;\n      display: flex;\n      align-self: stretch;\n      padding-top: 1vh;\n      padding-left: 1vh;\n      padding-right: 1vh;\n      padding-bottom: 1vh;\n      justify-content: flex-end;\n    }\n    .navbar-interactive-icon36 {\n      max-width: 2.5vh;\n      min-width: 2.5vh;\n      align-self: center;\n      margin-top: -0.5vh;\n      max-height: 2.5vh;\n      min-height: 2.5vh;\n      margin-left: 0.5vh;\n      margin-right: 3vh;\n      margin-bottom: -0.5vh;\n    }\n    .navbar-interactive-text061 {\n      color: rgba(217, 217, 217, 0.8);\n      width: max-content;\n      min-width: max-content;\n      align-self: center;\n      font-style: italic;\n      font-weight: 700;\n      margin-left: auto;\n    }\n    .navbar-interactive-icon38 {\n      width: 2vh;\n      height: 2vh;\n      align-self: center;\n      margin-top: -0.5vh;\n      margin-left: 3vh;\n      margin-right: 1vh;\n      margin-bottom: -0.5vh;\n    }\n    .navbar-interactive-container22 {\n      width: auto;\n      height: auto;\n      display: flex;\n      align-self: stretch;\n      padding-top: 1vh;\n      padding-left: 1vh;\n      padding-right: 1vh;\n      padding-bottom: 1vh;\n      justify-content: flex-end;\n    }\n    .navbar-interactive-icon40 {\n      max-width: 2.5vh;\n      min-width: 2.5vh;\n      align-self: center;\n      margin-top: -0.5vh;\n      max-height: 2.5vh;\n      min-height: 2.5vh;\n      margin-left: 0.5vh;\n      margin-right: 3vh;\n      margin-bottom: -0.5vh;\n    }\n    .navbar-interactive-text062 {\n      color: rgba(217, 217, 217, 0.8);\n      width: max-content;\n      min-width: max-content;\n      align-self: center;\n      font-style: italic;\n      font-weight: 700;\n      margin-left: auto;\n    }\n    .navbar-interactive-icon42 {\n      width: 2vh;\n      height: 2vh;\n      align-self: center;\n      margin-top: -0.5vh;\n      margin-left: 3vh;\n      margin-right: 1vh;\n      margin-bottom: -0.5vh;\n    }\n    .navbar-interactive-container23 {\n      width: auto;\n      height: 2px;\n      align-self: stretch;\n      background-image: linear-gradient(\n        90deg,\n        rgba(255, 255, 255, 0) 0%,\n        rgba(255, 255, 255, 0.5) 50%,\n        rgba(255, 255, 255, 0) 100%\n      );\n    }\n    .navbar-interactive-container24 {\n      width: auto;\n      height: auto;\n      display: flex;\n      padding: 1vh;\n      align-self: stretch;\n      justify-content: flex-end;\n      background-image: linear-gradient(\n        90deg,\n        rgba(255, 255, 255, 0) 0%,\n        rgba(255, 255, 255, 0.1) 29%,\n        rgba(255, 255, 255, 0.1) 100%\n      );\n    }\n    .navbar-interactive-icon44 {\n      max-width: 2.5vh;\n      min-width: 2.5vh;\n      align-self: center;\n      margin-top: -0.5vh;\n      max-height: 2.5vh;\n      min-height: 2.5vh;\n      margin-left: 0.5vh;\n      margin-right: 3vh;\n      margin-bottom: -0.5vh;\n    }\n    .navbar-interactive-text066 {\n      width: max-content;\n      min-width: max-content;\n      align-self: center;\n      margin-left: auto;\n      letter-spacing: 1px;\n      text-transform: uppercase;\n    }\n    .navbar-interactive-icon46 {\n      margin-top: -0.5vh;\n      margin-left: 3vh;\n      margin-bottom: -0.5vh;\n    }\n    .navbar-interactive-container25 {\n      width: auto;\n      height: auto;\n      display: flex;\n      align-self: stretch;\n      padding-top: 1vh;\n      padding-left: 1vh;\n      padding-right: 1vh;\n      padding-bottom: 1vh;\n      justify-content: flex-end;\n    }\n    .navbar-interactive-icon48 {\n      max-width: 2.5vh;\n      min-width: 2.5vh;\n      align-self: center;\n      margin-top: -0.5vh;\n      max-height: 2.5vh;\n      min-height: 2.5vh;\n      margin-left: 0.5vh;\n      margin-right: 3vh;\n      margin-bottom: -0.5vh;\n    }\n    .navbar-interactive-text067 {\n      color: rgba(217, 217, 217, 0.8);\n      width: max-content;\n      min-width: max-content;\n      align-self: center;\n      font-style: italic;\n      font-weight: 700;\n      margin-left: auto;\n    }\n    .navbar-interactive-icon50 {\n      width: 2vh;\n      height: 2vh;\n      align-self: center;\n      margin-top: -0.5vh;\n      margin-left: 3vh;\n      margin-right: 1vh;\n      margin-bottom: -0.5vh;\n    }\n    .navbar-interactive-container26 {\n      width: auto;\n      height: auto;\n      display: flex;\n      align-self: stretch;\n      padding-top: 1vh;\n      padding-left: 1vh;\n      padding-right: 1vh;\n      padding-bottom: 1vh;\n      justify-content: flex-end;\n    }\n    .navbar-interactive-icon52 {\n      max-width: 2.5vh;\n      min-width: 2.5vh;\n      align-self: center;\n      margin-top: -0.5vh;\n      max-height: 2.5vh;\n      min-height: 2.5vh;\n      margin-left: 0.5vh;\n      margin-right: 3vh;\n      margin-bottom: -0.5vh;\n    }\n    .navbar-interactive-text073 {\n      color: rgba(217, 217, 217, 0.8);\n      width: max-content;\n      min-width: max-content;\n      align-self: center;\n      font-style: italic;\n      font-weight: 700;\n      margin-left: auto;\n    }\n    .navbar-interactive-icon54 {\n      width: 2vh;\n      height: 2vh;\n      align-self: center;\n      margin-top: -0.5vh;\n      margin-left: 3vh;\n      margin-right: 1vh;\n      margin-bottom: -0.5vh;\n    }\n    .navbar-interactive-container27 {\n      width: auto;\n      height: auto;\n      display: flex;\n      align-self: stretch;\n      padding-top: 1vh;\n      padding-left: 1vh;\n      padding-right: 1vh;\n      padding-bottom: 1vh;\n      justify-content: flex-end;\n    }\n    .navbar-interactive-icon56 {\n      max-width: 2.5vh;\n      min-width: 2.5vh;\n      align-self: center;\n      margin-top: -0.5vh;\n      max-height: 2.5vh;\n      min-height: 2.5vh;\n      margin-left: 0.5vh;\n      margin-right: 3vh;\n      margin-bottom: -0.5vh;\n    }\n    .navbar-interactive-text074 {\n      color: rgba(217, 217, 217, 0.8);\n      width: max-content;\n      min-width: max-content;\n      align-self: center;\n      font-style: italic;\n      font-weight: 700;\n      margin-left: auto;\n    }\n    .navbar-interactive-icon58 {\n      width: 2vh;\n      height: 2vh;\n      align-self: center;\n      margin-top: -0.5vh;\n      margin-left: 3vh;\n      margin-right: 1vh;\n      margin-bottom: -0.5vh;\n    }\n    .navbar-interactive-if-logged {\n      display: none;\n    }\n    .navbar-interactive-if-unlogged {\n      display: none;\n    }\n    .navbar-interactive-nav {\n      display: none;\n    }\n    .navbar-interactive-text086 {\n      align-items: flex-end;\n      flex-direction: column;\n      text-transform: uppercase;\n      justify-content: center;\n    }\n  }\n  @media (max-width: 767px) {\n    .navbar-interactive-side-bar-content {\n      max-width: 100vw;\n      min-width: 100vw;\n    }\n    .navbar-interactive-main {\n      align-items: flex-end;\n    }\n    .navbar-interactive-container28 {\n      margin-top: auto;\n    }\n    .navbar-interactive-if-logged {\n      display: none;\n    }\n  }\n  @media (max-width: 479px) {\n    .navbar-interactive-image {\n      margin-right: 2vh;\n    }\n  }\n\n  .footer-container {\n    flex: 0 0 auto;\n    left: 0;\n    right: 0;\n    width: 100%;\n    bottom: 0;\n    height: auto;\n    display: flex;\n    z-index: 1001;\n    position: relative;\n    flex-wrap: wrap;\n    max-width: 100vw;\n    box-shadow: 0px -5px 10px 0px #33b5e5;\n    padding-top: 1vh;\n    padding-left: 3vh;\n    padding-right: 3vh;\n    flex-direction: column;\n    padding-bottom: 1vh;\n    justify-content: flex-start;\n    background-color: #333;\n  }\n  .footer-container01 {\n    flex: 1;\n    width: auto;\n    display: flex;\n    align-items: flex-start;\n    flex-direction: row;\n    justify-content: space-between;\n  }\n  .footer-container02 {\n    flex: 1;\n    display: flex;\n    max-width: 75%;\n    align-items: flex-start;\n    flex-direction: row;\n    justify-content: flex-start;\n  }\n  .footer-container03 {\n    flex: 1;\n    display: flex;\n    max-width: 30%;\n    align-self: stretch;\n    align-items: stretch;\n    flex-direction: column;\n  }\n  .footer-image {\n    flex: 1;\n    max-width: 100%;\n    align-self: stretch;\n    object-fit: contain;\n  }\n  .footer-container04 {\n    flex: 1;\n    display: flex;\n    max-width: 70%;\n    align-self: center;\n    align-items: flex-start;\n    flex-direction: column;\n    justify-content: flex-start;\n  }\n  .footer-container05 {\n    flex: 0 0 auto;\n    width: 100%;\n    display: flex;\n    align-self: stretch;\n    align-items: center;\n    padding-top: 1vh;\n    padding-left: 2vh;\n    border-radius: var(--dl-radius-radius-radius16);\n    padding-right: 2vh;\n    flex-direction: column;\n    padding-bottom: 1vh;\n    justify-content: center;\n    border-top-right-radius: var(--dl-radius-radius-radius16);\n  }\n  .footer-container06 {\n    display: flex;\n    align-items: flex-start;\n    flex-direction: column;\n    justify-content: center;\n  }\n  .footer-text {\n    align-self: stretch;\n    text-align: center;\n    text-shadow: 0 0 1px #333, 0 0 1px #333;\n  }\n  .footer-container07 {\n    flex: 0 0 auto;\n    height: 0px;\n    display: flex;\n    align-self: stretch;\n    box-shadow: 0px 0px 100px 20px #33b5e5;\n    align-items: flex-start;\n    flex-direction: column;\n  }\n  .footer-text01 {\n    align-self: stretch;\n    font-style: italic;\n    text-align: center;\n  }\n  .footer-icon-group {\n    display: flex;\n    flex-wrap: wrap;\n    max-width: 25%;\n    align-self: center;\n    align-items: center;\n    flex-direction: row;\n    justify-content: center;\n  }\n  .footer-text02 {\n    width: 100%;\n    text-align: center;\n  }\n  .footer-container08 {\n    display: flex;\n    align-items: center;\n    flex-direction: row;\n    justify-content: space-between;\n  }\n  .footer-icon {\n    margin: 1vh;\n  }\n  .footer-icon2 {\n    margin: 1vh;\n    transition: 0.3s;\n  }\n  .footer-icon2:hover {\n    transform: scale(1.1);\n  }\n  .footer-container09 {\n    display: flex;\n    align-items: center;\n    flex-direction: row;\n    justify-content: space-between;\n  }\n  .footer-icon4 {\n    margin: 1vh;\n    transition: 0.3s;\n  }\n  .footer-icon4:hover {\n    transform: scale(1.1);\n  }\n  .footer-link {\n    display: contents;\n  }\n  .footer-image1 {\n    margin: 1vh;\n    transition: 0.3s;\n    text-decoration: none;\n  }\n  .footer-image1:hover {\n    transform: scale(1.1);\n  }\n  .footer-container10 {\n    flex: 0 0 auto;\n    display: flex;\n    flex-wrap: wrap;\n    max-width: 100%;\n    align-self: stretch;\n    align-items: flex-start;\n    padding-top: 1vh;\n    flex-direction: row;\n    padding-bottom: 1vh;\n    justify-content: center;\n  }\n  .footer-text03 {\n    margin-top: 0.1rem;\n    margin-left: 0.2rem;\n    margin-right: 0.2rem;\n    margin-bottom: 0.1rem;\n    text-decoration: rgb(51, 181, 229);\n  }\n  .footer-container11 {\n    display: flex;\n    align-items: flex-start;\n    flex-direction: row;\n    justify-content: center;\n  }\n  .footer-text04 {\n    margin-top: 0.1rem;\n    margin-bottom: 0.1rem;\n    text-decoration: rgb(51, 181, 229);\n  }\n  .footer-link1 {\n    display: contents;\n  }\n  .footer-text05 {\n    margin-top: 0.1rem;\n    margin-bottom: 0.1rem;\n    text-decoration: rgb(51, 181, 229);\n  }\n  .footer-text06 {\n    margin-top: 0.1rem;\n    margin-bottom: 0.1rem;\n    text-decoration: rgb(51, 181, 229);\n  }\n  .footer-link2 {\n    display: contents;\n  }\n  .footer-text07 {\n    margin-top: 0.1rem;\n    margin-bottom: 0.1rem;\n    text-decoration: rgb(51, 181, 229);\n  }\n  .footer-text08 {\n    margin-top: 0.1rem;\n    margin-bottom: 0.1rem;\n    text-decoration: rgb(51, 181, 229);\n  }\n  .footer-text09 {\n    margin-top: 0.1rem;\n    margin-bottom: 0.1rem;\n    text-decoration: rgb(51, 181, 229);\n  }\n  .footer-text10 {\n    margin-top: 0.1rem;\n    margin-left: 0.2rem;\n    margin-right: 0.2rem;\n    margin-bottom: 0.1rem;\n    text-decoration: rgb(51, 181, 229);\n  }\n  .footer-container12 {\n    display: flex;\n    align-items: flex-end;\n    padding-left: 3vh;\n    padding-right: 3vh;\n    flex-direction: row;\n    justify-content: center;\n  }\n  .footer-icon6 {\n    fill: var(--dl-color-success-700);\n    width: 2vh;\n    height: 2vh;\n  }\n  .footer-text11 {\n    margin-left: 0.5vh;\n  }\n\n  .footer-root-class-name39 {\n    left: 0px;\n    right: 0px;\n    bottom: 0px;\n    position: static;\n  }\n\n  @media (max-width: 991px) {\n    .footer-container02 {\n      justify-content: flex-start;\n    }\n  }\n  @media (max-width: 767px) {\n    .footer-container01 {\n      flex-direction: column;\n    }\n    .footer-container02 {\n      max-width: 100%;\n      align-self: stretch;\n      justify-content: space-between;\n    }\n    .footer-container04 {\n      max-width: 70%;\n    }\n    .footer-container05 {\n      width: 100%;\n      padding-top: 0vh;\n      padding-left: 0vh;\n      padding-right: 0vh;\n    }\n    .footer-icon {\n      margin-left: 2vh;\n    }\n    .footer-icon2 {\n      margin-left: 2vh;\n    }\n    .footer-icon4 {\n      margin-left: 2vh;\n    }\n    .footer-image1 {\n      margin-left: 2vh;\n      margin-right: 2vh;\n    }\n    .footer-container10 {\n      justify-content: center;\n    }\n    .footer-text04 {\n      text-decoration: rgb(51, 181, 229);\n    }\n    .footer-text05 {\n      text-decoration: underline rgb(51, 181, 229);\n    }\n    .footer-text06 {\n      text-decoration: rgb(51, 181, 229);\n    }\n    .footer-text07 {\n      text-decoration: underline rgb(51, 181, 229);\n    }\n    .footer-text08 {\n      text-decoration: rgb(51, 181, 229);\n    }\n    .footer-text09 {\n      text-decoration: rgb(51, 181, 229);\n    }\n    .footer-text10 {\n      text-decoration: rgb(51, 181, 229);\n    }\n  }\n  @media (max-width: 479px) {\n    .footer-container02 {\n      margin-bottom: 1vh;\n      flex-direction: column;\n    }\n    .footer-container03 {\n      max-width: 100%;\n      align-items: center;\n      flex-direction: row;\n      justify-content: center;\n    }\n    .footer-image {\n      max-width: 35%;\n      align-self: center;\n    }\n    .footer-container04 {\n      max-width: 100%;\n    }\n    .footer-container05 {\n      max-width: 100%;\n    }\n    .footer-icon-group {\n      max-width: 100%;\n      min-width: 100%;\n      align-self: center;\n    }\n  }\n\n  .b5-fc-crowdfunding-container {\n    width: 100%;\n    display: flex;\n    overflow: auto;\n    min-height: 100vh;\n    align-items: center;\n    flex-direction: column;\n    justify-content: flex-start;\n  }\n  .b5-fc-crowdfunding-container01 {\n    top: 8vh;\n    flex: 0 0 auto;\n    left: 0px;\n    right: 0px;\n    width: 100%;\n    bottom: 0px;\n    height: auto;\n    margin: auto;\n    display: flex;\n    position: absolute;\n    overflow-x: hidden;\n    overflow-y: auto;\n    align-items: center;\n    flex-direction: column;\n    background-color: var(--dl-color-gray-black);\n  }\n  .b5-fc-crowdfunding-pricing {\n    flex: 0 0 auto;\n    width: 100%;\n    display: flex;\n    z-index: 102;\n    position: relative;\n    min-height: 100vh;\n    align-items: flex-start;\n    justify-content: center;\n  }\n  .b5-fc-crowdfunding-container02 {\n    flex: 1;\n    width: 100%;\n    display: flex;\n    padding: var(--dl-space-space-threeunits);\n    z-index: 103;\n    align-self: flex-start;\n    align-items: center;\n    justify-content: center;\n    background-color: rgba(0, 0, 0, 0.6);\n  }\n  .b5-fc-crowdfunding-container03 {\n    flex: 1;\n    display: flex;\n    max-width: var(--dl-size-size-maxwidth);\n    align-items: center;\n    flex-direction: column;\n    justify-content: center;\n  }\n  .b5-fc-crowdfunding-container04 {\n    flex: 1;\n    display: flex;\n    align-items: flex-start;\n    flex-direction: column;\n  }\n  .b5-fc-crowdfunding-container05 {\n    display: flex;\n    z-index: 102;\n    flex-wrap: wrap;\n    align-self: center;\n    align-items: flex-start;\n    flex-direction: row;\n    justify-content: center;\n  }\n  .b5-fc-crowdfunding-text {\n    color: var(--dl-color-gray-950);\n    width: auto;\n    align-self: flex-end;\n    text-align: left;\n    line-height: 0.8;\n    text-shadow: 0 0 5px #33b5e5, 0 0 5px #33b5e5;\n  }\n  .b5-fc-crowdfunding-text001 {\n    font-size: 110%;\n    font-style: italic;\n    font-weight: 700;\n  }\n  .b5-fc-crowdfunding-text002 {\n    color: var(--dl-color-scheme-blue);\n    font-size: 110%;\n  }\n  .b5-fc-crowdfunding-text004 {\n    font-style: italic;\n    font-weight: 700;\n  }\n  .b5-fc-crowdfunding-text005 {\n    color: var(--dl-color-gray-950);\n    align-self: stretch;\n    margin-top: var(--dl-space-space-twounits);\n    text-align: center;\n    margin-bottom: var(--dl-space-space-twounits);\n  }\n  .b5-fc-crowdfunding-container06 {\n    flex: 0 0 auto;\n    height: 3px;\n    display: flex;\n    z-index: 110;\n    align-self: stretch;\n    margin-bottom: 2vh;\n    background-image: linear-gradient(\n      90deg,\n      rgba(255, 255, 255, 0) 0%,\n      rgb(51, 181, 229) 50%,\n      rgba(255, 255, 255, 0) 100%\n    );\n  }\n  .b5-fc-crowdfunding-steps {\n    display: flex;\n    align-self: stretch;\n    align-items: center;\n    flex-direction: column;\n  }\n  .b5-fc-crowdfunding-container07 {\n    display: flex;\n    flex-wrap: wrap;\n    align-self: stretch;\n    align-items: flex-start;\n    flex-direction: column;\n    justify-content: space-around;\n  }\n  .b5-fc-crowdfunding-step {\n    flex: auto;\n    display: flex;\n    padding: 3vh;\n    max-width: 100%;\n    min-width: 30%;\n    align-self: stretch;\n    transition: 0.3s;\n    align-items: center;\n    flex-direction: row;\n    justify-content: space-between;\n  }\n  .b5-fc-crowdfunding-step:hover {\n    transform: scale(1.05);\n    box-shadow: 0px 0px 10px 0px #33b5e5;\n    border-radius: var(--dl-radius-radius-radius16);\n    background-color: rgba(51, 181, 229, 0.1);\n  }\n  .b5-fc-crowdfunding-container08 {\n    display: flex;\n    position: relative;\n    align-items: center;\n    flex-direction: row;\n    justify-content: flex-start;\n  }\n  .b5-fc-crowdfunding-text010 {\n    top: -130%;\n    left: 0px;\n    color: rgba(51, 181, 229, 0.8);\n    bottom: 0px;\n    margin: auto;\n    position: absolute;\n    text-align: left;\n    font-weight: 900;\n  }\n  .b5-fc-crowdfunding-text012 {\n    font-size: 150%;\n  }\n  .b5-fc-crowdfunding-text014 {\n    color: rgba(255, 255, 255, 0.8);\n    z-index: 100;\n    align-self: flex-end;\n    text-align: left;\n    font-weight: 500;\n    text-shadow: 3 3 4px #000, 3 3 4px #000;\n  }\n  .b5-fc-crowdfunding-text015 {\n    color: rgba(255, 255, 255, 0.9);\n    z-index: 100;\n    font-style: italic;\n    text-align: left;\n    font-weight: 500;\n    text-shadow: 3 3 4px #000, 3 3 4px #000;\n  }\n  .b5-fc-crowdfunding-text016 {\n    flex: 1;\n    max-width: 500px;\n    margin-top: 1vh;\n    text-align: center;\n    padding-left: 3vh;\n    margin-bottom: 1vh;\n    padding-right: 3vh;\n  }\n  .b5-fc-crowdfunding-step1 {\n    flex: auto;\n    display: flex;\n    padding: 3vh;\n    max-width: 100%;\n    min-width: 30%;\n    align-self: stretch;\n    transition: 0.3s;\n    align-items: center;\n    flex-direction: row;\n    justify-content: space-between;\n  }\n  .b5-fc-crowdfunding-step1:hover {\n    transform: scale(1.05);\n    box-shadow: 0px 0px 10px 0px #33b5e5;\n    border-radius: var(--dl-radius-radius-radius16);\n    background-color: rgba(51, 181, 229, 0.1);\n  }\n  .b5-fc-crowdfunding-text021 {\n    flex: 1;\n    max-width: 500px;\n    margin-top: 1vh;\n    text-align: center;\n    padding-left: 3vh;\n    margin-bottom: 1vh;\n    padding-right: 3vh;\n  }\n  .b5-fc-crowdfunding-container11 {\n    display: flex;\n    position: relative;\n    align-items: center;\n    flex-direction: row;\n    justify-content: flex-start;\n  }\n  .b5-fc-crowdfunding-text026 {\n    top: -130%;\n    color: rgba(51, 181, 229, 0.8);\n    right: 0px;\n    bottom: 0px;\n    margin: auto;\n    position: absolute;\n    text-align: right;\n    font-weight: 900;\n  }\n  .b5-fc-crowdfunding-text028 {\n    font-size: 150%;\n  }\n  .b5-fc-crowdfunding-text030 {\n    color: rgba(255, 255, 255, 0.8);\n    z-index: 100;\n    align-self: flex-end;\n    text-align: left;\n    font-weight: 500;\n    text-shadow: 3 3 4px #000, 3 3 4px #000;\n  }\n  .b5-fc-crowdfunding-text031 {\n    color: rgba(255, 255, 255, 0.9);\n    z-index: 100;\n    font-style: italic;\n    text-align: left;\n    font-weight: 500;\n    text-shadow: 3 3 4px #000, 3 3 4px #000;\n  }\n  .b5-fc-crowdfunding-step2 {\n    flex: auto;\n    display: flex;\n    padding: 3vh;\n    max-width: 100%;\n    min-width: 30%;\n    align-self: stretch;\n    transition: 0.3s;\n    align-items: center;\n    flex-direction: row;\n    justify-content: space-between;\n  }\n  .b5-fc-crowdfunding-step2:hover {\n    transform: scale(1.05);\n    box-shadow: 0px 0px 10px 0px #33b5e5;\n    border-radius: var(--dl-radius-radius-radius16);\n    background-color: rgba(51, 181, 229, 0.1);\n  }\n  .b5-fc-crowdfunding-container12 {\n    display: flex;\n    position: relative;\n    align-items: center;\n    flex-direction: row;\n    justify-content: flex-start;\n  }\n  .b5-fc-crowdfunding-text032 {\n    top: -130%;\n    left: 0px;\n    color: rgba(51, 181, 229, 0.8);\n    bottom: 0px;\n    margin: auto;\n    position: absolute;\n    text-align: left;\n    font-weight: 900;\n  }\n  .b5-fc-crowdfunding-text034 {\n    font-size: 150%;\n  }\n  .b5-fc-crowdfunding-text036 {\n    color: rgba(255, 255, 255, 0.8);\n    z-index: 100;\n    align-self: flex-end;\n    text-align: left;\n    font-weight: 500;\n    text-shadow: 3 3 4px #000, 3 3 4px #000;\n  }\n  .b5-fc-crowdfunding-text037 {\n    color: rgba(255, 255, 255, 0.9);\n    z-index: 100;\n    font-style: italic;\n    text-align: left;\n    font-weight: 500;\n    text-shadow: 3 3 4px #000, 3 3 4px #000;\n  }\n  .b5-fc-crowdfunding-text038 {\n    flex: 1;\n    max-width: 500px;\n    margin-top: 1vh;\n    text-align: center;\n    padding-left: 3vh;\n    margin-bottom: 1vh;\n    padding-right: 3vh;\n  }\n  .b5-fc-crowdfunding-container14 {\n    flex: 0 0 auto;\n    height: 3px;\n    display: flex;\n    z-index: 110;\n    align-self: stretch;\n    margin-top: 2vh;\n    margin-bottom: 2vh;\n    background-image: linear-gradient(\n      90deg,\n      rgba(255, 255, 255, 0) 0%,\n      rgb(51, 181, 229) 50%,\n      rgba(255, 255, 255, 0) 100%\n    );\n  }\n  .b5-fc-crowdfunding-text041 {\n    margin: 2vh;\n  }\n  .b5-fc-crowdfunding-container15 {\n    display: flex;\n    flex-wrap: wrap;\n    align-self: stretch;\n    align-items: center;\n    justify-content: center;\n  }\n  .b5-fc-crowdfunding-container16 {\n    flex: 1;\n    color: var(--dl-color-gray-white);\n    margin: 1.5vw;\n    display: flex;\n    position: relative;\n    flex-wrap: wrap;\n    max-width: 100%;\n    align-self: stretch;\n    box-shadow: 2px 2px 10px 0px #d4d4d4;\n    min-height: auto;\n    transition: 0.3s;\n    align-items: center;\n    padding-top: 2vh;\n    border-color: var(--dl-color-gray-white);\n    border-width: 1px;\n    border-radius: var(--dl-radius-radius-radius16);\n    flex-direction: row;\n    justify-content: center;\n    background-image: linear-gradient(\n        90deg,\n        rgb(0, 157, 34) 0%,\n        rgba(255, 255, 255, 0.05) 100%\n      ),\n      linear-gradient(90deg, rgb(0, 0, 0) 0%, rgb(0, 0, 0) 100%);\n    border-top-right-radius: 0;\n    border-bottom-left-radius: 0;\n  }\n  .b5-fc-crowdfunding-container16:hover {\n    transform: scale(1.02);\n  }\n  .b5-fc-crowdfunding-container17 {\n    display: flex;\n    align-items: center;\n    flex-direction: column;\n  }\n  .b5-fc-crowdfunding-text042 {\n    color: var(--dl-color-success-700);\n    margin-top: 1vh;\n    margin-left: 2vh;\n    text-shadow: 0 0 5px #fff, 0 0 5px #fff;\n    margin-right: 2vh;\n    margin-bottom: 1vh;\n    letter-spacing: 2px;\n  }\n  .b5-fc-crowdfunding-text043 {\n    align-self: center;\n    margin-top: 2vh;\n    margin-left: 2vh;\n    margin-right: 2vh;\n  }\n  .b5-fc-crowdfunding-text044 {\n    align-self: center;\n    margin-left: 3vh;\n    margin-right: 3vh;\n    margin-bottom: 2vh;\n  }\n  .b5-fc-crowdfunding-text045 {\n    font-size: 120%;\n  }\n  .b5-fc-crowdfunding-text047 {\n    font-style: italic;\n    font-weight: 700;\n  }\n  .b5-fc-crowdfunding-text049 {\n    font-size: 80%;\n  }\n  .b5-fc-crowdfunding-container18 {\n    flex: 1;\n    display: flex;\n    flex-wrap: wrap;\n    align-self: stretch;\n    align-items: center;\n    flex-direction: row;\n    justify-content: center;\n  }\n  .b5-fc-crowdfunding-container19 {\n    flex: 1;\n    margin: 1vh;\n    display: flex;\n    min-width: 20vw;\n    align-self: stretch;\n    align-items: center;\n    border-radius: var(--dl-radius-radius-radius16);\n    flex-direction: column;\n    background-image: linear-gradient(\n      45deg,\n      rgba(255, 255, 255, 0.1) 0%,\n      rgba(255, 255, 255, 0.2) 100%\n    );\n    border-top-right-radius: 0;\n    border-bottom-left-radius: 0;\n  }\n  .b5-fc-crowdfunding-text050 {\n    align-self: center;\n    margin-top: 2vh;\n    text-align: center;\n    margin-bottom: 1vh;\n  }\n  .b5-fc-crowdfunding-text051 {\n    text-decoration: underline;\n  }\n  .b5-fc-crowdfunding-container20 {\n    display: flex;\n    align-items: center;\n    margin-bottom: 2vh;\n    flex-direction: row;\n  }\n  .b5-fc-crowdfunding-container21 {\n    display: flex;\n    align-items: center;\n    flex-direction: column;\n  }\n  .b5-fc-crowdfunding-text053 {\n    align-self: center;\n    text-align: center;\n    letter-spacing: 1px;\n  }\n  .b5-fc-crowdfunding-text056 {\n    align-self: center;\n    text-align: center;\n  }\n  .b5-fc-crowdfunding-text057 {\n    font-size: 115%;\n    font-style: italic;\n    font-weight: 700;\n  }\n  .b5-fc-crowdfunding-icon {\n    fill: #d9d9d9;\n    width: 2vh;\n    height: 2vh;\n    margin-left: 1vh;\n    margin-right: 1vh;\n  }\n  .b5-fc-crowdfunding-container22 {\n    display: flex;\n    align-items: center;\n    flex-direction: column;\n  }\n  .b5-fc-crowdfunding-text059 {\n    align-self: center;\n    text-align: center;\n  }\n  .b5-fc-crowdfunding-text062 {\n    align-self: center;\n    text-align: center;\n  }\n  .b5-fc-crowdfunding-text063 {\n    font-size: 115%;\n    font-style: italic;\n    font-weight: 700;\n  }\n  .b5-fc-crowdfunding-container23 {\n    flex: 1;\n    margin: 1vh;\n    display: flex;\n    min-width: 20vw;\n    align-self: stretch;\n    align-items: center;\n    border-radius: var(--dl-radius-radius-radius16);\n    flex-direction: column;\n    background-image: linear-gradient(\n      45deg,\n      rgba(255, 255, 255, 0.1) 0%,\n      rgba(255, 255, 255, 0.2) 100%\n    );\n    border-top-right-radius: 0;\n    border-bottom-left-radius: 0;\n  }\n  .b5-fc-crowdfunding-text065 {\n    align-self: center;\n    margin-top: 2vh;\n    text-align: center;\n    margin-bottom: 1vh;\n  }\n  .b5-fc-crowdfunding-text066 {\n    text-decoration: underline;\n  }\n  .b5-fc-crowdfunding-container24 {\n    display: flex;\n    align-items: center;\n    margin-bottom: 2vh;\n    flex-direction: row;\n  }\n  .b5-fc-crowdfunding-container25 {\n    display: flex;\n    align-items: center;\n    flex-direction: column;\n  }\n  .b5-fc-crowdfunding-text068 {\n    align-self: center;\n    text-align: center;\n    letter-spacing: 1px;\n  }\n  .b5-fc-crowdfunding-text071 {\n    align-self: center;\n    text-align: center;\n  }\n  .b5-fc-crowdfunding-text072 {\n    font-size: 115%;\n    font-style: italic;\n    font-weight: 700;\n  }\n  .b5-fc-crowdfunding-icon02 {\n    fill: #d9d9d9;\n    width: 2vh;\n    height: 2vh;\n    margin-left: 1vh;\n    margin-right: 1vh;\n  }\n  .b5-fc-crowdfunding-container26 {\n    display: flex;\n    align-items: center;\n    flex-direction: column;\n  }\n  .b5-fc-crowdfunding-text074 {\n    align-self: center;\n    text-align: center;\n  }\n  .b5-fc-crowdfunding-text077 {\n    align-self: center;\n    text-align: center;\n  }\n  .b5-fc-crowdfunding-text078 {\n    font-size: 115%;\n    font-style: italic;\n    font-weight: 700;\n  }\n  .b5-fc-crowdfunding-text080 {\n    flex: 1;\n    min-width: 100%;\n    align-self: center;\n    margin-top: 2vh;\n    text-align: center;\n    margin-left: 2vh;\n    margin-right: 2vh;\n  }\n  .b5-fc-crowdfunding-text081 {\n    font-size: 110%;\n    font-style: italic;\n    font-weight: 700;\n  }\n  .b5-fc-crowdfunding-text082 {\n    font-style: italic;\n    font-weight: 700;\n  }\n  .b5-fc-crowdfunding-text083 {\n    font-size: 110%;\n    font-style: italic;\n    font-weight: 700;\n  }\n  .b5-fc-crowdfunding-container27 {\n    flex: 0 0 auto;\n    width: 100%;\n    height: 2px;\n    display: block;\n    align-self: stretch;\n    background-image: linear-gradient(\n      90deg,\n      rgba(255, 255, 255, 0) 0%,\n      rgba(255, 255, 255, 0.5) 50%,\n      rgba(255, 255, 255, 0) 100%\n    );\n  }\n  .b5-fc-crowdfunding-container28 {\n    flex: 1;\n    width: 100%;\n    display: flex;\n    align-self: stretch;\n    align-items: center;\n    flex-direction: column;\n    padding-bottom: 2vh;\n    background-color: rgba(255, 255, 255, 0.1);\n  }\n  .b5-fc-crowdfunding-text085 {\n    margin-top: 1vh;\n    text-align: center;\n    margin-left: 2vh;\n    margin-right: 2vh;\n    margin-bottom: 1vh;\n  }\n  .b5-fc-crowdfunding-text086 {\n    text-decoration: underline;\n  }\n  .b5-fc-crowdfunding-text088 {\n    font-size: 115%;\n    font-style: italic;\n    font-weight: 700;\n  }\n  .b5-fc-crowdfunding-text089 {\n    margin-top: 1vh;\n    text-align: center;\n    margin-left: 2vh;\n    margin-right: 2vh;\n    margin-bottom: 1vh;\n  }\n  .b5-fc-crowdfunding-text090 {\n    text-decoration: underline;\n  }\n  .b5-fc-crowdfunding-text092 {\n    font-size: 115%;\n    font-style: italic;\n    font-weight: 700;\n  }\n  .b5-fc-crowdfunding-icon04 {\n    top: 0px;\n    fill: rgba(51, 181, 229, 0.7);\n    right: -3vw;\n    width: 3vw;\n    bottom: 0px;\n    height: 3vw;\n    margin: auto;\n    position: absolute;\n  }\n  .b5-fc-crowdfunding-container29 {\n    flex: 1;\n    color: var(--dl-color-gray-white);\n    margin: 1.5vw;\n    display: flex;\n    position: relative;\n    flex-wrap: wrap;\n    max-width: 100%;\n    align-self: stretch;\n    box-shadow: 2px 2px 10px 0px #d4d4d4;\n    min-height: auto;\n    transition: 0.3s;\n    align-items: center;\n    padding-top: 2vh;\n    border-color: var(--dl-color-gray-white);\n    border-width: 1px;\n    border-radius: var(--dl-radius-radius-radius16);\n    flex-direction: row;\n    justify-content: center;\n    background-image: linear-gradient(\n        90deg,\n        rgba(51, 181, 229, 0.5) 0%,\n        rgba(51, 181, 229, 0.05) 100%\n      ),\n      linear-gradient(90deg, rgb(0, 0, 0) 0%, rgb(0, 0, 0) 100%);\n    border-top-right-radius: 0;\n    border-bottom-left-radius: 0;\n  }\n  .b5-fc-crowdfunding-container29:hover {\n    transform: scale(1.02);\n  }\n  .b5-fc-crowdfunding-container30 {\n    display: flex;\n    align-items: center;\n    flex-direction: column;\n  }\n  .b5-fc-crowdfunding-text094 {\n    color: var(--dl-color-scheme-blue);\n    margin-top: 1vh;\n    margin-left: 2vh;\n    margin-right: 2vh;\n    margin-bottom: 1vh;\n    letter-spacing: 2px;\n  }\n  .b5-fc-crowdfunding-text095 {\n    align-self: center;\n    margin-top: 2vh;\n    margin-left: 2vh;\n    margin-right: 2vh;\n  }\n  .b5-fc-crowdfunding-text096 {\n    align-self: center;\n    margin-left: 3vh;\n    margin-right: 3vh;\n    margin-bottom: 2vh;\n  }\n  .b5-fc-crowdfunding-text097 {\n    font-size: 120%;\n  }\n  .b5-fc-crowdfunding-text099 {\n    font-style: italic;\n    font-weight: 700;\n  }\n  .b5-fc-crowdfunding-text101 {\n    font-size: 80%;\n  }\n  .b5-fc-crowdfunding-container31 {\n    flex: 1;\n    display: flex;\n    flex-wrap: wrap;\n    align-self: stretch;\n    align-items: center;\n    flex-direction: row;\n    justify-content: center;\n  }\n  .b5-fc-crowdfunding-container32 {\n    flex: 1;\n    margin: 1vh;\n    display: flex;\n    min-width: 20vw;\n    align-self: stretch;\n    align-items: center;\n    border-radius: var(--dl-radius-radius-radius16);\n    flex-direction: column;\n    background-image: linear-gradient(\n      45deg,\n      rgba(255, 255, 255, 0.1) 0%,\n      rgba(255, 255, 255, 0.2) 100%\n    );\n    border-top-right-radius: 0;\n    border-bottom-left-radius: 0;\n  }\n  .b5-fc-crowdfunding-text102 {\n    align-self: center;\n    margin-top: 2vh;\n    text-align: center;\n    margin-bottom: 1vh;\n  }\n  .b5-fc-crowdfunding-text103 {\n    text-decoration: underline;\n  }\n  .b5-fc-crowdfunding-container33 {\n    display: flex;\n    align-items: center;\n    margin-bottom: 2vh;\n    flex-direction: row;\n  }\n  .b5-fc-crowdfunding-container34 {\n    display: flex;\n    align-items: center;\n    flex-direction: column;\n  }\n  .b5-fc-crowdfunding-text105 {\n    align-self: center;\n    text-align: center;\n    letter-spacing: 1px;\n  }\n  .b5-fc-crowdfunding-text108 {\n    align-self: center;\n    text-align: center;\n  }\n  .b5-fc-crowdfunding-text109 {\n    font-size: 115%;\n    font-style: italic;\n    font-weight: 700;\n  }\n  .b5-fc-crowdfunding-icon06 {\n    fill: #d9d9d9;\n    width: 2vh;\n    height: 2vh;\n    margin-left: 1vh;\n    margin-right: 1vh;\n  }\n  .b5-fc-crowdfunding-container35 {\n    display: flex;\n    align-items: center;\n    flex-direction: column;\n  }\n  .b5-fc-crowdfunding-text111 {\n    align-self: center;\n    text-align: center;\n  }\n  .b5-fc-crowdfunding-text114 {\n    align-self: center;\n    text-align: center;\n  }\n  .b5-fc-crowdfunding-text115 {\n    font-size: 115%;\n    font-style: italic;\n    font-weight: 700;\n  }\n  .b5-fc-crowdfunding-container36 {\n    flex: 1;\n    margin: 1vh;\n    display: flex;\n    min-width: 20vw;\n    align-self: stretch;\n    align-items: center;\n    border-radius: var(--dl-radius-radius-radius16);\n    flex-direction: column;\n    background-image: linear-gradient(\n      45deg,\n      rgba(255, 255, 255, 0.1) 0%,\n      rgba(255, 255, 255, 0.2) 100%\n    );\n    border-top-right-radius: 0;\n    border-bottom-left-radius: 0;\n  }\n  .b5-fc-crowdfunding-text117 {\n    align-self: center;\n    margin-top: 2vh;\n    text-align: center;\n    margin-bottom: 1vh;\n  }\n  .b5-fc-crowdfunding-text118 {\n    text-decoration: underline;\n  }\n  .b5-fc-crowdfunding-container37 {\n    display: flex;\n    align-items: center;\n    margin-bottom: 2vh;\n    flex-direction: row;\n  }\n  .b5-fc-crowdfunding-container38 {\n    display: flex;\n    align-items: center;\n    flex-direction: column;\n  }\n  .b5-fc-crowdfunding-text120 {\n    align-self: center;\n    text-align: center;\n    letter-spacing: 1px;\n  }\n  .b5-fc-crowdfunding-text123 {\n    align-self: center;\n    text-align: center;\n  }\n  .b5-fc-crowdfunding-text124 {\n    font-size: 115%;\n    font-style: italic;\n    font-weight: 700;\n  }\n  .b5-fc-crowdfunding-icon08 {\n    fill: #d9d9d9;\n    width: 2vh;\n    height: 2vh;\n    margin-left: 1vh;\n    margin-right: 1vh;\n  }\n  .b5-fc-crowdfunding-container39 {\n    display: flex;\n    align-items: center;\n    flex-direction: column;\n  }\n  .b5-fc-crowdfunding-text126 {\n    align-self: center;\n    text-align: center;\n  }\n  .b5-fc-crowdfunding-text129 {\n    align-self: center;\n    text-align: center;\n  }\n  .b5-fc-crowdfunding-text130 {\n    font-size: 115%;\n    font-style: italic;\n    font-weight: 700;\n  }\n  .b5-fc-crowdfunding-text132 {\n    flex: 1;\n    min-width: 100%;\n    align-self: center;\n    margin-top: 2vh;\n    text-align: center;\n    margin-left: 2vh;\n    margin-right: 2vh;\n  }\n  .b5-fc-crowdfunding-text133 {\n    font-size: 110%;\n    font-style: italic;\n    font-weight: 700;\n  }\n  .b5-fc-crowdfunding-text134 {\n    font-style: italic;\n    font-weight: 700;\n  }\n  .b5-fc-crowdfunding-text135 {\n    font-size: 110%;\n    font-style: italic;\n    font-weight: 700;\n  }\n  .b5-fc-crowdfunding-container40 {\n    flex: 0 0 auto;\n    width: 100%;\n    height: 2px;\n    display: block;\n    align-self: stretch;\n    background-image: linear-gradient(\n      90deg,\n      rgba(255, 255, 255, 0) 0%,\n      rgba(255, 255, 255, 0.5) 50%,\n      rgba(255, 255, 255, 0) 100%\n    );\n  }\n  .b5-fc-crowdfunding-container41 {\n    flex: 1;\n    width: 100%;\n    display: flex;\n    align-self: stretch;\n    align-items: center;\n    flex-direction: column;\n    padding-bottom: 2vh;\n    background-color: rgba(255, 255, 255, 0.1);\n  }\n  .b5-fc-crowdfunding-text137 {\n    margin-top: 1vh;\n    text-align: center;\n    margin-left: 2vh;\n    margin-right: 2vh;\n    margin-bottom: 1vh;\n  }\n  .b5-fc-crowdfunding-text138 {\n    text-decoration: underline;\n  }\n  .b5-fc-crowdfunding-text140 {\n    font-size: 115%;\n    font-style: italic;\n    font-weight: 700;\n  }\n  .b5-fc-crowdfunding-text141 {\n    margin-top: 1vh;\n    text-align: center;\n    margin-left: 2vh;\n    margin-right: 2vh;\n    margin-bottom: 1vh;\n  }\n  .b5-fc-crowdfunding-text142 {\n    text-decoration: underline;\n  }\n  .b5-fc-crowdfunding-text144 {\n    font-size: 115%;\n    font-style: italic;\n    font-weight: 700;\n  }\n  .b5-fc-crowdfunding-icon10 {\n    top: 0px;\n    fill: rgba(255, 223, 0, 0.7);\n    right: -3vw;\n    width: 3vw;\n    bottom: 0px;\n    height: 3vw;\n    margin: auto;\n    position: absolute;\n  }\n  .b5-fc-crowdfunding-container42 {\n    flex: 1;\n    color: var(--dl-color-gray-white);\n    margin: 1.5vw;\n    display: flex;\n    position: relative;\n    flex-wrap: wrap;\n    max-width: 100%;\n    align-self: stretch;\n    box-shadow: 2px 2px 10px 0px #d4d4d4;\n    min-height: auto;\n    transition: 0.3s;\n    align-items: center;\n    padding-top: 2vh;\n    border-color: var(--dl-color-gray-white);\n    border-width: 1px;\n    border-radius: var(--dl-radius-radius-radius16);\n    flex-direction: row;\n    justify-content: center;\n    background-image: linear-gradient(\n        90deg,\n        rgba(255, 208, 0, 0.5) 0%,\n        rgba(51, 181, 229, 0.05) 100%\n      ),\n      linear-gradient(90deg, rgb(0, 0, 0) 0%, rgb(0, 0, 0) 100%);\n    border-top-right-radius: 0;\n    border-bottom-left-radius: 0;\n  }\n  .b5-fc-crowdfunding-container42:hover {\n    transform: scale(1.02);\n  }\n  .b5-fc-crowdfunding-container43 {\n    display: flex;\n    align-items: center;\n    flex-direction: column;\n  }\n  .b5-fc-crowdfunding-text146 {\n    color: var(--dl-color-scheme-gold);\n    margin-top: 1vh;\n    margin-left: 2vh;\n    margin-right: 2vh;\n    margin-bottom: 1vh;\n    letter-spacing: 2px;\n  }\n  .b5-fc-crowdfunding-text147 {\n    align-self: center;\n    margin-top: 2vh;\n    margin-left: 2vh;\n    margin-right: 2vh;\n  }\n  .b5-fc-crowdfunding-text148 {\n    align-self: center;\n    margin-left: 3vh;\n    margin-right: 3vh;\n    margin-bottom: 2vh;\n  }\n  .b5-fc-crowdfunding-text149 {\n    font-size: 120%;\n  }\n  .b5-fc-crowdfunding-text151 {\n    font-style: italic;\n    font-weight: 700;\n  }\n  .b5-fc-crowdfunding-text153 {\n    font-size: 80%;\n  }\n  .b5-fc-crowdfunding-text155 {\n    font-size: 80%;\n  }\n  .b5-fc-crowdfunding-container44 {\n    flex: 1;\n    display: flex;\n    flex-wrap: wrap;\n    align-self: stretch;\n    align-items: center;\n    flex-direction: row;\n    justify-content: center;\n  }\n  .b5-fc-crowdfunding-container45 {\n    flex: 1;\n    margin: 1vh;\n    display: flex;\n    min-width: 20vw;\n    align-self: stretch;\n    align-items: center;\n    border-radius: var(--dl-radius-radius-radius16);\n    flex-direction: column;\n    background-image: linear-gradient(\n      45deg,\n      rgba(255, 255, 255, 0.1) 0%,\n      rgba(255, 255, 255, 0.2) 100%\n    );\n    border-top-right-radius: 0;\n    border-bottom-left-radius: 0;\n  }\n  .b5-fc-crowdfunding-text156 {\n    align-self: center;\n    margin-top: 2vh;\n    text-align: center;\n    margin-bottom: 1vh;\n  }\n  .b5-fc-crowdfunding-text157 {\n    text-decoration: underline;\n  }\n  .b5-fc-crowdfunding-container46 {\n    display: flex;\n    align-items: center;\n    margin-bottom: 2vh;\n    flex-direction: row;\n  }\n  .b5-fc-crowdfunding-container47 {\n    display: flex;\n    align-items: center;\n    flex-direction: column;\n  }\n  .b5-fc-crowdfunding-text159 {\n    align-self: center;\n    text-align: center;\n    letter-spacing: 1px;\n  }\n  .b5-fc-crowdfunding-text162 {\n    align-self: center;\n    text-align: center;\n  }\n  .b5-fc-crowdfunding-text163 {\n    font-size: 115%;\n    font-style: italic;\n    font-weight: 700;\n  }\n  .b5-fc-crowdfunding-icon12 {\n    fill: #d9d9d9;\n    width: 2vh;\n    height: 2vh;\n    margin-left: 1vh;\n    margin-right: 1vh;\n  }\n  .b5-fc-crowdfunding-container48 {\n    display: flex;\n    align-items: center;\n    flex-direction: column;\n  }\n  .b5-fc-crowdfunding-text165 {\n    align-self: center;\n    text-align: center;\n  }\n  .b5-fc-crowdfunding-text168 {\n    align-self: center;\n    text-align: center;\n  }\n  .b5-fc-crowdfunding-text169 {\n    font-size: 115%;\n    font-style: italic;\n    font-weight: 700;\n  }\n  .b5-fc-crowdfunding-container49 {\n    flex: 1;\n    margin: 1vh;\n    display: flex;\n    min-width: 20vw;\n    align-self: stretch;\n    align-items: center;\n    border-radius: var(--dl-radius-radius-radius16);\n    flex-direction: column;\n    background-image: linear-gradient(\n      45deg,\n      rgba(255, 255, 255, 0.1) 0%,\n      rgba(255, 255, 255, 0.2) 100%\n    );\n    border-top-right-radius: 0;\n    border-bottom-left-radius: 0;\n  }\n  .b5-fc-crowdfunding-text171 {\n    align-self: center;\n    margin-top: 2vh;\n    text-align: center;\n    margin-bottom: 1vh;\n  }\n  .b5-fc-crowdfunding-text172 {\n    text-decoration: underline;\n  }\n  .b5-fc-crowdfunding-container50 {\n    display: flex;\n    align-items: center;\n    margin-bottom: 2vh;\n    flex-direction: row;\n  }\n  .b5-fc-crowdfunding-container51 {\n    display: flex;\n    align-items: center;\n    flex-direction: column;\n  }\n  .b5-fc-crowdfunding-text174 {\n    align-self: center;\n    text-align: center;\n    letter-spacing: 1px;\n  }\n  .b5-fc-crowdfunding-text177 {\n    align-self: center;\n    text-align: center;\n  }\n  .b5-fc-crowdfunding-text178 {\n    font-size: 115%;\n    font-style: italic;\n    font-weight: 700;\n  }\n  .b5-fc-crowdfunding-icon14 {\n    fill: #d9d9d9;\n    width: 2vh;\n    height: 2vh;\n    margin-left: 1vh;\n    margin-right: 1vh;\n  }\n  .b5-fc-crowdfunding-container52 {\n    display: flex;\n    align-items: center;\n    flex-direction: column;\n  }\n  .b5-fc-crowdfunding-text180 {\n    align-self: center;\n    text-align: center;\n  }\n  .b5-fc-crowdfunding-text183 {\n    align-self: center;\n    text-align: center;\n  }\n  .b5-fc-crowdfunding-text184 {\n    font-size: 115%;\n    font-style: italic;\n    font-weight: 700;\n  }\n  .b5-fc-crowdfunding-text186 {\n    flex: 1;\n    min-width: 100%;\n    align-self: center;\n    margin-top: 2vh;\n    text-align: center;\n    margin-left: 2vh;\n    margin-right: 2vh;\n  }\n  .b5-fc-crowdfunding-text187 {\n    font-size: 110%;\n    font-style: italic;\n    font-weight: 700;\n  }\n  .b5-fc-crowdfunding-text188 {\n    font-style: italic;\n    font-weight: 700;\n  }\n  .b5-fc-crowdfunding-text189 {\n    font-size: 110%;\n    font-style: italic;\n    font-weight: 700;\n  }\n  .b5-fc-crowdfunding-container53 {\n    flex: 0 0 auto;\n    width: 100%;\n    height: 2px;\n    display: block;\n    align-self: stretch;\n    background-image: linear-gradient(\n      90deg,\n      rgba(255, 255, 255, 0) 0%,\n      rgba(255, 255, 255, 0.5) 50%,\n      rgba(255, 255, 255, 0) 100%\n    );\n  }\n  .b5-fc-crowdfunding-container54 {\n    flex: 1;\n    width: 100%;\n    display: flex;\n    align-self: stretch;\n    align-items: center;\n    flex-direction: column;\n    padding-bottom: 2vh;\n    background-color: rgba(255, 255, 255, 0.1);\n  }\n  .b5-fc-crowdfunding-text191 {\n    margin-top: 1vh;\n    text-align: center;\n    margin-left: 2vh;\n    margin-right: 2vh;\n    margin-bottom: 1vh;\n  }\n  .b5-fc-crowdfunding-text192 {\n    text-decoration: underline;\n  }\n  .b5-fc-crowdfunding-text194 {\n    font-size: 115%;\n    font-style: italic;\n    font-weight: 700;\n  }\n  .b5-fc-crowdfunding-text195 {\n    font-size: 80%;\n  }\n  .b5-fc-crowdfunding-text196 {\n    margin-top: 1vh;\n    text-align: center;\n    margin-left: 2vh;\n    margin-right: 2vh;\n    margin-bottom: 1vh;\n  }\n  .b5-fc-crowdfunding-text197 {\n    text-decoration: underline;\n  }\n  .b5-fc-crowdfunding-text199 {\n    font-size: 115%;\n    font-style: italic;\n    font-weight: 700;\n  }\n  .b5-fc-crowdfunding-text200 {\n    font-size: 80%;\n  }\n  .b5-fc-crowdfunding-container55 {\n    flex: 1;\n    display: flex;\n    border-radius: 16px;\n    position: relative;\n    max-width: auto;\n    align-self: stretch;\n    box-shadow: 0px 0px 15px 0px #d4d4d4;\n    min-height: auto;\n    align-items: center;\n    border-radius: var(--dl-radius-radius-radius16);\n    flex-direction: column;\n    background-color: rgba(0, 0, 0, 0.5);\n    border-top-right-radius: 0;\n    border-bottom-left-radius: 0;\n  }\n  .b5-fc-crowdfunding-container56 {\n    flex: 0 0 auto;\n    height: 3px;\n    display: flex;\n    z-index: 110;\n    align-self: stretch;\n    margin-top: 2vh;\n    margin-bottom: 2vh;\n    background-image: linear-gradient(\n      90deg,\n      rgba(255, 255, 255, 0) 0%,\n      rgb(51, 181, 229) 50%,\n      rgba(255, 255, 255, 0) 100%\n    );\n  }\n  .b5-fc-crowdfunding-container57 {\n    display: flex;\n    z-index: 110;\n    border-radius: 16px;\n    flex-wrap: wrap;\n    align-self: stretch;\n    align-items: stretch;\n    flex-direction: row;\n    justify-content: center;\n  }\n  .b5-fc-crowdfunding-container58 {\n    flex: 1;\n    display: flex;\n    padding: 2vh;\n    max-width: 100%;\n    min-width: 70%;\n    box-shadow: 0px 0px 30px 0px #33b5e5 inset;\n    align-items: center;\n    border-color: var(--dl-color-scheme-blue);\n    border-width: 2px;\n    border-radius: 16px;\n    flex-direction: column;\n  }\n  .b5-fc-crowdfunding-container59 {\n    flex: 0 0 auto;\n    height: auto;\n    display: flex;\n    align-self: stretch;\n    align-items: flex-start;\n    flex-direction: row;\n    justify-content: center;\n  }\n  .b5-fc-crowdfunding-container60 {\n    display: flex;\n    position: relative;\n    align-items: center;\n    flex-direction: column;\n    justify-content: center;\n  }\n  .b5-fc-crowdfunding-text203 {\n    color: var(--dl-color-success-700);\n    cursor: pointer;\n    z-index: 110;\n    margin-top: 1vh;\n    transition: 0.3s;\n    margin-left: 2vh;\n    text-shadow: 0 0 5px #fff, 0 0 5px #fff;\n    margin-right: 2vh;\n    margin-bottom: 1vh;\n    letter-spacing: 2px;\n  }\n  .b5-fc-crowdfunding-text203:focus-within {\n    text-shadow: 0 0 0.7rem #fff, 0 0 0.7rem #fff;\n  }\n  .b5-fc-crowdfunding-radiobutton {\n    margin: 0.5vh;\n    z-index: 109;\n  }\n  .b5-fc-crowdfunding-container61 {\n    display: flex;\n    position: relative;\n    align-items: center;\n    flex-direction: column;\n    justify-content: center;\n  }\n  .b5-fc-crowdfunding-text204 {\n    color: var(--dl-color-scheme-blue);\n    cursor: pointer;\n    z-index: 110;\n    margin-top: 1vh;\n    transition: 0.3s;\n    margin-left: 2vh;\n    margin-right: 2vh;\n    margin-bottom: 1vh;\n    letter-spacing: 2px;\n  }\n  .b5-fc-crowdfunding-text204:focus-within {\n    text-shadow: 0 0 0.7rem #fff, 0 0 0.7rem #fff;\n  }\n  .b5-fc-crowdfunding-radiobutton1 {\n    margin: 0.5vh;\n    z-index: 109;\n  }\n  .b5-fc-crowdfunding-container62 {\n    display: flex;\n    position: relative;\n    align-items: center;\n    flex-direction: column;\n    justify-content: center;\n  }\n  .b5-fc-crowdfunding-text205 {\n    color: var(--dl-color-scheme-gold);\n    cursor: pointer;\n    z-index: 110;\n    margin-top: 1vh;\n    transition: 0.3s;\n    margin-left: 2vh;\n    margin-right: 2vh;\n    margin-bottom: 1vh;\n    letter-spacing: 2px;\n  }\n  .b5-fc-crowdfunding-text205:focus-within {\n    text-shadow: 0 0 0.7rem #fff, 0 0 0.7rem #fff;\n  }\n  .b5-fc-crowdfunding-radiobutton2 {\n    margin: 0.5vh;\n    z-index: 109;\n  }\n  .b5-fc-crowdfunding-container63 {\n    flex: 0 0 auto;\n    height: auto;\n    display: flex;\n    align-self: stretch;\n    align-items: center;\n    flex-direction: row;\n    justify-content: center;\n  }\n  .b5-fc-crowdfunding-button {\n    color: var(--dl-color-scheme-blue);\n    margin: 1vh;\n    font-style: normal;\n    transition: 0.3s;\n    font-weight: 700;\n    border-color: var(--dl-color-scheme-blue);\n    border-width: 2px;\n    border-radius: var(--dl-radius-radius-radius16);\n    background-color: rgba(255, 255, 255, 0.2);\n  }\n  .b5-fc-crowdfunding-button:active {\n    background-color: rgba(255, 255, 255, 0.4);\n  }\n  .b5-fc-crowdfunding-text207 {\n    font-style: normal;\n    font-weight: 500;\n    text-transform: uppercase;\n  }\n  .b5-fc-crowdfunding-button1 {\n    color: var(--dl-color-scheme-blue);\n    margin: 1vh;\n    font-style: normal;\n    transition: 0.3s;\n    font-weight: 700;\n    border-color: var(--dl-color-scheme-blue);\n    border-width: 2px;\n    border-radius: var(--dl-radius-radius-radius16);\n    background-color: rgba(255, 255, 255, 0.2);\n  }\n  .b5-fc-crowdfunding-button1:active {\n    background-color: rgba(255, 255, 255, 0.4);\n  }\n  .b5-fc-crowdfunding-container64 {\n    flex: 0 0 auto;\n    height: auto;\n    display: flex;\n    align-self: stretch;\n    align-items: center;\n    flex-direction: row;\n    justify-content: center;\n  }\n  .b5-fc-crowdfunding-button2 {\n    color: var(--dl-color-scheme-blue);\n    margin: 1vh;\n    font-style: normal;\n    transition: 0.3s;\n    font-weight: 700;\n    border-color: var(--dl-color-scheme-blue);\n    border-width: 2px;\n    border-radius: var(--dl-radius-radius-radius16);\n    background-color: rgba(255, 255, 255, 0.2);\n  }\n  .b5-fc-crowdfunding-button2:active {\n    background-color: rgba(255, 255, 255, 0.4);\n  }\n  .b5-fc-crowdfunding-text209 {\n    font-style: normal;\n    font-weight: 500;\n    text-transform: uppercase;\n  }\n  .b5-fc-crowdfunding-button3 {\n    color: var(--dl-color-scheme-blue);\n    margin: 1vh;\n    font-style: normal;\n    transition: 0.3s;\n    font-weight: 700;\n    border-color: var(--dl-color-scheme-blue);\n    border-width: 2px;\n    border-radius: var(--dl-radius-radius-radius16);\n    background-color: rgba(255, 255, 255, 0.2);\n  }\n  .b5-fc-crowdfunding-button3:active {\n    background-color: rgba(255, 255, 255, 0.4);\n  }\n  .b5-fc-crowdfunding-container65 {\n    display: flex;\n    align-items: center;\n    flex-direction: row;\n    justify-content: center;\n  }\n  .b5-fc-crowdfunding-text210 {\n    margin-top: 1vh;\n    margin-left: 0.5vh;\n    margin-right: 0.5vh;\n    margin-bottom: 1vh;\n  }\n  .b5-fc-crowdfunding-select {\n    padding: 0.5rem;\n    background: rgba(255, 255, 255, 0.2);\n    font-style: normal;\n    margin-top: 1vh;\n    font-weight: 500;\n    margin-left: 0.5vh;\n    border-color: var(--dl-color-scheme-blue);\n    border-width: 2px;\n    margin-right: 0.5vh;\n    border-radius: var(--dl-radius-radius-radius16);\n    margin-bottom: 1vh;\n  }\n  .b5-fc-crowdfunding-container66 {\n    flex: 0 0 auto;\n    width: auto;\n    height: auto;\n    display: flex;\n    align-items: flex-start;\n    justify-content: center;\n  }\n  .b5-fc-crowdfunding-button4 {\n    fill: var(--dl-color-scheme-blue);\n    color: var(--dl-color-scheme-blue);\n    margin: 1vh;\n    display: flex;\n    transition: 0.3s;\n    border-color: var(--dl-color-scheme-blue);\n    border-width: 2px;\n    border-radius: var(--dl-radius-radius-radius16);\n    flex-direction: row;\n    background-color: rgba(255, 255, 255, 0.2);\n  }\n  .b5-fc-crowdfunding-button4:active {\n    background-color: rgba(255, 255, 255, 0.4);\n  }\n  .b5-fc-crowdfunding-icon16 {\n    width: 30;\n    height: 30;\n    transform: rotate(-90deg);\n    align-self: center;\n    margin-right: 0.5rem;\n  }\n  .b5-fc-crowdfunding-text211 {\n    align-self: center;\n  }\n  .b5-fc-crowdfunding-button5 {\n    fill: var(--dl-color-scheme-blue);\n    color: var(--dl-color-scheme-blue);\n    margin: 1vh;\n    display: flex;\n    transition: 0.3s;\n    border-color: var(--dl-color-scheme-blue);\n    border-width: 2px;\n    border-radius: var(--dl-radius-radius-radius16);\n    flex-direction: row;\n    background-color: rgba(255, 255, 255, 0.2);\n  }\n  .b5-fc-crowdfunding-button5:active {\n    background-color: rgba(255, 255, 255, 0.4);\n  }\n  .b5-fc-crowdfunding-text212 {\n    align-self: center;\n  }\n  .b5-fc-crowdfunding-icon18 {\n    width: 30;\n    height: 30;\n    transform: rotate(-90deg);\n    align-self: center;\n    margin-left: 0.5rem;\n  }\n  .b5-fc-crowdfunding-container67 {\n    display: none;\n  }\n  .b5-fc-crowdfunding-container68 {\n    display: flex;\n    align-items: center;\n    margin-bottom: 0.25vh;\n    flex-direction: row;\n    justify-content: center;\n  }\n  .b5-fc-crowdfunding-text214 {\n    margin: 0.5vh;\n    align-self: flex-start;\n    font-style: normal;\n    text-align: left;\n    font-weight: 500;\n  }\n  .b5-fc-crowdfunding-text215 {\n    margin: 0.5vh;\n    align-self: flex-start;\n    font-style: normal;\n    text-align: left;\n    font-weight: 500;\n  }\n  .b5-fc-crowdfunding-container69 {\n    display: flex;\n    margin-top: 0.25vh;\n    align-items: center;\n    margin-bottom: 0.25vh;\n    flex-direction: row;\n    justify-content: center;\n  }\n  .b5-fc-crowdfunding-text216 {\n    margin: 0.5vh;\n    align-self: flex-start;\n    font-style: normal;\n    text-align: left;\n    font-weight: 500;\n  }\n  .b5-fc-crowdfunding-text217 {\n    margin: 0.5vh;\n    align-self: flex-start;\n    font-style: normal;\n    text-align: left;\n    font-weight: 500;\n  }\n  .b5-fc-crowdfunding-container70 {\n    display: flex;\n    margin-top: 0.25vh;\n    align-items: center;\n    margin-bottom: 0.25vh;\n    flex-direction: row;\n    justify-content: center;\n  }\n  .b5-fc-crowdfunding-text218 {\n    margin: 0.5vh;\n    align-self: flex-start;\n    font-style: normal;\n    text-align: left;\n    font-weight: 500;\n  }\n  .b5-fc-crowdfunding-text219 {\n    align-self: flex-start;\n    font-style: normal;\n    margin-top: 0.5vh;\n    text-align: left;\n    font-weight: 500;\n    margin-left: 0.5vh;\n    margin-right: 0.5vh;\n    margin-bottom: 0.5vh;\n  }\n  .b5-fc-crowdfunding-container71 {\n    display: flex;\n    margin-top: 0.25vh;\n    align-items: center;\n    margin-bottom: 0.25vh;\n    flex-direction: row;\n    justify-content: center;\n  }\n  .b5-fc-crowdfunding-text220 {\n    margin: 0.5vh;\n    align-self: flex-start;\n    font-style: normal;\n    text-align: left;\n    font-weight: 500;\n  }\n  .b5-fc-crowdfunding-text221 {\n    margin: 0.5vh;\n    align-self: flex-start;\n    font-style: normal;\n    text-align: left;\n    font-weight: 500;\n  }\n  .b5-fc-crowdfunding-container72 {\n    display: flex;\n    margin-top: 0.25vh;\n    align-items: center;\n    margin-bottom: 0.25vh;\n    flex-direction: row;\n    justify-content: center;\n  }\n  .b5-fc-crowdfunding-text222 {\n    margin: 0.5vh;\n    align-self: flex-start;\n    font-style: normal;\n    text-align: left;\n    font-weight: 500;\n  }\n  .b5-fc-crowdfunding-text223 {\n    margin: 0.5vh;\n    align-self: flex-start;\n    font-style: normal;\n    text-align: left;\n    font-weight: 500;\n  }\n  .b5-fc-crowdfunding-container73 {\n    display: flex;\n    margin-top: 0.25vh;\n    align-items: center;\n    flex-direction: row;\n    justify-content: center;\n  }\n  .b5-fc-crowdfunding-text224 {\n    margin: 0.5vh;\n    align-self: flex-start;\n    font-style: normal;\n    text-align: left;\n    font-weight: 500;\n  }\n  .b5-fc-crowdfunding-text225 {\n    margin: 0.5vh;\n    align-self: flex-start;\n    font-style: normal;\n    text-align: left;\n    font-weight: 500;\n  }\n  .b5-fc-crowdfunding-container74 {\n    background: black;\n  }\n  .b5-fc-crowdfunding-container75 {\n    display: contents;\n  }\n  .b5-fc-crowdfunding-container76 {\n    flex: 1;\n    margin: 1.5vw;\n    display: flex;\n    padding: 1.5vw;\n    position: relative;\n    max-width: auto;\n    align-self: stretch;\n    box-shadow: 0px 0px 15px 0px #d4d4d4;\n    min-height: auto;\n    align-items: center;\n    border-radius: var(--dl-radius-radius-radius16);\n    flex-direction: column;\n    background-color: rgba(0, 0, 0, 0.5);\n    border-top-right-radius: 0;\n    border-bottom-left-radius: 0;\n  }\n  .b5-fc-crowdfunding-text226 {\n    display: flex;\n    align-items: center;\n    margin-bottom: 3vh;\n    justify-content: center;\n  }\n  .b5-fc-crowdfunding-text228 {\n    color: var(--dl-color-scheme-white1);\n    font-style: italic;\n    font-weight: 700;\n  }\n  .b5-fc-crowdfunding-text229 {\n    color: var(--dl-color-scheme-blue);\n  }\n  .b5-fc-crowdfunding-text230 {\n    color: var(--dl-color-scheme-white1);\n  }\n  .b5-fc-crowdfunding-text232 {\n    align-self: stretch;\n    text-align: center;\n    margin-left: 1vh;\n    margin-right: 1vh;\n    margin-bottom: 2vh;\n  }\n  .b5-fc-crowdfunding-text239 {\n    color: var(--dl-color-scheme-blue);\n    align-self: stretch;\n    font-style: italic;\n    text-align: left;\n    font-weight: 500;\n    margin-bottom: 1vh;\n  }\n  .b5-fc-crowdfunding-text240 {\n    align-self: stretch;\n    margin-left: 2vh;\n    margin-right: 2vh;\n    margin-bottom: 2vh;\n  }\n  .b5-fc-crowdfunding-text242 {\n    line-height: 0.5;\n  }\n  .b5-fc-crowdfunding-text243 {\n    line-height: 0.5;\n  }\n  .b5-fc-crowdfunding-text245 {\n    color: var(--dl-color-scheme-blue);\n    align-self: stretch;\n    font-style: italic;\n    text-align: left;\n    font-weight: 500;\n    margin-bottom: 1vh;\n  }\n  .b5-fc-crowdfunding-text246 {\n    align-self: stretch;\n    margin-left: 2vh;\n    margin-right: 2vh;\n    margin-bottom: 2vh;\n  }\n  .b5-fc-crowdfunding-text248 {\n    font-style: normal;\n    font-weight: 500;\n  }\n  .b5-fc-crowdfunding-text250 {\n    font-style: normal;\n    font-weight: 500;\n  }\n  .b5-fc-crowdfunding-text252 {\n    font-style: normal;\n    font-weight: 500;\n  }\n  .b5-fc-crowdfunding-text254 {\n    font-style: normal;\n    font-weight: 500;\n  }\n  .b5-fc-crowdfunding-text256 {\n    font-style: normal;\n    font-weight: 500;\n  }\n  .b5-fc-crowdfunding-text258 {\n    line-height: 0.5;\n  }\n  .b5-fc-crowdfunding-text259 {\n    line-height: 0.5;\n  }\n  .b5-fc-crowdfunding-text260 {\n    line-height: 0.5;\n  }\n  .b5-fc-crowdfunding-text262 {\n    font-style: normal;\n    font-weight: 500;\n  }\n  .b5-fc-crowdfunding-text264 {\n    font-style: normal;\n    font-weight: 500;\n  }\n  .b5-fc-crowdfunding-text266 {\n    font-style: normal;\n    font-weight: 500;\n  }\n  .b5-fc-crowdfunding-text268 {\n    font-style: normal;\n    font-weight: 500;\n  }\n  .b5-fc-crowdfunding-text270 {\n    font-style: normal;\n    font-weight: 500;\n  }\n  .b5-fc-crowdfunding-text272 {\n    font-style: normal;\n    font-weight: 500;\n  }\n  .b5-fc-crowdfunding-text274 {\n    line-height: 0.5;\n  }\n  .b5-fc-crowdfunding-text275 {\n    line-height: 0.5;\n  }\n  .b5-fc-crowdfunding-text277 {\n    font-style: normal;\n    font-weight: 500;\n  }\n  .b5-fc-crowdfunding-text279 {\n    font-style: normal;\n    font-weight: 500;\n  }\n  .b5-fc-crowdfunding-text281 {\n    font-style: normal;\n    font-weight: 500;\n  }\n  .b5-fc-crowdfunding-text283 {\n    line-height: 0.5;\n  }\n  .b5-fc-crowdfunding-text284 {\n    line-height: 0.5;\n  }\n  .b5-fc-crowdfunding-text286 {\n    line-height: 0.5;\n  }\n  .b5-fc-crowdfunding-text287 {\n    line-height: 0.5;\n  }\n  .b5-fc-crowdfunding-text292 {\n    color: var(--dl-color-scheme-blue);\n    align-self: stretch;\n    font-style: italic;\n    text-align: left;\n    font-weight: 500;\n    margin-bottom: 1vh;\n  }\n  .b5-fc-crowdfunding-text293 {\n    align-self: stretch;\n    margin-left: 2vh;\n    margin-right: 2vh;\n    margin-bottom: 2vh;\n  }\n  .b5-fc-crowdfunding-text294 {\n    font-style: normal;\n    font-weight: 700;\n  }\n  .b5-fc-crowdfunding-text296 {\n    line-height: 0.5;\n  }\n  .b5-fc-crowdfunding-text297 {\n    line-height: 0.5;\n  }\n  .b5-fc-crowdfunding-text298 {\n    font-style: normal;\n    font-weight: 700;\n  }\n  .b5-fc-crowdfunding-text301 {\n    color: var(--dl-color-scheme-blue);\n    align-self: stretch;\n    font-style: italic;\n    text-align: left;\n    font-weight: 500;\n    margin-bottom: 1vh;\n  }\n  .b5-fc-crowdfunding-text302 {\n    align-self: stretch;\n    margin-left: 2vh;\n    margin-right: 2vh;\n    margin-bottom: 2vh;\n  }\n  .b5-fc-crowdfunding-text308 {\n    color: var(--dl-color-scheme-blue);\n    align-self: stretch;\n    font-style: italic;\n    text-align: left;\n    font-weight: 500;\n    margin-bottom: 1vh;\n  }\n  .b5-fc-crowdfunding-text309 {\n    align-self: stretch;\n    margin-left: 2vh;\n    margin-right: 2vh;\n    margin-bottom: 2vh;\n  }\n  .b5-fc-crowdfunding-text310 {\n    font-style: normal;\n    font-weight: 500;\n  }\n  .b5-fc-crowdfunding-text311 {\n    line-height: 0.5;\n  }\n  .b5-fc-crowdfunding-text312 {\n    line-height: 0.5;\n  }\n  .b5-fc-crowdfunding-text322 {\n    color: var(--dl-color-scheme-blue);\n    align-self: stretch;\n    font-style: italic;\n    text-align: left;\n    font-weight: 500;\n    margin-bottom: 1vh;\n  }\n  .b5-fc-crowdfunding-text323 {\n    align-self: stretch;\n    margin-left: 2vh;\n    margin-right: 2vh;\n    margin-bottom: 2vh;\n  }\n  .b5-fc-crowdfunding-text325 {\n    line-height: 0.5;\n  }\n  .b5-fc-crowdfunding-text326 {\n    line-height: 0.5;\n  }\n  .b5-fc-crowdfunding-text328 {\n    line-height: 0.5;\n  }\n  .b5-fc-crowdfunding-text329 {\n    line-height: 0.5;\n  }\n  .b5-fc-crowdfunding-text332 {\n    color: var(--dl-color-scheme-blue);\n    align-self: stretch;\n    font-style: italic;\n    text-align: left;\n    font-weight: 500;\n    margin-bottom: 1vh;\n  }\n  .b5-fc-crowdfunding-text333 {\n    align-self: stretch;\n    margin-left: 2vh;\n    margin-right: 2vh;\n    margin-bottom: 2vh;\n  }\n  .b5-fc-crowdfunding-text335 {\n    line-height: 0.5;\n  }\n  .b5-fc-crowdfunding-text336 {\n    line-height: 0.5;\n  }\n  .b5-fc-crowdfunding-container77 {\n    top: 0px;\n    left: 0px;\n    right: 0px;\n    bottom: 0px;\n    height: auto;\n    margin: auto;\n    display: flex;\n    z-index: 102;\n    position: fixed;\n    align-self: stretch;\n    align-items: center;\n    flex-direction: column;\n  }\n  .b5-fc-crowdfunding-container78 {\n    top: 0px;\n    flex: 0 0 auto;\n    left: 0px;\n    right: 0px;\n    width: auto;\n    bottom: 0px;\n    height: 92vh;\n    margin: auto;\n    display: flex;\n    z-index: 100;\n    position: absolute;\n    transform: rotate(180deg);\n    align-self: stretch;\n    align-items: flex-start;\n    padding-top: 8vh;\n    flex-direction: column;\n    padding-bottom: 8vh;\n  }\n  .b5-fc-crowdfunding-image {\n    top: 0px;\n    left: 0px;\n    right: 0px;\n    width: 100%;\n    bottom: 0px;\n    height: 100%;\n    margin: auto;\n    position: absolute;\n    object-fit: cover;\n  }\n  .b5-fc-crowdfunding-container79 {\n    top: 0px;\n    flex: 0 0 auto;\n    left: 0px;\n    right: 0px;\n    bottom: 0px;\n    margin: auto;\n    display: flex;\n    z-index: 101;\n    position: absolute;\n    align-items: flex-start;\n    animation-name: fadeInRight;\n    flex-direction: column;\n    animation-delay: 10s;\n    background-image: linear-gradient(\n      90deg,\n      rgba(170, 170, 170, 0) 0%,\n      rgba(0, 0, 0, 0.7) 100%\n    );\n    animation-duration: 5s;\n    animation-direction: alternate;\n    animation-iteration-count: infinite;\n    animation-timing-function: ease-in-out;\n  }\n  .b5-fc-crowdfunding-container80 {\n    top: 0px;\n    flex: 0 0 auto;\n    left: 0px;\n    right: 0px;\n    bottom: 0px;\n    margin: auto;\n    display: flex;\n    z-index: 101;\n    position: absolute;\n    align-items: flex-start;\n    animation-name: fadeInLeft;\n    flex-direction: column;\n    animation-delay: 5s;\n    background-image: linear-gradient(\n      270deg,\n      rgba(170, 170, 170, 0) 0%,\n      rgba(0, 0, 0, 0.7) 100%\n    );\n    animation-duration: 5s;\n    animation-direction: alternate;\n    animation-iteration-count: infinite;\n    animation-timing-function: ease-in-out;\n  }\n  @media (max-width: 991px) {\n    .b5-fc-crowdfunding-container01 {\n      align-items: stretch;\n    }\n    .b5-fc-crowdfunding-container02 {\n      align-items: center;\n      flex-direction: column;\n    }\n    .b5-fc-crowdfunding-container04 {\n      align-items: center;\n    }\n    .b5-fc-crowdfunding-text005 {\n      text-align: center;\n    }\n    .b5-fc-crowdfunding-container07 {\n      flex-wrap: wrap;\n    }\n    .b5-fc-crowdfunding-text014 {\n      text-align: center;\n    }\n    .b5-fc-crowdfunding-text015 {\n      text-align: center;\n    }\n    .b5-fc-crowdfunding-text030 {\n      text-align: center;\n    }\n    .b5-fc-crowdfunding-text031 {\n      text-align: center;\n    }\n    .b5-fc-crowdfunding-text036 {\n      text-align: center;\n    }\n    .b5-fc-crowdfunding-text037 {\n      text-align: center;\n    }\n    .b5-fc-crowdfunding-container19 {\n      border-color: var(--dl-color-gray-900);\n      border-width: 1px;\n      padding-left: 2vh;\n      padding-right: 2vh;\n    }\n    .b5-fc-crowdfunding-container23 {\n      border-color: var(--dl-color-gray-900);\n      border-width: 1px;\n      padding-left: 2vh;\n      padding-right: 2vh;\n    }\n    .b5-fc-crowdfunding-container32 {\n      border-color: var(--dl-color-gray-900);\n      border-width: 1px;\n      padding-left: 2vh;\n      padding-right: 2vh;\n    }\n    .b5-fc-crowdfunding-container36 {\n      border-color: var(--dl-color-gray-900);\n      border-width: 1px;\n      padding-left: 2vh;\n      padding-right: 2vh;\n    }\n    .b5-fc-crowdfunding-container45 {\n      border-color: var(--dl-color-gray-900);\n      border-width: 1px;\n      padding-left: 2vh;\n      padding-right: 2vh;\n    }\n    .b5-fc-crowdfunding-container49 {\n      border-color: var(--dl-color-gray-900);\n      border-width: 1px;\n      padding-left: 2vh;\n      padding-right: 2vh;\n    }\n    .b5-fc-crowdfunding-container53 {\n      width: 100%;\n    }\n  }\n  @media (max-width: 767px) {\n    .b5-fc-crowdfunding-container02 {\n      padding-left: var(--dl-space-space-twounits);\n      padding-right: var(--dl-space-space-twounits);\n    }\n    .b5-fc-crowdfunding-container07 {\n      flex-wrap: wrap;\n      flex-direction: row;\n    }\n    .b5-fc-crowdfunding-step {\n      max-width: 100%;\n    }\n    .b5-fc-crowdfunding-step1 {\n      max-width: 100%;\n    }\n    .b5-fc-crowdfunding-step2 {\n      max-width: 100%;\n    }\n    .b5-fc-crowdfunding-container16 {\n      min-width: 50%;\n    }\n    .b5-fc-crowdfunding-container18 {\n      max-width: 100%;\n    }\n    .b5-fc-crowdfunding-container29 {\n      min-width: 50%;\n    }\n    .b5-fc-crowdfunding-container31 {\n      max-width: 100%;\n    }\n    .b5-fc-crowdfunding-container42 {\n      min-width: 50%;\n    }\n    .b5-fc-crowdfunding-container44 {\n      max-width: 100%;\n    }\n    .b5-fc-crowdfunding-container55 {\n      margin-top: 2vh;\n    }\n    .b5-fc-crowdfunding-container76 {\n      margin-top: 2vh;\n    }\n    .b5-fc-crowdfunding-text242 {\n      line-height: 0.5;\n    }\n    .b5-fc-crowdfunding-text243 {\n      line-height: 0.5;\n    }\n    .b5-fc-crowdfunding-text248 {\n      font-style: normal;\n      font-weight: 500;\n    }\n    .b5-fc-crowdfunding-text250 {\n      font-style: normal;\n      font-weight: 500;\n    }\n    .b5-fc-crowdfunding-text252 {\n      font-style: normal;\n      font-weight: 500;\n    }\n    .b5-fc-crowdfunding-text254 {\n      font-style: normal;\n      font-weight: 500;\n    }\n    .b5-fc-crowdfunding-text256 {\n      font-style: normal;\n      font-weight: 500;\n    }\n    .b5-fc-crowdfunding-text258 {\n      line-height: 0.5;\n    }\n    .b5-fc-crowdfunding-text259 {\n      line-height: 0.5;\n    }\n    .b5-fc-crowdfunding-text260 {\n      line-height: 0.5;\n    }\n    .b5-fc-crowdfunding-text262 {\n      font-style: normal;\n      font-weight: 500;\n    }\n    .b5-fc-crowdfunding-text264 {\n      font-style: normal;\n      font-weight: 500;\n    }\n    .b5-fc-crowdfunding-text266 {\n      font-style: normal;\n      font-weight: 500;\n    }\n    .b5-fc-crowdfunding-text268 {\n      font-style: normal;\n      font-weight: 500;\n    }\n    .b5-fc-crowdfunding-text270 {\n      font-style: normal;\n      font-weight: 500;\n    }\n    .b5-fc-crowdfunding-text272 {\n      font-style: normal;\n      font-weight: 500;\n    }\n    .b5-fc-crowdfunding-text274 {\n      line-height: 0.5;\n    }\n    .b5-fc-crowdfunding-text275 {\n      line-height: 0.5;\n    }\n    .b5-fc-crowdfunding-text277 {\n      font-style: normal;\n      font-weight: 500;\n    }\n    .b5-fc-crowdfunding-text279 {\n      font-style: normal;\n      font-weight: 500;\n    }\n    .b5-fc-crowdfunding-text281 {\n      font-style: normal;\n      font-weight: 500;\n    }\n    .b5-fc-crowdfunding-text283 {\n      line-height: 0.5;\n    }\n    .b5-fc-crowdfunding-text284 {\n      line-height: 0.5;\n    }\n    .b5-fc-crowdfunding-text285 {\n      line-height: 0.5;\n    }\n    .b5-fc-crowdfunding-text286 {\n      line-height: 0.5;\n    }\n    .b5-fc-crowdfunding-text287 {\n      line-height: 0.5;\n    }\n    .b5-fc-crowdfunding-text289 {\n      font-style: normal;\n      font-weight: 500;\n    }\n    .b5-fc-crowdfunding-text294 {\n      font-style: normal;\n      font-weight: 700;\n    }\n    .b5-fc-crowdfunding-text296 {\n      line-height: 0.5;\n    }\n    .b5-fc-crowdfunding-text297 {\n      line-height: 0.5;\n    }\n    .b5-fc-crowdfunding-text298 {\n      font-style: normal;\n      font-weight: 700;\n    }\n    .b5-fc-crowdfunding-text308 {\n      color: var(--dl-color-scheme-blue);\n      font-style: italic;\n      font-weight: 500;\n    }\n    .b5-fc-crowdfunding-text322 {\n      color: var(--dl-color-scheme-blue);\n      font-style: italic;\n      font-weight: 500;\n    }\n    .b5-fc-crowdfunding-text332 {\n      color: var(--dl-color-scheme-blue);\n      font-style: italic;\n      font-weight: 500;\n    }\n  }\n  @media (max-width: 479px) {\n    .b5-fc-crowdfunding-container02 {\n      padding-top: var(--dl-space-space-twounits);\n      padding-left: var(--dl-space-space-unit);\n      padding-right: var(--dl-space-space-unit);\n      padding-bottom: var(--dl-space-space-twounits);\n    }\n  }\n  #body {\n    margin: 50px;\n    margin-top: 20px;\n    border-radius: 16px;\n    min-width: 400px;\n    align-self: center;\n    align-items: stretch;\n  }\n',
                }}
              />

              <div id="body" className="b5-fc-crowdfunding-container55">
                <div
                  name="c_preview"
                  style={{ background: 'black' }}
                  className="b5-fc-crowdfunding-container57"
                >
                  <div className="b5-fc-crowdfunding-container58">
                    <div className="b5-fc-crowdfunding-container59">
                      <div className="b5-fc-crowdfunding-container60">
                        <label
                          htmlFor="G1"
                          style={{
                            color: '#4cc366',
                            textShadow: 'none',
                            fontSize: '170%',
                          }}
                          onClick="impostaLimitiAPR_I()"
                          className="b5-fc-crowdfunding-text203 FLX_h4_nocolor"
                        >
                          PRO
                        </label>
                        <input
                          type="radio"
                          id="G1"
                          name="G"
                          defaultValue="1"
                          defaultChecked="true"
                          onClick="impostaLimitiAPR_I()"
                          className="b5-fc-crowdfunding-radiobutton"
                          hidden={true}
                        />
                      </div>
                      <div className="b5-fc-crowdfunding-container61">
                        <label
                          htmlFor="G2"
                          style={{
                            color: '#33b5e5',
                            textShadow: 'none',
                            fontSize: '170%',
                          }}
                          onClick="impostaLimitiAPR_I()"
                          className="b5-fc-crowdfunding-text204 FLX_h4_nocolor"
                        >
                          VIP
                        </label>
                        <input
                          type="radio"
                          id="G2"
                          name="G"
                          defaultValue="2"
                          onClick="impostaLimitiAPR_I()"
                          className="b5-fc-crowdfunding-radiobutton1"
                          hidden={true}
                        />
                      </div>
                      <div className="b5-fc-crowdfunding-container62">
                        <label
                          htmlFor="G3"
                          style={{
                            color: '#ffdf00',
                            textShadow: 'none',
                            fontSize: '170%',
                          }}
                          onClick="impostaLimitiAPR_I()"
                          className="b5-fc-crowdfunding-text205 FLX_h4_nocolor"
                        >
                          LUX
                        </label>
                        <input
                          type="radio"
                          id="G3"
                          name="G"
                          defaultValue="3"
                          onClick="impostaLimitiAPR_I()"
                          className="b5-fc-crowdfunding-radiobutton2"
                          hidden={true}
                        />
                      </div>
                    </div>
                    <div id="L" className="b5-fc-crowdfunding-container63">
                      <button
                        type="button"
                        onClick="riduciLivello()"
                        className="b5-fc-crowdfunding-button button FLX_txt_big"
                        style={{
                          color: '#33b5e5',
                          textShadow: 'none',
                          fontSize: '150%',
                        }}
                      >
                        -
                      </button>
                      <span
                        className="FLX_txt_med_small"
                        style={{
                          color: '#fff',
                          textShadow: 'none',
                          fontSize: '110%',
                        }}
                      >
                        Livello: 
                      </span>
                      <span
                        id="livelloValue"
                        className="b5-fc-crowdfunding-text207 FLX_txt_med_big"
                        style={{
                          color: '#33b5e5',
                          textShadow: 'none',
                          fontSize: '130%',
                        }}
                      >
                        0
                      </span>
                      <button
                        type="button"
                        onClick="aumentaLivello()"
                        className="b5-fc-crowdfunding-button1 button FLX_txt_big"
                        style={{
                          color: '#33b5e5',
                          textShadow: 'none',
                          fontSize: '150%',
                        }}
                      >
                        +
                      </button>
                    </div>
                    <div id="E" className="b5-fc-crowdfunding-container64">
                      <button
                        type="button"
                        onClick="decrementaCE()"
                        className="b5-fc-crowdfunding-button2 button FLX_txt_big"
                        style={{
                          color: '#33b5e5',
                          textShadow: 'none',
                          fontSize: '150%',
                          margin: '10px',
                        }}
                      >
                        -
                      </button>
                      <span
                        className="FLX_txt_med_small"
                        style={{
                          color: '#fff',
                          textShadow: 'none',
                          fontSize: '110%',
                        }}
                      >
                        Livello Extra:
                      </span>
                      <span
                        id="CE"
                        className="b5-fc-crowdfunding-text209 FLX_txt_med_big"
                        style={{
                          color: '#33b5e5',
                          textShadow: 'none',
                          fontSize: '130%',
                        }}
                      >
                        0
                      </span>
                      <button
                        type="button"
                        onClick="incrementaCE()"
                        className="b5-fc-crowdfunding-button3 button FLX_txt_big"
                        style={{
                          color: '#33b5e5',
                          textShadow: 'none',
                          fontSize: '150%',
                          margin: '10px',
                        }}
                      >
                        +
                      </button>
                    </div>

                    <div className="b5-fc-crowdfunding-container66">
                      <button
                        id="annoPrecedente"
                        type="button"
                        onClick="annoPrecedente()"
                        className="b5-fc-crowdfunding-button4 FLX_txt_med_small button"
                        style={{
                          color: '#fff',
                          textShadow: 'none',
                          fontSize: '110%',
                          margin: '10px',
                        }}
                      >
                        <svg
                          viewBox="0 0 1024 1024"
                          className="b5-fc-crowdfunding-icon16"
                          style={{ color: '#fff', fill: '#33b5e5' }}
                        >
                          <path d="M316 658l-60-60 256-256 256 256-60 60-196-196z" />
                        </svg>
                        <span
                          className="b5-fc-crowdfunding-text211"
                          style={{ color: '#33b5e5', textShadow: 'none' }}
                        >
                          Anno precedente
                        </span>
                      </button>
                      <button
                        id="annoSuccessivo"
                        type="button"
                        onClick="annoSuccessivo()"
                        className="b5-fc-crowdfunding-button5 FLX_txt_med_small button"
                        style={{
                          color: '#fff',
                          textShadow: 'none',
                          fontSize: '110%',
                          margin: '10px',
                        }}
                      >
                        <span
                          className="b5-fc-crowdfunding-text212"
                          style={{ color: '#33b5e5', textShadow: 'none' }}
                        >
                          Anno successivo
                        </span>
                        <svg
                          viewBox="0 0 1024 1024"
                          className="b5-fc-crowdfunding-icon18"
                          style={{ color: '#fff', fill: '#33b5e5' }}
                        >
                          <path d="M316 366l196 196 196-196 60 60-256 256-256-256z" />
                        </svg>
                      </button>
                    </div>
                    <div className="b5-fc-crowdfunding-container67">
                      <label
                        htmlFor="APR_I"
                        style={{
                          color: '#fff',
                          textShadow: 'none',
                          fontSize: '120%',
                        }}
                      >
                        Text
                      </label>
                      <input
                        type="number"
                        id="APR_I"
                        onInput="calcolaAPR()"
                        placeholder="placeholder"
                        style={{
                          color: '#fff',
                          textShadow: 'none',
                          fontSize: '130%',
                        }}
                      />
                    </div>
                    <div className="b5-fc-crowdfunding-container68">
                      <span
                        className="b5-fc-crowdfunding-text214 FLX_txt_med_big"
                        style={{
                          color: '#fff',
                          textShadow: 'none',
                          fontSize: '110%',
                        }}
                      >
                        APR Effettivo:
                      </span>
                      <span
                        id="risultatoAPR_F"
                        className="b5-fc-crowdfunding-text215 FLX_txt_med_big"
                        style={{
                          color: '#33b5e5',
                          textShadow: 'none',
                          fontSize: '130%',
                        }}
                      />
                    </div>
                    <div className="b5-fc-crowdfunding-container69">
                      <span
                        className="b5-fc-crowdfunding-text216 FLX_txt_med_big"
                        style={{
                          color: '#fff',
                          textShadow: 'none',
                          fontSize: '110%',
                        }}
                      >
                        Importo deposito:
                      </span>
                      <span
                        id="risultatoC"
                        className="b5-fc-crowdfunding-text217 FLX_txt_med_big"
                        style={{
                          color: '#33b5e5',
                          textShadow: 'none',
                          fontSize: '130%',
                        }}
                      />
                    </div>
                    <div className="b5-fc-crowdfunding-container70">
                      <span
                        className="b5-fc-crowdfunding-text218 FLX_txt_med_big"
                        style={{
                          color: '#fff',
                          textShadow: 'none',
                          fontSize: '110%',
                        }}
                      >
                        Livello extra:
                      </span>
                      <span
                        id="risultatoLE"
                        className="b5-fc-crowdfunding-text219 FLX_txt_med_big"
                        style={{
                          color: '#33b5e5',
                          textShadow: 'none',
                          fontSize: '130%',
                        }}
                      />
                    </div>
                    <div className="b5-fc-crowdfunding-container71">
                      <span
                        className="b5-fc-crowdfunding-text220 FLX_txt_med_big"
                        style={{
                          color: '#fff',
                          textShadow: 'none',
                          fontSize: '110%',
                        }}
                      >
                        Ricompensa (lordo):
                      </span>
                      <span
                        id="risultatoR"
                        className="b5-fc-crowdfunding-text221 FLX_txt_med_big"
                        style={{
                          color: '#33b5e5',
                          textShadow: 'none',
                          fontSize: '130%',
                        }}
                      />
                    </div>
                    <div className="b5-fc-crowdfunding-container72">
                      <span
                        className="b5-fc-crowdfunding-text222 FLX_txt_med_big"
                        style={{
                          color: '#fff',
                          textShadow: 'none',
                          fontSize: '110%',
                        }}
                      >
                        Commissione:
                      </span>
                      <span
                        id="risultatoTF"
                        className="b5-fc-crowdfunding-text223 FLX_txt_med_big"
                        style={{
                          color: '#33b5e5',
                          textShadow: 'none',
                          fontSize: '130%',
                        }}
                      />
                    </div>
                    <div className="b5-fc-crowdfunding-container73">
                      <span
                        className="b5-fc-crowdfunding-text224 FLX_txt_med_big"
                        style={{
                          color: '#fff',
                          textShadow: 'none',
                          fontSize: '110%',
                          alignSelf: 'center',
                        }}
                      >
                        Ricompensa (netto):
                      </span>
                      <span
                        id="risultatoRF"
                        className="b5-fc-crowdfunding-text225 FLX_txt_med_big"
                        style={{
                          color: '#33b5e5',
                          textShadow: 'none',
                          fontSize: '130%',
                          alignSelf: 'center',
                        }}
                      />
                      <div className="b5-fc-crowdfunding-container65">
                        <select
                          id="P"
                          onChange="calcolaAPR()"
                          className="b5-fc-crowdfunding-select FLX_txt_med_small"
                          style={{
                            color: '#fff',
                            textShadow: 'none',
                            fontSize: '110%',
                            outline: 'none',
                            border: 'none',
                            borderRadius: '16px',
                          }}
                        >
                          <option
                            value="1"
                            style={{ color: '#000', textShadow: 'none' }}
                          >
                            Ogni anno
                          </option>
                          <option
                            value="2"
                            style={{ color: '#000', textShadow: 'none' }}
                          >
                            Ogni 6 mesi
                          </option>
                          <option
                            value="3"
                            style={{ color: '#000', textShadow: 'none' }}
                          >
                            Ogni 4 mesi
                          </option>
                          <option
                            value="4"
                            style={{ color: '#000', textShadow: 'none' }}
                          >
                            Ogni 3 mesi
                          </option>
                          <option
                            value="6"
                            style={{ color: '#000', textShadow: 'none' }}
                          >
                            Ogni 2 mesi
                          </option>
                          <option
                            value="12"
                            style={{ color: '#000', textShadow: 'none' }}
                          >
                            Ogni mese
                          </option>
                        </select>
                      </div>
                    </div>
                    <div className="b5-fc-crowdfunding-container74 FLX_txt_med_small">
                      <div className="b5-fc-crowdfunding-container75">
                        <Script>{`
              let C = 100; // Valore predefinito per G = 1
              let T = 5; // Valore predefinito per G = 1
              let TL = 0.1; // Valore predefinito per G = 1
              let G = 1; // Aggiunto G come variabile globale
              let CE = 0; // Variabile per il livello extra

              let H = 0; // Variabile per il conteggio anni

              function impostaLimitiAPR_I() {
                G =
                  parseFloat(
                    document.querySelector('input[name="G"]:checked').value
                  ) || 1;
                switch (G) {
                  case 1:
                    C = 100;
                    T = 5;
                    TL = 0.1;
                    impostaLimitiAPR_IInput(10, 10, 10); // Valore predefinito per G = 1
                    break;
                  case 2:
                    C = 1000;
                    T = 4.5;
                    TL = 0.12;
                    impostaLimitiAPR_IInput(30, 30, 30); // Valore predefinito per G = 2
                    break;
                  case 3:
                    C = 10000;
                    T = 4;
                    TL = 0.15;
                    impostaLimitiAPR_IInput(70, 70, 70); // Valore predefinito per G = 3
                    break;
                  default:
                    C = 100;
                    T = 5;
                    TL = 0.1;
                    impostaLimitiAPR_IInput(0, 100, 0); // Valore predefinito generico
                }
                calcolaAPR();
              }

              function impostaLimitiAPR_IInput(min, max, value) {
                const APR_IInput = document.getElementById("APR_I");
                APR_IInput.min = min;
                APR_IInput.max = max;
                APR_IInput.value = value;
                calcolaAPR();
              }

              function calcolaAPR() {
                const APR_I =
                  parseFloat(document.getElementById("APR_I").value) || 0;
                const L =
                  parseFloat(
                    document.getElementById("livelloValue").innerText
                  ) || 0; // Modificato per prendere il valore dalla span
                const P = parseFloat(document.getElementById("P").value) || 1;

                const APR_E = APR_I + G * L;

                let APR_F;
                switch (P) {
                  case 1:
                    APR_F = APR_E * 1;
                    break;
                  case 2:
                    APR_F = APR_E * 0.83;
                    break;
                  case 3:
                    APR_F = APR_E * 0.66;
                    break;
                  case 4:
                    APR_F = APR_E * 0.49;
                    break;
                  case 6:
                    APR_F = APR_E * 0.32;
                    break;
                  case 12:
                    APR_F = APR_E * 0.15;
                    break;
                  default:
                    APR_F = APR_E;
                }

                // Aggiunto calcolo del livello extra
                const LE = 10000 * CE;

                // Calcolo di R modificato
                const R = (C / 100) * APR_F * (L + 1) + (LE / 100) * APR_F;

                // Limita a massimo 2 cifre decimali
                APR_F = parseFloat(APR_F.toFixed(2));

                // Converte in numero intero se i decimali sono zero
                if (APR_F % 1 === 0) {
                  APR_F = Math.round(APR_F);
                }

                // Visualizza il risultato APR_F
                document.getElementById(
                  "risultatoAPR_F"
                ).innerText = \`APR Effettivo = \${APR_F}%\`;

                // Calcola e formatta il risultato C dinamicamente
                const risultatoC = C * (L + 1);
                const formattedC = risultatoC.toLocaleString();
                document.getElementById(
                  "risultatoC"
                ).innerText = \`Importo deposito = \${formattedC} USDT\`;

                // Calcola e visualizza il risultato LE
                document.getElementById(
                  "risultatoLE"
                ).innerText = \`Livello extra = \${LE.toLocaleString()} USDT\`;

                // Calcola e formatta il risultato R dinamicamente
                const formattedR = R.toLocaleString(undefined, {
                  maximumFractionDigits: 2,
                });
                document.getElementById(
                  "risultatoR"
                ).innerText = \`Ricompensa (lordo) = \${formattedR}\`;

                // Calcola e formatta il risultato TF dinamicamente
                const TF = T - TL * L;
                document.getElementById(
                  "risultatoTF"
                ).innerText = \`Commissione = \${TF.toFixed(2)}%\`;

                // Calcola e formatta il risultato RF dinamicamente
                const RF = (R / 100) * (100 - TF);
                const formattedRF = RF.toLocaleString(undefined, {
                  maximumFractionDigits: 2,
                });
                document.getElementById(
                  "risultatoRF"
                ).innerText = \`Ricompensa (netto) = \${formattedRF} USDT\`;

                // Aggiorna dinamicamente il selettore G
                document.querySelector(
                  \`input[name="G"][value="\${G}"]\`
                ).checked = true;

                // Aggiorna dinamicamente il selettore P
                document.getElementById("P").value = P;

                // Aggiorna dinamicamente lo stato dei bottoni
                aggiornaBottoni();
              }

              function aggiornaBottoni() {
                const bottoneAnnoPrecedente =
                  document.getElementById("annoPrecedente");
                const bottoneAnnoSuccessivo =
                  document.getElementById("annoSuccessivo");
                const divE = document.getElementById("E");
                const risultatoLE = document.getElementById("risultatoLE");

                bottoneAnnoPrecedente.disabled =
                  parseFloat(
                    document.getElementById("livelloValue").innerText
                  ) === 0 && G === 1;

                if (
                  G === 3 &&
                  parseFloat(
                    document.getElementById("livelloValue").innerText
                  ) === 10
                ) {
                  divE.style.display = "flex";
                  risultatoLE.style.display = "block";
                } else {
                  divE.style.display = "none";
                  risultatoLE.style.display = "none";
                  CE = 0;
                }

                if (risultatoLE.style.display === "block") {
                  document.getElementById("CE").innerText = CE;
                }
              }

              function riduciLivello() {
                let livelloValue =
                  parseFloat(
                    document.getElementById("livelloValue").innerText
                  ) || 0;
                if (livelloValue > 0) {
                  livelloValue--;
                } else if (livelloValue === 0 && G !== 1) {
                  G--;
                  livelloValue = 10;
                  impostaLimitiAPR_IInput(0, 100, 0);
                  impostaLimitiAPR_I();
                }
                document.getElementById("livelloValue").innerText =
                  livelloValue;
                calcolaAPR();
              }

              function aumentaLivello() {
                let livelloValue =
                  parseFloat(
                    document.getElementById("livelloValue").innerText
                  ) || 0;
                if (livelloValue < 10) {
                  livelloValue++;
                } else if (livelloValue === 10 && G !== 3) {
                  G++;
                  livelloValue = 0;
                  impostaLimitiAPR_IInput(0, 100, 0);
                  impostaLimitiAPR_I();
                }
                document.getElementById("livelloValue").innerText =
                  livelloValue;
                calcolaAPR();
              }

              function incrementaCE() {
                CE++;
                document.getElementById("CE").innerText = CE;
                calcolaAPR();
              }

              function decrementaCE() {
                if (CE > 0) {
                  CE--;
                  document.getElementById("CE").innerText = CE;
                  calcolaAPR();
                }
              }

              // Funzione per gestire il bottone "Anno Precedente"
              function annoPrecedente() {
                if (H > 0) {
                  let livelloValue =
                    parseFloat(
                      document.getElementById("livelloValue").innerText
                    ) || 0;
                  if (CE > 0) {
                    CE--;
                    H--;
                  } else if (livelloValue > 0) {
                    livelloValue--;
                    H--;
                  } else if (livelloValue === 0 && G !== 1) {
                    G--;
                    livelloValue = 10;
                    impostaLimitiAPR_IInput(0, 100, 0);
                    impostaLimitiAPR_I();
                  }
                  document.getElementById("livelloValue").innerText =
                    livelloValue;
                  calcolaAPR();
                }
              }

              // Funzione per gestire il bottone "Anno Successivo"
              function annoSuccessivo() {
                let livelloValue =
                  parseFloat(
                    document.getElementById("livelloValue").innerText
                  ) || 0;
                if (livelloValue < 10) {
                  livelloValue++;
                  H++;
                } else if (livelloValue === 10 && G !== 3) {
                  G++;
                  livelloValue = 0;
                  impostaLimitiAPR_IInput(0, 100, 0);
                  impostaLimitiAPR_I();
                } else if (livelloValue === 10 && G === 3) {
                  CE++;
                  H++;
                }
                document.getElementById("livelloValue").innerText =
                  livelloValue;
                calcolaAPR();
              }

              // Esegui il calcolo iniziale
              impostaLimitiAPR_I();
            `}</Script>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </React.Fragment>
          </React.Fragment>
        </div>
      </div>
    </div>
  )
}

export default Component1
