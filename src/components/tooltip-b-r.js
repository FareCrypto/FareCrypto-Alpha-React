import React from 'react'

import PropTypes from 'prop-types'

import './tooltip-b-r.css'

const TooltipBR = (props) => {
  return (
    <div className={`tooltip-b-r-container ${props.rootClassName} `}>
      <div
        data-thq="thq-dropdown"
        className="tooltip-b-r-thq-dropdown list-item"
      >
        <div
          data-thq="thq-dropdown-toggle"
          className="tooltip-b-r-dropdown-toggle1"
        >
          <svg
            viewBox="0 0 877.7142857142857 1024"
            className="tooltip-b-r-icon1 tooltip"
          >
            <path d="M502.857 685.714v91.429c0 10.286-8 18.286-18.286 18.286h-91.429c-10.286 0-18.286-8-18.286-18.286v-91.429c0-10.286 8-18.286 18.286-18.286h91.429c10.286 0 18.286 8 18.286 18.286zM649.143 402.286c0 81.143-56.571 113.143-98.286 136.571-29.714 17.143-48 28-48 46.286v18.286c0 10.286-8 18.286-18.286 18.286h-91.429c-10.286 0-18.286-8-18.286-18.286v-38.857c0-70.286 50.286-92.571 90.857-110.857 34.286-16 55.429-26.857 55.429-52.571 0-33.143-41.714-57.714-79.429-57.714-20 0-41.143 6.286-54.286 15.429-12.571 8.571-24.571 21.143-45.714 47.429-3.429 4.571-8.571 6.857-14.286 6.857-4 0-8-1.143-10.857-3.429l-61.714-46.857c-7.429-5.714-9.143-16.571-4-24.571 46.857-73.714 112.571-109.714 199.429-109.714v0c93.714 0 198.857 74.286 198.857 173.714zM438.857 146.286c-201.714 0-365.714 164-365.714 365.714s164 365.714 365.714 365.714 365.714-164 365.714-365.714-164-365.714-365.714-365.714zM877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857v0c242.286 0 438.857 196.571 438.857 438.857z"></path>
          </svg>
        </div>
        <ul data-thq="thq-dropdown-list" className="tooltip-b-r-dropdown-list">
          <li
            data-thq="thq-dropdown"
            className="tooltip-b-r-dropdown list-item"
          >
            <div data-thq="thq-dropdown-toggle" className="tooltipBox">
              <p className="tooltip-b-r-text1 tooltiptext FLX_txt_small2">
                {props.t1}
              </p>
              <strong className="tooltip-b-r-text2 tooltiptext">
                {props.s1}
              </strong>
              <p className="tooltip-b-r-text3 tooltiptext FLX_txt_small2">
                {props.t2}
              </p>
              <strong className="tooltip-b-r-text4 tooltiptext">
                {props.s2}
              </strong>
              <p className="tooltip-b-r-text5 tooltiptext FLX_txt_small2">
                {props.t3}
              </p>
              <strong className="tooltip-b-r-text6 tooltiptext">
                {props.s3}
              </strong>
              <p className="tooltip-b-r-text7 tooltiptext FLX_txt_small2">
                {props.t4}
              </p>
              <strong className="tooltip-b-r-text8 tooltiptext">
                {props.s4}
              </strong>
              <p className="tooltip-b-r-text9 tooltiptext FLX_txt_small2">
                {props.t5}
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  )
}

TooltipBR.defaultProps = {
  rootClassName: '',
  t2: '',
  t1: '',
  s4: '',
  t5: '',
  t3: '',
  s2: '',
  s1: '',
  s3: '',
  t4: '',
}

TooltipBR.propTypes = {
  rootClassName: PropTypes.string,
  t2: PropTypes.string,
  t1: PropTypes.string,
  s4: PropTypes.string,
  t5: PropTypes.string,
  t3: PropTypes.string,
  s2: PropTypes.string,
  s1: PropTypes.string,
  s3: PropTypes.string,
  t4: PropTypes.string,
}

export default TooltipBR
