import React from 'react';

const ChatList = ({chats}) => {
    const user = localStorage.getItem("user")


    function SenderChat({messages, username, avatar}) {
        return (
            <div className="chat-item sender">
                <img src={avatar} alt="Sender" className="chat-image" />
                <p className="chat-message"><strong>{username}</strong> {messages}</p>
            </div>
        );
    }

    function ReceiverChat({messages, username, avatar}) {
        return (
            <div className="chat-item receiver">
                <img src={avatar} alt="Receiver" className="chat-image" />
                <p className="chat-message"><strong>{username}</strong> <br />{messages}</p>
            </div>
        );
    }

    return (
        <div className="chat-list">
            {
                chats.map((chat, index) => {
                  if(chat.user === user) {
                  return <SenderChat 
                  key = {index}
                  messages = {chat.message} 
                  username = {chat.user} 
                  avatar = {chat.avatar}
                  />
                }
                return <ReceiverChat 
                key = {index}
                messages = {chat.message} 
                username = {chat.user} 
                avatar = {chat.avatar}
                />
    })
            }
        </div>
    );
};

export default ChatList;
