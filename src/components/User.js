import React from 'react';
import { connect } from 'react-redux';
import { fetchProfile } from '../actions/profile';
import { APIUrls } from '../helpers/urls';
import { getAuthTokenFromLocalStorage } from '../helpers/utils';
import { addFriend } from '../actions/friends';

class User extends React.Component{

    constructor (props) {
        super(props);
        this.state = {
            success : null,
            fail : null,
        }
    }

    componentDidMount() {
        const {match} = this.props;

        if(match.params.userId) {
            // dispatch an action
            this.props.dispatch( fetchProfile( match.params.userId ) );
        }
    }

    checkUserFriend() {
        const {match, friends} = this.props;
        const userId = match.params.userId;

        const index = friends.map((friend) => friend.to_user._id).indexOf(userId);

        if(index !== -1){
            return true;
        }

        return false;       
    }
    
    handleAddFriend = async () => {

        const {match} = this.props;
        const userId = match.params.userId;
        const url = APIUrls.addFriends(userId);

        const options = {
            method : 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                Authorization:  `Bearer ${getAuthTokenFromLocalStorage()}`,
            },
        }
        
        const response = await fetch(url, options);
        const data = response.json();

        if (data.success) {
            this.setState({
                success: true
            });

            this.props.dispatch( addFriend(data.data.friendship) );
        }
        else {
            this.setState({
                success: null,
                error : data.message,
            });

        }
    }

    render(){
        const {match : {params},
                profile } = this.props;
        console.log('this.props', params);
        const user = profile.user;
        const {success, fail} = this.state;

        if (profile.inProgress) {
            return <h1>Loading....</h1>
        }

        const ifUserFriend = this.checkUserFriend();

        return (
            <div className='settings'>
                <div className='img-container'>
                    <img 
                        src="https://www.flaticon.com/svg/static/icons/svg/163/163802.svg" alt="user-dp"
                    />
                </div>
                <div className="field">
                    <div className='field-label'>Email</div>
                    <div className='field-value'> {user.email} </div>
                </div>
                <div className="field">
                    <div className='field-label'>Name</div>
                    <div className='field-value'> {user.name} </div>
                </div>

                {   !ifUserFriend ? 
                    <button className='save-btn'
                    onClick={this.handleAddFriend}>Add Friend</button> :                
                    <button className='save-btn'>Remove Friend</button> 
                }

                {success && <div className="alert success-dailog">Friend added successfully </div>}
                {fail && <div className="alert error-dailog">Friend added successfully </div>}
            </div>
        )
    }
}

function mapStateToProps( {profile, friends} ){
    return {
        profile,
        friends,
    }
}

export default connect(mapStateToProps)(User);