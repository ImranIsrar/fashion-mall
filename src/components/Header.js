import React from 'react';
import './Header.css';
import { NavLink } from 'react-router-dom';
import PersonIcon from '@mui/icons-material/Person';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import IconButton from '@mui/material/IconButton';
import { useStateValue } from '../Global/CartContext';


const Header = ({ cartHandle }) => {

  const [{ qty }] = useStateValue();

  return (
    <header className="header">
      <div className="header__topbar">
        <p>2 new materials, 1 new style. The Pacer is a classic made for a super natural future. <NavLink exact="true" to="/men">Shop Now</NavLink></p>
      </div>
      <div className="header__main">
        <nav className="header__nav">
          <ul className="header__menu">
            <li><NavLink exact="true" to="/men">Men</NavLink></li>
            <li><NavLink exact="true" to="/women">Women</NavLink></li>
            <li><NavLink exact="true" to="/kids">Kids</NavLink></li>
            <li><NavLink exact="true" to="/sale">Sale</NavLink></li>
          </ul>

          <NavLink exact="true" to="/" className="header__brand">FashionMall</NavLink>

          <ul className="header__menu">
            <li><NavLink exact="true" to="/sustainability">Sustainability</NavLink></li>
            <li><NavLink exact="true" to="/return">Return</NavLink></li>
            <li style={{margin : 0}}>
              <IconButton component={ NavLink } to="/user">
                <PersonIcon />
              </IconButton>
            </li>
            <li>
              <IconButton onClick={cartHandle}>
                <ShoppingCartCheckoutIcon />
                <span className="cart-items">{qty}</span>
              </IconButton>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header
