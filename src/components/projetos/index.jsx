import React from "react";
import Carousel from "react-bootstrap/Carousel";
import CardP from "../cards/card_projeto.jsx";
import "./projetos.css";

// videos
import videoCB from "../../videos/Video_CasasBahia.mp4";
import videoBC from "../../videos/VideoBuscadorCep.mp4";
import videoGQ from "../../videos/VideoQRcode.mp4";
import videoPG from "../../videos/VideoProgrameiHTML.mp4";
import videoDE from "../../videos/VideoDisparadorEmail.mp4";
import imgAnimase from "../../images/logo_animase.png";
// import { Container } from './styles';

function projetos() {
  return (
    <>
      <div id="projetos">
        <div className="container-projetos">
          <h2 id="projetos-title">Projetos</h2>

            <div id="div-item">
            <CardP
                imagem={imgAnimase}
                titulo={"Anima-Se"}
                descricao={
                   "Simplificação da adoção de animais, conectando doadores e adotantes"
                }
                linguagem={"JavaScript ( React ) - Java ( Spring Boot) "}
                GitHub={"https://github.com/Anima-Se/ProjetoDemoday.git"}
                Youtube={"https://www.youtube.com/watch?v=MB-lhDUeYB0&t=587s"}
                
              />
              <CardP
                video={videoCB}
                titulo={"CRUD"}
                descricao={
                  "Crud feito usando a OOP e Clean Code"
                }
                linguagem={"React, Java ( Spring Boot ), Mysql "}
                GitHub={"https://github.com/KaiqueSDL/crud_casasbahia_react_springboot"}
                LinkedIn={"https://pt.linkedin.com/posts/kaiquesdl_fala-pessoal-tudo-bem-estou-focado-no-activity-6997187680912478208-dg7F"}
              />
              <CardP
                video={videoDE}
                titulo={"Disparador Email"}
                descricao={
                  "Projeto de dispador de Email"
                }
                linguagem={"ReactJs, API ( EmailJS ) "}
                GitHub={"https://github.com/KaiqueSDL/DisparadorEmail_REACT"}
                LinkedIn={"https://www.linkedin.com/posts/kaiquesdl_email-reactjs-activity-6988492017672597504-cXXb?utm_source=share&utm_medium=member_desktop"}
              />
              
            </div>
            <div id="div-item">
            <CardP
                video={videoBC}
                titulo={"Busca Cep"}
                descricao={
                  "Buscador de CEP, API ViaCep"
                }
                linguagem={"React, API ViaCep"}
                GitHub={"https://github.com/KaiqueSDL/buscadorCep_react"}
                LinkedIn={"https://www.linkedin.com/posts/kaiquesdl_ol%C3%A1-rede-compartilho-com-voc%C3%AAs-o-meu-quarto-activity-6982145448874512384-iaXR?utm_source=share&utm_medium=member_desktop"}
              />
              <CardP
                video={videoPG}
                titulo={"Programei"}
                descricao={
                  "Website"
                }
                linguagem={"HTML, CSS"}
              
                LinkedIn={"https://www.linkedin.com/posts/kaiquesdl_ol%C3%A1-rede-compartilho-com-voc%C3%AAs-o-meu-quarto-activity-6982145448874512384-iaXR?utm_source=share&utm_medium=member_desktop"}
                
              />
              <CardP
                video={videoGQ}
                titulo={"Gerador QRCode"}
                descricao={
                  "Gerador de QRCode utilizando a API"
                }
                linguagem={"React , API QRCode"}
                GitHub={"https://github.com/glsanto-s/stand_fotos.git"}
                LinkedIn={"https://www.linkedin.com/posts/kaiquesdl_reactjs-equipe02-js-activity-6986792012771418112--VpN?utm_source=share&utm_medium=member_desktop"}
              />
            </div>
            
        </div>
      </div>
    </>
  );
}

export default projetos;
