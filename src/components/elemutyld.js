import React from 'react'

import PropTypes from 'prop-types'

import './elemutyld.css'

const Elemutyld = (props) => {
  return (
    <div className="elemutyld-container">
      <span className="elemutyld-text1 text-small-S blue_glow">{props.id}</span>
      <h1 className="elemutyld-text2 text-small-S blue_glow">{props.target}</h1>
      <h1 className="elemutyld-text3 text-small-S blue_glow">
        {props.rischio}
      </h1>
      <h1 className="elemutyld-text4 text-small-S blue_glow">
        {props.budgetMin}
      </h1>
      <h1 className="elemutyld-text5 text-small-S blue_glow">
        {props.modalita}
      </h1>
      <h1 className="elemutyld-text6 text-small-S blue_glow">
        {props.ambiente}
      </h1>
      <h1 className="elemutyld-text7 text-small-S blue_glow">
        {props.actions}
      </h1>
    </div>
  )
}

Elemutyld.defaultProps = {
  modalita: 'Modalità',
  id: 'ID',
  budgetMin: 'Budget Min.',
  actions: 'Azioni',
  rischio: 'Rischio',
  target: 'Target',
  ambiente: 'Ambiente',
}

Elemutyld.propTypes = {
  modalita: PropTypes.string,
  id: PropTypes.string,
  budgetMin: PropTypes.string,
  actions: PropTypes.string,
  rischio: PropTypes.string,
  target: PropTypes.string,
  ambiente: PropTypes.string,
}

export default Elemutyld
