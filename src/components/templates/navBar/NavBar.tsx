import React from 'react';
import { faBalanceScale, faEnvelope, faStar, faUser } from "@fortawesome/free-solid-svg-icons";

import "./style.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const NavBar: React.FC = () => {
    return (
        <header>
            <img src="imagem/IMAGEMhome/eco-novo.jpeg" alt="logotipo da empresa" id="marca" />
            <div className="sup">
                <div className="superior">
                    <a href="/pontuacao" target="_self" rel="next" className="link" accessKey="1" aria-label="1.Sua pegada/seus pontos">1.Pontuação <FontAwesomeIcon icon={faStar} /></a>
                    <a href="/legislacao" target="_self" rel="next" className="link" accessKey="2" aria-label="2.Legislaçao">2.Legislação <FontAwesomeIcon icon={faBalanceScale} /></a>
                    <a href="/contato" target="_self" rel="next" className="link" accessKey="3" aria-label="3.Contato">3. <FontAwesomeIcon icon={faEnvelope} /></a>
                    <a href="/login" className="link" accessKey="4" aria-label="4.Login">4.Login <FontAwesomeIcon icon={faUser} /></a>
                </div>
            </div>
            <div className="redesocial">
                <a href="https://youtu.be/uur_Qz6eobs" target="_blank"><img src="imagem/IMAGEMhome/logo-youtube.png" alt="YouTube" width="10%" /></a>
                <a href="https://www.linkedin.com/" target="_blank"><img src="imagem/IMAGEMhome/logo-linkedin.png" alt="aedIn" width="10%" /></a>
                <a href="https://www.instagram.com/" target="_blank"><img src="imagem/IMAGEMhome/logo-insta.png" alt="Instagram" width="10%" /></a>
                <a href="https://www.facebook.com/" target="_blank"><img src="imagem/IMAGEMhome/logo-face.png" alt="Facebook" width="10%" /></a>
                <a href="https://www.whatsapp.com/" target="_blank"><img src="imagem/IMAGEMhome/logo-zap.png" alt="WhatsApp" width="10%" /></a>
            </div>
        </header>
    );
};

export default NavBar;