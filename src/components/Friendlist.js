import React from 'react';
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'

class Friendlist extends React.Component{
    render(){
        const {friends} = this.props;
        return (
        <ul className="friends-list">
            <div className="header">Friends</div>

            { 
                friends && friends.length===0 && (
                    <div className='no-friends'>No friends found</div>
                )
            }

            {
                friends && friends.map((friend) => (
                    <li className="friends-item">
                        <Link to={`/user/${friend._id}`}>
                            <span className="friends-img">
                                <img src="https://www.flaticon.com/svg/static/icons/svg/3187/3187459.svg" alt="Friends image"/>
                            </span>
                            <span className="friends-name"> {friend.to_user.name} </span>
                        </Link>
                    </li>
                ))
            }

            
        </ul>
        )
    }
}

export default Friendlist;