import React from 'react';
import {connect} from 'react-redux';
import { Redirect } from 'react-router-dom';
import {clearAuthState, login} from '../actions/auth';

class Login extends React.Component{

    constructor(props){
        super(props);
        // form handling with uncontrolled(Dom) components
        // this.emailInputRef = React.createRef();
        // this.passwordInputRef  = React.createRef();

        // form handling with controlled(React) components
        this.state = {
            email : '',
            password : '',
        }
    }

    componentWillUnmount(){
        this.props.dispatch( clearAuthState() );
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

    handleFormSubmit = (event) => {
        event.preventDefault();
        // console.log("emailRef", this.emailInputRef.current.value);
        // console.log("passwordRef", this.passwordInputRef);
        console.log(this.state);
        const {email, password } = this.state;

        if(email && password) {
            this.props.dispatch( login(email, password) );
        }
    }

    render(){
        const {error, inProgress, isLoggedIn } = this.props.auth;
        const {from} = this.props.location.state || { from: {pathname: '/'} };
            
        if (isLoggedIn) {
            return <Redirect to={from} />
        }

        return(
            <form className='login-form'>
                <span className='login-signup-header'>Login</span> 

                {error && <div className='alert error-dailog'>{error}</div>}

                <div className='field'>
                    <input type="email" placeholder="Email" required 
                    // ref={this.emailInputRef} 
                    onChange={this.handleEmailChange}
                    />
                </div>
                <div className='field'>
                    <input type="password" placeholder="Password" required 
                    // ref={this.passwordInputRef} 
                    onChange={this.handlePasswordChange}
                    />
                </div>
                <div className='field'>
                    {
                        inProgress ? (
                        <button onClick={this.handleFormSubmit} disabled={inProgress} >Logging in......</button> ) : (
                        <button onClick={this.handleFormSubmit} disabled={inProgress} >Login</button> )

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

export default connect(mapStateToProps)(Login);