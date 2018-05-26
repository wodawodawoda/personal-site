import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navigation.css';

const Navigation = (props) => (
  <div className='navigation'>
    <NavLink exact to='/' className='navigation__link' activeClassName='navigation__link--active'><span className="fas fa-home"></span><span className="alt">Home</span></NavLink>
    <NavLink exact to='/about' className='navigation__link' activeClassName='navigation__link--active'><span className='far fa-user'></span><span className="alt">O mnie</span></NavLink>
    <NavLink exact to='/skills' className='navigation__link' activeClassName='navigation__link--active'><span className='far fa-code'></span><span className="alt">Umiejętności</span></NavLink>
    <NavLink exact to='/contact' className='navigation__link' activeClassName='navigation__link--active'><span className='far fa-file-alt'></span><span className="alt">CV</span></NavLink>
    <NavLink exact to='/cv' className='navigation__link' activeClassName='navigation__link--active'><span className='far fa-comment'></span><span className="alt">Kontakt</span></NavLink>
  </div>
);

export default Navigation;
