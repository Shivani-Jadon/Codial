import React from 'react';
import {connect} from 'react-redux';
import { Redirect } from 'react-router-dom';
import { signup, startSignup, clearAuthState } from '../actions/auth';


class Signup extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            username : '',
            email : '',
            password : '',
            confirmPassword : '',
        }
    }

    componentWillUnmount(){
        this.props.dispatch( clearAuthState() );
    }

    handleNameChange = (e) => {
        this.setState({
            username: e.target.value,
        })
    }

    handleEmailChange = (e) => {
        this.setState({
            email: e.target.value,
        })
    }

    handlePasswordChange = (e) => {
        this.setState({
            password: e.target.value,
        })
    }

    handleConfirmPasswordChange = (e) => {
        this.setState({
            confirmPassword: e.target.value,
        })
    }


    handleFormSubmit = (event) => {
        event.preventDefault();

        console.log(this.state);
        const {username, email, password, confirmPassword} = this.state;

        if(username && email && password && confirmPassword) {
            this.props.dispatch( startSignup() );
            this.props.dispatch( signup(username, email, password, confirmPassword) );
        }
    }


    render(){
                  
        const {error, inProgress, isLoggedIn } = this.props.auth;

        if (isLoggedIn) {
            return <Redirect to='/'></Redirect>
        }

        return(
            <form className='login-form'>
                <span className='login-signup-header'>Signup</span>

                {error && <div className='alert error-dailog'>{error}</div>}

                <div className='field'>
                    <input type="text" placeholder="username" required
                    onChange={this.handleNameChange} 
                    />
                </div>
                <div className='field'>
                    <input type="email" placeholder="Email" required
                    onChange = {this.handleEmailChange}
                    />
                </div>
                <div className='field'>
                    <input type="password" placeholder="Password" required
                    onChange={this.handlePasswordChange}
                    />
                </div>
                <div className='field'>
                    <input type="password" placeholder="Confirm Password" required
                    onChange={this.handleConfirmPasswordChange}
                    />
                </div>
                {/* <div className='field'>                   
                    <button onClick={this.handleFormSubmit} disabled={inProgress} >Signup</button>               
                </div> */}
                <div className='field'>
                    {
                        inProgress ? (
                        <button onClick={this.handleFormSubmit} disabled={inProgress} >Signing up......</button> ) : (
                        <button onClick={this.handleFormSubmit} disabled={inProgress} >Signup</button> )

                    }                    
                </div>
                
            </form>
        )
    }
 
}

function mapStateToProps (state) {
    return {
        auth : state.auth,
    };
}

export default connect(mapStateToProps)(Signup);