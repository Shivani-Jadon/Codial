import React from 'react';
import {Link} from 'react-router-dom'

class Friendlist extends React.Component{
    render(){
        const {friends} = this.props;
        // console.log("f : ", friends.length);

        // friends.map((friend) => {
        //     console.log(friend);
        // })
        return (
        <div className="friends-list">
            <div className="header">Friends</div>

            { 
                friends && friends.length===0 && (
                    <div className='no-friends'>No friends found</div>
                )
            }

            {
                friends && friends.map( (friend) => (

                    <Link className="friends-item" to={`/user/${friend.to_user._id}`}>
                        <span className="friends-img">
                            <img src="https://www.flaticon.com/svg/static/icons/svg/3187/3187459.svg" alt="Friends image"/>
                        </span>
                        <span className="friends-name"> {friend.to_user.name} </span>
                    </Link>

                ))
            }

            
        </div>
        )
    }
}

export default Friendlist;