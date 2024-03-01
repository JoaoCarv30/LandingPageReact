import React from 'react'
import './NavMobile.css'

const NavMobile = () => {
  return (
    <nav className='nav-mobile'>
      <ul className="list-mobile">
      <li className='li-mobile'>
        <a href="#home">Inicio</a>
      </li>
      <li className='li-mobile'>
        <a href="#menu">Cardápio</a>
      </li>
      <li className='li-mobile'>
        <a href="#testimonials">Avaliações</a>
      </li>
        </ul>
        <button id='Order-here-mobile'>
          Peça Aqui
        </button>
    </nav>
  )
}

export default NavMobile