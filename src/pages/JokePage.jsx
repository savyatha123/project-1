
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const JokePage = () => {
  const [setup, setSetup] = useState('');
  const [punchline, setPunchline] = useState('');

  useEffect(() => {
    const fetchJoke = async () => {
      try {
        const response = await axios.get('https://official-joke-api.appspot.com/random_joke');
        setSetup(response.data.setup);
        setPunchline(response.data.punchline);
      } catch (error) {
        console.error('Error fetching joke:', error);
      }
    };

    fetchJoke();
  }, []);

  return (
    <div className="catFact">
      <h2 >Random Joke</h2>
      <p>{setup}</p>
      <p>{punchline}</p>
      <Link to = "/" className='button'>Home</Link>
    </div>
  );
};

export default JokePage;
