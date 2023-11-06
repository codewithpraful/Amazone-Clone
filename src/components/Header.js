import React from 'react';
import './Header.css';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import MenuIcon from '@mui/icons-material/Menu';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
function Header() {
     const cart = useSelector((state) => state.cart.cart)
     const navigate = useNavigate();
     const navigatorCart = ()=>{
          navigate('/cart')
     }
  return (
     <>
    <div className='Header'>
     {/* image logo */}
     <div>
<img
style={{width:120, height:40,marginTop:10}}
className='image'
src="https://links.papareact.com/f90"
/>
     </div>

     {/* search bar */}
     <div className='HeaderInputContainer'>
    <input className='InputContainer' type='text' placeholder='search Items or product'/>
    <SearchOutlinedIcon style={{color:"white",marginLeft:"4",marginTop:"2"}}/>
     </div>

     

<div>
<h4 className='HeaderText'>Hello John</h4>
<h4 className='HeaderText'>Accounts & Lists</h4>
</div>

<div>
<h4 className='HeaderText'>Returns</h4>
<h4 className='HeaderText'>&Order</h4>
</div>

<div style={{position:"relative"}} onClick={navigatorCart}>
<ShoppingCartIcon  style={{color:"white",cursor:"pointer"}}/>
<span style={{position:"absolute",
left:14,
right:14,
backgroundColor:"white",
borderRadius:7,
width:14,
height:14,
textAlign:"center",
fontSize:12,
fontWeight:400,}}>
{cart.length}</span>
</div>
               
<div>
<h4 className='HeaderText'>India</h4>    
<h4 className='HeaderText'>7489004830</h4>    
</div>
     </div>
      {/* Boder Header Part */}

      <div className='Header-Bottom'>
         <MenuIcon style={{color:'white', paddingTop:"6"}}/>
         <p className='Header-BottomText'>Buy</p>
         <p className='Header-BottomText'>Healthy Products</p>
         <p className='Header-BottomText'>Sell</p>
         <p className='Header-BottomText'>Baby</p>
         <p className='Header-BottomText'>Health & Lifestyle</p>
         <p className='Header-BottomText'>Prime Video</p>
         <p className='Header-BottomText'>Super Sale</p>
         <p className='Header-BottomText'>Offers</p>
         <p className='Header-BottomText'>Exciting Videos</p>
         <p className='Header-BottomText'>Subscribe</p>
      </div>
      </>
  )
}

export default Header
