import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "../src/components/layout/Navbar"
import Landing from "./components/layout/Landing";
import Training from "./components/layout/Training";

import './tailwind.output.css';


function App() {
  return (
    <Fragment>
        <Router>
        <Navbar />
      
      <Switch>
      <Route exact path="/" component={Landing}/>
            <Route exact path="/training" component={Training} />
        </Switch>
            
          </Router>
   </Fragment>
  );
}

export default App;
