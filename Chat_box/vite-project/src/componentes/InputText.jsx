// import React, { useState } from 'react'

// const InputText = ({addMessage}) => {
//     const [message, setMessage] = useState("");
//     // const sendMessage = () => {
//     //     addMessage(message);
//     //     setMessage('');
//     // }

//     const sendMessage = () => {
//         if (!message.trim()) return; // Prevent sending empty messages
//         addMessage({ message }); // Wrap message in an object
//         setMessage('');
//     };
    
//   return (
//     <div className='inputtext-container'>
//         <textarea placeholder='Input here ...' name="message" id="message" rows='6' onChange={(e) => setMessage(e.target.value)}></textarea>
//         <button onClick={sendMessage}>Send</button>
//     </div>
//   )
// }

// export default InputText

import React, { useState } from 'react';

const InputText = ({ addMessage }) => {
    const [message, setMessage] = useState("");

    const sendMessage = () => {
        if (!message.trim()) return; // Prevent sending empty messages
        addMessage({ message: message.trim() }); // Pass as an object with 'message' key
        setMessage(''); // Clear the textarea
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            sendMessage();
        }
    };

    return (
        <div className='inputtext-container'>
            <textarea
                placeholder='Input here ...'
                name="message"
                id="message"
                rows='6'
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyDown={handleKeyPress}
            ></textarea>
            <button onClick={sendMessage}>Send</button>
        </div>
    );
};

export default InputText;
