import React from 'react';
import './Footer.css';
import { NavLink } from 'react-router-dom';

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <NavLink exact="true" to="/" className="footer__logo">FashionMall</NavLink>
        <ul className="footer__menu">
          <li><a exact="true"   href="/men">Men</a></li>
          <li><a exact="true"   href="/women">Women</a></li>
          <li><a exact="true"   href="/kids">Kids</a></li>
          <li><a exact="true"   href="/sale">Sale</a></li>
        </ul>
        <p>© 2022 All Rights Reserved</p>
      </div>
    </div>
  )
}

export default Footer
