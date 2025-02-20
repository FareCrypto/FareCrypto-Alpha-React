import React from 'react'

import PropTypes from 'prop-types'

import './patchnotes.css'

const Patchnotes = (props) => {
  return (
    <div className={`patchnotes-container1 ${props.rootClassName} `}>
      <h1 className="patchnotes-text1 FLX_txt_med_small">
        Update&apos;s notes
      </h1>
      <div className="patchnotes-container2">
        <div className="patchnotes-container3">
          <span className="patchnotes-text2 FLX_txt_small">- [</span>
          <span className="patchnotes-text3 FLX_txt_small">DD/MM/AAAA</span>
          <span className="patchnotes-text4 FLX_txt_small">]</span>
          <span className="patchnotes-text5 FLX_txt_small">V. 1.0 Alpha</span>
          <span className="patchnotes-text6 FLX_txt_small">:</span>
        </div>
        <span className="patchnotes-text7 FLX_txt_med_small">
          Siamo online!
        </span>
      </div>
    </div>
  )
}

Patchnotes.defaultProps = {
  rootClassName: '',
}

Patchnotes.propTypes = {
  rootClassName: PropTypes.string,
}

export default Patchnotes
