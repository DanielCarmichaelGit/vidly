import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className='navbar navbar-expand-lg navbar-light bg-light'>
            <NavLink className='navbar-brand font-weight-bold text-primary' to='/'>
                Vidly
            </NavLink>
            <NavLink className="nav-item nav-link" to="/">
                Movies
            </NavLink>
            <NavLink className="nav-item nav-link" to="/customers">
                Customers
            </NavLink>
            <NavLink className="nav-item nav-link" to="/rentals">
                Rentals
            </NavLink>
            <NavLink className="nav-item nav-link" to="/login">
                Login
            </NavLink>
        </nav>
    );
}
 
export default Navbar;