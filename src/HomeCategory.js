import React, { useState, useEffect } from 'react'
import banner from './img/banner_amazon.jpg';
import './css/Home.css';
import Product from './Product';
import info from './API.json';
// import axios from "axios";

export default function Home(props) {

  const [categories,setCategories] = useState(info); 

  
  useEffect(() => {
    
    async function fetchdata() {

           
      const request = await fetch(`https://fakestoreapi.com/products/category/${props.category}`);
      const data = await request.json();
      console.log(data);
      console.log(data.rate);
      
      
      
      setCategories(data);
      return data;
    
      
  }
  fetchdata();
   
}, [props.category]);

function stringCorrect(str){
  // console.log(str.length);
  if(str === undefined){
    var pad = "Nothing"
  }
  else if((str.length) < 98){
    console.log(str.length);
    let p = 90 - (str.length);
    pad = str.padEnd(p," ")
  
  }
  else{
      pad = str
      
    }
    return pad
}


    
  return (
    <div className='home'>
        <div className="home_container">
            <img className='home_image'
            src={banner} alt="Nothing" />
        </div>

        <div className="home_row">
            {categories.map((element,index)=>{
                if(index <3){
                    let rating = Math.ceil(Math.random()*5)

                    
                      
                    
                  
                return <Product description = {stringCorrect(element.title)} price={element.price} stars={rating} link={element.image} key={element.key} id={element.id}/>}

                return null;
                
                
                })}
            
        </div>

        <div className="home_row">
            {categories.map((element,index)=>{
                    if(index >2 && index<7){
                        let rating = Math.ceil(Math.random()*5)
                  
                        return <Product description = {stringCorrect(element.title)} price={element.price} stars={rating} link={element.image} key={element.key} id={element.id}/>}
                    return null;
                    })}
            

        </div>

        <div className="home_row">
        {categories.map((element,index)=>{
                    if(index>6){
                        let rating = Math.ceil(Math.random()*5)
                  
                        return <Product description = {stringCorrect(element.title)} price={element.price} stars={rating} link={element.image} key={element.key} id={element.id}/>}
                    return null;
                    })}
            
        </div>
        
      
    </div>
  )
}
