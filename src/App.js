import React from 'react';
import './App.css';
import Home from './components/home/Home';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom'
import India from './components/India/India';

function App() {
  return (

    <BrowserRouter>
      <nav className="navbar navbar-dark bg-dark shadow p-3">
        <Link to='/' className="navbar-brand" >COVID-19<span className="sr-only">(current)</span></Link>
        <div id="navbarNavAltMarkup">
          <div className="navbar-nav mr-auto">
            <Link to='/india' className="nav-item nav-link float-right mr-5">India <span className="sr-only">(current)</span></Link>
          </div>
        </div>
      </nav>
      <Switch>
        <Route path="/" component={Home} exact={true} />
        <Route path="/india" component={India} exact={true} />
      </Switch>
    </BrowserRouter>

  );
}

export default App;
