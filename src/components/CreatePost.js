import React, { Component } from 'react';
import {connect} from 'react-redux';
import {createPost} from '../actions/posts';

class CreatePost extends Component {

    constructor(props) {
        super(props);
        this.state = {
            content : '',
        };
    }

    handleOnClick = () => {
        //  dispatch action
        this.props.dispatch( createPost(this.state.content) );
        this.setState({
            content : '',
        })
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
                 onChange= {this.handleOnChange}
                />

                <button id="add-post-btn" onClick={this.handleOnClick}>
                    Add post
                </button>
            </div>
        );
    }
}

export default connect()(CreatePost);