import React, { createContext, useReducer, useContext } from "react";

// Wharehouse
export const cartContext = createContext();

// Provider
export const CartContextProvider = ({ initialState, CartReducer, children }) => {
  return (
    <cartContext.Provider value={useReducer(CartReducer, initialState)}>
      {children}
    </cartContext.Provider>
  )
}

// Counsumer
export const useStateValue = () => useContext(cartContext);
