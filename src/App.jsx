import React from 'react';
import './App.css';
import BNavbar from './components/BNavBar';
import Bfooter from './components/Bfooter';  
import { Link } from 'react-router-dom';  
import { BrowserRouter } from 'react-router-dom'; 

const App = () => {
  return (
    <div className="App">
      <BNavbar />
      <div className="button-box">
        <h2>Welcome to Voyage</h2>
        <p>Find the best deals on rental cars across various sites.</p>
        <Link to="/car-rental">
          <button className="button">Browse Cars</button>
        </Link>
      </div>
      <div className="footer"><Bfooter /></div>
    </div>
  );
};

export default App;
