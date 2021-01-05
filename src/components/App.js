import React from 'react';
import {connect} from 'react-redux';
import {fetchPosts} from '../actions/posts';
import { PostList } from './';
import propTypes from 'prop-types';

class App extends React.Component{

  componentDidMount(){
    this.props.dispatch( fetchPosts() );
  }

  render(){
    const { posts }  = this.props;
    return (
      <div>
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
        <PostList posts={posts} />
      </div>
      
    )
  }
}

function mapStateToProps(state){
  return {
    posts : state.posts,
  }
};

// this check whether the prop type is what is required
App.propTypes = {
  posts : propTypes.array.isRequired,
}

export default connect(mapStateToProps)(App);
