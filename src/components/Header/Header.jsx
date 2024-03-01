import React, { useState } from "react";
import "./Header.css";

import { IoFastFoodOutline } from "react-icons/io5";
import { FaBars, FaTimes } from "react-icons/fa"; // Importe FaTimes para o ícone "X"
import NavMobile from "../NavMobile/NavMobile";

const Header = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  function handleShowMobileMenu() {
    setShowMobileMenu(!showMobileMenu);
  }

  return (
    <header>
      <nav >
        <span>
          <IoFastFoodOutline className="icon" />
          FOOD
        </span>

        <div className="container-header-right">
          <ul className="list">
            <li>
              <a href="#home">Inicio</a>
            </li>
            <li>
              <a href="#menu">Cardápio</a>
            </li>
            <li>
              <a href="#testimonials">Avaliações</a>
            </li>
          </ul>

          <button className="order">Peça Aqui</button>
          <button className="icon-bars" onClick={handleShowMobileMenu}>
            {showMobileMenu ? <FaTimes className="bars" /> : <FaBars className="bars" />}
          </button>
        </div>
      </nav>
      {showMobileMenu && <NavMobile />}
    </header>
  );
};

export default Header;
