import React from 'react';
import { Link } from 'react-router-dom';

function CenterMenu() {
  return (
    <div className="menu flex">
      <ul className='flex' style={{ width: '100%', justifyContent: 'space-between' }}>
       <Link to="/">
        <li className="menu-item">Home</li>
       </Link>
       <Link to="/">
        <li className="menu-item">About</li>
       </Link>
       <Link to="/">
        <li className="menu-item">Categories</li>
       </Link>
      
      </ul>
    </div>
  );
}

const styles = `
  .menu {
    display: flex;
  }

  .menu ul {
    display: flex;
    list-style: none;
    width: 100%;
    justify-content: space-between;
  }

  .menu-item {
    margin-right: 3rem;
    font-size: 15px;
    cursor: pointer;
    transition: color 300ms ease-in-out, font-weight 300ms ease-in-out;
    color: white; /* Set the text color to white */
  }

  .menu-item:hover {
    color: blue;
    font-weight: bold;
  }
`;

const styleSheet = document.createElement("style");
styleSheet.type = "text/css";
styleSheet.innerText = styles;
document.head.appendChild(styleSheet);

export default CenterMenu;