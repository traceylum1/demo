import React, {useState} from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <ul>
            {/* <li><Link to='/'>home</Link></li> */}
            <li>about</li>
            <li>learning</li>
            <li>projects</li>
          </ul>
        </div>
      </nav>
    </>
  )
}

export default Navbar