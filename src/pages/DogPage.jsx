
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const DogPage = () => {
  const [imageUrl, setImageUrl] = useState('');

  useEffect(() => {
    const fetchDogImage = async () => {
      try {
        const response = await axios.get('https://dog.ceo/api/breeds/image/random');
        setImageUrl(response.data.message);
      } catch (error) {
        console.error('Error fetching dog image:', error);
      }
    };

    fetchDogImage();
  }, []);

  return (
    <div className="catFact">
      <h2>Random Dog Image</h2>
      {imageUrl && <img src={imageUrl} alt="Random Dog" />}
      <Link to = "/" className='button'>Home</Link>
    </div>
  );
};

export default DogPage;
