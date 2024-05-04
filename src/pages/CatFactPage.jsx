
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import "./catFacrtPage.css";


const CatFactPage = () => {
  const [fact, setFact] = useState('');

  useEffect(() => {
    const fetchCatFact = async () => {
      try {
        const response = await axios.get('https://catfact.ninja/fact');
        setFact(response.data.fact);
      } catch (error) {
        console.error('Error fetching cat fact:', error);
      }
    };

    fetchCatFact();
  }, []);

  return (
    <div className="catFact">
      <h2 >Cat Fact</h2>

      <p >{fact}</p>
      <Link to="/" className='button'>Home</Link>
    </div>
  );
};

export default CatFactPage;
