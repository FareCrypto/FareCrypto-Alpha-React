import React from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom'

import './style.css'
import D4OtherLegal6Sc from './views/d4-other-legal-6-sc'
import B2FarmingStg2 from './views/b2-farming-stg-2'
import D4OtherLegal4Cookies from './views/d4-other-legal-4-cookies'
import D1Other from './views/d1-other'
import B3FarmingRss4 from './views/b3-farming-rss-4'
import B3FarmingRss5 from './views/b3-farming-rss-5'
import B2FarmingStg4 from './views/b2-farming-stg-4'
import D4OtherLegal5Sicurezza from './views/d4-other-legal-5-sicurezza'
import D4OtherLegal from './views/d4-other-legal'
import B4FarmingUty2 from './views/b4-farming-uty-2'
import D4OtherLegal2Privacy from './views/d4-other-legal-2-privacy'
import D2OtherTutorials from './views/d2-other-tutorials'
import B4FarmingUty3 from './views/b4-farming-uty-3'
import B2FarmingStg3 from './views/b2-farming-stg-3'
import D4OtherLegal3Disclaimer from './views/d4-other-legal-3-disclaimer'
import B3FarmingRss3 from './views/b3-farming-rss-3'
import B3FarmingRss1 from './views/b3-farming-rss-1'
import B4FarmingUty4 from './views/b4-farming-uty-4'
import D4OtherLegal7Ce from './views/d4-other-legal-7-ce'
import D4OtherLegal1Tc from './views/d4-other-legal-1-tc'
import C4FcinsideServices from './views/c4-fcinside-services'
import B4FarmingUty1 from './views/b4-farming-uty-1'
import B3FarmingRss2 from './views/b3-farming-rss-2'
import D3OtherContacts from './views/d3-other-contacts'
import C3FcCrowdfunding from './views/c3-fc-crowdfunding'
import C1Fcinside from './views/c1-fcinside'
import Z11DashboardIndex from './views/z1-1-dashboard-index'
import ModelloPaginaMulti from './views/modello-pagina-multi'
import B2FarmingStg1 from './views/b2-farming-stg-1'
import C2FcinsideDiscoverUs from './views/c2-fcinside-discover-us'
import Z1Index1 from './views/z1-index1'
import Z112FcWallet from './views/z1-1-2-fc-wallet'
import Z5FcInsideIndex from './views/z5-fc-inside-index'
import ZBozze from './views/z-bozze'
import A1Main from './views/a1-main'
import B1Farming from './views/b1-farming'
import Z2RssIndex from './views/z2-rss-index'
import Z3StgIndex from './views/z3-stg-index'
import Z55Faq from './views/z5-5-faq'
import Z4UtyIndex from './views/z4-uty-index'
import Z6Registration from './views/z6-registration'
import ModelloPaginaTriplo from './views/modello-pagina-triplo'
import ZPage from './views/z-page'
import ModelloPaginaFlex from './views/modello-pagina-flex'
import Z111ProfileUpdate from './views/z1-1-1-profile-update'
import Z61Login from './views/z6-1-login'
import ZPageStyle from './views/z-page-style'
import NotFound from './views/not-found'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route component={D4OtherLegal6Sc} exact path="/d4-other-legal-6-sc" />
        <Route component={B2FarmingStg2} exact path="/b2-farming-stg-2" />
        <Route
          component={D4OtherLegal4Cookies}
          exact
          path="/d4-other-legal-4-cookies"
        />
        <Route component={D1Other} exact path="/d1-other" />
        <Route component={B3FarmingRss4} exact path="/b3-farming-rss-4" />
        <Route component={B3FarmingRss5} exact path="/b3-farming-rss-5" />
        <Route component={B2FarmingStg4} exact path="/b2-farming-stg-4" />
        <Route
          component={D4OtherLegal5Sicurezza}
          exact
          path="/d4-other-legal-5-sicurezza"
        />
        <Route component={D4OtherLegal} exact path="/d4-other-legal" />
        <Route component={B4FarmingUty2} exact path="/b4-farming-uty-2" />
        <Route
          component={D4OtherLegal2Privacy}
          exact
          path="/d4-other-legal-2-privacy"
        />
        <Route component={D2OtherTutorials} exact path="/d2-other-tutorials" />
        <Route component={B4FarmingUty3} exact path="/b4-farming-uty-3" />
        <Route component={B2FarmingStg3} exact path="/b2-farming-stg-3" />
        <Route
          component={D4OtherLegal3Disclaimer}
          exact
          path="/d4-other-legal-3-disclaimer"
        />
        <Route component={B3FarmingRss3} exact path="/b3-farming-rss-3" />
        <Route component={B3FarmingRss1} exact path="/b3-farming-rss-1" />
        <Route component={B4FarmingUty4} exact path="/b4-farming-uty-4" />
        <Route component={D4OtherLegal7Ce} exact path="/d4-other-legal-7-ce" />
        <Route component={D4OtherLegal1Tc} exact path="/d4-other-legal1" />
        <Route
          component={C4FcinsideServices}
          exact
          path="/c4-fcinside-services"
        />
        <Route component={B4FarmingUty1} exact path="/b4-farming-uty-1" />
        <Route component={B3FarmingRss2} exact path="/b3-farming-rss-2" />
        <Route component={D3OtherContacts} exact path="/d3-other-contacts" />
        <Route component={C3FcCrowdfunding} exact path="/c3-fc-crowdfunding" />
        <Route component={C1Fcinside} exact path="/c1-fcinside" />
        <Route
          component={Z11DashboardIndex}
          exact
          path="/z1-1-dashboard-index"
        />
        <Route
          component={ModelloPaginaMulti}
          exact
          path="/modello-pagina-multi"
        />
        <Route component={B2FarmingStg1} exact path="/b2-farming-stg-1" />
        <Route
          component={C2FcinsideDiscoverUs}
          exact
          path="/c2-fcinside-discover-us"
        />
        <Route component={Z1Index1} exact path="/z1-index1" />
        <Route component={Z112FcWallet} exact path="/z1-1-2-fc-wallet" />
        <Route component={Z5FcInsideIndex} exact path="/z5-fc-inside-index" />
        <Route component={ZBozze} exact path="/z-bozze" />
        <Route component={A1Main} exact path="/" />
        <Route component={B1Farming} exact path="/b1-farming" />
        <Route component={Z2RssIndex} exact path="/z2-rss-index" />
        <Route component={Z3StgIndex} exact path="/z3-stg-index" />
        <Route component={Z55Faq} exact path="/z5-5-faq" />
        <Route component={Z4UtyIndex} exact path="/z4-uty-index" />
        <Route component={Z6Registration} exact path="/z6-registration" />
        <Route
          component={ModelloPaginaTriplo}
          exact
          path="/modello-pagina-triplo"
        />
        <Route component={ZPage} exact path="/z-page" />
        <Route
          component={ModelloPaginaFlex}
          exact
          path="/modello-pagina-flex"
        />
        <Route
          component={Z111ProfileUpdate}
          exact
          path="/z1-1-1-profile-update"
        />
        <Route component={Z61Login} exact path="/z6-1-login" />
        <Route component={ZPageStyle} exact path="/z-page-style" />
        <Route component={NotFound} path="**" />
        <Redirect to="**" />
      </Switch>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
