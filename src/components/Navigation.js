import React from 'react';
import {Link} from 'react-router-dom';

const Navigation = () => {
  return (
    <div>
      <div className="App">
        <h1>React Router Mini</h1>

        {/*Adding the Link & give them a to= value to use in app.js 
        & in the app.js I will use the Route */}

        <div>
          <Link to="/home">Home </Link>
        </div>

        <div>
          <Link to="/about"> About </Link>
        </div>
        <div>
          <Link to="/contact">Contact </Link>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
