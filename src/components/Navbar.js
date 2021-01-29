import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import { logoutUser } from '../actions/auth';
import { searchUser } from '../actions/search';
import searchIcon from '../assets/search_icon.png';

class Navbar extends React.Component{

  handleLogout = () => {
    // REMOVING JWT TOKEN IN LOCAL STORAGE
    localStorage.removeItem('token');
    
    this.props.dispatch( logoutUser() );
  };

  handleSearch = (e) => {
    const searchText = e.target.value;

    this.props.dispatch(searchUser(searchText));
  }

  render(){
    const {auth, results} = this.props;

    return (
    <nav className='nav'>
          <div className='left-div'>    
            <Link to="/">
            <img className='logo-icons' src="https://www.flaticon.com/svg/static/icons/svg/3437/3437338.svg" alt="logo" />
            <div className='logo'>Codial</div>
            </Link>
          </div>

          <div className='search-container'>
            <img className="search-icon" 
              src={searchIcon}
              alt="search-icon" 
            />
            <input placeholder="Search"  onChange={this.handleSearch}/>
            <div className="search-results">
            {results.length > 0 && (  
              <ul>
                {results.map((user) => (
                  
                  <li className="search-results-row" key={user._id}>
                    <Link to={`/user/:${user._id}`}>
                    <img  src="https://www.flaticon.com/svg/static/icons/svg/3237/3237447.svg" alt="User Avatar"/>
                    <span> {user.name} </span>
                    </Link>
                  </li>
                  
                ))}
              </ul>
            )}
            </div>

          </div>
          <div className='right-nav'>
            {auth.isLoggedIn && 
            <div className='user'>
              <Link to="/settings">
                <img src="https://www.flaticon.com/svg/static/icons/svg/3237/3237447.svg" alt="User Avatar" id="user-dp"/>
              </Link>  
                <span>{ auth.user.name }</span>
            </div>
            }
            <div className="nav-links">
                {/* we use Link for going to urls instead of <a> for avoiding refresing of page (it interanally uses <a>) */}
                <ul>  
                  {!auth.isLoggedIn && <li>
                    <Link to="/login">Login</Link>
                    </li>
                  }                  
                  {auth.isLoggedIn && 
                    <li onClick={this.handleLogout}>
                      Logout
                    </li>
                  }  
                  {!auth.isLoggedIn && <li>
                    <Link to="/signup">Register</Link>
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
    results: state.search.results,
  }
}

export default connect(mapStateToProps)(Navbar);