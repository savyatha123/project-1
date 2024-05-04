import React from 'react';
import { Link } from 'react-router-dom';
import "../Compoents/home.css";

const HomePage = () => {
  return (
    <div className='home'>
      <h1 className = "Home">Welcome to API Project</h1>
      <nav className = "Nav">
        <ul >

        
          <li>
            <Link to="/catfact" className = "button">Cat Fact</Link>
          </li>
          <li>
            <Link to="/dog" className='button'>Dog</Link>
          </li>
          <li>
            <Link to="/joke" className='button'>Joke</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};


export default HomePage


