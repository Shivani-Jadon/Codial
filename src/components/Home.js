import React from 'react';
import { connect } from 'react-redux';
import {PostList, Friendlist} from './';


class Home extends React.Component{


    render(props){
        const { posts,friends, isLoggedIn } = this.props;
        console.log("props of router" , this.props);  
        console.log("FRiends", friends);
                  
        return(
            <div className="home">
                <PostList posts={posts} /> 
                {isLoggedIn && <Friendlist friends={friends} />}
            </div>
        )
    }
 
}

export default Home;