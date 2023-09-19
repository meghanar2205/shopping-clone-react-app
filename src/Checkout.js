import React from 'react';
import './Checkout.css';
import Header from './Header';
import CheckoutProduct from './CheckoutProduct';
import { useStateValue } from './StateProvider';
import Subtotal from './Subtotal';
// import { initialState } from './Reducer';


let Logo = require('./Checkout_page_image.png');

function Checkout() {

  const [{basket}, dispatch] = useStateValue();
  
  

  return (
    <>
        <div className="checkout_header">
          <Header />
        </div>
        <span className="checkout_page">
          <span className='checkout_left'>
            <img src= {Logo} alt="" className='checkout_page_banner_image' />
            <div className="checkout_products">
              <h2>Products in cart</h2>
              {
                basket.map((item) =>(<CheckoutProduct className = "checkout_product_individual"
                  id = {item.id} 
                  title = {item.title}
                  image = {item.image}
                  rating = {item.rating}
                  description={item.description}
                  price = {item.price}
                />)
                )
              }
            </div>
          </span>
          <span className='checkout_right'>
            <Subtotal />
            {/* <div className="payment_box">
              <p>Total items in the cart is 0</p>
              <p>Total Price : $0</p>
              <button className='payment_button'>Proceed to Payment</button>
            </div> */}
          </span>            
        </span>
    </>
  )
}

export default Checkout