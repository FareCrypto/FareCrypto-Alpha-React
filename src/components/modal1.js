import React from 'react'

import PropTypes from 'prop-types'

import './modal1.css'

const Modal1 = (props) => {
  return (
    <div className={`modal1-container ${props.rootClassName} `}>
      <header data-thq="thq-navbar" className="modal1-navbar-interactive">
        <div data-thq="thq-navbar-nav" className="modal1-desktop-menu"></div>
        <div data-thq="thq-burger-menu" className="modal1-burger-menu">
          <button type="button" className="button">
            Button
          </button>
        </div>
        <div data-thq="thq-mobile-menu" className="modal1-mobile-menu">
          <div className="modal1-nav">
            <div className="modal1-buttons">
              <h1>{props.heading1}</h1>
              <span>{props.text}</span>
            </div>
            <div data-thq="thq-close-menu" className="modal1-close-menu">
              <svg viewBox="0 0 1024 1024" className="modal1-icon1 btn_icon_2">
                <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
              </svg>
            </div>
          </div>
        </div>
      </header>
    </div>
  )
}

Modal1.defaultProps = {
  heading1: 'Heading',
  rootClassName: '',
  text: 'Text',
}

Modal1.propTypes = {
  heading1: PropTypes.string,
  rootClassName: PropTypes.string,
  text: PropTypes.string,
}

export default Modal1
