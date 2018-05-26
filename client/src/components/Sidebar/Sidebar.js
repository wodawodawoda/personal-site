import React from 'react';

// Import styles
import './Sidebar.css';

// Import components
import Navigation from '../Navigation/Navigation';
import Logo from '../Logo/Logo'
import Social from '../Social/Social'

const Sidebar = (props) => (
  <div className="sidebar">
    <Logo/>
    <Navigation/>
    <Social/>
  </div>
);

export default Sidebar;
