import React from 'react';
import './css/CheckoutProduct.css';
import { useStateValue } from './StateProvider';
// import FlipMove from 'react-flip-move';

export default function CheckoutProduct(props) {

    const [{basket}, dispatch] = useStateValue();

    function removeFromBasket(){

        dispatch({
            type: 'REMOVE_FROM_BASKET',
            id: props.id,                   
         
          
          })


    }

  return (
    
            <div className='checkoutproduct'>

                <img className='checkoutProduct_image' src={props.image} alt="Nothing"/>

                <div className="checkoutProduct_info">
                    <p className="checkoutProduct_title">{props.description}</p>
                    <p className='checkoutProduct_info1'>
                        <small><strong>£</strong></small>
                        <strong>{props.price}</strong>
                    </p>
                    <div className="checkoutProduct_rating">
                        {Array(props.stars)
                        .fill()
                        .map((_,i)=>(
                            <p>⭐</p>
                        ))}

                    </div>
                    {!(props.hideButton) && (

                <button className='checkoutProduct_button' onClick={removeFromBasket}>Remove from basket</button>
                    )}
                </div>
            </div>
        
  )
}
