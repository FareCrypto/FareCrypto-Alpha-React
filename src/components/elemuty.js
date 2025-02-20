import React from 'react'

import PropTypes from 'prop-types'

import './elemuty.css'

const Elemuty = (props) => {
  return (
    <div tabindex="0" className="elemuty-container10">
      <span className="elemuty-text10 text-small-M">{props.id}</span>
      <div className="elemuty-container11"></div>
      <img
        alt={props.imageAlt}
        src={props.imageSrc}
        className="elemuty-image"
      />
      <div className="elemuty-container12"></div>
      <h1 className="elemuty-text11 text-small-M">{props.nome}</h1>
      <div className="elemuty-container13"></div>
      <h1 className="elemuty-text12 text-small-M">{props.budgetMin}</h1>
      <div className="elemuty-container14"></div>
      <h1 className="elemuty-text13 text-small-M">{props.modalita}</h1>
      <div className="elemuty-container15"></div>
      <h1 className="elemuty-text14 text-small-M">{props.ambiente}</h1>
      <div className="elemuty-container16"></div>
      <div className="elemuty-container17 link">
        <div className="elemuty-container18 link">
          <svg viewBox="0 0 1024 1024" className="elemuty-icon1">
            <path d="M598 128h298v298h-86v-152l-418 418-60-60 418-418h-152v-86zM810 810v-298h86v298q0 34-26 60t-60 26h-596q-36 0-61-25t-25-61v-596q0-36 25-61t61-25h298v86h-298v596h596z"></path>
          </svg>
          <span className="elemuty-text15 text-small-M">{props.open}</span>
        </div>
      </div>
      <div className="elemuty-container19"></div>
      <div className="elemuty-container20">
        <div className="elemuty-container21">
          <span className="elemuty-text16 text-small-M">
            {props.risorseCollegate}
          </span>
          <div className="elemuty-container22">
            <span className="elemuty-text17 text-small-M link">
              {props.rcLink}
            </span>
            <span className="elemuty-text18 text-small-M">{props.space}</span>
          </div>
        </div>
        <div className="elemuty-container23">
          <span className="elemuty-text19 text-small-M">
            {props.utilityCollegate}
          </span>
          <div className="elemuty-container24">
            <span className="elemuty-text20 text-small-M link">
              {props.ucLink1}
            </span>
            <span className="elemuty-text21 text-small-M">{props.space1}</span>
          </div>
        </div>
        <div className="elemuty-container25">
          <span className="elemuty-text22 text-small-M">
            {props.strategieAggiuntive}
          </span>
          <div className="elemuty-container26">
            <span className="elemuty-text23 text-small-M link">
              {props.saLink12}
            </span>
            <span className="elemuty-text24 text-small-M">{props.saSpace}</span>
          </div>
        </div>
        <div className="elemuty-container27">
          <span className="elemuty-text25 text-small-M">{props.varianti}</span>
          <div className="elemuty-container28">
            <span className="elemuty-text26 text-small-M link">
              {props.vLink}
            </span>
            <span className="elemuty-text27 text-small-M">{props.vSpace}</span>
          </div>
        </div>
        <div className="elemuty-container29">
          <span className="elemuty-text28 text-small-M">{props.benefits}</span>
          <div className="elemuty-container30">
            <span className="elemuty-text29 text-small-M link">
              {props.bLink}
            </span>
            <span className="elemuty-text30 text-small-M">{props.bSspace}</span>
          </div>
        </div>
        <div className="elemuty-container31">
          <span className="elemuty-text31 text-small-M">
            {props.descrizione}
          </span>
          <span className="elemuty-text32 text-small-M">{props.space11}</span>
        </div>
      </div>
    </div>
  )
}

Elemuty.defaultProps = {
  saLink12: 'link strategia',
  descrizione: 'Breve descrizione:',
  budgetMin: 'Budget Min.',
  space1: '-',
  bLink: 'benefit',
  nome: 'Nome',
  id: 'ID',
  saSpace: '-',
  strategieAggiuntive: 'Strategie aggiuntive:',
  varianti: 'Varianti',
  space11: 'descrizione',
  vLink: '3',
  modalita: 'Modalità',
  open: 'Apri',
  utilityCollegate: 'Utility collegate:',
  risorseCollegate: 'Risorse collegate:',
  imageAlt: 'image',
  rcLink: 'link risorsa',
  ucLink1: 'link utility',
  imageSrc: 'https://play.teleporthq.io/static/svg/default-img.svg',
  benefits: 'Benefits',
  ambiente: 'Ambiente',
  bSspace: '-',
  space: '-',
  vSpace: '-',
}

Elemuty.propTypes = {
  saLink12: PropTypes.string,
  descrizione: PropTypes.string,
  budgetMin: PropTypes.string,
  space1: PropTypes.string,
  bLink: PropTypes.string,
  nome: PropTypes.string,
  id: PropTypes.string,
  saSpace: PropTypes.string,
  strategieAggiuntive: PropTypes.string,
  varianti: PropTypes.string,
  space11: PropTypes.string,
  vLink: PropTypes.string,
  modalita: PropTypes.string,
  open: PropTypes.string,
  utilityCollegate: PropTypes.string,
  risorseCollegate: PropTypes.string,
  imageAlt: PropTypes.string,
  rcLink: PropTypes.string,
  ucLink1: PropTypes.string,
  imageSrc: PropTypes.string,
  benefits: PropTypes.string,
  ambiente: PropTypes.string,
  bSspace: PropTypes.string,
  space: PropTypes.string,
  vSpace: PropTypes.string,
}

export default Elemuty
