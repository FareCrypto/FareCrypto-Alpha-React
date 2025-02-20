import React from 'react'

import PropTypes from 'prop-types'

import './strategie.css'

const Strategie = (props) => {
  return (
    <main id="strategie" className="page">
      <div className="sub-nav">
        <div className="strategie-container11">
          <h1 className="strategie-text100 link FLX_txt_small">Indice</h1>
        </div>
        <div className="strategie-container12">
          <h1 className="strategie-text101 link FLX_txt_small">Rapide</h1>
        </div>
        <div className="strategie-container13">
          <h1 className="strategie-text102 link FLX_txt_small">
            Breve Termine
          </h1>
        </div>
        <div className="strategie-container14">
          <h1 className="strategie-text103 link FLX_txt_small">
            Lungo Termine
          </h1>
        </div>
        <div className="strategie-container15 bg_workinprogress">
          <h1 className="strategie-text104 link FLX_txt_small">Premium</h1>
        </div>
      </div>
      <div id="start3" className="body">
        <div className="strategie-container16">
          <div className="wide_container">
            <div className="strategie-container18">
              <h1 className="strategie-text105 FLX_txt_big">Informazioni</h1>
            </div>
            <div className="strategie-container19">
              <div
                data-thq="thq-dropdown"
                className="strategie-thq-dropdown list-item"
              >
                <div
                  data-thq="thq-dropdown-toggle"
                  className="strategie-dropdown-toggle1"
                >
                  <div className="strategie-container20">
                    <b className="strategie-text106 FLX_txt_small">1.</b>
                    <strong className="strategie-text107 FLX_txt_small2">
                      <span className="strategie-text108">
                        Cosa sono le Strategie di Farming
                      </span>
                      <br></br>
                    </strong>
                  </div>
                  <div
                    data-thq="thq-dropdown-arrow"
                    className="strategie-dropdown-arrow"
                  >
                    <svg viewBox="0 0 1024 1024" className="strategie-icon10">
                      <path d="M426 726v-428l214 214z"></path>
                    </svg>
                  </div>
                </div>
                <ul
                  data-thq="thq-dropdown-list"
                  className="strategie-dropdown-list"
                >
                  <li
                    data-thq="thq-dropdown"
                    className="strategie-dropdown list-item"
                  >
                    <div
                      data-thq="thq-dropdown-toggle"
                      className="strategie-dropdown-toggle2"
                    >
                      <span className="FLX_txt_small2">
                        <span>
                          Queste particolari strategie sono create e strutturate
                          per essere pressoché infallibili
                          <span
                            dangerouslySetInnerHTML={{
                              __html: ' ',
                            }}
                          />
                        </span>
                        <span className="strategie-text112">
                          (vedi punto 3)
                        </span>
                        <span>
                           indicando accuratamente le condizioni, i limiti e le
                          procedure per raggiungere il target attraverso le
                          risorse compatibili.
                        </span>
                        <br></br>
                      </span>
                    </div>
                  </li>
                </ul>
              </div>
              <ul className="strategie-ul list FLX_txt_small">
                <li className="list-item">
                  <span className="strategie-text115 FLX_txt_small2">
                    <span className="strategie-text116">
                      Cosa sono le Strategie di Farming
                    </span>
                    <br className="strategie-text117"></br>
                    <br></br>
                  </span>
                  <span className="FLX_txt_small2">
                    <span>
                      Queste particolari strategie sono create e strutturate per
                      essere pressoché infallibili
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <span className="strategie-text121">(vedi punto 3)</span>
                    <span>
                       indicando accuratamente le condizioni, i limiti e le
                      procedure per raggiungere il target attraverso le risorse
                      compatibili.
                    </span>
                    <br></br>
                    <br></br>
                    <br></br>
                  </span>
                </li>
                <li className="list-item">
                  <span className="strategie-text126 FLX_txt_small2">
                    <span className="strategie-text127">
                      Categorie e funzioni
                    </span>
                    <br></br>
                    <br></br>
                  </span>
                  <span className="FLX_txt_small2">
                    <span>
                      Le strategie sono principalmente categorizzate per durata
                      e successivamente in ordine di Budget e Target.
                    </span>
                    <br></br>
                    <br></br>
                    <span>Durata;</span>
                    <br></br>
                    <span>
                      - Rapida (ciclo giornaliero) = Budget min. 1 Unità (Es: 1.
                    </span>
                    <span className="strategie-text137">00000000</span>
                    <span>
                      {' '}
                      USDT) (Investimenti: Min. 50 USDT o equivalenti)
                    </span>
                    <br></br>
                    <span>
                      - B. Term. (ciclo mensile) = Budget min. 50 USDT
                      (Consigliato 200+ USDT) o equivalenti
                    </span>
                    <br></br>
                    <span>
                      - L. Term. (ciclo annuale) = Budget min. 100 USDT
                      (Consigliato 1000+ USDT) o equivalenti
                    </span>
                    <br></br>
                    <br></br>
                    <span>Budget minimo:</span>
                    <br></br>
                    <span>- Unità: corrisponde alla quantità di Crypto.</span>
                    <br></br>
                    <span>- Valore: basato sul prezzo di mercato.</span>
                    <br></br>
                    <br></br>
                    <span>Target:</span>
                    <br></br>
                    <span>
                      - Indica la quantità massima di profitto con cui terminare
                      la strategia. 
                    </span>
                    <br></br>
                    <br></br>
                    <br></br>
                  </span>
                </li>
                <li className="list-item">
                  <span className="strategie-text158 FLX_txt_small2">
                    <span className="strategie-text159">
                      Come utilizzare le strategie
                    </span>
                    <br className="strategie-text160"></br>
                    <br></br>
                  </span>
                  <span className="FLX_txt_small2">
                    <span>
                      1) Scegli per quanto tempo investire le tue crypto: i
                      cicli possono essere interrotti e/o rinnovati al
                      raggiungimento del profitto desiderato/previsto.
                    </span>
                    <br></br>
                    <br></br>
                    <span>
                      2) Determina il tuo budget: scegli la Crypto e la relativa
                      quantità da investire.
                    </span>
                    <br></br>
                    <br></br>
                    <span>
                      3) La tua selezione è pronta! Ti basterà scegliere un
                      target e seguire attentamente tutti i passaggi fino al
                      raggiungimento del target. Al termine di una strategia, si
                      consiglia sempre di cambiare crypto e risorsa per
                      preservare i risultati e diversificare il portafoglio in
                      modo più vantaggioso.
                    </span>
                    <br></br>
                    <br></br>
                    <span className="strategie-text172">IMPORTANTE</span>
                    <span>:</span>
                    <br></br>
                    <span>
                      Utilizzando e/o applicando i contenuti legati alla
                      piattaforma dichiari di comprendere accettare il nostro
                      Disclaimer riguardo l&apos;utilizzo corretto delle risorse
                      e delle strategie.
                    </span>
                    <br></br>
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div id="str_cat1" className="rss_catg_box">
          <div className="widecontainer_add wide_container">
            <h1 className="strategie-text177 FLX_txt_big">Strategie rapide</h1>
            <div className="strategie-container23 rss_main rss_main_prem-add rss_main_index">
              <div className="strategie-container24 rss_info_style FLX_txt_small">
                <b className="strategie-text178">ID</b>
              </div>
              <div className="strategie-container25 link rss_info_style FLX_txt_small">
                <b className="strategie-text179">Nome</b>
              </div>
              <div className="strategie-container26 rss_info_style FLX_txt_small">
                <b className="strategie-text180">Budget min.</b>
              </div>
              <div className="strategie-container27 rss_info_style FLX_txt_small">
                <b className="strategie-text181">Target max.</b>
              </div>
              <div className="strategie-container28 rss_info_style FLX_txt_small">
                <b className="strategie-text182">Prezzo</b>
                <b className="strategie-text183">
                  <span> </span>
                  <span className="strategie-text185">(USDT)</span>
                </b>
              </div>
              <div className="strategie-container29 rss_info_style FLX_txt_small">
                <b className="strategie-text186">Azioni</b>
              </div>
            </div>
            <div className="rss_main">
              <div className="rss_id rss_info_style FLX_txt_small">
                <b className="strategie-text187">ID</b>
              </div>
              <div className="link rss_namelink rss_info_style FLX_txt_small">
                <b className="strategie-text188">Nome + URL</b>
              </div>
              <div className="rss_coins rss_info_style FLX_txt_small">
                <b className="strategie-text189">Coins</b>
              </div>
              <div className="strategie-container34 rss_descr rss_info_style FLX_txt_small">
                <b className="strategie-text190">Description</b>
              </div>
              <div className="strategie-container35 rss_info_style FLX_txt_small rss_i_s_actions">
                <div className="strategie-container36 rss_i_s_a_btn">
                  <svg viewBox="0 0 1024 1024" className="strategie-icon12">
                    <path d="M598 128h298v298h-86v-152l-418 418-60-60 418-418h-152v-86zM810 810v-298h86v298q0 34-26 60t-60 26h-596q-36 0-61-25t-25-61v-596q0-36 25-61t61-25h298v86h-298v596h596z"></path>
                  </svg>
                  <span className="strategie-text191 FLX_txt_small2 link">
                    {props.text55}
                  </span>
                </div>
                <div className="strategie-container37 rss_i_s_a_btn">
                  <svg viewBox="0 0 1024 1024" className="strategie-icon14">
                    <path d="M554 384h236l-236-234v234zM682 682v-84h-128v-128h-84v128h-128v84h128v128h84v-128h128zM598 86l256 256v512q0 34-26 59t-60 25h-512q-34 0-60-25t-26-59l2-684q0-34 25-59t59-25h342z"></path>
                  </svg>
                  <span className="strategie-text192 FLX_txt_small2 link">
                    {props.text65}
                  </span>
                </div>
              </div>
            </div>
            <div className="rss_main">
              <div className="rss_id rss_info_style FLX_txt_small">
                <b className="strategie-text193">ID</b>
              </div>
              <div className="link rss_namelink rss_info_style FLX_txt_small">
                <b className="strategie-text194">Nome + URL</b>
              </div>
              <div className="rss_coins rss_info_style FLX_txt_small">
                <b className="strategie-text195">Coins</b>
              </div>
              <div className="rss_descr rss_info_style FLX_txt_small">
                <b className="strategie-text196">Description</b>
              </div>
              <div className="strategie-container43 rss_info_style FLX_txt_small rss_i_s_actions">
                <div className="strategie-container44 rss_i_s_a_btn">
                  <svg viewBox="0 0 1024 1024" className="strategie-icon16">
                    <path d="M598 128h298v298h-86v-152l-418 418-60-60 418-418h-152v-86zM810 810v-298h86v298q0 34-26 60t-60 26h-596q-36 0-61-25t-25-61v-596q0-36 25-61t61-25h298v86h-298v596h596z"></path>
                  </svg>
                  <span className="strategie-text197 FLX_txt_small2 link">
                    {props.text5411}
                  </span>
                </div>
                <div className="strategie-container45 rss_i_s_a_btn">
                  <svg viewBox="0 0 1024 1024" className="strategie-icon18">
                    <path d="M554 384h236l-236-234v234zM682 682v-84h-128v-128h-84v128h-128v84h128v128h84v-128h128zM598 86l256 256v512q0 34-26 59t-60 25h-512q-34 0-60-25t-26-59l2-684q0-34 25-59t59-25h342z"></path>
                  </svg>
                  <span className="strategie-text198 FLX_txt_small2 link">
                    {props.text6411}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="str_cat2" className="rss_catg_box">
          <div className="widecontainer_add wide_container">
            <h1 className="strategie-text199 FLX_txt_big">Breve termine</h1>
            <div className="strategie-container48 rss_main rss_main_prem-add rss_main_index">
              <div className="strategie-container49 rss_info_style FLX_txt_small">
                <b className="strategie-text200">ID</b>
              </div>
              <div className="strategie-container50 link rss_info_style FLX_txt_small">
                <b className="strategie-text201">Nome</b>
              </div>
              <div className="strategie-container51 rss_info_style FLX_txt_small">
                <b className="strategie-text202">Budget min.</b>
              </div>
              <div className="strategie-container52 rss_info_style FLX_txt_small">
                <b className="strategie-text203">Target max.</b>
              </div>
              <div className="strategie-container53 rss_info_style FLX_txt_small">
                <b className="strategie-text204">Prezzo</b>
                <b className="strategie-text205">
                  <span> </span>
                  <span className="strategie-text207">(USDT)</span>
                </b>
              </div>
              <div className="strategie-container54 rss_info_style FLX_txt_small">
                <b className="strategie-text208">Azioni</b>
              </div>
            </div>
            <div className="rss_main">
              <div className="rss_id rss_info_style FLX_txt_small">
                <b className="strategie-text209">ID</b>
              </div>
              <div className="link rss_namelink rss_info_style FLX_txt_small">
                <b className="strategie-text210">Nome + URL</b>
              </div>
              <div className="rss_coins rss_info_style FLX_txt_small">
                <b className="strategie-text211">Coins</b>
              </div>
              <div className="rss_descr rss_info_style FLX_txt_small">
                <b className="strategie-text212">Description</b>
              </div>
              <div className="strategie-container60 rss_info_style FLX_txt_small rss_i_s_actions">
                <div className="strategie-container61 rss_i_s_a_btn">
                  <svg viewBox="0 0 1024 1024" className="strategie-icon20">
                    <path d="M598 128h298v298h-86v-152l-418 418-60-60 418-418h-152v-86zM810 810v-298h86v298q0 34-26 60t-60 26h-596q-36 0-61-25t-25-61v-596q0-36 25-61t61-25h298v86h-298v596h596z"></path>
                  </svg>
                  <span className="strategie-text213 FLX_txt_small2 link">
                    {props.text54111}
                  </span>
                </div>
                <div className="strategie-container62 rss_i_s_a_btn">
                  <svg viewBox="0 0 1024 1024" className="strategie-icon22">
                    <path d="M554 384h236l-236-234v234zM682 682v-84h-128v-128h-84v128h-128v84h128v128h84v-128h128zM598 86l256 256v512q0 34-26 59t-60 25h-512q-34 0-60-25t-26-59l2-684q0-34 25-59t59-25h342z"></path>
                  </svg>
                  <span className="strategie-text214 FLX_txt_small2 link">
                    {props.text64111}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="str_cat3" className="rss_catg_box">
          <div className="widecontainer_add wide_container">
            <h1 className="strategie-text215 FLX_txt_big">Lungo termine</h1>
            <div className="strategie-container65 rss_main rss_main_prem-add rss_main_index">
              <div className="strategie-container66 rss_info_style FLX_txt_small">
                <b className="strategie-text216">ID</b>
              </div>
              <div className="strategie-container67 link rss_info_style FLX_txt_small">
                <b className="strategie-text217">Nome</b>
              </div>
              <div className="strategie-container68 rss_info_style FLX_txt_small">
                <b className="strategie-text218">Budget min.</b>
              </div>
              <div className="strategie-container69 rss_info_style FLX_txt_small">
                <b className="strategie-text219">Target max.</b>
              </div>
              <div className="strategie-container70 rss_info_style FLX_txt_small">
                <b className="strategie-text220">Prezzo</b>
                <b className="strategie-text221">
                  <span> </span>
                  <span className="strategie-text223">(USDT)</span>
                </b>
              </div>
              <div className="strategie-container71 rss_info_style FLX_txt_small">
                <b className="strategie-text224">Azioni</b>
              </div>
            </div>
            <div className="rss_main">
              <div className="rss_id rss_info_style FLX_txt_small">
                <b className="strategie-text225">ID</b>
              </div>
              <div className="link rss_namelink rss_info_style FLX_txt_small">
                <b className="strategie-text226">Nome + URL</b>
              </div>
              <div className="rss_coins rss_info_style FLX_txt_small">
                <b className="strategie-text227">Budget min.</b>
              </div>
              <div className="rss_descr rss_info_style FLX_txt_small">
                <b className="strategie-text228">Target max.</b>
              </div>
              <div className="rss_coins rss_info_style FLX_txt_small">
                <b className="strategie-text229">Budget min.</b>
              </div>
              <div className="strategie-container78 rss_info_style FLX_txt_small rss_i_s_actions">
                <div className="strategie-container79 rss_i_s_a_btn">
                  <svg viewBox="0 0 1024 1024" className="strategie-icon24">
                    <path d="M598 128h298v298h-86v-152l-418 418-60-60 418-418h-152v-86zM810 810v-298h86v298q0 34-26 60t-60 26h-596q-36 0-61-25t-25-61v-596q0-36 25-61t61-25h298v86h-298v596h596z"></path>
                  </svg>
                  <span className="strategie-text230 FLX_txt_small2 link">
                    {props.text54114}
                  </span>
                </div>
                <div className="strategie-container80 rss_i_s_a_btn">
                  <svg viewBox="0 0 1024 1024" className="strategie-icon26">
                    <path d="M554 384h236l-236-234v234zM682 682v-84h-128v-128h-84v128h-128v84h128v128h84v-128h128zM598 86l256 256v512q0 34-26 59t-60 25h-512q-34 0-60-25t-26-59l2-684q0-34 25-59t59-25h342z"></path>
                  </svg>
                  <span className="strategie-text231 FLX_txt_small2 link">
                    {props.text64114}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="str_cat4" className="rss_catg_box">
          <div className="widecontainer_prem-add widecontainer_add wide_container">
            <h1 className="strategie-text232 FLX_txt_big">
              <span className="strategie-text233">Premium</span>
              <br></br>
            </h1>
            <div className="strategie-container83 rss_main rss_main_prem-add rss_main_index">
              <div className="strategie-container84 rss_info_style FLX_txt_small">
                <b className="strategie-text235">ID</b>
              </div>
              <div className="strategie-container85 link rss_info_style FLX_txt_small">
                <b className="strategie-text236">Nome</b>
              </div>
              <div className="strategie-container86 rss_info_style FLX_txt_small">
                <b className="strategie-text237">Budget min.</b>
              </div>
              <div className="strategie-container87 rss_info_style FLX_txt_small">
                <b className="strategie-text238">Target max.</b>
              </div>
              <div className="strategie-container88 rss_info_style FLX_txt_small">
                <b className="strategie-text239">Anteprima</b>
              </div>
              <div className="strategie-container89 rss_info_style FLX_txt_small">
                <b className="strategie-text240">Prezzo</b>
                <b className="strategie-text241">
                  <span> </span>
                  <span className="strategie-text243">(USDT)</span>
                </b>
              </div>
              <div className="strategie-container90 rss_info_style FLX_txt_small">
                <b className="strategie-text244">
                  <span>                  </span>
                  <span className="strategie-text246">Azioni</span>
                  <span className="strategie-text247">         </span>
                  <span>         </span>
                </b>
              </div>
            </div>
            <div className="rss_main rss_main_prem-add">
              <div className="str_prem_id rss_info_style FLX_txt_small">
                <b className="strategie-text249">pID</b>
              </div>
              <div className="str_name link rss_info_style FLX_txt_small">
                <b className="strategie-text250">Nome + URL-Buy</b>
              </div>
              <div className="str_target rss_info_style FLX_txt_small">
                <b className="strategie-text251">Budget min.</b>
              </div>
              <div className="str_target rss_info_style FLX_txt_small">
                <b className="strategie-text252">Target max.</b>
              </div>
              <div className="strategie-container96 str_prem_preview rss_info_style FLX_txt_small">
                <b className="strategie-text253">Anteprima</b>
              </div>
              <div className="str_prem_price rss_info_style FLX_txt_small">
                <b className="strategie-text254">Prezzo</b>
              </div>
              <div className="rss_info_style FLX_txt_small rss_i_s_actions str_prem_actions">
                <div className="strategie-container99 rss_i_s_a_btn">
                  <svg
                    viewBox="0 0 760.0274285714286 1024"
                    className="strategie-icon28"
                  >
                    <path d="M666.857 365.714c7.429 76-24.571 121.714-74.857 147.429 83.429 20 136 69.714 125.714 181.143-13.143 138.857-116 176-263.429 184v145.714h-88v-143.429c-22.286 0-45.714 0-69.714-0.571v144h-88v-145.714c-20.571 0-41.143-0.571-62.286-0.571h-114.286l17.714-104.571c64.571 1.143 63.429 0 63.429 0 24.571 0 31.429-17.714 33.143-29.143v-229.714h9.143c-3.429-0.571-6.857-0.571-9.143-0.571v-164c-3.429-18.286-14.857-38.857-50.857-38.857 0 0 1.143-1.143-63.429 0v-93.714l121.143 0.571c17.714 0 36.571 0 55.429-0.571v-144h88v141.143c23.429-0.571 46.857-1.143 69.714-1.143v-140h88v144c113.143 9.714 202.857 44.571 212.571 148.571zM544 677.143c0-113.143-186.286-96.571-245.714-96.571v193.143c59.429 0 245.714 12.571 245.714-96.571zM503.429 405.143c0-103.429-155.429-88-205.143-88v175.429c49.714 0 205.143 11.429 205.143-87.429z"></path>
                  </svg>
                  <b className="FLX_txt_small2 link-prem-add link">Richiedi</b>
                </div>
                <div className="strategie-container100 rss_i_s_a_btn">
                  <svg viewBox="0 0 1024 1024" className="strategie-icon30">
                    <path d="M598 128h298v298h-86v-152l-418 418-60-60 418-418h-152v-86zM810 810v-298h86v298q0 34-26 60t-60 26h-596q-36 0-61-25t-25-61v-596q0-36 25-61t61-25h298v86h-298v596h596z"></path>
                  </svg>
                  <span className="strategie-text256 FLX_txt_small2 link">
                    Apri
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

Strategie.defaultProps = {
  rootClassName: '',
  text54114: 'Apri',
  text64114: 'Salva',
  text5411: 'Apri',
  text54111: 'Apri',
  text55: 'Apri',
  text65: 'Salva',
  text64111: 'Salva',
  text6411: 'Salva',
}

Strategie.propTypes = {
  rootClassName: PropTypes.string,
  text54114: PropTypes.string,
  text64114: PropTypes.string,
  text5411: PropTypes.string,
  text54111: PropTypes.string,
  text55: PropTypes.string,
  text65: PropTypes.string,
  text64111: PropTypes.string,
  text6411: PropTypes.string,
}

export default Strategie
