import React, {useState} from 'react';
import logo from './img/login_logo.png';
import './css/Login.css';
import { Link, useNavigate } from 'react-router-dom';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import {signInWithEmailAndPassword } from "firebase/auth";
import { useStateValue } from './StateProvider';
import {auth} from './firebase';

export default function Login() {

    const [{basket}, dispatch] = useStateValue();


    const navigate = useNavigate();
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');

    function Signin(e){
        e.preventDefault();
        console.log("sign-in is called");
        console.log(email,password);
        // e.preventDefault();
        // const auth = getAuth();

        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
        // Signed in 
            const user = userCredential.user;
            console.log(user);
            // alert("You have sign-in successfully");
            if(userCredential){
                navigate('/');

               


            }
        // ...
        })
        .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert("There is some error in sign-in",errorMessage,errorCode);
        } );
    }

    function register(e){
        // e.preventDefault();
        // const auth = getAuth();

        createUserWithEmailAndPassword(auth,email, password)
        .then((userCredential) => {
        //  Signed in 
        const user = userCredential.user;
        if(userCredential){
            navigate('/');
        }
        // console.log(user);
        // alert("You have registered successfully");
        // ...
        })
        .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert("There is some error in registrartion",errorMessage,errorCode);
        // ..
        });

    }

  return (
    <div className='Login'>
        <Link to='/'>
            <img className='login_logo'
            src={logo} alt="Nothing"/>
        </Link>

        <div className="login_container">
            <h2>Sign-in</h2>
            <form className='login_form' action="">
                <h5>E-mail</h5>
                <input type="text" value={email} onChange={e => setEmail(e.target.value)}/>
                <h5>Password</h5>
                <input type="password" value={password} onChange={e => setPassword(e.target.value)}/>

                <button type='submit' onClick={Signin} className='login_signInButton button1'>Sign-in</button>
            </form>

            <p>
            By signing-in you agree to Amazon's Conditions of Use & Sale. Please see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice. 
            </p>
        </div>
        <p>New to Amazon?</p>
        <button onClick={register} className='login_registerButton button1'>Create your Amazon Account</button>
      
    </div>
  )
}
