import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navigation.css';

const Navigation = (props) => (
  <div className='navigation'>
    <NavLink exact to='/' className='navigation__link' activeClassName='navigation__link--active'>Home</NavLink>
    <NavLink exact to='/about' className='navigation__link' activeClassName='navigation__link--active'>About</NavLink>
  </div>
);

export default Navigation;
