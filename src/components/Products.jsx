import React from 'react';
import { NavLink,Outlet } from 'react-router-dom';

const Products = () => {
    return (
        <div>
            <h1>Products</h1>
           <nav style={{background:"pink"}}>
            <NavLink to="mobiles">Mobiles</NavLink>
            <NavLink to="watches">Watches</NavLink>
            <NavLink to="televisions">Televisions</NavLink>
            <NavLink to="laptops">Laptops</NavLink>
        </nav> 
        <Outlet/> 
        </div>
    );
}

export default Products;
