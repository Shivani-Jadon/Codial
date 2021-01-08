import React , {Component} from 'react';
import { connect } from 'react-redux';
import { fetchProfile } from '../actions/profile';

class User extends React.Component{

    componentDidMount() {
        const {match} = this.props;

        if(match.params.userId) {
            // dispatch an action
            this.props.dispatch( fetchProfile( match.params.userId ) );
        }
    }

    render(){
        const {match : {params},
                profile } = this.props;
        console.log('this.props', params);
        const user = profile.user;

        if (profile.inProgress) {
            return <h1>Loading....</h1>
        }

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

                <button className='save-btn'>Add Friend</button>
            </div>
        )
    }
}

function mapStateToProps( {profile} ){
    return {
        profile,
    }
}

export default connect(mapStateToProps)(User);