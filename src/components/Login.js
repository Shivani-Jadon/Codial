import React from 'react';

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
    }

    render(){
                  
        return(
            <form className='login-form'>
                <span className='login-signup-header'>Login</span>
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
                    <button onClick={this.handleFormSubmit}>Login</button>
                </div>
                
            </form>
        )
    }
 
}

export default Login;