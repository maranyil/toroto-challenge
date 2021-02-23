import React from 'react';
//import './scss/App.scss';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Proyectos from './pages/Proyectos';
import Marketplace from './pages/Marketplace';
//import Verificado from './pages/Verificado';
import Compra from './pages/Compra';
import Toroto from './pages/Toroto';
import Footer from './components/Navbar/Footer';
import NotFound from './pages/Notfound';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route exact path = "/" render = {() => <Toroto />} />
          <Route exact path = "/proyectos" render = {() => <Proyectos />} />
          <Route exact path = "/marketplace" render = {() => <Marketplace />} />
          <Route exact path = "/leaderboard" render = {() => <NotFound />} />
          <Route exact path = "/verificado" render = {() => <NotFound />} />
          <Route exact path = "/compra" render = {() => <Compra />} />
        </Switch>
        <Footer />
        </Router>
    </div>
  );
}

export default App;
