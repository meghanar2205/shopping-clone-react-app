import React, { createContext, useContext, useReducer  } from "react";
// import {reducer, initialState} from "./Reducer";

export const usercontext = createContext();

export const StateProvider = ({reducer, initialState, children}) =>(
    <usercontext.Provider value = {useReducer(reducer, initialState)} >
        {children}
    </usercontext.Provider>
)

export const useStateValue = ()=>useContext(usercontext)