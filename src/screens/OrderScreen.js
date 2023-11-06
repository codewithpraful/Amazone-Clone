import React from 'react'
import "./OrderScreen.css"
import {useLocation } from 'react-router-dom'
function OrderScreen() {
  const Location = useLocation();
  console.log(Location.state)
  return (
    <div className='orders'>
    <div>
      <h3>Your orders</h3>
      {Location.state.orders.map((order)=>(
        <div>
        <div className='ordercontainer'>
        <img style={{width:140,height:140}} src={order.image}/>
        <div className='orderdescription'>
       <p style={{marginTop:8}}>{order.title.length >40 ? order.title.substr(0,10): order.title}</p>  
       <p style={{marginTop:8}}>{order.description.length >80 ? order.description.substr(0,80): order.description}</p>
       <p style={{marginTop:8}}>{order.price*order.quantity}</p>
       </div>
       <div className='orderbuttons'>
        <button className='orderbutton'>Return Product</button>
        <button className='orderbutton'>Download Invoce</button>
        <button className='orderbutton'>Rate Product</button>

       </div>
       
       
        </div>



        </div>
      ))}
      </div>      
    </div>
  )
}

export default OrderScreen

