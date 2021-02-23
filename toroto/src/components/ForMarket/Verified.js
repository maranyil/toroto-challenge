import React from 'react';
import verifyClient from '../../data/Data'
import hojita from '../../assets/img/hojita.jpg';

const Clientes = () => {
    return (
        <div className="clientes">
  
        <ul className="vcontain">
          {verifyClient.map((item) => (
            <div className="verified">
              <h2>{item.name} </h2>
              <img src={hojita}/>
              <h4>Bonos adquiridos: {item.offsets} </h4>
              <h3> {item.tag} </h3>
              <h5> Fecha: {item.date} </h5>
              <h6> Serial: {item.serial} </h6>
            </div>
          ))}
        </ul>
      </div>)
}

export default Clientes;
