import React from 'react';
import './Home.css';
import { NavLink } from 'react-router-dom';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Grid from '@mui/material/Grid';
import Favorite from './Favorite';
import CarouselItem from './CarouselItem';
import Signup from './Signup';

const Home = ({ OwlCarousel }) => {

  const options = {
    nav: true,
    dots:false,
    rewind: true,
    autoplay: false,
    margin:20,
    navText: [
      '<svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-i4bv87-MuiSvgIcon-root" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="ChevronLeftIcon"><path d="M15.41 7.41 14 6l-6 6 6 6 1.41-1.41L10.83 12z"></path></svg>',
      '<svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-i4bv87-MuiSvgIcon-root" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="ChevronRightIcon"><path d="M10 6 8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"></path></svg>'
    ],
    responsive: {
      0:{
        items:1
      },
      600:{
          items:3
      },
      1000:{
          items:4
      }
    }
  };
  
  return (
    <div className="home">
      {/* Banner */}
      <div className="banner">
        <div className="container">
          <div className="banner__content">
            <h1>Just What The Weather Ordered</h1>
            <p>Sustainable shoes as planet-friendly as they are cozy.</p>

            <div className="banner__shop">
              <Button variant="contained" component={ NavLink } to="/men">Shop Men</Button>
              <Button variant="contained" component={ NavLink } to="/women">Shop Women</Button>
            </div>
          </div>
        </div>
      </div>

      {/* Our Favorites */}
      <div className="favorite">
        <div className="container">
          <h2>Our Favorites</h2>
          <Favorite 
            Box={Box}
            Tab={Tab}
            TabContext={TabContext}
            TabList={TabList}
            TabPanel={TabPanel}
            Grid={Grid}
          />
        </div>
      </div>

      {/* Banner */}
      <div className="banner-2">
        <img src="images/banner-2.jpg" alt="" />
      </div>

      {/* New Arrivals */}
      <div className="new-arrival">
        <h2 className="new-arrival__title">New Arrivals</h2>

        <OwlCarousel options={options}>
          <CarouselItem 
            img="images/Men's-Wool-Runner.jpg"
            imgHeight="396"
            alt="new-arrival"
            title="Men's Wool Runner"
            desc="Limited Edition Color, Hazy Indigo"
          />
          
          <CarouselItem 
            img="images/Women's-Tree-Breezer.jpg"
            imgHeight="396"
            alt="new-arrival"
            title="Women's Tree Breezer"
            desc="Limited Edition Color, Hazy Indigo"
          />

          <CarouselItem 
            img="images/Men's-Wool-Runner-brown.jpg"
            imgHeight="396"
            alt="new-arrival"
            title="Men's Wool Runner"
            desc="Limited Edition Color, Hazy Indigo"
          />

          <CarouselItem 
            img="images/Women's-Tree-Skipper-blue.jpg"
            imgHeight="396"
            alt="new-arrival"
            title="Women's Tree Skipper"
            desc="Limited Edition Color, Hazy Indigo"
          />

          <CarouselItem 
            img="images/Women's-Plant-Pacer.jpg"
            imgHeight="396"
            alt="new-arrival"
            title="Women's Plant Pacer"
            desc="Limited Edition Color, Hazy Indigo"
          />

          <CarouselItem 
            img="images/Men's-Wool-Runner-brown.jpg"
            imgHeight="396"
            alt="new-arrival"
            title="Men's Canvas Pacer"
            desc="Limited Edition Color, Hazy Indigo"
          />

          <CarouselItem 
            img="images/Men's-Wool-Runner-Mizzle-dark-brown.jpg"
            imgHeight="396"
            alt="new-arrival"
            title="Women's Wool Runner-up Mizzle"
            desc="Limited Edition Color, Hazy Indigo"
          />
        </OwlCarousel>
      </div>

      {/* Banner */}
      <div className="banner-2">
        <div className="banner-2__wrapper">
          <img src="images/banner-3.jpg" alt="" />

          <div className="container">
            <div className="banner-2__content banner">
              <h2 className="banner-2__title">Go Fall In</h2>
              <p>Super soft Merino wool turns colder days into comfier ones.</p>

              <div className="banner__shop banner-2__shop">
                <Button variant="contained" className="btn-hover-outline" component={ NavLink } to="/men">Shop Men</Button>
                <Button variant="contained" className="btn-hover-outline" component={ NavLink } to="/women">Shop Women</Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Shop The Collections */}
      <div className="new-arrival new-arrival--shop">
        <h2 className="new-arrival__title">Shop The Collections</h2>

        <OwlCarousel options={options}>
          <CarouselItem 
            img="images/The-Pacer-Collection.jpg"
            imgHeight="396"
            alt="The-Pacer-Collection"
            title="The Pacer Collection"
            desc="Two new materials, one new style. Meet the Pacer—a classic style made for a super natural future."
          />
          
          <CarouselItem 
            img="images/The-Wet-Weather-Shop.jpg"
            imgHeight="396"
            alt="The-Wet-Weather-Shop"
            title="The Wet Weather Shop"
            desc="Water repellent coating and premium Merino wool keep you cozy, dry, and most importantly, outside."
          />

          <CarouselItem 
            img="images/New-Arrivals.jpg"
            imgHeight="396"
            alt="New-Arrivals"
            title="New Arrivals"
            desc="The latest styles and limited edition colors that you can only find here (while they last, that is)."
          />

          <CarouselItem 
            img="images/The-Woven-Collection.jpg"
            imgHeight="396"
            alt="The-Woven-Collection"
            title="The Woven Collection"
            desc="Looking for that signature softness of our cozy merino wool, with a little more durability? Maybe a little something you can dress up, or dress down? Great, you’re in luck."
          />

          <CarouselItem 
            img="images/Cold-Weather.jpg"
            imgHeight="396"
            alt="Cold-Weather"
            title="The Cold Weather Shop"
            desc="Premium Merino wool is comfy, warm, and just in time for cold temps."
          />

          <CarouselItem 
            img="images/Best-For-Adventure.jpg"
            imgHeight="396"
            alt="Best-For-Adventure"
            title="Best For Adventure"
            desc="Limited Edition Color, Hazy Indigo"
          />

          <CarouselItem 
            img="images/Smallbirds-For-Kids.jpg"
            imgHeight="396"
            alt="Smallbirds-For-Kids"
            title="Smallbirds For Kids"
            desc="We took a shrink ray to two of our most-loved styles to create the perfect pair for kiddos size 5T-3Y. Machine washable. Easy to slip on and off. Oh and they play nice with the planet."
          />
        </OwlCarousel>
      </div>

      {/* SignUp */}
      <Signup />
    </div>
  )
}

export default Home
