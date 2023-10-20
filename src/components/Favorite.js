import React, { useEffect, useState } from 'react';
import './Favorite.css';
import FavoriteItems from './FavoriteItems';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import axios from 'axios';

const Favorite = ({ Box, Tab, TabContext, TabList, TabPanel, Grid }) => {

  const [value, setValue] = useState("1");
  const [category, setCategory] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  // Get Categories
  const getCategories = async() => {
    setLoading(true);
    const response = await axios.get("https://fakestoreapi.com/products/categories");
    const categoryData = response.data;
    setCategory(categoryData);
    setLoading(false);
  }

  useEffect(() => {
    getCategories();
  }, []);

  return (
    <div className="favorite-shop">
      <Box sx={{ width: '100%', typography: 'body1' }}>
        <TabContext value={value}>
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <TabList onChange={handleChange} aria-label="lab API tabs example" centered>
              {
                category.map((item, index) => {
                  return (
                    <Tab label={item} value={(index + 1).toString()} key={index} />
                  )
                })
              }
            </TabList>
          </Box>
            {
              category.map((item, index) => {
                return (
                  <TabPanel value={(index + 1).toString()} key={index}>
                    <Grid container spacing={2}>
                      <FavoriteItems 
                        Grid={Grid}
                        Card={Card}
                        CardMedia={CardMedia}
                        CardContent={CardContent}
                        img="images/new-arrival.jpg"
                        imgHeight="396"
                        alt="new-arrival"
                        title="Plant Pacer"
                        descImg = "images/Product_benefit.webp"
                        categoryName={item}
                      />
                    </Grid>
                  </TabPanel>
                )
              })
            }

          {/* <TabPanel value="1">
            <Grid container spacing={2}>
              
              <FavoriteItems 
                Grid={Grid}
                Card={Card}
                CardMedia={CardMedia}
                CardContent={CardContent}
                img="images/new-arrival.jpg"
                imgHeight="396"
                alt="new-arrival"
                title="Plant Pacer"
                descImg = "images/Product_benefit.webp"
                descText="Classic Sneaker"
              />

              <FavoriteItems 
                Grid={Grid}
                Card={Card}
                CardMedia={CardMedia}
                CardContent={CardContent}
                img="images/Cold-Weather.jpg"
                imgHeight="396"
                alt="Cold-Weather"
                title="Wool Runner"
                descImg = "images/Wool.png"
                descText="Cozy Sneaker"
              />

              <FavoriteItems 
                Grid={Grid}
                Card={Card}
                CardMedia={CardMedia}
                CardContent={CardContent}
                img="images/Core-Category-Carousel-TR.jpg"
                imgHeight="396"
                alt="Core-Category-Carousel-TR"
                title="Tree Runner"
                descImg = "images/Tree.png"
                descText="Light and Breezy Sneaker"
              />
            </Grid>
          </TabPanel>
          <TabPanel value="2">Item Two</TabPanel>
          <TabPanel value="3">Item Three</TabPanel> */}
        </TabContext>
      </Box>
    </div>
  )
}

export default Favorite
