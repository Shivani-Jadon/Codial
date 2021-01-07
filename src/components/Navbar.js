import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import { logoutUser } from '../actions/auth';

class Navbar extends React.Component{

  handleLogout = () => {
    // REMOVING JWT TOKEN IN LOCAL STORAGE
    localStorage.removeItem('token');
    
    this.props.dispatch( logoutUser() );
  };

  render(){
    const {auth} = this.props;

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
            {auth.isLoggedIn && 
            <div className='user'>
                <img src="https://www.flaticon.com/svg/static/icons/svg/3237/3237447.svg" alt="User Avatar" id="user-dp"/>
                <span>{ auth.user.name }</span>
            </div>
            }
            <div className="nav-links">
                {/* we use Link for going to urls instead of <a> for avoiding refresing of page (it interanally uses <a>) */}
                <ul>  
                  {!auth.isLoggedIn && <li>
                    <Link to="/Login">Login</Link>
                    </li>
                  }                  
                  {auth.isLoggedIn && 
                    <li onClick={this.handleLogout}>
                      Logout
                    </li>
                  }  
                  {!auth.isLoggedIn && <li>
                    <Link to="/Signup">Register</Link>
                    </li>
                  } 
                    
                </ul>
                
            </div>
          </div>
        </nav>
    )   
  } 
}

function mapStateToProps(state){
  return {
    auth: state.auth,
  }
}

export default connect(mapStateToProps)(Navbar);