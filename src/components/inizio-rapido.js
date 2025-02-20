import React from 'react'

import Script from 'dangerous-html/react'
import PropTypes from 'prop-types'

import './inizio-rapido.css'

const InizioRapido = (props) => {
  return (
    <div
      id="iniziorapido"
      className={`inizio-rapido-container10 ${props.rootClassName} `}
    >
      <h1 className="inizio-rapido-text10 FLX_h1_small">Inizio rapido</h1>
      <div className="inizio-rapido-container11">
        <b className="inizio-rapido-text11 FLX_txt_med_small">
          Segui questi passaggi per scoprire il percorso migliore e dare il via
          alla tua carriera da Crypto-Farmer!
        </b>
        <span className="inizio-rapido-text12 FLX_txt_small">
          Nota: Questo generatore non è un sondaggio e non possiede alcuna
          funzione di raccolta dati, le informazioni fornite servono
          esclusivamente come &quot;interruttori&quot; per aiutarti a
          selezionare le risorse e le strategie migliori. Cambiando o riavviando
          pagina, tutte le selezioni ed i risultati saranno resettati.
        </span>
      </div>
      <div className="inizio-rapido-container12">
        <div className="inizio-rapido-container13">
          <h1 className="FLX_txt_med_small">(1) Possiedi già delle Crypto?</h1>
        </div>
        <div className="inizio-rapido-container14">
          <div className="inizio-rapido-container15">
            <input
              type="radio"
              id="c1"
              name="filter-radio"
              data-filter="IR-1"
              className="radio_check filter-radio"
            />
            <label htmlFor="c1" className="inizio-rapido-text14 FLX_txt_small">
              Si, mostrami cosa posso fare
            </label>
          </div>
          <div className="inizio-rapido-container16">
            <input
              type="radio"
              id="c2"
              name="filter-radio"
              data-filter="IR-2"
              className="radio_check filter-radio"
            />
            <label htmlFor="c2" className="inizio-rapido-text15 FLX_txt_small">
              No, voglio procurarmi un fondo
            </label>
          </div>
          <div className="inizio-rapido-container17">
            <input
              type="radio"
              id="c3"
              name="filter-radio"
              data-filter="IR-3  IR-1-4"
              className="radio_check filter-radio"
            />
            <label htmlFor="c3" className="inizio-rapido-text16 FLX_txt_small">
              No, voglio iniziare da zero
            </label>
          </div>
        </div>
      </div>
      <div className="inizio-rapido-container18">
        <div className="IR-2 item items inizio-rapido-container19">
          <div className="inizio-rapido-container20">
            <h1 className="FLX_txt_med_small">(2/1) Mercati</h1>
          </div>
          <div className="inizio-rapido-container21">
            <div className="inizio-rapido-container22">
              <b className="link FLX_txt_med_small">Binance</b>
            </div>
            <div className="inizio-rapido-container23">
              <b className="link FLX_txt_med_small">KuCoin</b>
            </div>
            <div className="inizio-rapido-container24">
              <b className="link FLX_txt_med_small">Coinbase</b>
            </div>
            <div className="inizio-rapido-container25">
              <b className="link FLX_txt_med_small">Crypto.com</b>
            </div>
            <div className="inizio-rapido-container26">
              <b className="link FLX_txt_med_small">Young Platform</b>
            </div>
          </div>
          <div className="inizio-rapido-container27">
            <div className="inizio-rapido-container28">
              <input
                type="radio"
                id="c4"
                name="filter-radio"
                data-filter="IR-1 IR-2"
                className="radio_check filter-radio"
              />
              <label htmlFor="c4" className="FLX_txt_small">
                Ho già un fondo
              </label>
              <b className="FLX_txt_small"> / </b>
              <label htmlFor="c4" className="FLX_txt_small">
                Ho comprato delle Crypto
              </label>
            </div>
          </div>
        </div>
        <div className="item IR-1 items inizio-rapido-container29">
          <div className="inizio-rapido-container30">
            <h1 className="FLX_txt_med_small">
              (2/2) Fondo disponibile (USDT)
            </h1>
          </div>
          <div className="inizio-rapido-container31">
            <div className="inizio-rapido-container32">
              <input
                type="radio"
                id="c1-1"
                name="filter-radio"
                data-filter="IR-1 IR-1-1 IR-3"
                className="radio_check filter-radio"
              />
              <label
                htmlFor="c1-1"
                className="inizio-rapido-text27 FLX_txt_small"
              >
                Più di 10 USDT
              </label>
            </div>
            <div className="inizio-rapido-container33">
              <input
                type="radio"
                id="c1-2"
                name="filter-radio"
                data-filter="IR-1 IR-1-1 IR-1-2 IR-3"
                className="radio_check filter-radio"
              />
              <label
                htmlFor="c1-2"
                className="inizio-rapido-text28 FLX_txt_small"
              >
                Più di 100 USDT
              </label>
            </div>
            <div className="inizio-rapido-container34">
              <input
                type="radio"
                id="c1-3"
                name="filter-radio"
                data-filter="IR-1 IR-1-2 IR-1-3 IR-3"
                className="radio_check filter-radio"
              />
              <label
                htmlFor="c1-3"
                className="inizio-rapido-text29 FLX_txt_small"
              >
                Più di 1.000 USDT
              </label>
            </div>
            <div className="inizio-rapido-container35">
              <input
                type="radio"
                id="c1-4"
                name="filter-radio"
                data-filter="IR-1 IR-1-3 IR-3"
                className="radio_check filter-radio"
              />
              <label
                htmlFor="c1-4"
                className="inizio-rapido-text30 FLX_txt_small"
              >
                Più di 10.000 USDT
              </label>
            </div>
          </div>
        </div>
        <div className="item IR-3 items inizio-rapido-container36">
          <div className="inizio-rapido-container37">
            <h1 className="FLX_txt_med_small">
              (3) Quanto tempo libero puoi dedicare al giorno?
            </h1>
          </div>
          <div className="inizio-rapido-container38">
            <div className="inizio-rapido-container39">
              <input
                type="radio"
                id="c3-1"
                name="filter-radio"
                data-filter="IR-1 IR-3 IR-3-1 IR-4"
                className="radio_check filter-radio"
              />
              <label
                htmlFor="c3-1"
                className="inizio-rapido-text32 FLX_txt_small"
              >
                ± 1 Ora
              </label>
            </div>
            <div className="inizio-rapido-container40">
              <input
                type="radio"
                id="c3-2"
                name="filter-radio"
                data-filter="IR-1 IR-3 IR-3-2  IR-4"
                className="radio_check filter-radio"
              />
              <label
                htmlFor="c3-2"
                className="inizio-rapido-text33 FLX_txt_small"
              >
                ± 3 Ore
              </label>
            </div>
            <div className="inizio-rapido-container41">
              <input
                type="radio"
                id="c3-3"
                name="filter-radio"
                data-filter="IR-1 IR-3 IR-3-3 IR-4"
                className="radio_check filter-radio"
              />
              <label
                htmlFor="c3-3"
                className="inizio-rapido-text34 FLX_txt_small"
              >
                Più di 6 Ore
              </label>
            </div>
          </div>
        </div>
        <div className="IR-4 item items inizio-rapido-container42">
          <div className="inizio-rapido-container43">
            <h1 className="FLX_txt_med_small">
              (4) Che tipo di dispositivi potresti usare?
            </h1>
          </div>
          <div className="inizio-rapido-container44">
            <div className="inizio-rapido-container45">
              <input
                type="radio"
                id="c4-1"
                name="filter-radio"
                data-filter="IR-1 IR-3 IR-4 IR-4-1 IR-5"
                className="radio_check filter-radio"
              />
              <label
                htmlFor="c4-1"
                className="inizio-rapido-text36 FLX_txt_small"
              >
                Smartphone / Tablet
              </label>
            </div>
            <div className="inizio-rapido-container46">
              <input
                type="radio"
                id="c4-2"
                name="filter-radio"
                data-filter="IR-1 IR-3 IR-4 IR-4-2 IR-5"
                className="radio_check filter-radio"
              />
              <label
                htmlFor="c4-2"
                className="inizio-rapido-text37 FLX_txt_small"
              >
                Computer
              </label>
            </div>
            <div className="inizio-rapido-container47">
              <input
                type="radio"
                id="c4-3"
                name="filter-radio"
                data-filter="IR-1 IR-3 IR-4 IR-4-1 IR-4-2 IR-5"
                className="radio_check filter-radio"
              />
              <label
                htmlFor="c4-3"
                className="inizio-rapido-text38 FLX_txt_small"
              >
                Entrambi
              </label>
            </div>
          </div>
        </div>
        <div className="IR-5 item items inizio-rapido-container48">
          <div className="inizio-rapido-container49">
            <h1 className="FLX_txt_med_small">(5) RISULTATI</h1>
          </div>
          <div className="inizio-rapido-container50">
            <b className="inizio-rapido-text40 FLX_txt_med_big">
              Risorse consigliate:
            </b>
            <div className="inizio-rapido-risorse">
              <div className="inizio-rapido-container51 item IR-4-2">
                <li className="list_item_rss_style list-item">
                  <div className="cat_cryptogratis rss_style_inlist">
                    <div className="elem_id_style elem_id">
                      <div className="inizio-rapido-container54">
                        <span className="inizio-rapido-text41 FLX_txt_small">
                          {props.text}
                        </span>
                      </div>
                    </div>
                    <div className="inizio-rapido-separator10"></div>
                    <div className="elem_name link elem_name_style">
                      <div
                        onWheel="this.scrollLeft+=event.deltaY&gt;0?100:-100"
                        className="inizio-rapido-container56 ellips-box"
                      >
                        <span className="inizio-rapido-text42 FLX_txt_small">
                          {props.text1}
                        </span>
                      </div>
                    </div>
                    <div className="inizio-rapido-separator11"></div>
                    <div className="elem_cat elem_cat_style">
                      <div
                        onWheel="this.scrollLeft+=event.deltaY&gt;0?100:-100"
                        className="inizio-rapido-container58 ellips-box"
                      >
                        <span className="inizio-rapido-text43 FLX_txt_small">
                          {props.text2}
                        </span>
                      </div>
                    </div>
                    <div className="inizio-rapido-separator12"></div>
                    <div className="elem_coins elem_coins_style inizio-rapido-container59">
                      <span className="inizio-rapido-text44 FLX_txt_small">
                        <span>{props.text3}</span>
                        <br></br>
                      </span>
                    </div>
                  </div>
                  <div className="inizio-rapido-container60">
                    <div className="inizio-rapido-container61">
                      <div className="elem_details_style elem_details">
                        <div
                          onWheel="this.scrollLeft+=event.deltaY&gt;0?100:-100"
                          className="inizio-rapido-container63 ellips-box"
                        >
                          <span className="inizio-rapido-text47 FLX_txt_small">
                            <span>{props.text29}</span>
                            <span className="inizio-rapido-text49">
                              {props.text30}
                            </span>
                          </span>
                        </div>
                      </div>
                      <div className="inizio-rapido-separator13"></div>
                      <div className="elem_actions_style elem_actions">
                        <div className="inizio-rapido-container65 FLX_txt_small">
                          <svg
                            viewBox="0 0 1024 1024"
                            className="inizio-rapido-icon1 btn_icon"
                          >
                            <path d="M598 128h298v298h-86v-152l-418 418-60-60 418-418h-152v-86zM810 810v-298h86v298q0 34-26 60t-60 26h-596q-36 0-61-25t-25-61v-596q0-36 25-61t61-25h298v86h-298v596h596z"></path>
                          </svg>
                          <span className="inizio-rapido-text50">
                            {props.text28}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              </div>
            </div>
            <b className="inizio-rapido-text51 FLX_txt_med_big">
              Strategie compatibili:
            </b>
            <div className="inizio-rapido-strategie">
              <div className="inizio-rapido-container66 item IR-4-2">
                <li className="list_item_rss_style list-item">
                  <div className="cat_cryptogratis rss_style_inlist">
                    <div className="elem_id_style elem_id">
                      <div className="inizio-rapido-container69">
                        <span className="inizio-rapido-text52 FLX_txt_small">
                          {props.text31}
                        </span>
                      </div>
                    </div>
                    <div className="inizio-rapido-separator14"></div>
                    <div className="elem_name link elem_name_style">
                      <div
                        onWheel="this.scrollLeft+=event.deltaY&gt;0?100:-100"
                        className="inizio-rapido-container71 ellips-box"
                      >
                        <span className="inizio-rapido-text53 FLX_txt_small">
                          {props.text110}
                        </span>
                      </div>
                    </div>
                    <div className="inizio-rapido-separator15"></div>
                    <div className="elem_cat elem_cat_style">
                      <div
                        onWheel="this.scrollLeft+=event.deltaY&gt;0?100:-100"
                        className="inizio-rapido-container73 ellips-box"
                      >
                        <span className="inizio-rapido-text54 FLX_txt_small">
                          {props.text210}
                        </span>
                      </div>
                    </div>
                    <div className="inizio-rapido-separator16"></div>
                    <div className="elem_coins elem_coins_style inizio-rapido-container74">
                      <span className="inizio-rapido-text55 FLX_txt_small">
                        <span>{props.text32}</span>
                        <br></br>
                      </span>
                    </div>
                  </div>
                  <div className="inizio-rapido-container75">
                    <div className="inizio-rapido-container76">
                      <div className="elem_details_style elem_details">
                        <div
                          onWheel="this.scrollLeft+=event.deltaY&gt;0?100:-100"
                          className="inizio-rapido-container78 ellips-box"
                        >
                          <span className="inizio-rapido-text58 FLX_txt_small">
                            <span>{props.text291}</span>
                            <span className="inizio-rapido-text60">
                              {props.text301}
                            </span>
                          </span>
                        </div>
                      </div>
                      <div className="inizio-rapido-separator17"></div>
                      <div className="elem_actions_style elem_actions">
                        <div className="inizio-rapido-container80 FLX_txt_small">
                          <svg
                            viewBox="0 0 1024 1024"
                            className="inizio-rapido-icon3 btn_icon"
                          >
                            <path d="M598 128h298v298h-86v-152l-418 418-60-60 418-418h-152v-86zM810 810v-298h86v298q0 34-26 60t-60 26h-596q-36 0-61-25t-25-61v-596q0-36 25-61t61-25h298v86h-298v596h596z"></path>
                          </svg>
                          <span className="inizio-rapido-text61">
                            {props.text281}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              </div>
            </div>
            <b className="inizio-rapido-text62 FLX_txt_med_big">Extra:</b>
            <div className="inizio-rapido-utility">
              <div className="inizio-rapido-container81 item IR-4-2">
                <li className="list_item_rss_style list-item">
                  <div className="cat_cryptogratis rss_style_inlist">
                    <div className="elem_id_style elem_id">
                      <div className="inizio-rapido-container84">
                        <span className="inizio-rapido-text63 FLX_txt_small">
                          {props.text33}
                        </span>
                      </div>
                    </div>
                    <div className="inizio-rapido-separator18"></div>
                    <div className="elem_name link elem_name_style">
                      <div
                        onWheel="this.scrollLeft+=event.deltaY&gt;0?100:-100"
                        className="inizio-rapido-container86 ellips-box"
                      >
                        <span className="inizio-rapido-text64 FLX_txt_small">
                          {props.text111}
                        </span>
                      </div>
                    </div>
                    <div className="inizio-rapido-separator19"></div>
                    <div className="elem_cat elem_cat_style">
                      <div
                        onWheel="this.scrollLeft+=event.deltaY&gt;0?100:-100"
                        className="inizio-rapido-container88 ellips-box"
                      >
                        <span className="inizio-rapido-text65 FLX_txt_small">
                          {props.text211}
                        </span>
                      </div>
                    </div>
                    <div className="inizio-rapido-separator20"></div>
                    <div className="elem_coins elem_coins_style inizio-rapido-container89">
                      <span className="inizio-rapido-text66 FLX_txt_small">
                        <span>{props.text34}</span>
                        <br></br>
                      </span>
                    </div>
                  </div>
                  <div className="inizio-rapido-container90">
                    <div className="inizio-rapido-container91">
                      <div className="elem_details_style elem_details">
                        <div
                          onWheel="this.scrollLeft+=event.deltaY&gt;0?100:-100"
                          className="inizio-rapido-container93 ellips-box"
                        >
                          <span className="inizio-rapido-text69 FLX_txt_small">
                            <span>{props.text292}</span>
                            <span className="inizio-rapido-text71">
                              {props.text302}
                            </span>
                          </span>
                        </div>
                      </div>
                      <div className="inizio-rapido-separator21"></div>
                      <div className="elem_actions_style elem_actions">
                        <div className="inizio-rapido-container95 FLX_txt_small">
                          <svg
                            viewBox="0 0 1024 1024"
                            className="inizio-rapido-icon5 btn_icon"
                          >
                            <path d="M598 128h298v298h-86v-152l-418 418-60-60 418-418h-152v-86zM810 810v-298h86v298q0 34-26 60t-60 26h-596q-36 0-61-25t-25-61v-596q0-36 25-61t61-25h298v86h-298v596h596z"></path>
                          </svg>
                          <span className="inizio-rapido-text72">
                            {props.text282}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="inizio-rapido-container96">
        <div className="inizio-rapido-container97">
          <React.Fragment>
            <Script>{`
  document.addEventListener("DOMContentLoaded", function () {
    const checkboxes = document.querySelectorAll(".filter-checkbox");
    const radios = document.querySelectorAll(".filter-radio");
    const items = document.querySelectorAll(".item");

    function applyFilters() {
      items.forEach((item) => {
        const filters = Array.from(item.classList).filter((className) =>
          className.startsWith("IR-")
        );
        const checkedFilters = new Set();

        checkboxes.forEach((checkbox) => {
          const filterValues = checkbox.getAttribute("data-filter").split(" ");
          filterValues.forEach((value) => {
            if (checkbox.checked && filters.includes(value)) {
              checkedFilters.add(value);
            }
          });
        });

        radios.forEach((radio) => {
          const filterValues = radio.getAttribute("data-filter").split(" ");
          filterValues.forEach((value) => {
            if (radio.checked && filters.includes(value)) {
              checkedFilters.add(value);
            }
          });
        });

        const atLeastOneFilterPresent = [...checkedFilters].some((filter) =>
          filters.includes(filter)
        );

        if (atLeastOneFilterPresent) {
          item.style.display = "flex";
        } else {
          item.style.display = "none";
        }
      });
    }

    checkboxes.forEach((checkbox) => {
      checkbox.addEventListener("change", applyFilters);
    });

    radios.forEach((radio) => {
      radio.addEventListener("change", applyFilters);
    });

    applyFilters();
  });
`}</Script>
          </React.Fragment>
        </div>
      </div>
    </div>
  )
}

