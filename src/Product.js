import React from 'react'
// import HomePage from './HomePage'
import './Product.css';
import { useStateValue } from './StateProvider'; 

function Product({id, title, description, image, rating, Price}) {

  const [{basket}, dispatch] = useStateValue();
  const addtoCart = () => {dispatch({
    type : 'Add_to_cart',
    item:{
      id:id,
      title:title,
      description:description,
      image:image,
      rating:rating,
      price:Price,
    }
  })}
  return (
    <>
        <div className="product_details">
            <div className="product_description">
                <h3>{title}</h3>
                <p>{description} </p>
                <p> <strong>$</strong> {Price} </p>
                <div className="product_rating">
                {Array(rating)
                .fill().map(() => (
                    <p>*</p>
                ))}
                </div>
                 
                <img src={image} alt="" className='image_of_product' height={200} width={200}/>
            </div>
            <button onClick={addtoCart}>Add to cart</button>
        </div>
    </>
  )
}

export default Product