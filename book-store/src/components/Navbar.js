import React from 'react';
import { Link } from 'react-router-dom'
 const Navbar = ()=>{
    return(
            <nav className="nav-wrapper">
                <div className="container">
                    <Link to="/" className="brand-logo">Shopping</Link>
                    
                    <ul className="right">
                        <li><input type="text" placeholder='Search' className='form-field' /></li>
                        <li><Link to="/search"><i className="material-icons">search</i></Link></li>
                        <li><Link to="/cart">My cart</Link></li>
                    </ul>
                </div>
            </nav>
   
        
    )
}

export default Navbar;