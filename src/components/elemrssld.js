import React from 'react'

import PropTypes from 'prop-types'

import './elemrssld.css'

const Elemrssld = (props) => {
  return (
    <div className="elemrssld-container">
      <span className="elemrssld-text1 text-small-M blue_glow">{props.id}</span>
      <h1 className="elemrssld-text2 text-small-M blue_glow">{props.icon}</h1>
      <h1 className="elemrssld-text3 text-small-M blue_glow">{props.nome}</h1>
      <h1 className="elemrssld-text4 text-small-M blue_glow">{props.moneta}</h1>
      <h1 className="elemrssld-text5 text-small-M blue_glow">
        {props.categoria}
      </h1>
      <h1 className="elemrssld-text6 text-small-M blue_glow">
        {props.ambiente}
      </h1>
      <h1 className="elemrssld-text7 text-small-M blue_glow">
        {props.actions}
      </h1>
    </div>
  )
}

Elemrssld.defaultProps = {
  id: 'ID',
  ambiente: 'Ambiente',
  icon: 'Icona',
  moneta: 'Moneta',
  actions: 'Azioni',
  nome: 'Nome',
  categoria: 'Categoria',
}

Elemrssld.propTypes = {
  id: PropTypes.string,
  ambiente: PropTypes.string,
  icon: PropTypes.string,
  moneta: PropTypes.string,
  actions: PropTypes.string,
  nome: PropTypes.string,
  categoria: PropTypes.string,
}

export default Elemrssld
