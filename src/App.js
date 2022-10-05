// import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Home from './Home';
import Checkout from './Checkout';
import HomeCategory from './HomeCategory';
import Login from './Login';
import Orders  from './Orders';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { useEffect } from 'react';
import {auth} from './firebase';
import { useStateValue } from './StateProvider';
import Payment  from './Payment';
// import {loadStripe} from "@stripe/stripe-js";
// import {Elements} from "@stripe/react-stripe-js";

// const promise = loadStripe('pk_test_51Lob6PKcnV2Ta5yr0TN75o6iNo7a3qIatAkkQaVTVmq8b1mG3PmUj6ETwFIuvMruKX6zvncln6x5lcCp8W5actQl00ff0mOVgW');


function App() {

  const[{basket},dispatch] = useStateValue();

  useEffect(()=>{

    auth.onAuthStateChanged(authUser =>{
      console.log("The user is", authUser);

      if(authUser){

        dispatch({
          type: 'SET_USER',
          user: authUser
        })

      }
      else{
        dispatch({
          type: 'SET_USER',
          user: null
        })

      }
    })


  },[]);

  return (
    <>
      <BrowserRouter>
                  
        <div className="App">
        <Routes>
            <Route path="/"
            element={<><Header/> <Home/></>} />
            <Route path="/women_clothes"
            element={<><Header/> <HomeCategory category="women's clothing" /></>} />
            <Route path="/men_clothes"
            element={<><Header/> <HomeCategory category="men's clothing" /></>} />
            <Route path="/electronics"
            element={<><Header/> <HomeCategory category="electronics" /></>} />
            <Route path="/jewelery"
            element={<><Header/> <HomeCategory category="jewelery" /></>} />
            
            
            <Route
              path="/checkout"
              element={<><Header/><Checkout/></>}
            />
            <Route
              path="/payment"
              element={<><Header/><Payment/></>}
              />
            <Route
              path="/login"
              element={<Login/>}
            />
            <Route
              path="/orders"
              element={<><Header/><Orders/></>}
            />
          
        </Routes>
        
      </div>
      </BrowserRouter>
    </>
  );
}

export default App;
