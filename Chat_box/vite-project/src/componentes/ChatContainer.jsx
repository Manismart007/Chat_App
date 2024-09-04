import React, { useEffect, useState } from 'react';
import { FaYoutube } from 'react-icons/fa';
import ChatList from './ChatList';
import InputText from './InputText';
import UserLogin from './UserLogin';
import socketIOClient from 'socket.io-client'

const ChatContainer = () => {
    const [user, setUser] = useState(localStorage.getItem("user"));
    const [chats, setChats] = useState([]);
    const socketio = socketIOClient('http://localhost:3001');

    useEffect(() => {
        socketio.on('chat', (chats) => {
            setChats(chats)
        })
    })

    const sendToSocket = (chat) => {
        socketio.emit('chat', chat)
    }

    const addMessage = (chat) => {
       const newChat = {...chat, user: localStorage.getItem("user"),
        avatar: localStorage.getItem('avatar')
       }
       setChats([...chats, newChat])
       sendToSocket([...chats, newChat])
    }

    const Logout = () => {
        localStorage.removeItem("user");
        localStorage.removeItem("avatar");
        setUser('')
    }
  
  return (
    <div>
        {user ? (
      <div>
        <div className='chats_header'>
          <h4>USERNAME : {user}</h4>
          <p>
            <FaYoutube className='chats_icon' />
            Code with {user}
          </p>
          <p className='chats_logout' onClick={Logout}> 
            <strong>Logout</strong>
            </p>
        </div>
        <ChatList chats = {chats}/>
        <InputText addMessage = {addMessage} />
      </div>
      ) : 
        <UserLogin setUser = {setUser} />
      
    } 
    </div>
  );
};

export default ChatContainer;
