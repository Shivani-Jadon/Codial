import React from 'react';
import {connect} from 'react-redux';
import propTypes from 'prop-types';
import * as jwtDecode from 'jwt-decode';
import {BrowserRouter as Router, Link, Redirect, Route, Switch} from 'react-router-dom';
import {fetchPosts} from '../actions/posts';
import { Navbar, Home, Page404, Login, Signup } from './';
import { authUser } from '../actions/auth';


const Settings = () => {
  return <div>Settings</div>
}

const PrivateRoute = (privateRouteProps) => {
  const { isLoggedIn, path, component: Component } = privateRouteProps;

  return (
    <Route 
      path={path}
      render={(props) => {
        return isLoggedIn ? <Component {...props} /> : <Redirect to="/login" />;
      }}
    />
  );
}

class App extends React.Component{

  componentDidMount(){
    this.props.dispatch( fetchPosts() );

    //  STORING JWT OKEN INB LOCAL STORAGE
    const token = localStorage.getItem('token');

    if(token) {
      const user = jwtDecode(token);
      console.log('user', user);

      this.props.dispatch(
        authUser({
          email: user.email,
          _id: user._id,
          name: user.name,
        })
      )
    }
  }

  render(){
    const { posts, auth }  = this.props;
    return (
      <Router>
        <div>
          <Navbar />
                   
          {/* exact path for routes */}
          <Switch>
            <Route exact={true} path="/" 
              render={ (props) => {
                return <Home {...props} posts={posts} />
              } }
            />
            <Route path="/login" component={Login} />
            <Route path="/signup" component={Signup} />
            <PrivateRoute path="/setttings" component={Settings} isLoggedIn={auth.isLoggedIn} />
            <Route component={Page404} />
          </Switch>
        </div>
      </Router>
    )
  }
}

function mapStateToProps(state){
  return {
    posts : state.posts,
    auth : state.auth,
  }
};

// this check whether the prop type is what is required
App.propTypes = {
  posts : propTypes.array.isRequired,
}

export default connect(mapStateToProps)(App);