InizioRapido.defaultProps = {
  text1: 'FreeBitcoin',
  text31: '123',
  rootClassName: '',
  text301:
    'Faucet fino a $200 ogni ora! - Moltiplicatore - Sport Betting - Reward System',
  text28: 'Apri',
  text282: 'Apri',
  text281: 'Apri',
  text34: 'BTC',
  text3: 'BTC',
  text302:
    'Faucet fino a $200 ogni ora! - Moltiplicatore - Sport Betting - Reward System',
  text29: ' ',
  text111: 'FreeBitcoin',
  text292: ' ',
  text210: 'Crypto Gratis',
  text211: 'Crypto Gratis',
  text110: 'FreeBitcoin',
  text33: '123',
  text32: 'BTC',
  text30:
    'Faucet fino a $200 ogni ora! - Moltiplicatore - Sport Betting - Reward System',
  text2: 'Crypto Gratis',
  text291: ' ',
  text: '123',
}

InizioRapido.propTypes = {
  text1: PropTypes.string,
  text31: PropTypes.string,
  rootClassName: PropTypes.string,
  text301: PropTypes.string,
  text28: PropTypes.string,
  text282: PropTypes.string,
  text281: PropTypes.string,
  text34: PropTypes.string,
  text3: PropTypes.string,
  text302: PropTypes.string,
  text29: PropTypes.string,
  text111: PropTypes.string,
  text292: PropTypes.string,
  text210: PropTypes.string,
  text211: PropTypes.string,
  text110: PropTypes.string,
  text33: PropTypes.string,
  text32: PropTypes.string,
  text30: PropTypes.string,
  text2: PropTypes.string,
  text291: PropTypes.string,
  text: PropTypes.string,
}

export default InizioRapido
