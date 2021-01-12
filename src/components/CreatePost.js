import React, { Component } from 'react';

class CreatePost extends Component {

    constructor(props) {
        super(props);
        this.state = {
            content : '',
        };
    }

    handleOnClick = () => {
        //  dispatch action
    }

    handleOnChange = (event) => {
        this.setState({
            content : event.target.value,
        })
    }

    render() {
        return (
            <div className="create-post">
                <textarea 
                 className="add-post"
                 value={this.state.content}
                 onChange= {this.props.handleOnChange}
                />

                <button id="add-post-btn" onClick={this.props.handleOnClick}>
                    Add post
                </button>
            </div>
        );
    }
}

export default CreatePost;