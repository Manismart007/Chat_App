import React, { useState } from 'react';
import { FaReact } from 'react-icons/fa';
import _ from 'lodash'

const UserLogin = ({setUser}) => {
  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    backgroundColor: '#f5f5f5',
    fontFamily: 'Arial, sans-serif',
  };

  const headerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: '20px',
  };

  const iconStyle = {
    color: 'blue',
    marginBottom: '10px',
  };

  const formStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  };

  const inputStyle = {
    padding: '10px',
    marginBottom: '10px',
    borderRadius: '4px',
    border: '1px solid #ccc',
    width: '100%',
    maxWidth: '300px',
  };

  const buttonStyle = {
    padding: '10px 20px',
    borderRadius: '4px',
    border: 'none',
    backgroundColor: 'blue',
    color: 'white',
    cursor: 'pointer',
    width: '100%',
    maxWidth: '300px',
  };

  const [userName, setUserName] = useState();

  const handleUser = () => {
    if(!userName) return;
    localStorage.setItem("user", userName)
    setUser(userName)
    localStorage.setItem("avatar", `https://picsum.photos/id/${_.random(1, 1000)}/200/300`)
  }

  return (
    <div style={containerStyle}>
      <div style={headerStyle}>
        <FaReact size={50} style={iconStyle} />
        <h1>Chat App</h1>
      </div>
      <div style={formStyle}>
        <input
          type="text"
          placeholder="Enter the Unique Name"
          style={inputStyle}
          onChange={(e) => setUserName(e.target.value)}
        />
        <button style={buttonStyle} onClick={handleUser}>Login</button>
      </div>
    </div>
  );
};

export default UserLogin;
