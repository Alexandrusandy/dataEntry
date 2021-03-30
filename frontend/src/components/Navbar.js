import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className='navbar bg-dark container'>
      <h3>
        <Link className='link' to='/'>
          Home
        </Link>
      </h3>

      <h3>
        <Link className='link' to='/create'>
          Create
        </Link>
      </h3>
      <h3>
        <Link className='link' to='/notes' notes>
          Notes
        </Link>
      </h3>
    </nav>
  );
};

export default Navbar;
