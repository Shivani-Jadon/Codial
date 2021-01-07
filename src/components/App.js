import React from 'react';
import {connect} from 'react-redux';
import * as jwtDecode from 'jwt-decode'
import {BrowserRouter as Router, Link, Route, Switch} from 'react-router-dom';
import {fetchPosts} from '../actions/posts';
import { PostList, Navbar, Home, Page404, Login, Signup } from './';
import propTypes from 'prop-types';

 
class App extends React.Component{

  componentDidMount(){
    this.props.dispatch( fetchPosts() );

    const token = localStorage.getItem('token');

    if(token) {
      const user = jwtDecode(token);
      console.log('user', user);
    }
  }

  render(){
    const { posts }  = this.props;
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
            <Route path="/Login" component={Login} />
            <Route path="/Signup" component={Signup} />
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
  }
};

// this check whether the prop type is what is required
App.propTypes = {
  posts : propTypes.array.isRequired,
}

export default connect(mapStateToProps)(App);
