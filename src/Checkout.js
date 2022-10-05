import React from 'react'
import './css/Checkout.css';
import Imagecheckout from './img/checkout1.jpg';
import Subtotal from './Subtotal';
import CheckoutProduct from './CheckoutProduct';
import { useStateValue } from './StateProvider';


export default function Checkout() {

    
    const [{basket,user}, dispatch] = useStateValue();
    

  return (
    <div className='checkout'>
        <img className='checkout_image'
         src={Imagecheckout} alt="" />

        <div className="checkout_row">

            <div className="checkout_left">
                <div>
                    <h2 className="checkout_title">Your Shopping Basket</h2>
                    {basket.map((element)=>{
                    return <CheckoutProduct description = {element.description} price={element.price} stars={element.stars} image={element.link} key={element.key} id={element.id}/>}
                    
                    
                    )}
                  
                </div>
            </div>
            <div className="middleware">
                
            </div>
            <div className="checkout_right">
                <h2 className="checkout_title">Subtotal</h2>
                <h4>Hello, {!user ? "Guest" : (user.email).split('@')[0] }</h4>
                <Subtotal />
            </div>
        </div>
    
    </div>
  )
}
