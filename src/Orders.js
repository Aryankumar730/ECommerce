import React, {useState } from 'react'
import './css/Orders.css';
// import { db } from './firebase';
import './css/Orders.css';
import { useStateValue } from './StateProvider';


import CheckoutProduct from './CheckoutProduct';
import CurrencyFormat from 'react-currency-format';
import { getBasketTotal } from './reducer';

export default function Orders() {
    const [{ basket, user }, dispatch] = useStateValue();

    const [orders, setOrders] = useState();

    // useEffect(()=>{
    //     if(user){

    //         db.collection('users')
    //         .doc(user?.uid)
    //         .collection('orders')
    //         .orderBy('created', 'desc')
    //         .onSnapshot(snapshot => (
    
    //             setOrders(snapshot.docs.map(doc =>({
    //                 id : doc.id,
    //                 data: doc.data()
    
    //             })))
    
    //         ))
    //     }
    //     else{
    //         setOrders([])
    //     }
    // },[user])

  return (
    <div>
        <div className="orders">
            <h1>Your Orders</h1>
            <CurrencyFormat
                renderText={(value) => (
                    <>
                        <h3>Order Total: {value}</h3>
                    </>
                )}
                decimalScale={2}
                value={getBasketTotal(basket)}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"£"}
            />
            

            <div className="orders_order">
            <hr/>
                {basket.map((element) => {
                    return <CheckoutProduct description={element.description} price={element.price} stars={element.stars} image={element.link} key={element.key} id={element.id} hideButton/>
                    }


                    )}
                
            </div>

        </div>
      
    </div>
  )
}
