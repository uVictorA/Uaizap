import React from "react";
import { styled } from "styled-components";

const MessageContainer = styled.div`
  background-color: #fff;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  padding: 10px;
  max-width: 60%;
  word-wrap: break-word;
  position: relative;

  &.left {
    align-self: flex-start;
  }

  &.right {
    align-self: flex-end;
    background-color: #dcf8c6;
  }
`;
const DeleteButton = styled.button`
  background-color: #ff4d4d;
  margin-left: 10px;
  color: #fff;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  padding: 10px 20px;
`;
const Sender = styled.span`
  font-weight: bold;
`;

function Message({ message, onDelete }) {
  return (
    <MessageContainer
      className={
        message.sender === "eu" || message.sender === "" ? "right" : "left"
      }
    >
      {message.sender !== "eu" && message.sender !== "" && (
        <Sender>{message.sender}: </Sender>
      )}
      <span>{message.content}</span>
      <DeleteButton onClick={onDelete}>
        Excluir
      </DeleteButton>
    </MessageContainer>
  );
}

export default Message;
