import React, { useEffect, useState } from "react";
import { useParams, NavLink } from "react-router-dom";
import "./SingleProduct.css";
import axios from "axios";
import StarOutlinedIcon from "@mui/icons-material/StarOutlined";
import Counter from "./Counter";
import { useStateValue } from "../Global/CartContext";
import Button from "@mui/material/Button";

const SingleProduct = () => {
  const { productId: id } = useParams();
  const [{ shoppingCart }, dispatch] = useStateValue();

  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(false);
  const [btnDisabled, setBtnDisabled] = useState(false);
  const [productQty, setProductQty] = useState(1);

  // Get Product using Id
  const getProduct = async () => {
    try {
      setLoading(true);
      const response = await axios.get(
        `https://fakestoreapi.com/products/${id}`
      );
      const productData = response.data;
      setProduct(productData);
      setLoading(false);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getProduct();
  }, []);

  const { image, category, description, price, title } = product;

  // Add to cart Product
  const handleAddToCart = () => {
    dispatch({
      type: "ADD_TO_CART",
      id: id,
      products: product,
    });

    setBtnDisabled(true);
  };

  useEffect(() => {
    setBtnDisabled(false);
  }, [shoppingCart]);

  // console.log(product);
  // console.log(shoppingCart);

  return (
    <div className="single-product">
      {loading ? (
        "<h2>Loading</h2>"
      ) : (
        <>
          <div className="single-product__wrapper">
            <div className="single-product__imgBox">
              <img src={image} alt="" />
            </div>
            <div className="single-product__content">
              <ul className="breadcurmb">
                <li>
                  <NavLink exact="true" to="/">
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink exact="true" to={`/${category}`}>
                    {category}
                  </NavLink>
                </li>
                <li>
                  <NavLink exact="true">{title}</NavLink>
                </li>
              </ul>
              <h1 className="single-product__title">{title}</h1>
              <p className="single-product__price">$ {price}</p>
              <p className="rating">
                <span>
                  {product?.rating?.rate &&
                    Array(Math.ceil(product.rating.rate))
                      .fill()
                      .map((rating, index) => (
                        <StarOutlinedIcon
                          key={index}
                          style={{ color: "#212A2F" }}
                        />
                      ))}
                </span>
                <span>{product?.rating?.count && product.rating.count}</span>
              </p>
              <div className="single-product__addtocart">
                {shoppingCart.length > 0 ? (
                  shoppingCart
                    .filter((product) => product.id == id)
                    .map((findProduct, index) => (
                      <Counter
                        addToCart={findProduct.qty}
                        key={`${index}-${findProduct.qty}`}
                        cartId={id}
                        cart={findProduct}
                        Width="30%"
                      />
                    ))
                ) : (
                  <Counter
                    addToCart={productQty}
                    cartId={id}
                    cart={product}
                    Width="30%"
                  />
                )}
                <Button
                  variant="contained"
                  className="btn-hover-outline"
                  disabled={productQty > 0 ? btnDisabled : setBtnDisabled(true)}
                  onClick={handleAddToCart}
                >
                  Add to Cart
                </Button>
              </div>
              <Button
                variant="contained"
                style={{
                  width: "100%",
                  marginTop: "10px",
                  textAlign: "center",
                }}
                component={NavLink}
                to="/checkout"
              >
                Checkout to Proceed
              </Button>
            </div>
          </div>

          <div className="single-product__description">
            <h2 className="single-product__desc-label">Discription:</h2>
            <p>{description}</p>
          </div>
        </>
      )}
    </div>
  );
};

export default SingleProduct;
