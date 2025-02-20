import React from 'react'

import Script from 'dangerous-html/react'
import { Helmet } from 'react-helmet'

import NavbarInteractive1 from '../components/navbar-interactive1'
import Footer from '../components/footer'
import './z1-1-1-profile-update.css'

const Z111ProfileUpdate = (props) => {
  return (
    <div className="z111-profile-update-container10">
      <Helmet>
        <title>z1-1-1-profile-update - FareCrypto.net</title>
        <meta
          name="description"
          content="Su FareCrypto potrai scoprire come trasformare il tempo libero in Crypto e NFT ed avviale la tua carriera da Crypto-Farmer anche da zero!"
        />
        <meta
          property="og:title"
          content="z1-1-1-profile-update - FareCrypto.net"
        />
        <meta
          property="og:description"
          content="Su FareCrypto potrai scoprire come trasformare il tempo libero in Crypto e NFT ed avviale la tua carriera da Crypto-Farmer anche da zero!"
        />
        <meta
          property="og:image"
          content="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/96126f84-3d02-484f-9938-f21158ba03bc/53757f96-2178-4619-9dd4-454e310e2259?org_if_sml=1&amp;force_format=original"
        />
      </Helmet>
      <NavbarInteractive1></NavbarInteractive1>
      <img
        alt="image"
        src="/external/copia%20di%20logofcb-400h-1300w-1500h-1300w.png"
        className="z111-profile-update-image"
      />
      <div
        id="dashboard-profile-update"
        className="z111-profile-update-body body"
      >
        <div id="wip-alert" className="z111-profile-update-container11">
          <strong className="z111-profile-update-text10 FLX_txt_med_small-2">
            ATTENZIONE:
          </strong>
          <span className="z111-profile-update-text11 FLX_txt_small">
            <span>
              Questa versione è ancora grezza e potrebbe presentare difetti
              grafici o malfunzionamenti.
            </span>
            <br></br>
            <span>
              Si prega di segnalare eventuali errori affinché vengano
              tempestivamente risolti.
            </span>
            <br className="z111-profile-update-text15"></br>
            <span className="z111-profile-update-text16">
              I tuoi dati ed eventuali fondi sono al sicuro!
            </span>
            <span> Grazie della collaborazione!</span>
          </span>
          <strong className="z111-profile-update-text18 link FLX_txt_med_small-2">
            <span>Vai al</span>
            <br></br>
            <span>Support</span>
          </strong>
          <svg
            onClick="closeWipAlert()"
            viewBox="0 0 1024 1024"
            className="z111-profile-update-icon1"
          >
            <path d="M512 0c-282.77 0-512 229.23-512 512s229.23 512 512 512 512-229.23 512-512-229.23-512-512-512zM512 928c-229.75 0-416-186.25-416-416s186.25-416 416-416 416 186.25 416 416-186.25 416-416 416z"></path>
            <path d="M672 256l-160 160-160-160-96 96 160 160-160 160 96 96 160-160 160 160 96-96-160-160 160-160z"></path>
          </svg>
          <div>
            <div className="z111-profile-update-container13">
              <React.Fragment>
                <Script>{`
function closeWipAlert() {
  document.getElementById("wip-alert").style.display = "none";
}
`}</Script>
              </React.Fragment>
            </div>
          </div>
        </div>
        <strong id="faq-point" className="z111-profile-update-text22 FLX_h2">
          <span className="z111-profile-update-text23">A</span>
          <span>
            ggiorna
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <span className="z111-profile-update-text25">P</span>
          <span>rofilo</span>
        </strong>
        <animate-on-reveal
          animation="fadeIn"
          duration="1000ms"
          delay="0s"
          direction="normal"
          easing="ease"
          iteration="1"
        >
          <div
            id="profile-update-success-box"
            data-thq-animate-on-reveal="true"
            className="box-alert-success"
          >
            <strong id="profile-update-success" className="FLX_txt_med_small">
               
            </strong>
          </div>
        </animate-on-reveal>
        <animate-on-reveal
          animation="fadeIn"
          duration="1000ms"
          delay="0s"
          direction="normal"
          easing="ease"
          iteration="1"
        >
          <div
            id="profile-update-error-box"
            data-thq-animate-on-reveal="true"
            className="box-alert-error"
          >
            <strong id="profile-update-error" className="FLX_txt_med_small">
               
            </strong>
          </div>
        </animate-on-reveal>
        <div className="z111-profile-update-container16 wide_container">
          <h1 className="z111-profile-update-text29 FLX_txt_big">
            Modifica dati di accesso
          </h1>
          <div className="z111-profile-update-container17">
            <div className="z111-profile-update-container18">
              <h1 className="z111-profile-update-text30 FLX_txt_med_big">
                Modifica indirizzo E-Mail
              </h1>
              <form className="z111-profile-update-form1">
                <div className="z111-profile-update-container19">
                  <div className="z111-profile-update-container20">
                    <strong className="z111-profile-update-text31 FLX_txt_med_small">
                      Nuovo indirizzo E-Mail:
                    </strong>
                  </div>
                  <div className="z111-profile-update-container21">
                    <input
                      type="email"
                      required
                      placeholder="email@example.com"
                      className="z111-profile-update-textinput1 input"
                    />
                  </div>
                </div>
                <div className="z111-profile-update-container22">
                  <div className="z111-profile-update-container23">
                    <strong className="z111-profile-update-text32 FLX_txt_med_small">
                      Password attuale:
                    </strong>
                  </div>
                  <div className="z111-profile-update-container24">
                    <input
                      type="password"
                      required
                      maxlength="20"
                      minlength="8"
                      placeholder="Password"
                      className="z111-profile-update-textinput2 input"
                    />
                  </div>
                </div>
                <div className="z111-profile-update-container25">
                  <button
                    type="button"
                    className="z111-profile-update-button1 button2"
                  >
                    conferma
                  </button>
                </div>
                <animate-on-reveal
                  animation="fadeIn"
                  duration="1000ms"
                  delay="0s"
                  direction="normal"
                  easing="ease"
                  iteration="1"
                >
                  <div
                    id="profile-update-error-box"
                    data-thq-animate-on-reveal="true"
                    className="z111-profile-update-container26"
                  >
                    <strong
                      id="profile-update-error"
                      className="FLX_txt_med_small"
                    >
                       
                    </strong>
                  </div>
                </animate-on-reveal>
                <animate-on-reveal
                  animation="fadeIn"
                  duration="1000ms"
                  delay="0s"
                  direction="normal"
                  easing="ease"
                  iteration="1"
                >
                  <div
                    id="profile-update-success-box"
                    data-thq-animate-on-reveal="true"
                    className="z111-profile-update-container27"
                  >
                    <strong
                      id="profile-update-success"
                      className="FLX_txt_med_small"
                    >
                       
                    </strong>
                  </div>
                </animate-on-reveal>
              </form>
              <span className="z111-profile-update-text35 FLX_txt_med_small-2">
                Dopo la conferma ti invieremo un link di verifica al nuovo
                indirizzo specificato.
              </span>
            </div>
            <div className="z111-profile-update-container28"></div>
            <div className="z111-profile-update-container29">
              <h1 className="z111-profile-update-text36 FLX_txt_med_big">
                Modifica Password
              </h1>
              <form className="z111-profile-update-form2">
                <div className="z111-profile-update-container30">
                  <div className="z111-profile-update-container31">
                    <strong className="z111-profile-update-text37 FLX_txt_med_small">
                      Vecchia Password:
                    </strong>
                  </div>
                  <div className="z111-profile-update-container32">
                    <input
                      type="password"
                      id="update-psw-old"
                      required
                      maxlength="20"
                      minlength="8"
                      placeholder="Vecchia password"
                      className="z111-profile-update-textinput3 input"
                    />
                  </div>
                </div>
                <div className="z111-profile-update-container33">
                  <div className="z111-profile-update-container34">
                    <strong className="z111-profile-update-text38 FLX_txt_med_small">
                      Nuova Password:
                    </strong>
                  </div>
                  <div className="z111-profile-update-container35">
                    <input
                      type="password"
                      id="update-psw-new1"
                      required
                      maxlength="20"
                      minlength="8"
                      placeholder="Nuova password"
                      className="z111-profile-update-textinput4 input"
                    />
                  </div>
                </div>
                <div className="z111-profile-update-container36">
                  <div className="z111-profile-update-container37">
                    <strong className="z111-profile-update-text39 FLX_txt_med_small">
                      Conferma Password:
                    </strong>
                  </div>
                  <div className="z111-profile-update-container38">
                    <input
                      type="password"
                      id="update-psw-new2"
                      required
                      maxlength="20"
                      minlength="8"
                      placeholder="Nuova password"
                      className="z111-profile-update-textinput5 input"
                    />
                  </div>
                </div>
                <div className="z111-profile-update-container39">
                  <button
                    type="button"
                    className="z111-profile-update-button2 button2"
                  >
                    Modifica Password
                  </button>
                </div>
                <animate-on-reveal
                  animation="fadeIn"
                  duration="1000ms"
                  delay="0s"
                  direction="normal"
                  easing="ease"
                  iteration="1"
                >
                  <div
                    id="profile-update-error-box"
                    data-thq-animate-on-reveal="true"
                    className="z111-profile-update-container40"
                  >
                    <strong
                      id="profile-update-error"
                      className="FLX_txt_med_small"
                    >
                       
                    </strong>
                  </div>
                </animate-on-reveal>
                <animate-on-reveal
                  animation="fadeIn"
                  duration="1000ms"
                  delay="0s"
                  direction="normal"
                  easing="ease"
                  iteration="1"
                >
                  <div
                    id="profile-update-success-box"
                    data-thq-animate-on-reveal="true"
                    className="z111-profile-update-container41"
                  >
                    <strong
                      id="profile-update-success"
                      className="FLX_txt_med_small"
                    >
                       
                    </strong>
                  </div>
                </animate-on-reveal>
              </form>
              <span className="z111-profile-update-text42 FLX_txt_med_small-2">
                Dopo la conferma ti invieremo un link di verifica al nuovo
                indirizzo specificato.
              </span>
            </div>
          </div>
          <h1 className="z111-profile-update-text43 FLX_txt_big">
            Aggiorna informazioni
          </h1>
          <div className="z111-profile-update-container42">
            <div className="z111-profile-update-container43">
              <span className="z111-profile-update-text44 FLX_txt_med_small">
                <span>
                  È necessario completare il profilo per sbloccare il tuo
                  FC-Wallet.
                </span>
                <br></br>
                <span>
                  Questi dati non potranno essere modificati: assicurati di
                  inserire dati corretti e comprovabili.
                </span>
                <br></br>
              </span>
              <form className="z111-profile-update-update-firstname">
                <div
                  id="firstname-update-box"
                  className="z111-profile-update-container44"
                >
                  <div className="z111-profile-update-container45">
                    <strong className="z111-profile-update-text49 FLX_txt_med_small">
                      Nome:
                    </strong>
                  </div>
                  <div className="z111-profile-update-container46">
                    <input
                      type="text"
                      id="firstname-update-input"
                      required
                      placeholder="Nome"
                      className="z111-profile-update-textinput6 input"
                    />
                  </div>
                  <div className="z111-profile-update-container47">
                    <button
                      type="button"
                      className="z111-profile-update-button3 button2"
                    >
                      Aggiorna
                    </button>
                  </div>
                </div>
              </form>
              <form className="z111-profile-update-update-lastname">
                <div
                  id="lastname-update-box"
                  className="z111-profile-update-container48"
                >
                  <div className="z111-profile-update-container49">
                    <strong className="z111-profile-update-text50 FLX_txt_med_small">
                      Cognome:
                    </strong>
                  </div>
                  <div className="z111-profile-update-container50">
                    <input
                      type="text"
                      id="lastname-update-input"
                      required
                      placeholder="Cognome"
                      className="z111-profile-update-textinput7 input"
                    />
                  </div>
                  <div className="z111-profile-update-container51">
                    <button
                      type="button"
                      className="z111-profile-update-button4 button2"
                    >
                      Aggiorna
                    </button>
                  </div>
                </div>
              </form>
              <form className="z111-profile-update-update-age">
                <div
                  id="age-update-box"
                  className="z111-profile-update-container52"
                >
                  <div className="z111-profile-update-container53">
                    <strong className="z111-profile-update-text51 FLX_txt_med_small">
                      Data di nascita:
                    </strong>
                  </div>
                  <div className="z111-profile-update-container54">
                    <input
                      type="date"
                      id="age-update-input"
                      required
                      placeholder="email@example.com"
                      className="z111-profile-update-textinput8 input"
                    />
                  </div>
                  <div className="z111-profile-update-container55">
                    <button
                      type="button"
                      className="z111-profile-update-button5 button2"
                    >
                      Aggiorna
                    </button>
                  </div>
                </div>
                <div
                  id="country-update-box"
                  className="z111-profile-update-container56"
                >
                  <div className="z111-profile-update-container57">
                    <strong className="z111-profile-update-text52 FLX_txt_med_small">
                      Luogo di residenza:
                    </strong>
                  </div>
                  <div className="z111-profile-update-container58">
                    <select
                      required
                      autoComplete="country"
                      className="z111-profile-update-select select-input input"
                    >
                      <option value="New Option" selected>
                        New Option
                      </option>
                    </select>
                    <div className="z111-profile-update-container59 select-input input profile-update-select">
                      <div className="z111-profile-update-container60">
                        <React.Fragment>
                          <React.Fragment>
                            <select
                              id="country-update-input"
                              required={true}
                              autoComplete="country"
                              style={{
                                display: 'flex',
                                width: '100%',
                                padding: '0.5rem',
                                borderColor: '#33b5e5',
                                borderWidth: '2px',
                                borderRadius: '8px',
                              }}
                            >
                              <option selected="true" disabled={true}>
                                Selezionare...
                              </option>
                              <option value="AFG">Afghanistan</option>
                              <option value="ALA">Aland Islands</option>
                              <option value="ALB">Albania</option>
                              <option value="DZA">Algeria</option>
                              <option value="ASM">American Samoa</option>
                              <option value="AND">Andorra</option>
                              <option value="AGO">Angola</option>
                              <option value="AIA">Anguilla</option>
                              <option value="ATA">Antarctica</option>
                              <option value="ATG">Antigua and Barbuda</option>
                              <option value="ARG">Argentina</option>
                              <option value="ARM">Armenia</option>
                              <option value="ABW">Aruba</option>
                              <option value="AUS">Australia</option>
                              <option value="AUT">Austria</option>
                              <option value="AZE">Azerbaijan</option>
                              <option value="BHS">Bahamas</option>
                              <option value="BHR">Bahrain</option>
                              <option value="BGD">Bangladesh</option>
                              <option value="BRB">Barbados</option>
                              <option value="BLR">Belarus</option>
                              <option value="BEL">Belgium</option>
                              <option value="BLZ">Belize</option>
                              <option value="BEN">Benin</option>
                              <option value="BMU">Bermuda</option>
                              <option value="BTN">Bhutan</option>
                              <option value="BOL">
                                Bolivia, Plurinational State of
                              </option>
                              <option value="BES">
                                Bonaire, Sint Eustatius and Saba
                              </option>
                              <option value="BIH">
                                Bosnia and Herzegovina
                              </option>
                              <option value="BWA">Botswana</option>
                              <option value="BVT">Bouvet Island</option>
                              <option value="BRA">Brazil</option>
                              <option value="IOT">
                                British Indian Ocean Territory
                              </option>
                              <option value="BRN">Brunei Darussalam</option>
                              <option value="BGR">Bulgaria</option>
                              <option value="BFA">Burkina Faso</option>
                              <option value="BDI">Burundi</option>
                              <option value="KHM">Cambodia</option>
                              <option value="CMR">Cameroon</option>
                              <option value="CAN">Canada</option>
                              <option value="CPV">Cape Verde</option>
                              <option value="CYM">Cayman Islands</option>
                              <option value="CAF">
                                Central African Republic
                              </option>
                              <option value="TCD">Chad</option>
                              <option value="CHL">Chile</option>
                              <option value="CHN">China</option>
                              <option value="CXR">Christmas Island</option>
                              <option value="CCK">
                                Cocos (Keeling) Islands
                              </option>
                              <option value="COL">Colombia</option>
                              <option value="COM">Comoros</option>
                              <option value="COG">Congo</option>
                              <option value="COD">
                                Congo, the Democratic Republic of the
                              </option>
                              <option value="COK">Cook Islands</option>
                              <option value="CRI">Costa Rica</option>
                              <option value="CIV">Cote d'Ivoire</option>
                              <option value="HRV">Croatia</option>
                              <option value="CUB">Cuba</option>
                              <option value="CUW">Curacao</option>
                              <option value="CYP">Cyprus</option>
                              <option value="CZE">Czech Republic</option>
                              <option value="DNK">Denmark</option>
                              <option value="DJI">Djibouti</option>
                              <option value="DMA">Dominica</option>
                              <option value="DOM">Dominican Republic</option>
                              <option value="ECU">Ecuador</option>
                              <option value="EGY">Egypt</option>
                              <option value="SLV">El Salvador</option>
                              <option value="GNQ">Equatorial Guinea</option>
                              <option value="ERI">Eritrea</option>
                              <option value="EST">Estonia</option>
                              <option value="ETH">Ethiopia</option>
                              <option value="FLK">
                                Falkland Islands (Malvinas)
                              </option>
                              <option value="FRO">Faroe Islands</option>
                              <option value="FJI">Fiji</option>
                              <option value="FIN">Finland</option>
                              <option value="FRA">France</option>
                              <option value="GUF">French Guiana</option>
                              <option value="PYF">French Polynesia</option>
                              <option value="ATF">
                                French Southern Territories
                              </option>
                              <option value="GAB">Gabon</option>
                              <option value="GMB">Gambia</option>
                              <option value="GEO">Georgia</option>
                              <option value="DEU">Germany</option>
                              <option value="GHA">Ghana</option>
                              <option value="GIB">Gibraltar</option>
                              <option value="GRC">Greece</option>
                              <option value="GRL">Greenland</option>
                              <option value="GRD">Grenada</option>
                              <option value="GLP">Guadeloupe</option>
                              <option value="GUM">Guam</option>
                              <option value="GTM">Guatemala</option>
                              <option value="GGY">Guernsey</option>
                              <option value="GIN">Guinea</option>
                              <option value="GNB">Guinea-Bissau</option>
                              <option value="GUY">Guyana</option>
                              <option value="HTI">Haiti</option>
                              <option value="HMD">
                                Heard Island and McDonald Islands
                              </option>
                              <option value="VAT">
                                Holy See (Vatican City State)
                              </option>
                              <option value="HND">Honduras</option>
                              <option value="HKG">Hong Kong</option>
                              <option value="HUN">Hungary</option>
                              <option value="ISL">Iceland</option>
                              <option value="IND">India</option>
                              <option value="IDN">Indonesia</option>
                              <option value="IRN">
                                Iran, Islamic Republic of
                              </option>
                              <option value="IRQ">Iraq</option>
                              <option value="IRL">Ireland</option>
                              <option value="IMN">Isle of Man</option>
                              <option value="ISR">Israel</option>
                              <option value="ITA">Italy</option>
                              <option value="JAM">Jamaica</option>
                              <option value="JPN">Japan</option>
                              <option value="JEY">Jersey</option>
                              <option value="JOR">Jordan</option>
                              <option value="KAZ">Kazakhstan</option>
                              <option value="KEN">Kenya</option>
                              <option value="KIR">Kiribati</option>
                              <option value="PRK">
                                Korea, Democratic People's Republic of
                              </option>
                              <option value="KOR">Korea, Republic of</option>
                              <option value="KWT">Kuwait</option>
                              <option value="KGZ">Kyrgyzstan</option>
                              <option value="LAO">
                                Lao People's Democratic Republic
                              </option>
                              <option value="LVA">Latvia</option>
                              <option value="LBN">Lebanon</option>
                              <option value="LSO">Lesotho</option>
                              <option value="LBR">Liberia</option>
                              <option value="LBY">Libya</option>
                              <option value="LIE">Liechtenstein</option>
                              <option value="LTU">Lithuania</option>
                              <option value="LUX">Luxembourg</option>
                              <option value="MAC">Macao</option>
                              <option value="MKD">
                                Macedonia, the former Yugoslav Republic of
                              </option>
                              <option value="MDG">Madagascar</option>
                              <option value="MWI">Malawi</option>
                              <option value="MYS">Malaysia</option>
                              <option value="MDV">Maldives</option>
                              <option value="MLI">Mali</option>
                              <option value="MLT">Malta</option>
                              <option value="MHL">Marshall Islands</option>
                              <option value="MTQ">Martinique</option>
                              <option value="MRT">Mauritania</option>
                              <option value="MUS">Mauritius</option>
                              <option value="MYT">Mayotte</option>
                              <option value="MEX">Mexico</option>
                              <option value="FSM">
                                Micronesia, Federated States of
                              </option>
                              <option value="MDA">Moldova, Republic of</option>
                              <option value="MCO">Monaco</option>
                              <option value="MNG">Mongolia</option>
                              <option value="MNE">Montenegro</option>
                              <option value="MSR">Montserrat</option>
                              <option value="MAR">Morocco</option>
                              <option value="MOZ">Mozambique</option>
                              <option value="MMR">Myanmar</option>
                              <option value="NAM">Namibia</option>
                              <option value="NRU">Nauru</option>
                              <option value="NPL">Nepal</option>
                              <option value="NLD">Netherlands</option>
                              <option value="NCL">New Caledonia</option>
                              <option value="NZL">New Zealand</option>
                              <option value="NIC">Nicaragua</option>
                              <option value="NER">Niger</option>
                              <option value="NGA">Nigeria</option>
                              <option value="NIU">Niue</option>
                              <option value="NFK">Norfolk Island</option>
                              <option value="MNP">
                                Northern Mariana Islands
                              </option>
                              <option value="NOR">Norway</option>
                              <option value="OMN">Oman</option>
                              <option value="PAK">Pakistan</option>
                              <option value="PLW">Palau</option>
                              <option value="PSE">
                                Palestinian Territory, Occupied
                              </option>
                              <option value="PAN">Panama</option>
                              <option value="PNG">Papua New Guinea</option>
                              <option value="PRY">Paraguay</option>
                              <option value="PER">Peru</option>
                              <option value="PHL">Philippines</option>
                              <option value="PCN">Pitcairn</option>
                              <option value="POL">Poland</option>
                              <option value="PRT">Portugal</option>
                              <option value="PRI">Puerto Rico</option>
                              <option value="QAT">Qatar</option>
                              <option value="REU">Reunion</option>
                              <option value="ROU">Romania</option>
                              <option value="RUS">Russian Federation</option>
                              <option value="RWA">Rwanda</option>
                              <option value="BLM">Saint Barthelemy</option>
                              <option value="SHN">
                                Saint Helena, Ascension and Tristan da Cunha
                              </option>
                              <option value="KNA">Saint Kitts and Nevis</option>
                              <option value="LCA">Saint Lucia</option>
                              <option value="MAF">
                                Saint Martin (French part)
                              </option>
                              <option value="SPM">
                                Saint Pierre and Miquelon
                              </option>
                              <option value="VCT">
                                Saint Vincent and the Grenadines
                              </option>
                              <option value="WSM">Samoa</option>
                              <option value="SMR">San Marino</option>
                              <option value="STP">Sao Tome and Principe</option>
                              <option value="SAU">Saudi Arabia</option>
                              <option value="SEN">Senegal</option>
                              <option value="SRB">Serbia</option>
                              <option value="SYC">Seychelles</option>
                              <option value="SLE">Sierra Leone</option>
                              <option value="SGP">Singapore</option>
                              <option value="SXM">
                                Sint Maarten (Dutch part)
                              </option>
                              <option value="SVK">Slovakia</option>
                              <option value="SVN">Slovenia</option>
                              <option value="SLB">Solomon Islands</option>
                              <option value="SOM">Somalia</option>
                              <option value="ZAF">South Africa</option>
                              <option value="SGS">
                                South Georgia and the South Sandwich Islands
                              </option>
                              <option value="SSD">South Sudan</option>
                              <option value="ESP">Spain</option>
                              <option value="LKA">Sri Lanka</option>
                              <option value="SDN">Sudan</option>
                              <option value="SUR">Suriname</option>
                              <option value="SJM">
                                Svalbard and Jan Mayen
                              </option>
                              <option value="SWZ">Swaziland</option>
                              <option value="SWE">Sweden</option>
                              <option value="CHE">Switzerland</option>
                              <option value="SYR">Syrian Arab Republic</option>
                              <option value="TWN">
                                Taiwan, Province of China
                              </option>
                              <option value="TJK">Tajikistan</option>
                              <option value="TZA">
                                Tanzania, United Republic of
                              </option>
                              <option value="THA">Thailand</option>
                              <option value="TLS">Timor-Leste</option>
                              <option value="TGO">Togo</option>
                              <option value="TKL">Tokelau</option>
                              <option value="TON">Tonga</option>
                              <option value="TTO">Trinidad and Tobago</option>
                              <option value="TUN">Tunisia</option>
                              <option value="TUR">Turkey</option>
                              <option value="TKM">Turkmenistan</option>
                              <option value="TCA">
                                Turks and Caicos Islands
                              </option>
                              <option value="TUV">Tuvalu</option>
                              <option value="UGA">Uganda</option>
                              <option value="UKR">Ukraine</option>
                              <option value="ARE">United Arab Emirates</option>
                              <option value="GBR">United Kingdom</option>
                              <option value="USA">United States</option>
                              <option value="UMI">
                                United States Minor Outlying Islands
                              </option>
                              <option value="URY">Uruguay</option>
                              <option value="UZB">Uzbekistan</option>
                              <option value="VUT">Vanuatu</option>
                              <option value="VEN">
                                Venezuela, Bolivarian Republic of
                              </option>
                              <option value="VNM">Viet Nam</option>
                              <option value="VGB">
                                Virgin Islands, British
                              </option>
                              <option value="VIR">Virgin Islands, U.S.</option>
                              <option value="WLF">Wallis and Futuna</option>
                              <option value="ESH">Western Sahara</option>
                              <option value="YEM">Yemen</option>
                              <option value="ZMB">Zambia</option>
                              <option value="ZWE">Zimbabwe</option>
                            </select>
                          </React.Fragment>
                        </React.Fragment>
                      </div>
                    </div>
                  </div>
                  <div className="z111-profile-update-container61">
                    <button
                      type="button"
                      className="z111-profile-update-button6 button2"
                    >
                      Aggiorna
                    </button>
                  </div>
                </div>
              </form>
            </div>
            <div
              id="profile-completed"
              className="z111-profile-update-if-profile-completed"
            >
              <span className="z111-profile-update-text53 FLX_txt_med_big">
                <span>Sembra che il tuo profilo sia già completo!</span>
                <br></br>
                <span>Eventuali nuovi dati richiesti appariranno qui.</span>
                <br></br>
              </span>
            </div>
          </div>
        </div>
      </div>
      <Footer rootClassName="footerroot-class-name26"></Footer>
    </div>
  )
}

export default Z111ProfileUpdate
