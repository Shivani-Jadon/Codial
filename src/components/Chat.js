import React, { Component } from 'react';

class Chat extends Component {
    constructor (props) {
        super(props);

        this.state = {
            messages : [],
            typedMessage: '',
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
                    <button></button>
                </div>
            </div>
        );
    }
}

export default Chat;