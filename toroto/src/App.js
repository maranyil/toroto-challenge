import React from 'react';
import './scss/App.scss';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Proyectos from './pages/Proyectos';
import Toroto from './pages/Toroto'

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route exact path = "/" render = {() => <Toroto />} />
          <Route exact path = "/proyectos" render = {() => <Proyectos />} />
        </Switch>
        <p>
          Tú puedes, bebé Marita del bien
        </p>
        </Router>
    </div>
  );
}

export default App;
