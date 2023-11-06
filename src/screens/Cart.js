

import "./Cart.css"
import Header from '../components/Header'
import { useDispatch, useSelector } from 'react-redux'
import { cleanCart, decrementQuantity, incrementQuantity, removeCart } from "../components/redux/cartSlice.js";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ConfirmationNumberIcon from '@mui/icons-material/ConfirmationNumber';
import { grey } from "@mui/material/colors";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router-dom";
function Cart() {
  const navigate = useNavigate()
  const cart = useSelector((state) => state.cart.cart);
  const total = cart.map((item) => item.price * item.quantity).reduce((curr, prev) => curr + prev, 0);
  const orders = [...cart]
  console.log(total);
  const Charges = 30;
  const totalprice = total + Charges;
  const dispatch = useDispatch()
  const incrementQuantitys = (item) => {
    dispatch(incrementQuantity(item))
  }
  const decrementQuantitys = (item) => {
    dispatch(decrementQuantity(item))
  }
  const removeItemFromCart = (item) => {
    dispatch(removeCart(item))
  }

  const PlaceOrder = (item) => {

    toast.success('🦄 Order Placed!', {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });

    setTimeout(() => {
      navigate("/orderscreen", {

        state: {
          orders:orders,
          totalprice:totalprice
        }

      })

    }, 3500)



    setTimeout(() => {
      dispatch(cleanCart());
    }, 4000)
  }
  return (
    <>

      <Header />
      <div className="cart">
        <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />


        {/* CartLeft */}
        <div className="CartLeft">
          {cart.map((item, index) => (
            <div className="cartContainer">
              {/* img */}
              <div>
                <img src={item.image} style={{ height: 100, width: 100 }} />

              </div>
              {/*title  */}
              <div className="cartDescription">
                <p>{item.title.length > 30 ? item.title.substr(0, 30) : item.title}</p>
                <p style={{ marginTop: 8 }}>{item.description.length > 80 ? item.description.substr(0, 80) : item.description}</p>
                <p style={{ marginTop: 8 }}>{item.price}</p>
              </div>
              {/* Button*/}
              <div className="cartButtonContainer">
                <div className="cartButtons">
                  <div style={{ cursor: "pointer" }} onClick={() => decrementQuantitys(item)}>
                    -
                  </div>

                  <div>
                    {item.quantity}
                  </div>

                  <div style={{ cursor: "pointer" }} onClick={() => incrementQuantitys(item)}>
                    +
                  </div>
                </div>
                <button className="cartButton" onClick={() => removeItemFromCart(item)}>RemoveItem</button>
                <h5 style={{ marginTop: 6 }}>{item.price * item.quantity}</h5>
              </div>

            </div>


          ))}
        </div>



        {total === 0 ? (
          <div>
            <h2>Your Card Is Empty</h2>
          </div>

        ) : (

          < div className="CartRight">

            <div className="cartRightLocationContainer">
              <div className="cartRightLocation">
                <LocationOnIcon style={{ color: "grey" }} />
                <div className="cartRightDescription">
                  <p className="cartRightText">Select Your Location</p>
                  <p className="cartRightText">Please Select a Location So we Can Find</p>

                  {/* Location Info and Button */}
                  <button className="cartRightButton">Select Location</button>
                </div>
              </div>
              <div className="cartRightLocation">
                <LocationOnIcon style={{ color: "grey" }} />
                <div className="cartRightDescription">
                  <p className="cartRightText">Choose Your Saved Location</p>
                  <button className="cartRightButton">Choose Location</button>
                </div>
              </div>
            </div>

            {/* Coupon Infor and Description */}
            <div className="cartRightCoupon">
              <ConfirmationNumberIcon style={{ color: "gray" }} />
              <div style={{ marginLeft: 10 }}>
                <h4 className="cartRightCouponText">Select Our / Apply Coupons</h4>
                <p className="cartRightCouonSmall">Apply Coupons to Available Offers on the Products</p>
              </div>
            </div>

            {/* Container for the checkout and total */}

            <div className="cartRightCheckout">
              <div className="cartRightCheckoutPart">
                <h5>Total Price</h5>
                <h5>{total}</h5>
              </div>

              <div className="cartRightCheckoutPart">
                <h5>Discount</h5>
                <h5>-</h5>
              </div>
              <div className="cartRightCheckoutPart">
                <h5>Charges</h5>
                <h5>{Charges}</h5>
              </div>
              <div className="cartRightCheckoutPart">
                <h3>Grand Total</h3>
                <h3>{total + Charges}</h3>
              </div>
            </div>
            <button className="cartRightCheckoutButton" onClick={PlaceOrder}>Place Order</button>
          </div>
        )}

        {/* Right Part */}

        {/* CartRight */}








      </div>


    </>

  );
}

export default Cart
