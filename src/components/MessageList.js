import React from 'react';
import Message from './Message';

function MessageList({ messages, onDelete }) {
  return (
    <div className="message-list">
      {messages.map((message, index) => (
        <Message key={index} message={message} onDelete={() => onDelete(index)} />
      ))}
    </div>
  );
}

export default MessageList;
