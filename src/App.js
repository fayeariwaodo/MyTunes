import logo from './logo.svg';
import './App.css';
import Nav from './Tunesnav';
import  Home from  './Home.js'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';



function App() {
  return (
    <div >
      <Router>
      <switch>
        <Route exact path='/'>
        <Home/>


        </Route>
      </switch>
      </Router>
       
     
    </div>
  );
}
export default App;
