import React from 'react'

import Script from 'dangerous-html/react'

import './alerts-handling.css'

const AlertsHandling = (props) => {
  return (
    <div className="alerts-handling-container1">
      <div id="alertBoxSuccess" className="alerts-handling-container2">
        <strong className="alerts-handling-text1 FLX_txt_med_small">
          Eseguito correttamente!
        </strong>
        <svg
          onClick="closeAlertSuccess()"
          viewBox="0 0 1024 1024"
          className="alerts-handling-icon1 closeIconBtn"
        >
          <path d="M512 0c-282.77 0-512 229.23-512 512s229.23 512 512 512 512-229.23 512-512-229.23-512-512-512zM512 928c-229.75 0-416-186.25-416-416s186.25-416 416-416 416 186.25 416 416-186.25 416-416 416z"></path>
          <path d="M672 256l-160 160-160-160-96 96 160 160-160 160 96 96 160-160 160 160 96-96-160-160 160-160z"></path>
        </svg>
      </div>
      <div id="alertBoxFail" className="alerts-handling-container3">
        <strong className="alerts-handling-text2 FLX_txt_med_small">
          <span className="alerts-handling-text3">
            Oops! Qualcosa potrebbe non aver funzionato!
          </span>
          <br></br>
          <span>
            Riprova di nuovo, oppure contatta il support se il problema
            persiste.
          </span>
          <br></br>
        </strong>
        <svg
          onClick="closeAlertFail()"
          viewBox="0 0 1024 1024"
          className="alerts-handling-icon4 closeIconBtn"
        >
          <path d="M512 0c-282.77 0-512 229.23-512 512s229.23 512 512 512 512-229.23 512-512-229.23-512-512-512zM512 928c-229.75 0-416-186.25-416-416s186.25-416 416-416 416 186.25 416 416-186.25 416-416 416z"></path>
          <path d="M672 256l-160 160-160-160-96 96 160 160-160 160 96 96 160-160 160 160 96-96-160-160 160-160z"></path>
        </svg>
      </div>
      <div className="alerts-handling-container4">
        <div className="alerts-handling-container5">
          <React.Fragment>
            <Script>{`
function closeAlertSuccess() {
  document.getElementById("alertBoxSuccess").style.display = "none";
}
function closeAlertFail() {
  document.getElementById("alertBoxFail").style.display = "none";
}
`}</Script>
          </React.Fragment>
        </div>
      </div>
    </div>
  )
}

export default AlertsHandling
