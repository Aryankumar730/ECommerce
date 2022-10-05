import React, { useState, useEffect } from 'react'
import banner from './img/banner_amazon.jpg';
import './css/Home.css';
import Product from './Product';
import info from './API.json';
import axios from "axios";
// import Carousel from './Carousel';


export default function Home(props) {

  const [categories,setCategories] = useState(info); 

  
  useEffect(() => {
    
    async function fetchdata() {

           
      const request = await fetch(`https://fakestoreapi.com/products/category/${props.category}`);
      const data = await request.json();
      console.log(data);
      
      
      setCategories(data);
      return data;
    
      
  }
  fetchdata();
   
}, [props.id]);



  return (
    <div className='home'>
        <div className="home_container">
          
            <img className='home_image'
            src={banner} alt="Nothing" />
                   
        </div>

        <div className="home_row">
            {info.map((element,index)=>{
                if(index <3){
                  
                return <Product description = {element.description} price={element.price} stars={element.number} link={element.link} key={element.key} id={element.id}/>}

                return null;
                
                
                })}
            
        </div>

        <div className="home_row">
            {info.map((element,index)=>{
                    if(index >2 && index<7){
                    return <Product description = {element.description} price={element.price} stars={element.number} link={element.link} key={element.key} id={element.id}/>}
                    
                    return null;
                    })}
            

        </div>

        <div className="home_row">
        {info.map((element,index)=>{
                    if(index>6){
                    return <Product description = {element.description} price={element.price} stars={element.number} link={element.link} key={element.key} id={element.id}/>}
                    
                    return null;
                    })}
            
        </div>
        
      
    </div>
  )
}
