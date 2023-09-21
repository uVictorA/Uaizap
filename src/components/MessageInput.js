import React, { useState } from "react";
import styled from "styled-components";

const MessageInputContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  background-color: #fff;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  padding: 10px;
  position: sticky;
  bottom: 20px;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  margin: 20px;
`;

const InputRemetente = styled.input`
  flex: 1;
  padding: 10px;
  border: 1px solid #CCCCCC;
  border-radius: 2px;
  outline: none;
`;

const InputMessagem = styled.input`
  flex: 1;
  padding: 10px;
  border: 1px solid #CCCCCC;
  border-radius: 2px;
  outline: none;
`;

const SendButton = styled.button`
  padding: 10px 20px;
  background-color: #00bfa5;
  color: #fff;
  border: none;
  border-radius: 8px;
  cursor: pointer;
`;

function MessageInput({ sender, setSender, onSend }) {
  const [content, setContent] = useState("");

  const handleSend = () => {
    onSend(content);
    setContent("");
  };

  return (
    <MessageInputContainer className="message-input">
      <InputRemetente
        type="text"
        placeholder="Nome do remetente"
        value={sender}
        onChange={(e) => setSender(e.target.value)}
      />
      <InputMessagem
        type="text"
        placeholder="Digite sua mensagem..."
        value={content}
        onChange={(e) => setContent(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            handleSend();
          }
        }}
      />
      <SendButton onClick={handleSend}>Enviar</SendButton>
    </MessageInputContainer>
  );
}

export default MessageInput;
