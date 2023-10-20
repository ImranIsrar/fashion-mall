import React, { useEffect, useState } from 'react';
import './FavoriteItems.css';
import axios from 'axios';
import { NavLink } from 'react-router-dom';
import Button from '@mui/material/Button';
import StarOutlinedIcon from '@mui/icons-material/StarOutlined';
import { useStateValue } from '../Global/CartContext';

const FavoriteItems = ({ Grid, Card, CardMedia, CardContent, img, imgHeight, alt, title, descImg, categoryName }) => {

  const [{}, dispatch] = useStateValue();
  const [categoryProducts, setCategoryProducts] = useState([]);

  // Get Products
  const getCategoryProducts = async () => {
    try {
      const response = await axios.get("https://fakestoreapi.com/products");
      const productData = response.data;
      setCategoryProducts(productData);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getCategoryProducts();
  }, []);


  // Add To Cart
  const handleAddToCart = (productid, product) => {
    dispatch({
      type: 'ADD_TO_CART',
      id: productid,
      products: product
    });
  }

  return (
    <>
      {
        categoryProducts?.filter((product) => product.category.includes(categoryName)).map((filterProduct) => (
          <Grid item xs={12} sm={6} md={4} lg={4} xl={4} key={filterProduct.id}>
            <Card variant="outlined" className="favorite-shop__wrapper" style={{ border: "none" }}>
              <div className="favorite-shop__card">
                <div className="favorite-shop__img-box">
                  <CardMedia
                    component="img"
                    height={imgHeight}
                    image={filterProduct.image}
                    alt={alt}
                  />
                  <div className="favorite-shop__actions">
                    <Button variant="contained" component={ NavLink } to={`/product/${filterProduct.id}`}>Shop Now</Button>
                    <Button variant="contained" 
                      style={{width : '100%'}} 
                        onClick={() => handleAddToCart(filterProduct.id, filterProduct)}
                    >
                      Add to Cart
                    </Button>
                  </div>
                </div>

                <CardContent>
                  <div className="favorite-shop__content">
                    <h3>{filterProduct.title.length < 51 ? filterProduct.title : filterProduct.title.slice(0, 50) + '...'}</h3>
      
                    <div className="favorite-shop__footer">
                      <div className="favorite-shop__priceBox">
                        <img src={descImg} alt= "" width="30" height="30" />
                        <span>$ {filterProduct.price}</span>
                      </div>

                      <div>
                        {
                          Array(Math.ceil(filterProduct.rating.rate))
                          .fill()
                          .map((rate, index) => (
                            <StarOutlinedIcon key={index} style={{color: "#212A2F"}} />
                          ))
                        }
                      </div>
                    </div>
                  </div>
                </CardContent>
              </div>
            </Card>
          </Grid>
        ))
      }
    </>
  )
}

export default FavoriteItems
