import React from 'react'

import PropTypes from 'prop-types'

import './footer.css'

const Footer = (props) => {
  return (
    <footer className={`footer-container10 ${props.rootClassName} `}>
      <div className="footer-container11">
        <div className="footer-container12">
          <div className="footer-container13">
            <img
              alt="image"
              src="/copia%20di%20logofcb-400h-200h.png"
              className="footer-image1"
            />
          </div>
          <div className="footer-container14">
            <div className="footer-container15">
              <div className="footer-container16">
                <h1 className="footer-text10 FLX_h3">
                  Soluzioni &amp; Strategie
                </h1>
                <div className="footer-container17"></div>
                <h1 className="footer-text11 FLX_txt_big">
                  per guadagnare e investire!
                </h1>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-icon-group">
          <h1 className="footer-text12 FLX_txt_med_big">Seguici anche su</h1>
          <div className="footer-container18">
            <svg
              viewBox="0 0 877.7142857142857 1024"
              className="footer-icon1 socialicon"
            >
              <path d="M713.143 73.143c90.857 0 164.571 73.714 164.571 164.571v548.571c0 90.857-73.714 164.571-164.571 164.571h-107.429v-340h113.714l17.143-132.571h-130.857v-84.571c0-38.286 10.286-64 65.714-64l69.714-0.571v-118.286c-12-1.714-53.714-5.143-101.714-5.143-101.143 0-170.857 61.714-170.857 174.857v97.714h-114.286v132.571h114.286v340h-304c-90.857 0-164.571-73.714-164.571-164.571v-548.571c0-90.857 73.714-164.571 164.571-164.571h548.571z"></path>
            </svg>
            <svg
              viewBox="0 0 877.7142857142857 1024"
              className="footer-icon3 socialicon"
            >
              <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
            </svg>
          </div>
          <div className="footer-container19">
            <svg
              viewBox="0 0 950.8571428571428 1024"
              className="footer-icon5 socialicon"
            >
              <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
            </svg>
            <a
              href="https://www.tiktok.com/@officialfarecrypto"
              target="_blank"
              rel="noreferrer noopener"
              className="footer-link1"
            >
              <img
                alt="image"
                src="/external/tiktokiconblue-200h-200h.png"
                className="footer-image2 socialicon"
              />
            </a>
          </div>
        </div>
      </div>
      <div id="footer-copyright" className="footer-container20">
        <span className="footer-text13 FLX_txt_small">Copyright © 2024</span>
        <div className="footer-container21">
          <span className="footer-text14 FLX_txt_small"> - </span>
          <a
            href="https://www.farecrypto.net/"
            target="_blank"
            rel="noreferrer noopener"
            className="footer-link2"
          >
            <i className="footer-text15 FLX_txt_small">FareCrypto.NET</i>
          </a>
          <span className="footer-text16 FLX_txt_small"> (or </span>
          <a href="https://www.farecrypto.eu/" className="footer-link3">
            <i className="footer-text17 FLX_txt_small">.EU</i>
          </a>
          <span className="footer-text18 FLX_txt_small"> )</span>
          <span className="footer-text19 FLX_txt_small"> - </span>
        </div>
        <span className="footer-text20 FLX_txt_small">
          All rights reserved.
        </span>
      </div>
      <div id="footer_conn_state" className="footer-container22">
        <svg viewBox="0 0 1024 1024" className="footer-icon7">
          <path d="M512 36.571c-262.286 0-475.429 213.143-475.429 475.429s213.143 475.429 475.429 475.429 475.429-213.143 475.429-475.429-213.143-475.429-475.429-475.429zM512 0c282.857 0 512 229.143 512 512s-229.143 512-512 512-512-229.143-512-512 229.143-512 512-512zM283.429 475.429c5.143 0 9.143 4 9.143 9.143v274.286c0 5.143-4 9.143-9.143 9.143h-18.286c-5.143 0-9.143-4-9.143-9.143v-274.286c0-5.143 4-9.143 9.143-9.143h18.286zM512 512c40.571 0 73.143 32.571 73.143 73.143 0 26.857-14.857 50.286-36.571 62.857v65.143c0 10.286-8 18.286-18.286 18.286h-36.571c-10.286 0-18.286-8-18.286-18.286v-65.143c-21.714-12.571-36.571-36-36.571-62.857 0-40.571 32.571-73.143 73.143-73.143zM512 73.143c242.286 0 438.857 196.571 438.857 438.857s-196.571 438.857-438.857 438.857-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857zM310.857 347.429v54.857c0 10.286 8 18.286 18.286 18.286h36.571c10.286 0 18.286-8 18.286-18.286v-54.857c0-70.857 57.143-128 128-128s128 57.143 128 128v54.857c0 10.286 8 18.286 18.286 18.286h36.571c10.286 0 18.286-8 18.286-18.286v-54.857c0-110.857-90.286-201.143-201.143-201.143s-201.143 90.286-201.143 201.143zM804.571 768v-292.571c0-20-16.571-36.571-36.571-36.571h-512c-20 0-36.571 16.571-36.571 36.571v292.571c0 20 16.571 36.571 36.571 36.571h512c20 0 36.571-16.571 36.571-36.571z"></path>
        </svg>
        <span className="footer-text21 FLX_txt_small">
          La tua connessione è protetta.
        </span>
      </div>
    </footer>
  )
}

Footer.defaultProps = {
  rootClassName: '',
}

Footer.propTypes = {
  rootClassName: PropTypes.string,
}

export default Footer
