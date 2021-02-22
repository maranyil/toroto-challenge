import React from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import logo from '../../assets/img/toroto.png';
import Bmenu from './Bmenu';
import '../../scss/Navbar.scss';

const changeTitle = (pathname) => {
  switch (pathname) {
    case '/proyectos':
      return 'Proyectos';
    case '/marketplace':
      return 'Marketplace';
    case '/leaderboard':
      return 'Líderes del mes';
  }
};

function Navbar() {
  const { pathname } = useLocation();
  return (
    <div className="topbar">
      <Link to="/">
      <img src={logo} alt=""/>
</Link>
      
      <h1>
        / <span className="white"> {changeTitle(pathname)} </span>
      </h1>
      <div className="bMenu">
        <Bmenu />
      </div>
    </div>
  );
}

export default Navbar;
