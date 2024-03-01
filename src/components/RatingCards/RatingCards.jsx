import React from 'react'
import { CiStar } from "react-icons/ci";

import './RatingCards.css'

import { FaStar } from "react-icons/fa";


const RatingCards = (props) => {

    const { imageUrl, name } = props;

  return (

    <>
        <div className="rating-card">


            <img src={imageUrl} alt="#" className='image-rating' />

            <div className="info-rating">
          

                <div className='name-stars'>
                    <h3 id='name-card'>{name}</h3>
                    <div>
                        <FaStar className='star-rating' />
                        <FaStar className='star-rating' />
                        <FaStar className='star-rating' />
                        <FaStar className='star-rating' />
                        <FaStar className='star-rating' />
                    </div>

                </div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum iure consequatur, eaque dicta dolorum molestiae ipsam ullam quo similique, excepturi dolorem harum sint et aperiam perferendis! Adipisci eaque tempora nulla.</p>

            </div>

        </div>
    </>
  )
}

export default RatingCards