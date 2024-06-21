import React from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom'

import './style.css'
import B08 from './views/b08'
import B0502 from './views/b0502'
import B0511 from './views/b0511'
import A02 from './views/a02'
import B04 from './views/b04'
import B0603 from './views/b0603'
import B0501 from './views/b0501'
import B11 from './views/b11'
import B0507 from './views/b0507'
import B0607 from './views/b0607'
import B0604 from './views/b0604'
import A01 from './views/a01'
import B07 from './views/b07'
import B0610 from './views/b0610'
import B01 from './views/b01'
import B09 from './views/b09'
import B0510 from './views/b0510'
import B0503 from './views/b0503'
import B13 from './views/b13'
import B12 from './views/b12'
import B0601 from './views/b0601'
import B1001 from './views/b1001'
import B0608L from './views/b0608l'
import B0609 from './views/b0609'
import B0605 from './views/b0605'
import B0505 from './views/b0505'
import B0508 from './views/b0508'
import B0606 from './views/b0606'
import B03 from './views/b03'
import B0509 from './views/b0509'
import B0504 from './views/b0504'
import B02 from './views/b02'
import B0506 from './views/b0506'
import B0602 from './views/b0602'
import NotFound from './views/not-found'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route component={B08} exact path="/b08" />
        <Route component={B0502} exact path="/b0502" />
        <Route component={B0511} exact path="/b0511" />
        <Route component={A02} exact path="/a02" />
        <Route component={B04} exact path="/b04" />
        <Route component={B0603} exact path="/b0603" />
        <Route component={B0501} exact path="/b0501" />
        <Route component={B11} exact path="/b11" />
        <Route component={B0507} exact path="/b0507" />
        <Route component={B0607} exact path="/b0607" />
        <Route component={B0604} exact path="/b0604" />
        <Route component={A01} exact path="/a01" />
        <Route component={B07} exact path="/b07" />
        <Route component={B0610} exact path="/b0610" />
        <Route component={B01} exact path="/" />
        <Route component={B09} exact path="/b09" />
        <Route component={B0510} exact path="/b0510" />
        <Route component={B0503} exact path="/b0503" />
        <Route component={B13} exact path="/b13" />
        <Route component={B12} exact path="/b12" />
        <Route component={B0601} exact path="/b0601" />
        <Route component={B1001} exact path="/b1001" />
        <Route component={B0608L} exact path="/b0608l" />
        <Route component={B0609} exact path="/b0609" />
        <Route component={B0605} exact path="/b0605" />
        <Route component={B0505} exact path="/b0505" />
        <Route component={B0508} exact path="/b0508" />
        <Route component={B0606} exact path="/b0606" />
        <Route component={B03} exact path="/b03" />
        <Route component={B0509} exact path="/b0509" />
        <Route component={B0504} exact path="/b0504" />
        <Route component={B02} exact path="/b02" />
        <Route component={B0506} exact path="/b0506" />
        <Route component={B0602} exact path="/b0602" />
        <Route component={NotFound} path="**" />
        <Redirect to="**" />
      </Switch>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
