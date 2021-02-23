import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const useProjects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const carbonProjects = 'https://www.toroto.mx/api/projects';
    fetch(carbonProjects)
      .then((res) => res.json())
      .then((data) => {
        setProjects(data);
      });
  }, []);
  return projects;
};

const Market = () => {
  const projects = useProjects();

  return (
    <div className="bcontainer">
      <h1>Cambia tu huella de carbono.</h1>
      <p>Compra bonos de carbono directamente de nuestros aliados.</p>

      <ul className="bonosventa">
        {projects.map((item) => (
          <div className="cardbono" key={item.name}>
            <img src={item.img} alt="" />
            <h2> {item.name} </h2>
            <h4> {item.location} </h4>
            <h4> {item.type} </h4>
            <Link to="compra">
              <button> COMPRAR BONOS </button>
            </Link>
            <h5> Bonos Disponibles: {item.availableOffsets} </h5>
            <h6> Precio: {item.offsetPrice} </h6>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default Market;
