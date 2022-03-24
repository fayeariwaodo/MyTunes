import logo from "./logo.svg";
import "./App.css";
import Nav from "./Tunesnav";
import Home from "./Home.js";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Component from "./Component";


function App() {
  return (
    <div>
      <Router>
        <Nav/>
        <switch>
          <Route exact path="/">
            <Home />
          </Route>

          <Route  path="/C">
            <Component/>
          </Route>

          <Route  path="">
           
          </Route>

          <Route  path="">
           
          </Route>

        </switch>
      </Router>
    </div>
  );
}
export default App;
