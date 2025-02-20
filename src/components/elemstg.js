import React from 'react'

import PropTypes from 'prop-types'

import './elemstg.css'

const Elemstg = (props) => {
  return (
    <div tabindex="0" className={`elemstg-container10 ${props.rootClassName} `}>
      <span className="elemstg-text10 text-small-M">{props.id}</span>
      <div className="elemstg-container11"></div>
      <h1 className="elemstg-text11 text-small-M">{props.target}</h1>
      <div className="elemstg-container12"></div>
      <h1 className="elemstg-text12 text-small-M">{props.difficolta}</h1>
      <div className="elemstg-container13"></div>
      <h1 className="elemstg-text13 text-small-M">{props.budgetMin}</h1>
      <div className="elemstg-container14"></div>
      <h1 className="elemstg-text14 text-small-M">{props.modalita}</h1>
      <div className="elemstg-container15"></div>
      <h1 className="elemstg-text15 text-small-M">{props.ambiente}</h1>
      <div className="elemstg-container16"></div>
      <div className="elemstg-container17">
        <div className="elemstg-container18 link">
          <svg viewBox="0 0 1024 1024" className="elemstg-icon1">
            <path d="M598 128h298v298h-86v-152l-418 418-60-60 418-418h-152v-86zM810 810v-298h86v298q0 34-26 60t-60 26h-596q-36 0-61-25t-25-61v-596q0-36 25-61t61-25h298v86h-298v596h596z"></path>
          </svg>
          <span className="elemstg-text16 text-small-M">{props.open}</span>
        </div>
      </div>
      <div className="elemstg-container19"></div>
      <div className="elemstg-container20">
        <div className="elemstg-container21">
          <span className="elemstg-text17 text-small-M">
            {props.risorseCollegate}
          </span>
          <div className="elemstg-container22">
            <span className="elemstg-text18 text-small-M link">
              {props.rcLink}
            </span>
            <span className="elemstg-text19 text-small-M">{props.space}</span>
          </div>
        </div>
        <div className="elemstg-container23">
          <span className="elemstg-text20 text-small-M">
            {props.utilityCollegate}
          </span>
          <div className="elemstg-container24">
            <span className="elemstg-text21 text-small-M link">
              {props.ucLink1}
            </span>
            <span className="elemstg-text22 text-small-M">{props.space1}</span>
          </div>
        </div>
        <div className="elemstg-container25">
          <span className="elemstg-text23 text-small-M">
            {props.strategieAggiuntive}
          </span>
          <div className="elemstg-container26">
            <span className="elemstg-text24 text-small-M link">
              {props.saLink12}
            </span>
            <span className="elemstg-text25 text-small-M">{props.saSpace}</span>
          </div>
        </div>
        <div className="elemstg-container27">
          <span className="elemstg-text26 text-small-M">
            {props.strategieSimili}
          </span>
          <div className="elemstg-container28">
            <span className="elemstg-text27 text-small-M link">
              {props.ssLink121}
            </span>
            <span className="elemstg-text28 text-small-M">
              {props.ssSpace1}
            </span>
          </div>
        </div>
        <div className="elemstg-container29">
          <span className="elemstg-text29 text-small-M">{props.benefits}</span>
          <div className="elemstg-container30">
            <span className="elemstg-text30 text-small-M">{props.bLink}</span>
            <span className="elemstg-text31 text-small-M">{props.bSspace}</span>
          </div>
        </div>
        <div className="elemstg-container31">
          <span className="elemstg-text32 text-small-M">
            {props.descrizione}
          </span>
          <span className="elemstg-text33 text-small-M">{props.space11}</span>
        </div>
      </div>
      <div className="elemstg-container32"></div>
    </div>
  )
}

Elemstg.defaultProps = {
  utilityCollegate: 'Utility collegate:',
  rcLink: 'link risorsa',
  benefits: 'Benefits',
  space: '-',
  space11: 'descrizione',
  strategieAggiuntive: 'Strategie aggiuntive:',
  ucLink1: 'link utility',
  budgetMin: 'Budget Min.',
  ambiente: 'Ambiente',
  bLink: 'benefit',
  ssSpace1: '-',
  strategieSimili: 'Strategie simili:',
  target: 'Target',
  open: 'Apri',
  saLink12: 'link strategia',
  rootClassName: '',
  difficolta: 'Difficoltà',
  risorseCollegate: 'Risorse collegate:',
  saSpace: '-',
  space1: '-',
  id: 'ID',
  bSspace: '-',
  modalita: 'Modalità',
  ssLink121: 'link strategia',
  descrizione: 'Breve descrizione:',
}

Elemstg.propTypes = {
  utilityCollegate: PropTypes.string,
  rcLink: PropTypes.string,
  benefits: PropTypes.string,
  space: PropTypes.string,
  space11: PropTypes.string,
  strategieAggiuntive: PropTypes.string,
  ucLink1: PropTypes.string,
  budgetMin: PropTypes.string,
  ambiente: PropTypes.string,
  bLink: PropTypes.string,
  ssSpace1: PropTypes.string,
  strategieSimili: PropTypes.string,
  target: PropTypes.string,
  open: PropTypes.string,
  saLink12: PropTypes.string,
  rootClassName: PropTypes.string,
  difficolta: PropTypes.string,
  risorseCollegate: PropTypes.string,
  saSpace: PropTypes.string,
  space1: PropTypes.string,
  id: PropTypes.string,
  bSspace: PropTypes.string,
  modalita: PropTypes.string,
  ssLink121: PropTypes.string,
  descrizione: PropTypes.string,
}

export default Elemstg
