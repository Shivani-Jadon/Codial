import React from 'react';
import {Link} from 'react-router-dom';

function Navbar(props){
    return (
    <nav className='nav'>
          <div className='left-div'>    
            <Link to="/">
            <img className='logo-icons' src="https://www.flaticon.com/svg/static/icons/svg/3437/3437338.svg" alt="logo" />
            <div className='logo'>Codial</div>
            </Link>
          </div>

          <div className='search-container'>
            <input placeholder="Search" />
            <div className="search-results">
              <ul>
                <li className="search-results-row">
                  <img  src="https://www.flaticon.com/svg/static/icons/svg/3237/3237447.svg" alt="User Avatar"/>
                  <span>Shivani J</span>
                </li>
                <li className="search-results-row">
                  <img  src="https://www.flaticon.com/svg/static/icons/svg/3237/3237447.svg" alt="User Avatar"/>
                  <span>Shivani J</span>
                </li>
              </ul>
            </div>

          </div>
          <div className='right-nav'>
            <div className='user'>
                <img src="https://www.flaticon.com/svg/static/icons/svg/3237/3237447.svg" alt="User Avatar" id="user-dp"/>
                <span>Shivani Jadon</span>
            </div>
            <div className="nav-links">
                {/* we use Link for going to urls instead of <a> for avoiding refresing of page (it interanally uses <a>) */}
                <ul>                    
                    <li>
                    <Link to="/Login">Login</Link>
                    </li>
                    <li>
                    <Link to="/Signup">Signup</Link>
                    </li>
                    <li>
                    <Link to="/Register">Register</Link>
                    </li>
                </ul>
                
            </div>
          </div>
        </nav>
    )    
}

export default Navbar;