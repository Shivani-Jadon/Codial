import React, { Component } from 'react';
import io from 'socket.io-client';
import {connect} from 'react-redux';

class Chat extends Component {
    constructor (props) {
        super(props);

        this.state = {
            messages : [],
            typedMessage: '',
        }

        this.socket = io.connect('http://54.237.58.65:5000');
        this.userEmail = props.user.email;

        if (this.userEmail) {
            this.setupConnections();
        }

    }
    
    setupConnections = () => {
        const socketConnection = this.socket;

        this.socket.on('connect', function() {
            console.log("Connetion established");

            socketConnection.emit('join_room', {
                user_email: this.userEmail,
                chatroom: 'codial',
            });

            socketConnection.on('user_joined', function (data) {
                console.log("New user joined", data);
            })
        })

        this.socket.on('receive_message', function (data) {
            // add mesasge to state
            // const {messages} = self.state;
            // const messageObject = {};
            // messageObject.content = data.message;

            // if(data.user_email === self.userEmail) {
            //     messageObject.self = true;
            // }

            // self.setState({
            //     messages: [...messages, messageObject],
            //     typedMessage: '',
            // });
        });
    }
    
    handleSubmit = () => {
        const { typedMessage } = this.state;

        if (typedMessage && this.userEmail) {
            this.socket.emit('send_message', {
                message: typedMessage,
                user_email: this.userEmail,
                chatroom: 'codial',
            });
        }
    }

    render() {
        const {typedMessage, messages} = this.state;
        return (
            <div className="chat-container">
                <div className="chat-header">
                    Chat
                    <img 
                    src=""
                    alt="close-chat"
                    height={16}/>
                </div>

                <div className="chat-messages">
                    {messages.map((message) => (
                        <div className={message.self ? "chat-bubble chat-message-self" : "chat-bubble chat-message-other"}>
                            {message.content}
                        </div>
                    ))}
                </div>

                <div className="chat-footer">
                    <input type="text" value={typedMessage}
                        onChange={(e) => this.setState({ typedMessage: e.target.value})} />
                    <button>Submit</button>
                </div>
            </div>
        );
    }
}

function mapStateToProps({auth}) {
    return {
        user: auth.user,
    }
}

export default connect(mapStateToProps)(Chat);