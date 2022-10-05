import React from 'react';
import './css/Product.css';
// import { useState } from 'react';
import { useStateValue } from './StateProvider';


export default function Product(props) {

  const [{basket}, dispatch] = useStateValue();

  // console.log("this is the basket",basket);

  function addToBasket(){

    dispatch({
      type: 'ADD_TO_BASKET',
      item: {
        
        id: props.id,
        description: props.description,
        price: props.price,
        stars: props.stars,
        link: props.link,

      }


    })

  }

  
  return (

    <div className="product">
      <div className="product_info">
        <p id='desp'>{props.description}</p>
        <p className="product_price">
          <small><strong>£</strong></small>
          <strong>{props.price}</strong>
        </p>
        <div className="product_rating">
          {Array(props.stars)
          .fill()
          .map((_,i)=>(
            <p>⭐</p>
          ))}
        </div>
        <img src={props.link} alt="book not showing" />
      </div>
      <div className="button_info">

        <button onClick={addToBasket}>Add to basket</button>
      </div>
    </div>

  );
}
