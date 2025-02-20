import React from 'react'

import PropTypes from 'prop-types'

import './elemstgld.css'

const Elemstgld = (props) => {
  return (
    <div className={`elemstgld-container ${props.rootClassName} `}>
      <span className="elemstgld-text1 text-small-S blue_glow">{props.id}</span>
      <h1 className="elemstgld-text2 text-small-S blue_glow">{props.target}</h1>
      <h1 className="elemstgld-text3 text-small-S blue_glow">
        {props.difficolta}
      </h1>
      <h1 className="elemstgld-text4 text-small-S blue_glow">
        {props.budgetMin}
      </h1>
      <h1 className="elemstgld-text5 text-small-S blue_glow">
        {props.modalita}
      </h1>
      <h1 className="elemstgld-text6 text-small-S blue_glow">
        {props.ambiente}
      </h1>
      <h1 className="elemstgld-text7 text-small-S blue_glow">
        {props.actions}
      </h1>
    </div>
  )
}

Elemstgld.defaultProps = {
  difficolta: 'Difficoltà',
  target: 'Target',
  ambiente: 'Ambiente',
  modalita: 'Modalità',
  budgetMin: 'Budget Min.',
  actions: 'Azioni',
  rootClassName: '',
  id: 'ID',
}

Elemstgld.propTypes = {
  difficolta: PropTypes.string,
  target: PropTypes.string,
  ambiente: PropTypes.string,
  modalita: PropTypes.string,
  budgetMin: PropTypes.string,
  actions: PropTypes.string,
  rootClassName: PropTypes.string,
  id: PropTypes.string,
}

export default Elemstgld
