import React from 'react';
import './Signup.css';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { NavLink } from 'react-router-dom';

const Signup = () => {
  return (
    <div className="signup">
      <div className="container">
        <div className="signup__wrapper">
          <h2>Want First Dibs?</h2>
          <p>Join our email list and be the first to know about new limited edition products, material innovations, and lots of other fun updates. </p>
        
          <form action="#" method="post" className="signup-form" name="signup-form" id="signup-form">
            <div className="signup-form__input-box">
              <TextField 
                id="signup-email" 
                label="Enter Your Email Address" 
                variant="standard" 
                type="email" 
              />
            </div>
            <div className="signup-form__button">
              <Button variant="contained" className="btn-hover-outline">Sign Up</Button>
            </div>
          </form> 
          <p className="signup__desc" style={{margin:0}}>Note: You can opt-out at any time. See our <NavLink exact="true" to="/privacy-policy">Privacy Policy</NavLink> and <NavLink exact="true" to="/terms">Terms</NavLink>.</p>
        </div>
      </div>
    </div>
  )
}

export default Signup
