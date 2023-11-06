import React, { useEffect, useState,} from 'react'
import { useSelector } from 'react-redux';
import ProductItem from './ProductItem.js'
import "./Body.css";
function Body() {
const [product,setProduct]= useState([])
const cart = useSelector((state)=> state.cart.cart);
console.log(cart);

useEffect (()=>{
const fatchProduct  = async()=>{
     await fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(data=>setProduct(data))
};
fatchProduct();
},[]);
  return <div className='Body'>
    <div className='Body-Item'>
    {product.map((item,index)=>(

      <ProductItem item={item} key={item.id}/>
    ))}
      

    </div> 
    </div>;
}

    
     
          


          
           
      
        
      
  


export default Body
