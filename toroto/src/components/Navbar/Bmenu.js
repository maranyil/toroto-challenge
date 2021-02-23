import React from 'react';
import { Link } from 'react-router-dom';

const Bmenu = () => {
  return (
    <div className="bMenu">
      <nav role="navigation">
        <div className="menuToggle">
          <input type="checkbox" />

          <span></span>
          <span></span>
          <span></span>

          <ul className="menu">
            <Link to="proyectos">
              <li>Proyectos</li>
            </Link>
            <Link to="marketplace">
              <li>Marketplace</li>
            </Link>
            <Link to="verificado">
              <li>Clientes Verificados</li>
            </Link>
            <Link to="leaderboard">
              <li>Líderes del mes</li>
            </Link>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Bmenu;
