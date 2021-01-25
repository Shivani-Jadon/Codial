import React from 'react';
import { connect } from 'react-redux';
import {PostList, Friendlist, Chat} from './';


class Home extends React.Component{


    render(){
        const { posts,friends, isLoggedIn } = this.props;
        // console.log("props of router" , this.props);  
        // console.log("FRiends", friends);
                  
        return(
            <div className="home">
                <PostList posts={posts} /> 
                {isLoggedIn && <Friendlist friends={friends} />}
                <Chat />
            </div>
        )
    }
 
}

export default Home;