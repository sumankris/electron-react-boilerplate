import React from 'react';
import './LeftSidebar.css'; // Create this file for custom styling
import { Link } from 'react-router-dom';
// import { FaHome, FaUser, FaCog } from 'react-icons/fa';

const LeftSidebar = () => {
  return (
    <div className="left-sidebar">
        <h3>logo</h3>
      <ul className="list-unstyled">
        <li>
          <Link to='/'>
            {/* <FaHome /> */}
            Billing/ Tokens
          </Link>
        </li>
        <li>
         
            <Link to='/sevas'>
            Sevas
            </Link>            
        </li>
        <li>
        <Link to='/settings'>
            Settings
            </Link>
        </li>
        <li>
        <Link to='/reports'>
            Reports
            </Link>
        </li>
      </ul>
    </div>
  );
};

export default LeftSidebar;
