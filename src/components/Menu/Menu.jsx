import React from 'react'
import './Menu.css'
import Card from '../Card/Card'

import dish1 from '../../assets/dish.png'
import dish2 from '../../assets/dish2.png'
import dish3 from '../../assets/dish3.png'
import dish4 from '../../assets/dish4.png'

const Menu = () => {
  return (
    
    <section className='cardapio'>
        <h3 id='title-cardapio'>Cardapio</h3>
        <h2 id='subtitle-cardapio'>Confira nossos pratos</h2>

        <div className="dishes">
            <Card imageUrl={dish1} title="Alguma Comida Japonesa" description="Café da manhã com pão, queijo, presunto, suco e frutas." />
            <Card imageUrl={dish2} title="Pão com Presunto e Queijo" description="Café da manhã com pão, queijo, presunto, suco e frutas." />
            <Card imageUrl={dish3} title="Acho que kiwi e morango" description="Café da manhã com pão, queijo, presunto, suco e frutas." />
            <Card imageUrl={dish4} title="Talvez yakisoba de camarão" description="Café da manhã com pão, queijo, presunto, suco e frutas." />
            <Card imageUrl={dish1} title="Alguma Comida Japonesa" description="Café da manhã com pão, queijo, presunto, suco e frutas." />
            <Card imageUrl={dish2} title="Pão com Presunto e Queijo" description="Café da manhã com pão, queijo, presunto, suco e frutas." />
            <Card imageUrl={dish3} title="Acho que kiwi e morango" description="Café da manhã com pão, queijo, presunto, suco e frutas." />
            <Card imageUrl={dish4} title="Talvez yakisoba de camarão" description="Café da manhã com pão, queijo, presunto, suco e frutas." />
           
        </div>
    </section>
  )
}

export default Menu