import React from 'react';

function Navbar(props){
    return (
    <nav className='nav'>
          <div className='left-div'>            
            <img className='logo-icons' src="https://www.flaticon.com/svg/static/icons/svg/3437/3437338.svg" alt="logo" />
            <div className='logo'>Codial</div>
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
              <ul>
                <li>Login</li>
                <li>Logout</li>
                <li>Register</li>
              </ul>
            </div>
          </div>
        </nav>
    )    
}

export default Navbar;