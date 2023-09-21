import React, { useState } from 'react';
import './App.css';
import MessageList from './components/MessageList';
import MessageInput from './components/MessageInput';
// import Message from './Message';

function App() {
  const [messages, setMessages] = useState([]);
  const [sender, setSender] = useState('');

  const addMessage = (content) => {
    if (content.trim() !== '') {
      const newMessage = { sender, content };
      setMessages([...messages, newMessage]);
      setSender('');
    }
  };

  const deleteMessage = (index) => {
    const updatedMessages = [...messages];
    updatedMessages.splice(index, 1);
    setMessages(updatedMessages);
  };

  return (
    <div className="App">
      <h1>Uaizap </h1>
      <MessageList messages={messages} onDelete={deleteMessage} />
      <MessageInput sender={sender} setSender={setSender} onSend={addMessage} />
    </div>
  );
}

export default App;
