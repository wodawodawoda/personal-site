import React from 'react';

import './Social.css'

const Social = (props) => (
  <div className="social">
    <a href="https://www.linkedin.com/in/mateusz-wodnik"><span className="social__icon fab fa-linkedin-in"></span></a>
    <a href="https://www.facebook.com/mateusz.wodnik"><span className="social__icon fab fa-facebook-f"></span></a>
    <a href="https://github.com/wodawodawoda"><span className="social__icon fab fa-github"></span></a>
    {/*<a href="http://rss.com"><span className="social__icon fas fa-rss"></span></a>*/}
  </div>
);

export default Social;
