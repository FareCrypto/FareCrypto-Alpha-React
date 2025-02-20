import React from 'react'

import { Helmet } from 'react-helmet'

import './z-page.css'

const ZPage = (props) => {
  return (
    <div className="z-page-container1">
      <Helmet>
        <title>z-Page - FareCrypto.net</title>
        <meta
          name="description"
          content="Su FareCrypto potrai scoprire come trasformare il tempo libero in Crypto e NFT ed avviale la tua carriera da Crypto-Farmer anche da zero!"
        />
        <meta property="og:title" content="z-Page - FareCrypto.net" />
        <meta
          property="og:description"
          content="Su FareCrypto potrai scoprire come trasformare il tempo libero in Crypto e NFT ed avviale la tua carriera da Crypto-Farmer anche da zero!"
        />
        <meta
          property="og:image"
          content="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/96126f84-3d02-484f-9938-f21158ba03bc/53757f96-2178-4619-9dd4-454e310e2259?org_if_sml=1&amp;force_format=original"
        />
      </Helmet>
      <div className="z-page-container2 wide_container">
        <strong className="z-page-text10 FLX_txt_med_big">
          Informazioni sezione
        </strong>
        <div className="z-page-container3">
          <header data-thq="thq-navbar" className="z-page-info-dd">
            <div data-thq="thq-burger-menu" className="z-page-open-info">
              <svg viewBox="0 0 1024 1024" className="z-page-icon1">
                <path d="M426 726v-428l214 214z"></path>
              </svg>
              <strong className="z-page-text11 FLX_txt_med_small">
                Le Risorse
              </strong>
            </div>
            <div data-thq="thq-mobile-menu" className="z-page-content">
              <div className="z-page-container4">
                <div data-thq="thq-close-menu" className="z-page-close-menu">
                  <svg viewBox="0 0 1024 1024" className="z-page-close-icon">
                    <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                  </svg>
                </div>
              </div>
              <div className="z-page-container5">
                <strong className="z-page-text12 FLX_txt_med_big">
                  Le Risorse
                </strong>
              </div>
              <span className="z-page-text13 FLX_txt_small">
                <span>
                  Generalmente, è definita &quot;risorsa&quot; qualunque fonte
                  online che permetta di guadagnare, gestire o l&apos;investire
                  criptovalute.
                </span>
                <br></br>
                <br></br>
                <span>
                  Ogni risorsa presente sulla piattaforma è stata testata per
                  diverso tempo prima di essere pubblicata in queste liste, di
                  conseguenza l&apos;utente ha la sicurezza di poter usufruire
                  solo delle risorse migliori e dei migliori contenuti in base
                  all&apos;obbiettivo.
                </span>
              </span>
            </div>
          </header>
        </div>
        <span className="z-page-text18 FLX_txt_med_big">
          <span>Su Fare</span>
          <span className="z-page-text20">Crypto</span>
          <span>
            {' '}
            sono messe a disposizione le risorse e gli strumenti usati nel
            Crypto-Farming per aiutare gli utenti ad investire sulle
            criptovalute con maggiore sicurezza e profittabilità, grazie
            all&apos;utilizzo di strategie versatili e capaci di seguire o
            ignorare la volatilità a seconda dell&apos;obbiettivo.
          </span>
        </span>
        <span className="z-page-text22 FLX_txt_med_big">
          La piattaforma è gratuita e molto semplice da usare, sarà infatti
          sufficiente scegliere come iniziare e valutare le strategie primarie
          per scoprire il percorso migliore da seguire!
        </span>
      </div>
    </div>
  )
}

export default ZPage
