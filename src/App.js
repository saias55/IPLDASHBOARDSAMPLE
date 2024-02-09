import {Route, Switch} from 'react-router-dom'

import MatchCard from './components/MatchCard'

import './App.css'

import Home from './components/Home'

const App = () => (
  <div className="main-bgc">
    <h1 className="main-head">IPL DASHBOARD</h1>

    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/team-matches/:id" component={MatchCard} />
    </Switch>
  </div>
)

export default App
