import React from 'react';
import './Card.css';
import { FaStar } from "react-icons/fa";
import { IoIosHeart } from "react-icons/io";
import { GiBeachBag } from "react-icons/gi";



const Card = (props) => {
  const { imageUrl, title, description } = props;

  return (
    <div className="card">
      <div className="heart">
      <IoIosHeart className='heart-icon' />

      </div>
      <img src={imageUrl} alt="" />
      <h3>{title}</h3>
      <p>{description}</p>
      <div className="rated">
        <div className="stars">
          <FaStar className='icons-card' />
          <FaStar className='icons-card' />
          <FaStar className='icons-card' />
          <FaStar className='icons-card' />
          <FaStar className='icons-card' />
        </div>
        <span className='span-card-menu'>(500+)</span>
      </div>
      <div className="finish-card">
        <span className='span-card-menu'><strong>R$ 20,00</strong></span>
        <GiBeachBag className='icons-card' />

      </div>
    </div>
  );
}

export default Card;
