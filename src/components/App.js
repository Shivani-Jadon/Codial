import React from 'react';
import {connect} from 'react-redux';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom';
import {fetchPosts} from '../actions/posts';
import { PostList, Navbar, Home } from './';
import propTypes from 'prop-types';

 
const Login = () => <div>Login</div>;
const Signup = () => <div>Signup</div>;



class App extends React.Component{

  componentDidMount(){
    this.props.dispatch( fetchPosts() );
  }

  render(){
    const { posts }  = this.props;
    return (
      <Router>
        <div>
          <Navbar />
                   
          {/* we use Link for going to urls instead of <a> for avoiding refresing of page (it interanally uses <a>) */}
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/Login">Login</Link>
            </li>
            <li>
              <Link to="/Signup">Signup</Link>
            </li>
          </ul>

          {/* exact path for routes */}
          <Route exact={true} path="/" 
            render={ (props) => {
              return <Home {...props} posts={posts} />
            } }
          />
          <Route path="/Login" component={Login} />
          <Route path="/Signup" component={Signup} />
        </div>
      </Router>
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
