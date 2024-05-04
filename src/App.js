import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import CatFactPage from './pages/CatFactPage';
import DogPage from './pages/DogPage';
import JokePage from './pages/JokePage';
import PageNotFound from './pages/PageNotFound';

function App() {
  return (
    <Routes>
     
          <Route path="/" element ={<HomePage />}/>
          <Route path="/catfact" element={<CatFactPage />} />
          <Route path="/dog" element={<DogPage/>} />
          <Route path="/joke" element={<JokePage/>} />
          
        <Route path = "*" element = {<PageNotFound/>}/>
        
      
    </Routes>
  );
};
export default App;

