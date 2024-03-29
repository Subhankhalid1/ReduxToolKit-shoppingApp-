import React, { useState } from "react";
import Cart from '../Components/Cart'
import Product from '../Components/Product'
import Home from '../Components/Home'
import About from '../Components/About'
import Footer from '../footer'

import './routes.css'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export default function Routes() {
  let [morning, setMorning] = useState(true);
  return (

    <div className={`App ${morning ? 'App' : 'darkNight'}`}>

      <Router>


        <nav className="navbar">

          <Link to="/">Home</Link>

          <Link to="/Product">Product</Link>

          <Link to="/Cart">Cart</Link>

          <Link to="/About">About</Link>

          <Link>
            <a href="#" onClick={() => { setMorning(!morning) }} className="button"> 
            Dark
      </a>
          </Link>

        </nav>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/Product" component={Product} />
          <Route path="/Cart" component={Cart} />
          <Route path="/About" component={About} />
          <Route path="*" component={() => <h2>404 Not Found</h2>} />
        </Switch>

      </Router>
      <br/> <br/>
<Footer/>
<br/> <br/>
    </div>

  )
}