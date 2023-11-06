
import React from 'react'
import "./ProductItem.css"
import { useDispatch, useSelector } from 'react-redux'
import { addtoCart, removeCart } from './redux/cartSlice';

function ProductItem({item}) {
  const cart = useSelector((state) => state.cart.cart);
  const dispatch = useDispatch();
  const addItemTocart = (item) =>{
      dispatch(addtoCart(item));
  }
const removeItemFromcart = (item) =>{
   dispatch(removeCart(item));
}
  return (
    <div className='ProductItem'>
      
      {/* img of the product */}
    <img style={{width:200, height:200 , margin:"auto"}} src={item.image}/>
    {/* title of the product */}
    <p>{item.title.length >30? item.title.substr(0,30):item.title}</p> 
    {/* description of the product */}
    <p>{item.description.length >30? item.description.substr(0,60):item.description}</p>
    {/* price of the product */}
    <p>{item.price}</p>  
    {/* add to cart button */}
  
  {cart.some((x) => x.id === item.id) ?(
    <button onClick={()=>removeItemFromcart(item)} className='ProductItemButton'>Remove From cart</button>
  ):
  ( 
    
    <button onClick={()=>addItemTocart(item)} className='ProductItemButton'>Add to cart</button> 
)}
    
   
    
   
    {/* Buy now  */}
    <button className='ProductItemButton'>Buy Now</button>
    </div>
  )
}

export default ProductItem







 