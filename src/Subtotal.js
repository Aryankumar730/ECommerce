// import React from 'react';
import './css/Subtotal.css';
import CurrencyFormat from 'react-currency-format';
import { useStateValue } from './StateProvider';
import { getBasketTotal } from './reducer';
import { useNavigate } from 'react-router-dom';



export default function Subtotal() {

  const navigate = useNavigate();
  const [{basket,user}] = useStateValue();

  function handleProceed(e){
    e.preventDefault();

    if(user){
      navigate('/payment')
    }
    else{
       alert("Please login in to checkout")
       
    }

  }
    
  
  return (
    <div className='subtotal'>
        <CurrencyFormat
        renderText={(value)=>(
          <>
            <p className='items'>
              Subtotal ({basket?.length} items):
              <strong> {value}</strong> 
            </p>
            <small className="subtotal_gift">
              <input type="checkbox" /> This order conatins a gift
            </small>
          </>
        )}
        decimalScale = {2}
        value={getBasketTotal(basket)}
        displayType = {"text"}
        thousandSeparator = {true}
        prefix={"£"}
        />

        <button onClick={handleProceed}>Proceed to Checkout</button>
    </div>
  )
}
