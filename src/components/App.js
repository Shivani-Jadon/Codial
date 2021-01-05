import React from 'react';
import {connect} from 'react-redux';
import {BrowserRouter as Router, Link, Route, Switch} from 'react-router-dom';
import {fetchPosts} from '../actions/posts';
import { PostList, Navbar, Home, Page404 } from './';
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
