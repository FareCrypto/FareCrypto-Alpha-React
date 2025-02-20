import React from 'react'

import PropTypes from 'prop-types'

import './elemrss.css'

const Elemrss = (props) => {
  return (
    <div tabindex="0" className="elemrss-container10">
      <span className="elemrss-text10 text-small-M">{props.id}</span>
      <div className="elemrss-container11"></div>
      <img
        alt={props.imageAlt}
        src={props.imageSrc}
        className="elemrss-image"
      />
      <div className="elemrss-container12"></div>
      <h1 className="elemrss-text11 text-small-M">{props.nome}</h1>
      <div className="elemrss-container13"></div>
      <h1 className="elemrss-text12 text-small-M">{props.moneta}</h1>
      <div className="elemrss-container14"></div>
      <h1 className="elemrss-text13 text-small-M">{props.categoria}</h1>
      <div className="elemrss-container15"></div>
      <h1 className="elemrss-text14 text-small-M">{props.ambiente}</h1>
      <div className="elemrss-container16"></div>
      <div className="elemrss-container17 link">
        <div className="elemrss-container18 link">
          <svg viewBox="0 0 1024 1024" className="elemrss-icon1">
            <path d="M598 128h298v298h-86v-152l-418 418-60-60 418-418h-152v-86zM810 810v-298h86v298q0 34-26 60t-60 26h-596q-36 0-61-25t-25-61v-596q0-36 25-61t61-25h298v86h-298v596h596z"></path>
          </svg>
          <span className="elemrss-text15 text-small-M">{props.open}</span>
        </div>
      </div>
      <div className="elemrss-container19"></div>
      <div className="elemrss-container20">
        <div className="elemrss-container21">
          <span className="elemrss-text16 text-small-M">
            {props.strategieCollegate}
          </span>
          <div className="elemrss-container22">
            <span className="elemrss-text17 text-small-M link">
              {props.scLink}
            </span>
            <span className="elemrss-text18 text-small-M">{props.space}</span>
          </div>
        </div>
        <div className="elemrss-container23">
          <span className="elemrss-text19 text-small-M">
            {props.utilityCollegate}
          </span>
          <div className="elemrss-container24">
            <span className="elemrss-text20 text-small-M link">
              {props.ucLink1}
            </span>
            <span className="elemrss-text21 text-small-M">{props.space1}</span>
          </div>
        </div>
        <div className="elemrss-container25">
          <span className="elemrss-text22 text-small-M">{props.requisiti}</span>
          <div className="elemrss-container26">
            <span className="elemrss-text23 text-small-M">{props.rDetail}</span>
            <span className="elemrss-text24 text-small-M">{props.saSpace}</span>
            <span className="elemrss-text25 text-small-M link">
              {props.rLink}
            </span>
          </div>
        </div>
        <div className="elemrss-container27">
          <span className="elemrss-text26 text-small-M">{props.benefits}</span>
          <div className="elemrss-container28">
            <span className="elemrss-text27 text-small-M link">
              {props.bLink}
            </span>
            <span className="elemrss-text28 text-small-M">{props.bSspace}</span>
          </div>
        </div>
        <div className="elemrss-container29">
          <span className="elemrss-text29 text-small-M">
            {props.disponibilePer}
          </span>
          <div className="elemrss-container30">
            <span className="elemrss-text30 text-small-M">{props.dpLink}</span>
          </div>
        </div>
        <div className="elemrss-container31">
          <span className="elemrss-text31 text-small-M">
            {props.risorseSimili}
          </span>
          <div className="elemrss-container32">
            <span className="elemrss-text32 text-small-M link">
              {props.sLink}
            </span>
            <span className="elemrss-text33 text-small-M">{props.vSpace}</span>
          </div>
        </div>
        <div className="elemrss-container33">
          <span className="elemrss-text34 text-small-M">
            {props.descrizione}
          </span>
          <span className="elemrss-text35 text-small-M">{props.space11}</span>
        </div>
      </div>
    </div>
  )
}

Elemrss.defaultProps = {
  categoria: 'Categoria',
  space11: 'descrizione',
  bSspace: '-',
  space1: '-',
  saSpace: '-',
  dpLink: 'pc, mobile, browser',
  imageSrc: 'https://play.teleporthq.io/static/svg/default-img.svg',
  disponibilePer: 'Disponibile per:',
  sLink: 'link rss',
  utilityCollegate: 'Utility collegate:',
  benefits: 'Benefits:',
  id: 'ID',
  space: '-',
  moneta: '+10',
  strategieCollegate: 'Strategie collegate:',
  vSpace: '-',
  ucLink1: 'link utility',
  imageAlt: 'image',
  open: 'Apri',
  requisiti: 'Requisiti:',
  rDetail: 'dettagli',
  bLink: 'benefit',
  risorseSimili: 'Risorse simili:',
  nome: 'Nome',
  rLink: 'link',
  descrizione: 'Breve descrizione:',
  scLink: 'link strategia',
  ambiente: 'Ambiente',
}

Elemrss.propTypes = {
  categoria: PropTypes.string,
  space11: PropTypes.string,
  bSspace: PropTypes.string,
  space1: PropTypes.string,
  saSpace: PropTypes.string,
  dpLink: PropTypes.string,
  imageSrc: PropTypes.string,
  disponibilePer: PropTypes.string,
  sLink: PropTypes.string,
  utilityCollegate: PropTypes.string,
  benefits: PropTypes.string,
  id: PropTypes.string,
  space: PropTypes.string,
  moneta: PropTypes.string,
  strategieCollegate: PropTypes.string,
  vSpace: PropTypes.string,
  ucLink1: PropTypes.string,
  imageAlt: PropTypes.string,
  open: PropTypes.string,
  requisiti: PropTypes.string,
  rDetail: PropTypes.string,
  bLink: PropTypes.string,
  risorseSimili: PropTypes.string,
  nome: PropTypes.string,
  rLink: PropTypes.string,
  descrizione: PropTypes.string,
  scLink: PropTypes.string,
  ambiente: PropTypes.string,
}

export default Elemrss
