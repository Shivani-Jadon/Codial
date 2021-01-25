import React from 'react';
import { connect } from 'react-redux';
import { fetchProfile } from '../actions/profile';
import { APIUrls } from '../helpers/urls';
import { getAuthTokenFromLocalStorage } from '../helpers/utils';
import { addFriend, removeFriend } from '../actions/friends';

class User extends React.Component{

    constructor (props) {
        super(props);
        this.state = {
            success : null,
            error : null,
            successMessage : null,
        }
    }

    componentDidMount() {
        const {match} = this.props;

        if(match.params.userId) {
            // dispatch an action
            this.props.dispatch( fetchProfile( match.params.userId ) );
        }
    }

    componentDidUpdate(prevProps) {
        const {
            match : {params: prevParams}
        } = prevProps;
        const {
            match : {params: currentParams}
        } = this.props;

        if (prevParams && currentParams && prevParams.userId !== currentParams.userId) {
            this.props.dispatch( fetchProfile(currentParams.userId) );
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

        const userId = this.props.match.params.userId;
        const url = APIUrls.addFriends(userId);

        const options = {
            method : 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                Authorization:  `Bearer ${getAuthTokenFromLocalStorage()}`,
            },
        }
        
        const response = await fetch(url, options);
        const data = await response.json();

        if (data.success) {
            this.setState({
                success: true,
                successMessage: "Friend added successfully",
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

    handleRemoveFriend = async () => {
        const {match} = this.props;
        const userId = match.params.userId;
        const url = APIUrls.removeFriends(userId);

        const options = {
            method : 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                Authorization:  `Bearer ${getAuthTokenFromLocalStorage()}`,
            },
        }

        const response = await fetch(url, options);
        const data = await response.json();

        if (data.success) {
            console.log("Data for removal userID : ", userId);
            this.setState({
                success: true,
                successMessage: "Friend Removed successfully",
            });

            this.props.dispatch( removeFriend(userId) );
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
        const {success, successMessage, error} = this.state;

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
                    <button className='save-btn'
                    onClick={this.handleRemoveFriend}>Remove Friend</button> 
                }

                {success && <div className="alert success-dailog">{successMessage} </div>}
                {error && <div className="alert error-dailog">{error} </div>}
                
                
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