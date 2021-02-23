import React from 'react';
//import '../../scss/Footer.scss'
import future from '../../assets/img/future.png';
import social from '../../assets/img/redes.png'


const Footer = () => {
    return(
        <div className="footer">
            <img className="future" src= { future } alt="" />
            <img className="socialm" src= { social } alt="" />
        </div>
    )
}

export default Footer;
