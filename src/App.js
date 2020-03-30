import React from 'react';
// import logo from './logo.svg';
import './App.css';

import {BrowserRouter as Router, Route, Link, NavLink, Switch} from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Service from './pages/Services';
import Contact from './pages/Contact';
import Footer from './components/Footer';
import Logo from './assets/images/logo-orange.png';
import Detail from './pages/Detail';
import Notfound from './pages/NotFound';

function App() {
  return (
    <Router>
      <div>
        <nav className="navbar fixed-top navbar-expand-lg navbar-light">
            <div className='container'>
              <Link className="navbar-brand" to="/"><img src={Logo}/></Link>
              
              <button className="navbar-toggler collapsed p-0" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="icon-bar top-bar"></span>
                  <span className="icon-bar middle-bar"></span>
                  <span className="icon-bar bottom-bar"></span>
              </button>

              <div className="collapse navbar-collapse" id="navbarNav">
                  <ul className="navbar-nav mx-auto">
                      <li className="nav-item">
                          <NavLink exact={true} activeClassName="is-active" to="/about">ABOUT US</NavLink>
                      </li>
                      <li className="nav-item">
                          <NavLink activeClassName="is-active" to="/services">SERVICES</NavLink>
                      </li>
                      <li className="nav-item">
                          <NavLink activeClassName="is-active" to="/contact">CONTACT US</NavLink>
                      </li>
                  </ul>
              </div>
            </div>
        </nav>
        

        <Switch>
          <Route path="/" exact component={Home}></Route>
          <Route path="/about" exact component={About}></Route>
          <Route path="/services" exact component={Service}></Route>
          <Route path="/services/:name" exact component={Detail}></Route>
          <Route path="/contact" exact component={Contact}></Route>
          {/* <Route path="/service-detail" component={Detail}></Route> */}
          <Route component={Notfound} />
        </Switch>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
