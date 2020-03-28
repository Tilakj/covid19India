import React from 'react';
import './App.css';
import ReactGA from 'react-ga'
import Home from './components/home/Home';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom'
import India from './components/India/India';

const initializeAnalytics = () => {
  ReactGA.initialize("UA-162030642-1")
  ReactGA.pageview("/Home")
}


function App() {
  initializeAnalytics()
  return (
    <BrowserRouter>
      <nav className="navbar navbar-dark bg-dark shadow p-2">
        <Link to='/' className="navbar-brand" ><h4>COVID-19</h4><span className="sr-only">(current)</span></Link>
        <div id="navbarNavAltMarkup">
          <div className="navbar-nav mr-auto">
            <Link to='/india' className="nav-item nav-link float-right mr-5"><h5>COVID-19 India counts</h5><span className="sr-only">(current)</span></Link>
          </div>
        </div>
      </nav>
      <Switch>
        <Route path="/" component={Home} exact={true} />
        <Route path="/india" component={India} exact={true} />
      </Switch>
      <div className="row footer">
        <div className="col"><p>By Tilak J</p></div>
        <div className="col float-right"><p className="text-right">Data from covid19india</p></div>
      </div>
    </BrowserRouter>

  );
}

export default App;
