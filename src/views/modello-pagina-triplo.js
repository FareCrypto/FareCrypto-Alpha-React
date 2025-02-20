import React from 'react'

import { Helmet } from 'react-helmet'

import NavbarInteractive1 from '../components/navbar-interactive1'
import './modello-pagina-triplo.css'

const ModelloPaginaTriplo = (props) => {
  return (
    <div className="modello-pagina-triplo-container1">
      <Helmet>
        <title>modello-pagina-triplo - FareCrypto.net</title>
        <meta
          name="description"
          content="Su FareCrypto potrai scoprire come trasformare il tempo libero in Crypto e NFT ed avviale la tua carriera da Crypto-Farmer anche da zero!"
        />
        <meta
          property="og:title"
          content="modello-pagina-triplo - FareCrypto.net"
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
      <NavbarInteractive1 rootClassName="navbar-interactive1root-class-name3"></NavbarInteractive1>
      <div className="modello-pagina-triplo-container2">
        <div className="modello-pagina-triplo-container3">
          <div className="modello-pagina-triplo-container4"></div>
          <div className="modello-pagina-triplo-container5"></div>
          <div className="modello-pagina-triplo-container6"></div>
        </div>
      </div>
    </div>
  )
}

export default ModelloPaginaTriplo
