import React from "react";
import "./Home.css";

import banner from "../../assets/hero.png";

import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

const Home = () => {
  return (
    <section className="home">  
    <div className="shape"></div>
      <div className="home-left">
        <div>
          <h1>
            O sabor que vai <br/> até <strong className="you">você</strong>
          </h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut vel eaque
            molestiae
          </p>
        </div>
        <div className="buttons">
          <button className="btn">Ver Cardápio</button>
          <button className="btn"> Fazer Pedido</button>
        </div>
        <div className="social-medias">
          <FaWhatsapp className="icon-social-media"/>
          <FaInstagram className="icon-social-media"/>
          <FaFacebook className="icon-social-media"/>
        </div>
      </div>
      <div className="home-right">
        <img className="img-home" src={banner} alt="" />
      </div>
    </section>
  );
};

export default Home;
