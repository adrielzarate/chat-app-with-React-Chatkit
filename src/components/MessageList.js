import React from 'react';
import ReactDOM from 'react-dom';
import Message from './Messaje';

// const DUMMY_DATA = [
//     {
//         senderId: 'perborgen',
//         text: 'Hey, how is it going?'
//     },
//     {
//         senderId: 'janedoe',
//         text: 'Great! How about you?'
//     },
//     {
//         senderId: 'perborgen',
//         text: 'Good to hear! I am great as well'
//     }
// ];

class MessageList extends React.Component {

    componentWillUpdate() {
        const node = ReactDOM.findDOMNode(this);
        this.shouldScrollToBottom = node.scrollTop + node.clientHeight + 100 >= node.scrollHeight;
    }

    componentDidUpdate() {
        const node = ReactDOM.findDOMNode(this);
        node.scrollTop = node.scrollHeight;
    }

    render() {
        if (!this.props.roomId) {
            return(
                <div className="message-list">
                    <div className="join-room">&larr; Join a room!</div>
                </div>
            );
        }
        return (
            <div className="message-list">
                {this.props.messages.map((message, index) => {
                    return (
                        <Message key={index} username={message.senderId} text={message.parts[0].payload.content} />
                        // <div key={index} className="message">
                        //     <div className="message-username">{message.senderId}</div>
                        //     <div className="message-text">{message.parts[0].payload.content}</div>
                        // </div>
                    );
                })} 
            </div>
        );
    }
}

export default MessageList;