import React from 'react';

const Home = (props) => (
  <div className="home">
    <h2>Home</h2>
    <svg width="12cm" height="4cm" viewBox="0 0 1200 400"
         xmlns="http://www.w3.org/2000/svg" version="1.1">

      <circle cx="600" cy="200" r="100"
              fill="transparent" stroke="lightgrey" stroke-width="10"  />
      <circle cx="500" cy="100" r="100"
              fill="transparent" stroke="lightgrey" stroke-width="10"  />
      <circle cx="700" cy="100" r="100"
              fill="transparent" stroke="lightgrey" stroke-width="10"  />
      <circle cx="400" cy="200" r="100"
              fill="transparent" stroke="lightgrey" stroke-width="10"  />
    </svg>
  </div>
);

export default Home;
