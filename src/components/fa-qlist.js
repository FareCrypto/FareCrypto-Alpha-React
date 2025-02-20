import React from 'react'

import PropTypes from 'prop-types'

import './fa-qlist.css'

const FAQlist = (props) => {
  return (
    <div className={`fa-qlist-container1 ${props.rootClassName} `}>
      <div tabindex="0" className="fa-qlist-container2">
        <h1 className="fa-qlist-text10 text-medium-S link">{props.domanda}</h1>
        <svg viewBox="0 0 1024 1024" className="fa-qlist-icon10">
          <path d="M342 214l468 298-468 298v-596z"></path>
        </svg>
        <span className="fa-qlist-text11 text-small-M">{props.risposta}</span>
      </div>
      <div tabindex="0" className="fa-qlist-container3">
        <h1 className="fa-qlist-text12 text-medium-S link">{props.domanda7}</h1>
        <svg viewBox="0 0 1024 1024" className="fa-qlist-icon12">
          <path d="M342 214l468 298-468 298v-596z"></path>
        </svg>
        <span className="fa-qlist-text13 text-small-M">{props.risposta7}</span>
      </div>
      <div tabindex="0" className="fa-qlist-container4">
        <h1 className="fa-qlist-text14 text-medium-S link">{props.domanda6}</h1>
        <svg viewBox="0 0 1024 1024" className="fa-qlist-icon14">
          <path d="M342 214l468 298-468 298v-596z"></path>
        </svg>
        <span className="fa-qlist-text15 text-small-M">{props.risposta6}</span>
      </div>
      <div tabindex="0" className="fa-qlist-container5">
        <h1 className="fa-qlist-text16 text-medium-S link">{props.domanda5}</h1>
        <svg viewBox="0 0 1024 1024" className="fa-qlist-icon16">
          <path d="M342 214l468 298-468 298v-596z"></path>
        </svg>
        <span className="fa-qlist-text17 text-small-M">{props.risposta5}</span>
      </div>
      <div tabindex="0" className="fa-qlist-container6">
        <h1 className="fa-qlist-text18 text-medium-S link">{props.domanda4}</h1>
        <svg viewBox="0 0 1024 1024" className="fa-qlist-icon18">
          <path d="M342 214l468 298-468 298v-596z"></path>
        </svg>
        <span className="fa-qlist-text19 text-small-M">{props.risposta4}</span>
      </div>
      <div tabindex="0" className="fa-qlist-container7">
        <h1 className="fa-qlist-text20 text-medium-S link">{props.domanda3}</h1>
        <svg viewBox="0 0 1024 1024" className="fa-qlist-icon20">
          <path d="M342 214l468 298-468 298v-596z"></path>
        </svg>
        <span className="fa-qlist-text21 text-small-M">{props.risposta3}</span>
      </div>
      <div tabindex="0" className="fa-qlist-container8">
        <h1 className="fa-qlist-text22 text-medium-S link">{props.domanda2}</h1>
        <svg viewBox="0 0 1024 1024" className="fa-qlist-icon22">
          <path d="M342 214l468 298-468 298v-596z"></path>
        </svg>
        <span className="fa-qlist-text23 text-small-M">{props.risposta2}</span>
      </div>
      <div tabindex="0" className="fa-qlist-container9">
        <h1 className="fa-qlist-text24 text-medium-S link">{props.domanda1}</h1>
        <svg viewBox="0 0 1024 1024" className="fa-qlist-icon24">
          <path d="M342 214l468 298-468 298v-596z"></path>
        </svg>
        <span className="fa-qlist-text25 text-small-M">{props.risposta1}</span>
      </div>
    </div>
  )
}

FAQlist.defaultProps = {
  domanda5: '',
  risposta5: '',
  domanda7: '',
  risposta6: '',
  domanda6: '',
  domanda2: '',
  domanda4: '',
  rootClassName: '',
  risposta1: '',
  domanda3: '',
  risposta3: '',
  domanda: '',
  risposta4: '',
  domanda1: '',
  risposta2: '',
  risposta7: '',
  risposta: '',
}

FAQlist.propTypes = {
  domanda5: PropTypes.string,
  risposta5: PropTypes.string,
  domanda7: PropTypes.string,
  risposta6: PropTypes.string,
  domanda6: PropTypes.string,
  domanda2: PropTypes.string,
  domanda4: PropTypes.string,
  rootClassName: PropTypes.string,
  risposta1: PropTypes.string,
  domanda3: PropTypes.string,
  risposta3: PropTypes.string,
  domanda: PropTypes.string,
  risposta4: PropTypes.string,
  domanda1: PropTypes.string,
  risposta2: PropTypes.string,
  risposta7: PropTypes.string,
  risposta: PropTypes.string,
}

export default FAQlist
