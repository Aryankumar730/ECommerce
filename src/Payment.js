import React, {useState } from 'react';
import './css/Payment.css';
import { useStateValue } from './StateProvider';
import CheckoutProduct from './CheckoutProduct';
import { Link, useNavigate } from 'react-router-dom';
// import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import CurrencyFormat from 'react-currency-format';
import { getBasketTotal } from './reducer';
// import axios from './axios';
// import { db } from './firebase';


export default function Payment() {


    const [{ basket, user }, dispatch] = useStateValue();
    const navigate = useNavigate();

    

    // const stripe = useStripe();
    // const elements = useElements();

    // const [error, setError] = useState(null);
    
    // const [succeded, setSucceded] = useState(false);
    // const [processing, setProcessing] = useState("");
    // const [clientSecret, setClientSecret] = useState(true);

    // useEffect(()=>{

    // const getClientSecret = async ()=>{
    //     const response = await axios({
    //         method: 'post',
    //         url : `/payments/create?total=${getBasketTotal(basket) * 100}`
    //     });
    //     setClientSecret(response.data.clientSecret);
    // }
    // getClientSecret();

    // }, [basket])

    // console.log("the secret is",clientSecret);


    // async function handleSubmit(event) {

    //     event.preventDefault();
    //     setProcessing(true);

    //     const payload = await stripe.confirmCardPayment(clientSecret,{
    //         payment_method: {
    //             card: elements.getElement(CardElement)

    //         }
    //     }).then(({paymentIntent}) =>{

    //         //pushing into the database

    //         db.collection('users')
    //         .doc(user?.uid)
    //         .collection('orders')
    //         .doc(paymentIntent.id)
    //         .set({
    //             basket: basket,
    //             amount: paymentIntent.amount,
    //             created: paymentIntent.created
    //         })



    //         setSucceded(true);
    //         setError(null);
    //         setProcessing(false)

    //         dispatch({
    //             type: 'EMPTY_BASKET'
    //         })

    //         navigate('/orders');


    //     })

    // }

    // function handleChange(event) {

    //     setDisabled(event.empty);
    //     setError(event.error ? event.error.message : "");


    // }
    const [disabled, setDisabled] = useState(false);
    const [number,setNumber] = useState();
    const [date,setDate] = useState();
    const [cvv,setCVV] = useState();

    function handleClick(e){

        e.preventDefault();
        
        const regex = /^4[0-9]{12}(?:[0-9]{3})?$/g;
        const regex1 = /^[0-9]{3,4}$/g;
        const regex2 = /^(0[1-9]|1[0-2])\/?([0-9]{2})$/g;

        if(regex.test(number) && regex1.test(cvv) && regex2.test(date) ){

            setDisabled(true)
            console.log("valid");
                         
            navigate('/orders');
            
        }
        else{
            setDisabled(false)
            console.log("invalid");
            alert("please enter details in correct format")
        }


        console.log(number,date,cvv);
        // 4155279860457 && regex2.test(date) && regex1.test(cvv)

    }


    return (
        <div className='payment'>
            <div className="payment_container">
                <h2><strong>
                    Checkout (
                    <Link to='/checkout'>{basket?.length} items</Link>
                    )

                </strong>
                </h2>
                <div className="payment_distribution">


                    <div className="payment_details_left">

                        <div className="payment_section">
                            <div className="payment_title">
                                <h3>Delivery Address</h3>

                            </div>
                            <div className="payment_address">
                                <p>Hello, {!user ? "Guest" : (user.email).split('@')[0]}</p>
                                <p>123 Erskine Street Liverpool, L6 1AH</p>

                            </div>

                        </div>


                        <div className="payment_section">
                            <div className="payment_title">
                                <h3>Review items and delivery</h3>
                            </div>
                            <div className="payment_items">
                                {basket.map((element) => {
                                    return <CheckoutProduct description={element.description} price={element.price} stars={element.stars} image={element.link} key={element.key} id={element.id} />
                                }


                                )}
                            </div>

                        </div>
                    </div>
                    <div className="Payment_middle">
                        
                    </div>

                    <div className="payment_details_right">

                        <div className="payment_section1">
                            <div className="payment_title1">
                                <h3>Payment Method</h3>
                            </div>
                            <div className="payment_details1">

                                <form>
                                    <div className="card_details">
                                    <h3>Card Details</h3>
                                    <hr />
                                    <input value={number} className='card_input input1' type="text" placeholder='Ex - 4155279860457' onChange={e => setNumber(e.target.value)} />
                                   
                                    <div id="cvv">
                                        <input value={date} className='card_input input2'type="text" placeholder='MM/YY' onChange={e => setDate(e.target.value)}/>
                                        
                                        <input value={cvv} className='card_input input2_1'type="password" placeholder='CVV' onChange={e => setCVV(e.target.value)}/>
                                    </div>

                                    </div>


                                    <div className='payment_priceContainer'>
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
                                        <button disabled={disabled} onClick={handleClick}>
                                            <span> Buy Now </span>

                                        </button>
                                    </div>


                                </form>

                            </div>


                        </div>
                    </div>
                </div>


            </div>

        </div>
    )
}
