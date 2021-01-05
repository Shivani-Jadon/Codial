import React from 'react';
import {PostList} from './';


class Home extends React.Component{
    render(props){
        const {posts} = this.props;
        console.log("props of router" , this.props);  
                  
        return(
            <div className="home">
                <PostList posts={posts} /> 
            </div>
        )
    }
 
}

export default Home;