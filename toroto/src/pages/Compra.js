import React, { Fragment, useState } from 'react';
import CreditCardInput from 'react-credit-card-input';
import hojita from '../assets/img/hojita.jpg';

const Compra = () => {


    const [datos, setDatos] = useState({
        nombre: '',
        apellido: '',
        cantidad: '',
        date: new Date(),
        país: ''
    })

    const handleInputChange = (event) => {
        setDatos({
            ...datos,
            [event.target.name] : event.target.value
        })
    }
    

    const enviarDatos = (event) => {
        event.preventDefault()
    }

    return (
        <Fragment>
            
            <form className="formC" onSubmit={enviarDatos}>
            <h1>Compra bonos de carbono con Toroto</h1>
                <div className="datosCompra">
                    <input type="text" placeholder="Nombre" className="form-control" onChange={handleInputChange} name="nombre"></input>
                    <input type="text" placeholder="Apellido" className="form-control" onChange={handleInputChange} name="apellido"></input>
                    <input type="number" placeholder="Cantidad de bonos" className="form-control" onChange={handleInputChange} name="cantidad"></input>
                    <p>*Como parte de la prevención ante el doble gasto, te pedimos incluír tu Estado y País.<br/>
                    Esto impide que otras personas se lleven el crédito por tus bonos de carbono.</p>
                    <input type="text" placeholder="Estado, País" className="form-control" onChange={handleInputChange} name="pais"></input><br/>
                    <CreditCardInput/><br/>
                    <button type="submit" className="btn btn-primary">Enviar</button>
                </div>      
            </form>
 
            <div className="verificado">
                <h2>Bono de Carbono Toroto</h2>
                <img src={hojita}/>
                <p>Este certificado confirma que {datos.nombre} {datos.apellido}</p>
                <p>Realizó la compra de {datos.cantidad} bonos de carbono</p>
                <p>El día {datos.date.toLocaleDateString()}</p>
                <h4>Serial: xxxx-xxxx-xxxx</h4>

            </div>
        </Fragment>
    );
}

export default Compra;
