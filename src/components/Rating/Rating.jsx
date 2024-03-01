import React from 'react'

import './Rating.css'

import chef from '../../assets/chef.png'
import avatar from '../../assets/avatar.png'
import RatingCards from '../RatingCards/RatingCards'


export const Rating = () => {
  return (


    <section className='rating'>
        <img src={chef} alt="" className='image-chef' />


        <div className="info">
        <h4 id='title-rating'>Depoimentos</h4>
        <h3 id='subtitle-rating'>O que os clientes falam sobre nós </h3>
          <RatingCards imageUrl={avatar} name='John Doe' />
          <RatingCards imageUrl={avatar} name='John Doe' />
          <RatingCards imageUrl={avatar} name='John Doe' />
        </div>
    </section>
  )
}
