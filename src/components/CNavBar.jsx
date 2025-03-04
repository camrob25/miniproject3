import React from 'react';
import './CNavbar.css';

const CNavbar = () => {
    return (
        <div className="Cnavbar">
          <h1>Voyage</h1>
          <ul className="Cnavbar-links">
            <li className="Cnav-item">
              <Link className="nav-link" to="/car-rental">Home</Link>
            </li>
            <li className="Cnav-item">
              <a className="nav-link" href="https://www.enterprise.com">Enterprise</a>
            </li>
            <li className="Cnav-item">
              <a className="nav-link" href="https://www.thrifty.com">Thrifty</a>
            </li>
            <li className="Cnav-item">
              <a className="nav-link" href="https://www.hertz.com">Hertz</a>
            </li>
            <li className="Cnav-item">
              <Link className="nav-link" to="/Cargraph">Compare Rates</Link>
            </li>
            <li className="Cnav-item">
              <Link className="nav-link" to="/find-car">Help</Link>
            </li>
          </ul>
        </div>
      );
    };

export default CNavbar;
