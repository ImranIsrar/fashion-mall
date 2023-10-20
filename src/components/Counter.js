import React, { useState } from "react";
import "./Counter.css";
import IconButton from "@mui/material/IconButton";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { useStateValue } from "../Global/CartContext";

const Counter = ({ Width, addToCart, cartId, cart }) => {
  
  const [{}, dispatch] = useStateValue();
  const [counter, setCounter] = useState(addToCart);
  // console.log(cartId, cart);

  // Increment Product
  const handleIncrement = () => {
    setCounter(counter > 0 ? counter + 1 : 1);

    // Increment Product Quantity and Price
    dispatch({
      type: 'INC',
      id: cartId,
      product: cart
    });
  };

  // Decrement Product
  const handleDecrement = () => {
    setCounter(counter > 1 ? counter - 1 : 1);

    // Decrement Product Quantity and Price
    dispatch({
      type: 'DEC',
      id: cartId,
      product: cart
    });
  };

  return (
    <div
      className="counter"
      style={Width ? { width: Width } : { width: "100%" }}
    >
      <IconButton
        aria-label="Decrement"
        size="small"
        onClick={handleDecrement}
        disabled={
          counter > 1 ? false : true
        }
      >
        <RemoveIcon />
      </IconButton>
      <div>{counter}</div>
      <IconButton
        aria-label="Increment"
        size="small"
        onClick={handleIncrement}
        disabled={
          counter > 0 ? false : true
        }
      >
        <AddIcon />
      </IconButton>
    </div>
  );
};

export default Counter;
