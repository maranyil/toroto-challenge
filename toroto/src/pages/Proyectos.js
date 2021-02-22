import React, { useEffect, useState } from 'react';
import '../scss/Cards.scss';
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

const Proyectos = () => {
  const projects = useProjects();

  return (
    <div className="pcontainer">
      <ul className="proyectos">
        {projects.map((item) => (
          <div className="card" key={item.name}>
            <img src={item.img} alt="" />
            <h2> {item.name} </h2>
            <h4> {item.location} </h4>
            <h4> {item.type} </h4>
            <Link to={`/proyectos/${item.name}`}>
              <button> LEER MÁS </button>
            </Link>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default Proyectos;
