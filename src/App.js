import React from 'react';
// import logo from './logo.svg';
import './App.css';

import {BrowserRouter as Router, Route, Link, NavLink} from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Service from './pages/Services';
import Contact from './pages/Contact';
import Footer from './components/Footer';
import Logo from './assets/images/logo-orange.png';
import Detail from './pages/Detail';

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
                      <li className="nav-item active">
                          <Link className="nav-link" to="/about">ABOUT US</Link>
                      </li>
                      <li className="nav-item">
                          <Link className="nav-link" to="/services">SERVICES</Link>
                      </li>
                      <li className="nav-item">
                          <Link className="nav-link" to="/contact">CONTACT US</Link>
                      </li>
                      <li className="nav-item">
                          <Link className="nav-link" to="/service-detail">SERVICES DETAIL</Link>
                      </li>
                  </ul>
              </div>
            </div>
        </nav>
        

        <Route path="/" exact component={Home}></Route>
        <Route path="/about" component={About}></Route>
        {/* <Route path="/services" component={() => <h4>Service</h4>}></Route> */}
        <Route path="/services" component={Service}></Route>
        <Route path="/contact" component={Contact}></Route>
        <Route path="/service-detail" component={Detail}></Route>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
