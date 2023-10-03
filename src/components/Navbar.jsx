import React from 'react';
import "./CSS/Navbar.css";

import {NavLink} from 'react-router-dom'

const Navbar = () => {
    return (
        <nav>
            <NavLink to="/">Home</NavLink>
            {/* <NavLink to="/products">Products</NavLink>
            <NavLink to="/adduser">Add User</NavLink>
            <NavLink to="/userlist">Users List</NavLink> */}
            <NavLink to="/addtask">Add Task</NavLink>
            <NavLink to="/alltask">All Tasks</NavLink>

            {/* <NavLink to="/login">Login</NavLink> */}
        </nav>
    );
}

export default Navbar;
