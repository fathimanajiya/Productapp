import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Nav1() {
 return (
    <div>
    <nav>
       <ul className='d-flex justify-content-around list-unstyled my -5'>
          <li>
             <NavLink to="/">Home</NavLink>
          </li>
          <li>
             <NavLink to="/Login">Login</NavLink>
          </li>
          <li>
             <NavLink to="/Additem">Additem</NavLink>
          </li>
       </ul>
    </nav>
    </div>
 );
};

