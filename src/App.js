import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/layouts/Navbar";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import NotFound from "./components/pages/NotFound";
import User from "./components/users/User";
import Alert from "./components/layouts/Alert";
import GithubState from "./context/github/githubState";
import AlertState from "./context/alert/AlertState";
import "./App.css";

const App = () => {
  return (
    <GithubState>
      <AlertState>
        <Router>
          <div>
            <Navbar />
            <div className='container'>
              <Alert alert={alert} />
              <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/about' component={About} />
                <Route exact path='/user/:login' component={User} />
                <Route component={NotFound} />
              </Switch>
            </div>
          </div>
        </Router>
      </AlertState>
    </GithubState>
  );
};

export default App;
