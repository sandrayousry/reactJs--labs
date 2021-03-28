import React, { Component } from 'react';
import {BrowserRouter, Route, Link, Switch} from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.css";
import Login from "./Login";
import Movies from "./Movies";
import Home from "./Home";
class App extends Component {
    state = {  }
    render() { 
        return (
            <BrowserRouter>
            <div >
              <nav >
                <ul>
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <Link to="/Login">Login</Link>
                  </li>
                  <li>
                    <Link to="/Movies">Movies</Link>
                  </li>
                </ul>
              </nav>
      
              {/* A <Switch> looks through its children <Route>s and
                  renders the first one that matches the current URL. */}
              <Switch>
                <Route path="/Login">
                  <Login />
                </Route>
                <Route path="/Movies">
                  <Movies />
                </Route>
                <Route path="/">
                  <Home />
                </Route>
              </Switch>
            </div>
          </BrowserRouter>

          
        );
      }
            
         
    }
 
export default App;