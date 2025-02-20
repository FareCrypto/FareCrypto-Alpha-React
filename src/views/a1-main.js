import React from 'react'
import { Link } from 'react-router-dom'

import Script from 'dangerous-html/react'
import { Helmet } from 'react-helmet'

import HEADER from '../components/header'
import Component2 from '../components/component2'
import FAQlist from '../components/fa-qlist'
import Footer from '../components/footer'
import './a1-main.css'

const A1Main = (props) => {
  return (
    <div className="a1-main-container10">
      <Helmet>
        <title>FareCrypto.net</title>
        <meta
          name="description"
          content="Su FareCrypto potrai scoprire come trasformare il tempo libero in Crypto e NFT ed avviale la tua carriera da Crypto-Farmer anche da zero!"
        />
        <meta property="og:title" content="FareCrypto.net" />
        <meta
          property="og:description"
          content="Su FareCrypto potrai scoprire come trasformare il tempo libero in Crypto e NFT ed avviale la tua carriera da Crypto-Farmer anche da zero!"
        />
        <meta
          property="og:image"
          content="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/96126f84-3d02-484f-9938-f21158ba03bc/53757f96-2178-4619-9dd4-454e310e2259?org_if_sml=1&amp;force_format=original"
        />
      </Helmet>
      <div className="main-body">
        <HEADER></HEADER>
        <div className="a1-main-hero">
          <div className="a1-main-container12">
            <h1 className="a1-main-text100 text-big-B">Benvenuto su</h1>
            <div className="a1-main-container13">
              <h1 className="a1-main-text101 text-big-B">Fare</h1>
              <h1 className="a1-main-text102 text-big-B">Crypto</h1>
            </div>
          </div>
          <h1 className="a1-main-text103 text-big-S">
            <span>La piattaforma dei Crypto-Farmers!</span>
            <br className="a1-main-text105"></br>
            <span>
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
          </h1>
          <span className="a1-main-text107 text-medium-M">
            FareCrypto è una piattaforma nata per condividere esperienze e mezzi
            per il Crypto-Farming: una nuova crypto-attività dal potenziale
            incredibile che elimina la necessità di &quot;investire per
            guadagnare&quot; avvalendosi di strategie flessibili e risorse
            all&apos;avanguardia!
          </span>
          <div className="a1-main-btn-group">
            <div className="a1-main-container14">
              <Link
                to="/c4-fcinside-services"
                className="a1-main-navlink1 text-medium-S button button1"
              >
                <span className="a1-main-text108">Inizio rapido</span>
                <span className="a1-main-text109">
                                                                               
                         
                </span>
              </Link>
              <span className="a1-main-text110 text-small-SS">FREE</span>
            </div>
            <Link
              to="/c2-fcinside-discover-us"
              className="a1-main-navlink2 text-medium-S button2 button"
            >
              <span className="a1-main-text111">Scopri di più</span>
              <span className="a1-main-text112">
                                                                               
                     
              </span>
            </Link>
          </div>
        </div>
        <Component2></Component2>
        <div className="a1-main-testimonial1">
          <div className="a1-main-container15">
            <div className="a1-main-container16">
              <h1 className="a1-main-text113 text-big-B">Il</h1>
              <div className="a1-main-container17">
                <h1 className="a1-main-text114 text-big-B">Crypto</h1>
                <h1 className="a1-main-text115 text-big-B">-</h1>
                <h1 className="a1-main-text116 text-big-B">Farming</h1>
              </div>
            </div>
            <span className="a1-main-text117 text-medium-S">
              Una crypto-attività strategica focalizzata sull&apos;incremento
              del volume dei propri assets, mirando a gestire la volatilità in
              modo facile e flessibile, sia contrastandola che adattandosi ad
              essa.
            </span>
            <div className="a1-main-container18">
              <div className="a1-main-container19">
                <div className="a1-main-container20">
                  <h1 className="a1-main-text118 text-medium-B blue_glow">
                    Strategie
                  </h1>
                  <div className="a1-main-container21">
                    <span className="a1-main-text119 text-small-B">
                      Per migliorare il profitto
                    </span>
                  </div>
                  <div className="a1-main-container22">
                    <span className="a1-main-text120 text-medium-S">
                      <span>
                        Usa le strategie per trovare le risorse più utili alle
                        tue esigenze, gestire le crypto in modo più sicuro e
                        aumentarne progressivamente la
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </span>
                      <span>quantità in tempi minori</span>
                      <span>.</span>
                    </span>
                  </div>
                </div>
                <Link
                  to="/b2-farming-stg-1"
                  className="a1-main-navlink3 text-medium-S FLX_txt_med_big button1"
                >
                  <span>VAI </span>
                  <svg
                    viewBox="0 0 877.7142857142857 1024"
                    className="a1-main-icon10"
                  >
                    <path d="M658.286 512c0 4.571-1.714 9.714-5.143 13.143l-182.857 182.857c-3.429 3.429-8.571 5.143-13.143 5.143-9.714 0-18.286-8.571-18.286-18.286v-109.714h-201.143c-9.714 0-18.286-8.571-18.286-18.286v-109.714c0-9.714 8.571-18.286 18.286-18.286h201.143v-109.714c0-10.286 8-18.286 18.286-18.286 5.143 0 9.714 2.286 13.714 5.714l182.286 182.286c3.429 3.429 5.143 8.571 5.143 13.143zM749.714 512c0-171.429-139.429-310.857-310.857-310.857s-310.857 139.429-310.857 310.857 139.429 310.857 310.857 310.857 310.857-139.429 310.857-310.857zM877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
                  </svg>
                </Link>
                <div className="a1-main-container23"></div>
              </div>
              <div className="a1-main-container24">
                <div className="a1-main-container25">
                  <h1 className="a1-main-text125 text-medium-B blue_glow">
                    Risorse
                  </h1>
                  <div className="a1-main-container26">
                    <span className="a1-main-text126 text-small-B">
                      Dove guadagnare e investire
                    </span>
                  </div>
                  <div className="a1-main-container27">
                    <span className="a1-main-text127 text-medium-S">
                      <span>
                        Puoi guadagnare e gestire le crypto tramite innumerevoli
                        modalità, incluso il
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </span>
                      <a
                        href="https://#"
                        target="_blank"
                        rel="noreferrer noopener"
                      >
                        Free Farming
                      </a>
                      <span>
                        {' '}
                        consente di iniziare realmente da zero sfruttando i
                        minuti liberi!
                      </span>
                    </span>
                  </div>
                </div>
                <button
                  type="button"
                  className="a1-main-button1 text-medium-S FLX_txt_med_big button1"
                >
                  <span>VAI </span>
                  <svg
                    viewBox="0 0 877.7142857142857 1024"
                    className="a1-main-icon12"
                  >
                    <path d="M658.286 512c0 4.571-1.714 9.714-5.143 13.143l-182.857 182.857c-3.429 3.429-8.571 5.143-13.143 5.143-9.714 0-18.286-8.571-18.286-18.286v-109.714h-201.143c-9.714 0-18.286-8.571-18.286-18.286v-109.714c0-9.714 8.571-18.286 18.286-18.286h201.143v-109.714c0-10.286 8-18.286 18.286-18.286 5.143 0 9.714 2.286 13.714 5.714l182.286 182.286c3.429 3.429 5.143 8.571 5.143 13.143zM749.714 512c0-171.429-139.429-310.857-310.857-310.857s-310.857 139.429-310.857 310.857 139.429 310.857 310.857 310.857 310.857-139.429 310.857-310.857zM877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
                  </svg>
                </button>
                <div className="a1-main-container28"></div>
              </div>
              <div className="a1-main-container29">
                <div className="a1-main-container30">
                  <h1 className="a1-main-text131 text-medium-B blue_glow">
                    Utility
                  </h1>
                  <div className="a1-main-container31">
                    <span className="a1-main-text132 text-small-B">
                      Per un Farming più sicuro
                    </span>
                  </div>
                  <div className="a1-main-container32">
                    <span className="a1-main-text133 text-medium-S">
                      Strumenti, guide e risorse secondarie con il compito di
                      accelerare, automatizzare, proteggere e migliorare
                      l&apos;efficienza di altre risorse o strategie.
                    </span>
                  </div>
                </div>
                <button
                  type="button"
                  className="a1-main-button2 text-medium-S FLX_txt_med_big button1"
                >
                  <span>vai </span>
                  <svg
                    viewBox="0 0 877.7142857142857 1024"
                    className="a1-main-icon14"
                  >
                    <path d="M658.286 512c0 4.571-1.714 9.714-5.143 13.143l-182.857 182.857c-3.429 3.429-8.571 5.143-13.143 5.143-9.714 0-18.286-8.571-18.286-18.286v-109.714h-201.143c-9.714 0-18.286-8.571-18.286-18.286v-109.714c0-9.714 8.571-18.286 18.286-18.286h201.143v-109.714c0-10.286 8-18.286 18.286-18.286 5.143 0 9.714 2.286 13.714 5.714l182.286 182.286c3.429 3.429 5.143 8.571 5.143 13.143zM749.714 512c0-171.429-139.429-310.857-310.857-310.857s-310.857 139.429-310.857 310.857 139.429 310.857 310.857 310.857 310.857-139.429 310.857-310.857zM877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
                  </svg>
                </button>
                <div className="a1-main-container33"></div>
              </div>
            </div>
            <Link
              to="/b1-farming"
              className="a1-main-navlink4 text-medium-B button1"
            >
              Vedi sezione Farming
            </Link>
          </div>
        </div>
        <Component2></Component2>
        <div className="a1-main-testimonial2">
          <div className="a1-main-container34">
            <div className="a1-main-container35">
              <h1 className="a1-main-text135 text-big-B">Parlando di </h1>
              <h1 className="a1-main-text136 text-big-B">Sicurezza</h1>
            </div>
            <span className="a1-main-text137 text-medium-S">
              Intendiamo offrire sempre il massimo della sicurezza possibile
              durante l&apos;utilizzo dei contenuti condivisi sulla piattaforma!
            </span>
            <span className="a1-main-text138 text-medium-S">
              Ecco cosa facciamo per migliorare la sicurezza degli utenti:
            </span>
            <div className="a1-main-container36">
              <div className="a1-main-container37">
                <div className="a1-main-container38">
                  <svg viewBox="0 0 1024 1024" className="a1-main-icon16">
                    <path d="M864 128l-480 480-224-224-160 160 384 384 640-640z"></path>
                  </svg>
                  <h1 className="a1-main-text139 text-medium-B">
                    Solo risorse verificate
                  </h1>
                </div>
                <span className="a1-main-text140 text-small-B">
                  <span>
                    Condividiamo solo risorse che hanno superato tutti i nostri
                    test sulla sicurezza e sulle funzionalità.
                  </span>
                  <br></br>
                </span>
              </div>
              <div className="a1-main-container39">
                <div className="a1-main-container40">
                  <svg viewBox="0 0 1024 1024" className="a1-main-icon18">
                    <path d="M896 448h16c26.4 0 48-21.6 48-48v-160c0-26.4-21.6-48-48-48h-16v-192h-128v192h-16c-26.4 0-48 21.6-48 48v160c0 26.4 21.6 48 48 48h16v576h128v-576zM768 256h128v128h-128v-128zM592 832c26.4 0 48-21.6 48-48v-160c0-26.4-21.6-48-48-48h-16v-576h-128v576h-16c-26.4 0-48 21.6-48 48v160c0 26.4 21.6 48 48 48h16v192h128v-192h16zM448 640h128v128h-128v-128zM272 448c26.4 0 48-21.6 48-48v-160c0-26.4-21.6-48-48-48h-16v-192h-128v192h-16c-26.4 0-48 21.6-48 48v160c0 26.4 21.6 48 48 48h16v576h128v-576h16zM128 256h128v128h-128v-128z"></path>
                  </svg>
                  <h1 className="a1-main-text143 text-medium-B">
                    Strategie di gestione
                  </h1>
                </div>
                <span className="a1-main-text144 text-small-B">
                  Troviamo i modi migliori per gestire ogni situazione di
                  mercato, risparmiare sulle tasse e molto altro ancora!
                </span>
              </div>
              <div className="a1-main-container41">
                <div className="a1-main-container42">
                  <svg viewBox="0 0 1024 1024" className="a1-main-icon20">
                    <path d="M960 0l-448 128-448-128c0 0-4.5 51.698 0 128l448 140.090 448-140.090c4.498-76.302 0-128 0-128zM72.19 195.106c23.986 250.696 113.49 672.234 439.81 828.894 326.32-156.66 415.824-578.198 439.81-828.894l-439.81 165.358-439.81-165.358z"></path>
                  </svg>
                  <h1 className="a1-main-text145 text-medium-B">
                    Protezione e prestazioni
                  </h1>
                </div>
                <span className="a1-main-text146 text-small-B">
                  Abbiamo selezionato alcuni programmi ed applicazioni in grado
                  di rafforzare la sicurezza e migliorare le prestazioni dei
                  tuoi dispositivi.
                </span>
              </div>
              <div className="a1-main-container43">
                <div className="a1-main-container44">
                  <svg viewBox="0 0 1024 1024" className="a1-main-icon22">
                    <path d="M475.648 186.624c3.115-5.248 7.893-10.325 14.251-14.165 10.069-6.101 21.589-7.595 32.256-4.949s20.224 9.216 26.197 19.115l361.216 603.008c3.285 5.589 5.461 12.715 5.547 20.565 0.128 11.776-4.48 22.443-12.16 30.293s-18.261 12.715-29.568 12.843h-722.645c-6.485-0.043-13.696-1.749-20.523-5.717-10.197-5.888-17.024-15.317-19.883-25.899s-1.621-22.144 3.925-31.787zM402.432 142.763l-361.387 603.307c-18.005 31.189-21.589 66.133-13.141 97.707s29.013 60.075 59.648 77.739c19.797 11.435 41.643 17.067 62.933 17.152h722.901c35.797-0.384 67.712-15.104 90.581-38.485s36.864-55.595 36.48-90.923c-0.256-22.869-6.528-44.544-17.323-62.891l-361.557-603.605c-18.432-30.421-47.36-50.389-79.104-58.155s-66.603-3.456-96.811 14.891c-18.304 11.093-33.067 26.24-43.179 43.264zM469.333 384v170.667c0 23.552 19.115 42.667 42.667 42.667s42.667-19.115 42.667-42.667v-170.667c0-23.552-19.115-42.667-42.667-42.667s-42.667 19.115-42.667 42.667zM554.667 725.333c0-23.552-19.115-42.667-42.667-42.667s-42.667 19.115-42.667 42.667 19.115 42.667 42.667 42.667 42.667-19.115 42.667-42.667z"></path>
                  </svg>
                  <h1 className="a1-main-text147 text-medium-B">
                    Alerts e requisiti
                  </h1>
                </div>
                <span className="a1-main-text148 text-small-B">
                  <span>
                    Aiutiamo nel prevenire errori o disagi all&apos;interno
                    delle risorse o nel loro utilizzo, specificando subito ogni
                    dettaglio importante.
                  </span>
                  <br></br>
                </span>
              </div>
            </div>
          </div>
          <svg viewBox="0 0 1024 1024" className="a1-main-icon24">
            <path d="M512 42l384 172v256q0 178-110 325t-274 187q-164-40-274-187t-110-325v-256zM512 512v382q118-38 200-143t98-239h-298zM512 512v-376l-298 132v244h298z"></path>
          </svg>
        </div>
        <Component2></Component2>
        <div className="a1-main-pricing1">
          <div className="a1-main-container45">
            <div className="a1-main-container46">
              <div className="a1-main-container47">
                <div className="a1-main-container48">
                  <div className="a1-main-container49">
                    <h1 className="a1-main-text151 text-big-B">
                      <span className="a1-main-text152">F</span>
                      <span className="a1-main-text153">C</span>
                      <span>-</span>
                      <span className="a1-main-text155">Crowdfunding</span>
                    </h1>
                  </div>
                  <span className="a1-main-text156 text-medium-S">
                    <span>Vuoi lasciare il divertimento a noi?</span>
                    <br></br>
                    <span>
                      Abbiamo creato uno speciale sistema d&apos;investimento
                      altrettanto vantaggioso!
                    </span>
                    <br></br>
                  </span>
                </div>
                <div className="a1-main-steps">
                  <div className="a1-main-container50">
                    <div className="a1-main-step1">
                      <div className="a1-main-container51">
                        <h1 className="a1-main-text161 FLX_txt_med_big">
                          Scegli il
                        </h1>
                        <h1 className="a1-main-text162 FLX_txt_big">GRADO</h1>
                        <h1 className="a1-main-text163 FLX_h1_big">
                          <span> </span>
                          <span className="a1-main-text165">1</span>
                          <span> </span>
                        </h1>
                      </div>
                      <span className="a1-main-text167 FLX_txt_small">
                        <span>
                          Scegli un Grado di partecipazione con cui iscriverti.
                        </span>
                        <br></br>
                        <span>
                          Un grado più alto conferisce un rendimento migliore.
                        </span>
                      </span>
                    </div>
                    <div className="a1-main-step2">
                      <div className="a1-main-container52">
                        <h1 className="a1-main-text171 FLX_txt_med_big">
                          Seleziona il
                        </h1>
                        <h1 className="a1-main-text172 FLX_txt_big">LIVELLO</h1>
                        <h1 className="a1-main-text173 FLX_h1_big">
                          <span> </span>
                          <span className="a1-main-text175">2</span>
                          <span> </span>
                        </h1>
                      </div>
                      <span className="a1-main-text177 FLX_txt_small">
                        <span>
                          Il Livello aumenta l&apos;APR e riduce le commissioni.
                        </span>
                        <br></br>
                        <span>
                          Il Grado guadagna un +1 Livello bonus ogni anno.
                        </span>
                      </span>
                    </div>
                    <div className="a1-main-step3">
                      <div className="a1-main-container53">
                        <h1 className="a1-main-text181 FLX_txt_med_big">
                          Metti in
                        </h1>
                        <h1 className="a1-main-text182 FLX_txt_big">STAKING</h1>
                        <h1 className="a1-main-text183 FLX_h1_big">
                          <span> </span>
                          <span className="a1-main-text185">3</span>
                          <span> </span>
                        </h1>
                      </div>
                      <span className="a1-main-text187 FLX_txt_small">
                        <span>
                          Configura il Grado desiderato, completa il deposito,
                          inizia a guadagnare!
                        </span>
                        <br></br>
                        <br></br>
                      </span>
                    </div>
                  </div>
                  <div className="a1-main-container54">
                    <div className="a1-main-step4">
                      <div className="a1-main-container55">
                        <h1 className="a1-main-text191 FLX_txt_med_big">
                          Scegli il
                        </h1>
                        <h1 className="a1-main-text192 FLX_txt_big">GRADO</h1>
                        <h1 className="a1-main-text193 FLX_h1_big">
                          <span> </span>
                          <span className="a1-main-text195">1</span>
                          <span> </span>
                        </h1>
                      </div>
                      <span className="a1-main-text197 FLX_txt_small">
                        <span>
                          Scegli un Grado di partecipazione con cui iscriverti.
                        </span>
                        <br></br>
                        <span>
                          Un grado più alto conferisce un rendimento migliore.
                        </span>
                      </span>
                    </div>
                    <div className="a1-main-container56"></div>
                    <div className="a1-main-step5">
                      <div className="a1-main-container57">
                        <h1 className="a1-main-text201 FLX_txt_med_big">
                          Seleziona il
                        </h1>
                        <h1 className="a1-main-text202 FLX_txt_big">LIVELLO</h1>
                        <h1 className="a1-main-text203 FLX_h1_big">
                          <span> </span>
                          <span className="a1-main-text205">2</span>
                          <span> </span>
                        </h1>
                      </div>
                      <span className="a1-main-text207 FLX_txt_small">
                        <span>
                          Il Livello aumenta l&apos;APR e riduce le commissioni.
                        </span>
                        <br></br>
                        <span>
                          Il Grado guadagna un +1 Livello bonus ogni anno.
                        </span>
                      </span>
                    </div>
                    <div className="a1-main-container58"></div>
                    <div className="a1-main-step6">
                      <div className="a1-main-container59">
                        <h1 className="a1-main-text211 FLX_txt_med_big">
                          Metti in
                        </h1>
                        <h1 className="a1-main-text212 FLX_txt_big">STAKING</h1>
                        <h1 className="a1-main-text213 FLX_h1_big">
                          <span> </span>
                          <span className="a1-main-text215">3</span>
                          <span> </span>
                        </h1>
                      </div>
                      <span className="a1-main-text217 FLX_txt_small">
                        <span>
                          Configura il Grado desiderato, completa il deposito,
                          inizia a guadagnare!
                        </span>
                        <br></br>
                        <br></br>
                      </span>
                    </div>
                  </div>
                </div>
                <Link
                  to="/c3-fc-crowdfunding"
                  className="a1-main-navlink5 button button1"
                >
                  Scopri di più
                </Link>
              </div>
              <div className="a1-main-container60">
                <div className="a1-main-container61">
                  <div className="a1-main-container62">
                    <strong className="a1-main-text221 FLX_h4_nocolor">
                      PRO
                    </strong>
                    <strong className="a1-main-text222 FLX_txt_big">
                      100 USDT
                    </strong>
                    <span className="a1-main-text223 FLX_txt_med_small">
                      <span className="a1-main-text224">/</span>
                      <span>
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </span>
                      <span className="a1-main-text226">Livello</span>
                      <span>
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </span>
                      <span className="a1-main-text228">(max 10)</span>
                    </span>
                  </div>
                  <div className="a1-main-container63">
                    <div className="a1-main-container64">
                      <strong className="a1-main-text229 text-medium-S">
                        <span className="a1-main-text230">APR</span>
                        <br></br>
                      </strong>
                      <div className="a1-main-container65">
                        <div className="a1-main-container66">
                          <span className="a1-main-text232 text-small-B">
                            <span>BASE</span>
                            <br></br>
                          </span>
                          <span className="a1-main-text235 FLX_txt_med_small">
                            <span className="a1-main-text236">10%</span>
                            <br></br>
                          </span>
                        </div>
                        <svg viewBox="0 0 1024 1024" className="a1-main-icon26">
                          <path d="M621.254 877.254l320-320c24.994-24.992 24.994-65.516 0-90.51l-320-320c-24.994-24.992-65.516-24.992-90.51 0-24.994 24.994-24.994 65.516 0 90.51l210.746 210.746h-613.49c-35.346 0-64 28.654-64 64s28.654 64 64 64h613.49l-210.746 210.746c-12.496 12.496-18.744 28.876-18.744 45.254s6.248 32.758 18.744 45.254c24.994 24.994 65.516 24.994 90.51 0z"></path>
                        </svg>
                        <div className="a1-main-container67">
                          <span className="a1-main-text238 text-small-B">
                            <span>LIVELLO 10</span>
                            <br></br>
                          </span>
                          <span className="a1-main-text241 FLX_txt_med_small">
                            <span className="a1-main-text242">20%</span>
                            <br></br>
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="a1-main-container68">
                      <strong className="a1-main-text244 text-medium-S">
                        <span className="a1-main-text245">Commissione</span>
                        <br></br>
                      </strong>
                      <div className="a1-main-container69">
                        <div className="a1-main-container70">
                          <span className="a1-main-text247 text-small-B">
                            <span>BASE</span>
                            <br></br>
                          </span>
                          <span className="a1-main-text250 FLX_txt_med_small">
                            <span className="a1-main-text251">5%</span>
                            <br></br>
                          </span>
                        </div>
                        <svg viewBox="0 0 1024 1024" className="a1-main-icon28">
                          <path d="M621.254 877.254l320-320c24.994-24.992 24.994-65.516 0-90.51l-320-320c-24.994-24.992-65.516-24.992-90.51 0-24.994 24.994-24.994 65.516 0 90.51l210.746 210.746h-613.49c-35.346 0-64 28.654-64 64s28.654 64 64 64h613.49l-210.746 210.746c-12.496 12.496-18.744 28.876-18.744 45.254s6.248 32.758 18.744 45.254c24.994 24.994 65.516 24.994 90.51 0z"></path>
                        </svg>
                        <div className="a1-main-container71">
                          <span className="a1-main-text253 text-small-B">
                            <span>LIVELLO 10</span>
                            <br></br>
                          </span>
                          <span className="a1-main-text256 FLX_txt_med_small">
                            <span className="a1-main-text257">4%</span>
                            <br></br>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <span className="a1-main-text259 FLX_txt_med_small-2">
                    <span className="a1-main-text260">Bonus</span>
                    <span className="a1-main-text261">
                      {' '}
                      per
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <span className="a1-main-text262">Livello</span>
                    <span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                  </span>
                  <div className="a1-main-container72"></div>
                  <div className="a1-main-container73">
                    <span className="a1-main-text264 FLX_txt_med_small-2">
                      <span className="a1-main-text265">APR</span>
                      <span> </span>
                      <span className="a1-main-text267">+1%</span>
                    </span>
                    <span className="a1-main-text268 FLX_txt_med_small-2">
                      <span className="a1-main-text269">Commissione</span>
                      <span> -</span>
                      <span className="a1-main-text271">0.1%</span>
                      <br></br>
                    </span>
                  </div>
                  <svg viewBox="0 0 1024 1024" className="a1-main-icon30">
                    <path d="M250 176l92-90 426 426-426 426-92-90 338-336z"></path>
                  </svg>
                </div>
                <div className="a1-main-container74">
                  <div className="a1-main-container75">
                    <strong className="a1-main-text273 white_glow FLX_h4_nocolor">
                      VIP
                    </strong>
                    <strong className="a1-main-text274 FLX_txt_big">
                      1.000 USDT
                    </strong>
                    <span className="a1-main-text275 FLX_txt_med_small">
                      <span className="a1-main-text276">/</span>
                      <span>
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </span>
                      <span className="a1-main-text278">Livello</span>
                      <span>
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </span>
                      <span className="a1-main-text280">(max 10)</span>
                    </span>
                  </div>
                  <div className="a1-main-container76">
                    <div className="a1-main-container77">
                      <strong className="a1-main-text281 text-medium-S">
                        <span className="a1-main-text282">APR</span>
                        <br></br>
                      </strong>
                      <div className="a1-main-container78">
                        <div className="a1-main-container79">
                          <span className="a1-main-text284 text-small-B">
                            <span>BASE</span>
                            <br></br>
                          </span>
                          <span className="a1-main-text287 FLX_txt_med_small">
                            <span className="a1-main-text288">30%</span>
                            <br></br>
                          </span>
                        </div>
                        <svg viewBox="0 0 1024 1024" className="a1-main-icon32">
                          <path d="M621.254 877.254l320-320c24.994-24.992 24.994-65.516 0-90.51l-320-320c-24.994-24.992-65.516-24.992-90.51 0-24.994 24.994-24.994 65.516 0 90.51l210.746 210.746h-613.49c-35.346 0-64 28.654-64 64s28.654 64 64 64h613.49l-210.746 210.746c-12.496 12.496-18.744 28.876-18.744 45.254s6.248 32.758 18.744 45.254c24.994 24.994 65.516 24.994 90.51 0z"></path>
                        </svg>
                        <div className="a1-main-container80">
                          <span className="a1-main-text290 text-small-B">
                            <span>LIVELLO 10</span>
                            <br></br>
                          </span>
                          <span className="a1-main-text293 FLX_txt_med_small">
                            <span className="a1-main-text294">50%</span>
                            <br></br>
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="a1-main-container81">
                      <strong className="a1-main-text296 text-medium-S">
                        <span className="a1-main-text297">Commissione</span>
                        <br></br>
                      </strong>
                      <div className="a1-main-container82">
                        <div className="a1-main-container83">
                          <span className="a1-main-text299 text-small-B">
                            <span>BASE</span>
                            <br></br>
                          </span>
                          <span className="a1-main-text302 FLX_txt_med_small">
                            <span className="a1-main-text303">4.5%</span>
                            <br></br>
                          </span>
                        </div>
                        <svg viewBox="0 0 1024 1024" className="a1-main-icon34">
                          <path d="M621.254 877.254l320-320c24.994-24.992 24.994-65.516 0-90.51l-320-320c-24.994-24.992-65.516-24.992-90.51 0-24.994 24.994-24.994 65.516 0 90.51l210.746 210.746h-613.49c-35.346 0-64 28.654-64 64s28.654 64 64 64h613.49l-210.746 210.746c-12.496 12.496-18.744 28.876-18.744 45.254s6.248 32.758 18.744 45.254c24.994 24.994 65.516 24.994 90.51 0z"></path>
                        </svg>
                        <div className="a1-main-container84">
                          <span className="a1-main-text305 text-small-B">
                            <span>LIVELLO 10</span>
                            <br></br>
                          </span>
                          <span className="a1-main-text308 FLX_txt_med_small">
                            <span className="a1-main-text309">3.3%</span>
                            <br></br>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <span className="a1-main-text311 FLX_txt_med_small-2">
                    <span className="a1-main-text312">Bonus</span>
                    <span className="a1-main-text313">
                      {' '}
                      per
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <span className="a1-main-text314">Livello</span>
                    <span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                  </span>
                  <div className="a1-main-container85"></div>
                  <div className="a1-main-container86">
                    <span className="a1-main-text316 FLX_txt_med_small-2">
                      <span className="a1-main-text317">APR</span>
                      <span> </span>
                      <span className="a1-main-text319">+2%</span>
                    </span>
                    <span className="a1-main-text320 FLX_txt_med_small-2">
                      <span className="a1-main-text321">Commissione</span>
                      <span> -</span>
                      <span className="a1-main-text323">0.12%</span>
                      <br></br>
                    </span>
                  </div>
                  <svg viewBox="0 0 1024 1024" className="a1-main-icon36">
                    <path d="M250 176l92-90 426 426-426 426-92-90 338-336z"></path>
                  </svg>
                </div>
                <div className="a1-main-container87">
                  <div className="a1-main-container88">
                    <strong className="a1-main-text325 white_glow FLX_h4_nocolor">
                      LUX
                    </strong>
                    <strong className="a1-main-text326 FLX_txt_big">
                      10.000 USDT
                    </strong>
                    <span className="a1-main-text327 FLX_txt_med_small">
                      <span className="a1-main-text328">/</span>
                      <span>
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </span>
                      <span className="a1-main-text330">Livello</span>
                      <span>
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </span>
                      <span className="a1-main-text332">
                        (max
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </span>
                      <span>∞</span>
                      <span className="a1-main-text334">)</span>
                    </span>
                  </div>
                  <div className="a1-main-container89">
                    <div className="a1-main-container90">
                      <strong className="a1-main-text335 text-medium-S">
                        <span className="a1-main-text336">APR</span>
                        <br></br>
                      </strong>
                      <div className="a1-main-container91">
                        <div className="a1-main-container92">
                          <span className="a1-main-text338 text-small-B">
                            <span>BASE</span>
                            <br></br>
                          </span>
                          <span className="a1-main-text341 FLX_txt_med_small">
                            <span className="a1-main-text342">70%</span>
                            <br></br>
                          </span>
                        </div>
                        <svg viewBox="0 0 1024 1024" className="a1-main-icon38">
                          <path d="M621.254 877.254l320-320c24.994-24.992 24.994-65.516 0-90.51l-320-320c-24.994-24.992-65.516-24.992-90.51 0-24.994 24.994-24.994 65.516 0 90.51l210.746 210.746h-613.49c-35.346 0-64 28.654-64 64s28.654 64 64 64h613.49l-210.746 210.746c-12.496 12.496-18.744 28.876-18.744 45.254s6.248 32.758 18.744 45.254c24.994 24.994 65.516 24.994 90.51 0z"></path>
                        </svg>
                        <div className="a1-main-container93">
                          <span className="a1-main-text344 text-small-B">
                            <span>LIVELLO 10</span>
                            <br></br>
                          </span>
                          <span className="a1-main-text347 FLX_txt_med_small">
                            <span className="a1-main-text348">100%</span>
                            <br></br>
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="a1-main-container94">
                      <strong className="a1-main-text350 text-medium-S">
                        <span className="a1-main-text351">Commissione</span>
                        <br></br>
                      </strong>
                      <div className="a1-main-container95">
                        <div className="a1-main-container96">
                          <span className="a1-main-text353 text-small-B">
                            <span>BASE</span>
                            <br></br>
                          </span>
                          <span className="a1-main-text356 FLX_txt_med_small">
                            <span className="a1-main-text357">4%</span>
                            <br></br>
                          </span>
                        </div>
                        <svg viewBox="0 0 1024 1024" className="a1-main-icon40">
                          <path d="M621.254 877.254l320-320c24.994-24.992 24.994-65.516 0-90.51l-320-320c-24.994-24.992-65.516-24.992-90.51 0-24.994 24.994-24.994 65.516 0 90.51l210.746 210.746h-613.49c-35.346 0-64 28.654-64 64s28.654 64 64 64h613.49l-210.746 210.746c-12.496 12.496-18.744 28.876-18.744 45.254s6.248 32.758 18.744 45.254c24.994 24.994 65.516 24.994 90.51 0z"></path>
                        </svg>
                        <div className="a1-main-container97">
                          <span className="a1-main-text359 text-small-B">
                            <span>LIVELLO 10</span>
                            <br></br>
                          </span>
                          <span className="a1-main-text362 FLX_txt_med_small">
                            <span className="a1-main-text363">2.5%</span>
                            <br></br>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <span className="a1-main-text365 FLX_txt_med_small-2">
                    <span className="a1-main-text366">Bonus</span>
                    <span className="a1-main-text367">
                      {' '}
                      per
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <span className="a1-main-text368">Livello</span>
                    <span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                  </span>
                  <div className="a1-main-container98"></div>
                  <div className="a1-main-container99">
                    <span className="a1-main-text370 FLX_txt_med_small-2">
                      <span className="a1-main-text371">APR</span>
                      <span> </span>
                      <span className="a1-main-text373">+3%</span>
                      <span className="a1-main-text374"> (max +30%)</span>
                    </span>
                    <span className="a1-main-text375 FLX_txt_med_small-2">
                      <span className="a1-main-text376">Commissione</span>
                      <span> -</span>
                      <span className="a1-main-text378">0.15%</span>
                      <span className="a1-main-text379"> (max -1.5%)</span>
                      <br></br>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="a1-main-container101">
              <React.Fragment>
                <React.Fragment>
                  <style
                    dangerouslySetInnerHTML={{
                      __html:
                        '\n  @keyframes evidGrade {\n    from {\n      text-shadow: 0 0 0.5rem #fff, 0 0 0.5rem #fff;\n    }\n    to {\n      text-shadow: 0 0 1.5rem #33b5e5, 0 0 1.5rem #33b5e5;\n    }\n  }\n  @keyframes evidLevel {\n    from {\n      text-shadow: 0 0 0.5rem #fff, 0 0 0.5rem #fff;\n    }\n    to {\n      text-shadow: 0 0 1.5rem #33b5e5, 0 0 1.5rem #33b5e5;\n    }\n  }\n  @keyframes evidStake {\n    from {\n      text-shadow: 0 0 0.5rem #fff, 0 0 0.5rem #fff;\n    }\n    to {\n      text-shadow: 0 0 1.5rem #33b5e5, 0 0 1.5rem #33b5e5;\n    }\n  }\n',
                    }}
                  />
                </React.Fragment>
              </React.Fragment>
            </div>
          </div>
        </div>
        <Component2></Component2>
        <div className="a1-main-pricing2">
          <div className="a1-main-container102">
            <h1 className="a1-main-text381 text-big-B">
              <span className="a1-main-text382">F</span>
              <span>requently</span>
            </h1>
            <h1 className="a1-main-text384 text-big-B">
              <span className="a1-main-text385">A</span>
              <span>sked</span>
            </h1>
            <h1 className="a1-main-text387 text-big-B">
              <span className="a1-main-text388">Q</span>
              <span>uestions</span>
            </h1>
          </div>
          <div id="welcome-faq" className="a1-main-container103">
            <FAQlist
              domanda="Come posso utilizzare FareCrypto?"
              domanda1="Come viene gestita la sicurezza su FareCrypto?"
              domanda2="Dove posso guadagnare e investire in Crypto?"
              domanda3="Quali sono le strategie per migliorare il profitto?"
              domanda4="Ci sono consigli per capitali più grandi?"
              domanda5="Quali sono i consigli per inesperti?"
              domanda6="Posso iniziare da zero?"
              domanda7="Su cosa si basa il Crypto-Farming?"
              risposta="FareCrypto mette a disposizione diverse risorse attraverso le quali è possibile accumulare le prime criptovalute e successivamente investirle. La piattaforma offre opportunità flessibili e strategie avanzate per consentire agli utenti di gestire le proprie risorse digitali in modo più sicuro ed efficace, rispetto ai metodi tradizionali."
              risposta1="FareCrypto si impegna a garantire il massimo livello di sicurezza. Condividiamo solo risorse verificate, utilizziamo strategie di gestione per affrontare situazioni di mercato, e offriamo strumenti per proteggere e migliorare l'efficienza delle risorse. Inoltre, forniamo alert e requisiti dettagliati per prevenire errori o disagi."
              risposta2='Puoi guadagnare e gestire le crypto attraverso diverse modalità, inclusa la possibilità di iniziare da zero con il Free Farming. Esplora la sezione "Risorse" su FareCrypto per scoprire dove investire in modo vantaggioso.'
              risposta3="Utilizza le strategie disponibili su FareCrypto per trovare le risorse più utili alle tue esigenze, gestire le crypto in modo sicuro e ad aumentarne progressivamente la quantità in tempi minori. Attenzione a non sottovalutare o ignorare eventuali limiti, avvertenze e condizioni: possono salvare i tuoi fondi da perdite ingenti o anche totali."
              risposta4="Se il tuo budget supera i 10.000 USD / USDT, avrai accesso a modalità d'investimento molto più stabili. In alternativa, puoi partecipare al FC-Crowdfunding per ottenere fino al +100% annuo con un'unica operazione e senza impegnare ulteriore tempo. Lo sapevi? Attualmente, per ottenere una rendita mensile superiore a 2.400 USDT/mese con FC-Crowdfunding sono necessari &quot;solo&quot; 200.000 USDT (in staking), rispetto alla media stimata sui 450.000 USDT per lo stesso risultato tramite altre piattaforme e/o sistemi più diffusi."
              risposta5='Per chi è alle prime armi, è consigliato non ignorare le guide sulla sicurezza. Queste sono utili per evitare truffe, errori di gestione, furti, o attacchi hacker. Le strategie "Inizio Rapido" o "Iniziare da Zero" sono ideali per chi non ha molta esperienza nel settore.'
              risposta6='Assolutamente! Ci sono numerose risorse gratuite disponibili per accumulare un budget iniziale, sfruttando il tempo libero. Puoi anche seguire i tutorial nella sezione "Altro &gt; Tutorials" per ottenere consigli utili.'
              risposta7="Il Crypto-Farming è un sistema d'investimento strategico con l'obiettivo di incrementare il numero delle tue Crypto. Utilizzando strategie specifiche e risorse all'avanguardia, puoi contrastare o assecondare la volatilità del mercato in modo flessibile sfruttando questa tecnica, adottando quindi la strategia migliore in base alla situazione attuale per raggiungere l'obbiettivo successivo."
              rootClassName="fa-qlistroot-class-name"
            ></FAQlist>
          </div>
        </div>
        <Footer rootClassName="footerroot-class-name38"></Footer>
      </div>
    </div>
  )
}

export default A1Main
