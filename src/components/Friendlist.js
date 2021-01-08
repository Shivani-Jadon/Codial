import React from 'react';
import {connect} from 'react-redux'

class Friendlist extends React.Component{
    render(){
        const friends = this.props;
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
                        <span className="friends-img">
                            <img src="" alt="Friends image"/>
                        </span>
                        <span className="friends-name"> {friend.name} </span>
                    </li>
                ))
            }

            
        </ul>
        )
    }
}

export default Friendlist;