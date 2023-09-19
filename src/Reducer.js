// import React from 'react';

export const initialState = {
    basket :[],
};

const reducer = (state, action)=>{
    switch (action.type) {
        case "Add_to_cart":
            return{
                ...state, basket: [...state.basket, action.item],
            }
            
        case "Remove_from_cart":
            const ind = state.basket.findIndex((basketItem) => (basketItem.id === action.id));
            let newBasket = [...state.basket];
            if(ind<0)
                console.warn('Item is not available in the cart');
            else
                newBasket.splice(ind, 1);

            return {...state, basket:newBasket}


        default:
            return state;
    }
}


export default reducer