import React from 'react';

import './Social.css'

const Social = (props) => (
  <div className="social">
    <a href="http://linkedin.com"><span className="social__icon fab fa-linkedin-in"></span></a>
    <a href="http://facebook.com"><span className="social__icon fab fa-facebook-f"></span></a>
    <a href="http://github.com"><span className="social__icon fab fa-github"></span></a>
    <a href="http://rss.com"><span className="social__icon fas fa-rss"></span></a>
  </div>
);

export default Social;
