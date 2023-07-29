import React from 'react';
import "./footer.css";
import {BsGithub} from "react-icons/bs";
import {BsLinkedin} from "react-icons/bs";
import {SiGmail} from "react-icons/si";

// import { Container } from './styles';

function footer() {
  return (
    <>
        <div id="contato">
            <div className="container-footer">
                <h6 id="footer-title"><span>{"<"}</span> Kaique.a.silva-lima@itau-unibanco.com.br<span>{">"}</span></h6>
                <div id='redes-contato'>
                    <a href="https://www.linkedin.com/in/kaiquesdl/" target={"_blank"}> <BsLinkedin/></a>
                    <a href="https://github.com/KaiqueSDL" target={"_blank"}> <BsGithub/></a>
                    
                    <a href="mailto:kaiquesdl124@gmail.com" target={"_blank"}> <SiGmail/></a>
                    
                </div>

            </div>
        </div>
    </>
  );
}

export default footer;