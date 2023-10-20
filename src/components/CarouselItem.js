import React from 'react';
import './CarouselItem.css';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent'
import { CardActionArea } from '@mui/material';
import { NavLink } from 'react-router-dom';

const CarouselItem = ({ img, imgHeight, alt, title, desc }) => {
  return (
    <>
    <Card variant="outlined" className="favorite-shop__wrapper" style={{ border: "none"}}>
      <div className="favorite-shop__card">
      <CardActionArea component={ NavLink } to="/men">
        <div className="favorite-shop__img-box">
          <CardMedia
            component="img"
            height={imgHeight}
            image={img}
            alt={alt}
          />
        </div>
        <CardContent>
          <div className="favorite-shop__content">
            <h3>{title?.length < 20 ? title : title.slice(0, 20) + '...'}</h3>
            <p>{desc?.length < 100 ? desc : desc.slice(0, 100) + '...'}</p>
          </div>
        </CardContent>
      </CardActionArea>
      </div>
    </Card>
    </>
  )
}

export default CarouselItem
