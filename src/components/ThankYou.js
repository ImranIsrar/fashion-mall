import React from 'react';
import './ThankYou.css';
import { NavLink } from 'react-router-dom';
import Button from '@mui/material/Button';

const ThankYou = () => {
  return (
    <>
      <div className='thank-you'>
        <div className="thank-you__wrapper">
          <div className="banner">
              <div className="container">
                <div className="banner__content">
                  <div className="banner__shop">
                    <Button variant="contained" component={ NavLink } to="/">Return Home</Button>
                  </div>
                </div>
              </div>
          </div>

          <div className="container">
            <h2>Thankyou for Purchasing Our Products</h2>
          </div>
        </div>
      </div>
    </>
  )
}

export default ThankYou
