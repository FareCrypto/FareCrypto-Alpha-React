import React from 'react'

import Script from 'dangerous-html/react'
import PropTypes from 'prop-types'

import './cookies-modal.css'

const CookiesModal = (props) => {
  return (
    <div
      id="cookiesModalScreen"
      className={`cookies-modal-container1 ${props.rootClassName} `}
    >
      <div id="cookieModal" className="cookies-modal-container2 cookieModal">
        <h1 className="cookies-modal-text10 FLX_txt_med_big">
          Disclaimer &amp; Cookies
        </h1>
        <span className="cModal-txt1 FLX_txt_med_small-2">
          <span>
            Questo sito è salvaguardato da un
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
            className="cookies-modal-link"
          >
            disclaimer
          </a>
          <span> ed usa alcuni cookies per funzionare correttamente.</span>
          <br></br>
        </span>
        <div id="cModal-BtnBox" className="cModal-BtnBox">
          <button
            id="cookiesAcceptAll"
            type="button"
            className="cookies-modal-button1 cModal-btnAccept FLX_txt_med_small-2 button button1"
          >
            {props.button2}
          </button>
          <button
            id="cookiesRefuse"
            type="button"
            className="cookies-modal-button2 button2 FLX_txt_med_small-2 cModal-btnReject button"
          >
            {props.button11}
          </button>
        </div>
        <span className="cookies-modal-text15 cModal-txt1 FLX_txt_small">
          <span>
            Premendo su &quot;Accetta tutto&quot;, dichiari di accettare il
            nostro disclaimer e l&apos;utilizzo dei cookies.
          </span>
          <br></br>
          <span>
            Rifiutando i cookies, ogni cosa sarà resettata appena chiuderai la
            pagina
          </span>
          <span>.</span>
          <br></br>
        </span>
      </div>
      <div className="cookies-modal-container4">
        <div className="cookies-modal-container5">
          <React.Fragment>
            <Script>{`
  document.addEventListener("DOMContentLoaded", function () {
    const cookiesAccepted = getCookie("cookiesAccepted");

    if (cookiesAccepted === "true") {
      hideCookiesModal();
    } else {
      showCookiesModal();
    }
  });

  document.getElementById("cookiesAcceptAll").addEventListener("click", function () {
    setCookie("cookiesAccepted", "true", 30);
    setCookie("disclaimerAccepted", "true", 0); // Temporary cookie

    hideButtonsAndShowMessage("Cookies accepted!", "green");
    hideCookiesModalWithDelay();
  });

  document.getElementById("cookiesRefuse").addEventListener("click", function () {
    setCookie("disclaimerAccepted", "true", 0); // Temporary cookie

    hideButtonsAndShowMessage("Cookies refused.", "red");
    hideCookiesModalWithDelay();
  });

  function hideButtonsAndShowMessage(message, color) {
    const buttonsContainer = document.getElementById("cModal-BtnBox");
    const acceptButton = document.getElementById("cookiesAcceptAll");
    const refuseButton = document.getElementById("cookiesRefuse");

    acceptButton.style.display = "none";
    refuseButton.style.display = "none";

    const messageSpan = document.createElement("span");
    messageSpan.textContent = message;
    messageSpan.classList.add("FLX_txt_med_small-2");
    messageSpan.style.color = color;

    buttonsContainer.appendChild(messageSpan);
  }

  function hideCookiesModal() {
    document.getElementById("cookiesModalScreen").style.display = "none";
  }

  function showCookiesModal() {
    document.getElementById("cookiesModalScreen").style.display = "flex";
  }

  function setCookie(name, value, days) {
    const expires = new Date();
    expires.setTime(expires.getTime() + days * 24 * 60 * 60 * 1000);
    document.cookie = \`\${name}=\${value};expires=\${expires.toUTCString()};path=/\`;
  }

  function getCookie(name) {
    const cookies = document.cookie.split("; ");
    for (const cookie of cookies) {
      const [cookieName, cookieValue] = cookie.split("=");
      if (cookieName === name) {
        return cookieValue;
      }
    }
    return "";
  }
  
  function hideCookiesModalWithDelay() {
    const cookiesModalContent = document.getElementById("cookiesModalScreen");
    setTimeout(() => {
      cookiesModalContent.style.opacity = 0;
      setTimeout(() => {
        hideCookiesModal();
      }, 1000);
    }, 2000);
  }
`}</Script>
          </React.Fragment>
        </div>
      </div>
    </div>
  )
}

CookiesModal.defaultProps = {
  button1: 'Rifiuta i cookies',
  button2: 'Accetta tutto',
  rootClassName1: '',
  button11: 'Rifiuta i cookies',
  rootClassName: '',
}

CookiesModal.propTypes = {
  button1: PropTypes.string,
  button2: PropTypes.string,
  rootClassName1: PropTypes.string,
  button11: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default CookiesModal
