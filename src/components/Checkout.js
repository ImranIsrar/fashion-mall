import React from 'react';
import './Checkout.css';
import Button from '@mui/material/Button';
import { useStateValue } from '../Global/CartContext';
import Counter from './Counter';
import CurrencyFormat from 'react-currency-format';
import StripeContainer from './StripeContainer';


const Checkout = () => {
  const [{ shoppingCart, qty, totalPrice }] = useStateValue();

  const freeShippingCharge = 0.00;

  return (
    <div className="checkout">
      <h1 className="checkout__title">YOUR BAG</h1>
      
      <div className="checkout__top">
        <Button variant="contained">CONTINUE SHOPPING</Button>
        <div className="checkout__top-text">
          <span>Shopping Bag ({qty})</span>
          <span>Your Wishlist (0)</span>
        </div>
      </div>

      <div className="checkout__bottom">
        {
          shoppingCart.length > 0 ? (
            <>
              <div className="checkout__info">
                {
                  shoppingCart.map((product, index) => (
                    <div className="checkout__product-wrapper" key={index}>
                      <div className="checkout__product">
                        <div className="checkout__product-detail">
                          <img src={product.image} alt="" />
                          <div className="checkout__product-detail-wrapper">
                            <h4 className="checkout__product-name">{product.title}</h4>
                            <span className="checout__product-id"><b>id:</b> {product.id}</span>
                          </div>
                        </div>

                        <div className="checkout__price-detail">
                          <div className="checkout__price-amount-container">
                            <Counter
                              Width="50%"
                              addToCart={product.qty} 
                              cartId={product.id}
                              cart={product}
                            />
                          </div>
                          <div className="checkout__product-price">
                            <CurrencyFormat 
                              value={product.price}
                              decimalScale={2}
                              displayType={"text"}
                              thousandSeparator={true}
                              prefix={"$ "} 
                            />
                          </div>
                        </div>
                      </div>
                      <hr />
                    </div>
                  ))
                }
              </div>
              <div className="checkout__summary">
                <h4>ORDER SUMMARY</h4>
                <div className="checkout__summary-item">
                  <span className="checkout__summary-text"><strong>Subtotal</strong></span>
                  <span className="checkout__summary-price">
                    <CurrencyFormat 
                      value={totalPrice}
                      decimalScale={2}
                      displayType={"text"}
                      thousandSeparator={true}
                      prefix={"$ "} 
                    />
                  </span>
                </div>

                <div className="checkout__summary-item">
                  <span className="checkout__summary-text"><strong>Free Shipping</strong></span>
                  <span className="checkout__summary-price">
                    <CurrencyFormat 
                      value={freeShippingCharge}
                      decimalScale={2}
                      displayType={"text"}
                      thousandSeparator={true}
                      prefix={"$ "} 
                    />
                  </span>
                </div>

                <hr />
                <div className="checkout__summary-item">
                  <span className="checkout__summary-text" style={{fontSize : "24px"}}><strong style={{color: "#000"}}>Total</strong></span>
                  <span className="checkout__summary-price" style={{fontSize : "24px"}}>
                    <CurrencyFormat 
                      value={totalPrice + freeShippingCharge}
                      decimalScale={2}
                      displayType={"text"}
                      thousandSeparator={true}
                      prefix={"$ "} 
                    />
                  </span>
                </div>

                <StripeContainer />
              </div>
            </>
          ) : (
            <p>Your Cart is Empty</p>
          )
        }
      </div>
    </div>
  )
}

export default Checkout;
