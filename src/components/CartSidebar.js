import React from "react";
import "./CartSidebar.css";
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";
import CloseIcon from "@mui/icons-material/Close";
import IconButton from "@mui/material/IconButton";
import { useStateValue } from "../Global/CartContext";
import { NavLink } from "react-router-dom";
import Counter from "./Counter";
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import CurrencyFormat from 'react-currency-format';

const CartSidebar = ({ cartCloseHandle }) => {
  const [{ shoppingCart, qty, totalPrice }, dispatch] = useStateValue();

  // Delete Cart Product
  const handleDeleteCartProduct = (id, product) => {
    dispatch({
      type: "DELETE_PRODUCT",
      id: id,
      product: product
    });
  }

  return (
    <div className="cart-sidebar">
      <div className="cart-sidebar__wrapper">
        <div className="cart-sidebar__header">
          <IconButton className="close" onClick={cartCloseHandle}>
            <CloseIcon />
          </IconButton>

          <div className="cart-sidebar__cartIcon">
            <ShoppingCartCheckoutIcon />
            <span className="cart-items">{qty}</span>
          </div>
          <p>
            You're <strong>$75</strong> away from free shipping!
          </p>

          <hr />
        </div>

        <div className="cart-sidebar__body">
          {shoppingCart.length > 0 ? (
            shoppingCart.map((addedProduct, index) => (
              <div className="addedProduct" key={`${index}-${addedProduct.qty}`}>
                <div className="addedProduct__imgBox">
                  <NavLink to={`/product/${addedProduct.id}`}>
                    <img src={addedProduct.image} alt="" />
                  </NavLink>
                </div>

                <div className="addedProduct__content">
                  <h5>
                    <NavLink to={`/product/${addedProduct.id}`}>
                      {addedProduct.title.length < 60
                        ? addedProduct.title
                        : addedProduct.title.slice(0, 60) + "..."}
                    </NavLink>
                  </h5>
                  <p>
                    {addedProduct.description.length < 70
                      ? addedProduct.description
                      : addedProduct.description.slice(0, 70) + "..."}
                  </p>

                  <div className="cart-sidebar__pricelist">
                    <Counter 
                      Width="90px" 
                      addToCart={addedProduct.qty}
                      cartId={addedProduct.id}
                      cart={addedProduct}
                    />
                    <div>
                      <CurrencyFormat 
                        value={addedProduct.qty * addedProduct.price}
                        decimalScale={2}
                        displayType={"text"}
                        thousandSeparator={true}
                        prefix={"$ "} 
                      />
                    </div>
                  </div>
                </div>

                <div className="addedProduct__delete">
                  <IconButton aria-label="delete" size="small" onClick={() => handleDeleteCartProduct(addedProduct.id, addedProduct)}>
                    <DeleteIcon />
                  </IconButton>
                </div>
              </div>
            ))
          ) : (
            <p className="cart-sidebar__message">Your Cart is Empty</p>
          )}
        </div>

        <div className="cart-sidebar__footer">
          <div className="cart-sidebar__summary">
            <table>
              <tbody>
                <tr>
                  <th>Subtotal</th>
                  <td>
                    <CurrencyFormat 
                      value={totalPrice}
                      decimalScale={2}
                      displayType={"text"}
                      thousandSeparator={true}
                      prefix={"$ "} 
                      suffix={" USD"}
                    />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <Button variant="contained" className="btn-hover-outline" component={ NavLink } to="/checkout" style={{width : "100%", textAlign: "center"}}>Proceed to Checkout</Button>
        </div>
      </div>
    </div>
  );
};

export default CartSidebar;
