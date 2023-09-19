import React from "react";
// import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "./StateProvider";
// import { getBasketTotal } from "./Reducer";

 
function Subtotal() {
    const [{basket}, dispatch] = useStateValue();
    return (
        <div className="subtotal">
            <CurrencyFormat 
                renderText = {(value) => (
                    <>
                        <p>
                            Subtotal ({basket.length} items): ${value}
                        </p>
                        <small className="subtotal__gift">
                            <input type="checkbox" /> This order contains a gift
                        </small>
                        <br />
                        <br />
                    </>
                )}

                decimalScale={2}
                value={getBasketTotal(basket)}
                displayType={"text"}
                thousandSeparator={true}
                
            />

            <button className="checkout_button">Proceed to Checkout</button>
        </div>
    )
}

function getBasketTotal(basket)
{
    //let amount = 0;
    const a = basket.map((item) => parseFloat(item.price))
    console.log(a);
    const res = a?.reduce((amount, cur)=> amount+cur,0)
    console.log(res)
    return res;
}

export default Subtotal
