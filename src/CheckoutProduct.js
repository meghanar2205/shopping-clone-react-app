import React from 'react';
import './CheckoutProduct.css';
// import { removefromcart } from './Checkout';
import { useStateValue } from './StateProvider';

function CheckoutProduct({id, title, description, image, rating, price}) {

  const [{basket}, dispatch] = useStateValue();
  const removefromcart = () =>{dispatch({
    type : 'Remove_from_cart',
    id:id,
  })}
  return (
    <>
        <div className="checkout_product">
          <div className="checkout_product_left">
            <img src= {image} alt = "" className='checkoutImage'/>
          </div>
          <div className="checkout_Product_right">
            <p>{title}</p>
            {/* <p>{description}</p> */}
            <p>${price}</p>
            <button onClick= {removefromcart} className='checkout_remove_button'>Remove from cart</button>
          </div>
        </div>    
    </>
  )
}

export default CheckoutProduct