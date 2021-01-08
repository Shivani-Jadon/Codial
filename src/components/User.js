import React , {Component} from 'react';
import { connect } from 'react-redux';

class User extends React.Component{

    componentDidMount() {
        const {match} = this.props;

        if(match.params.userId) {
            // dispatch an action
        }
    }

    render(){
        const {match : {params}} = this.props;

        return (
            <div className='settings'>
                <div className='img-container'>
                    <img 
                        src="https://www.flaticon.com/svg/static/icons/svg/163/163802.svg" alt="user-dp"
                    />
                </div>
                <div className="field">
                    <div className='field-label'>Email</div>
                    <div className='field-value'> random@gmail.com </div>
                </div>
                <div className="field">
                    <div className='field-label'>Name</div>
                    <div className='field-value'> Example </div>
                </div>

                <button className='save-btn'>Add Friend</button>
            </div>
        )
    }
}

function mapStateToProps( {auth} ){
    return {
        auth,
    }
}

export default connect(mapStateToProps)(User);