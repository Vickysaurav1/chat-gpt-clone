import React from "react";
import Messages from "./Messages";
import NewMessageInput from "./NewMessageInput";
import { useSelector } from "react-redux";

const ChatLogo = () => {
  return (
    <div className="chat_gpt_logo_container">
      <p className="chat_gpt_logo">ChatGPT</p>
    </div>
  );
};

export default function Chat() {
  const selectedConversationId = useSelector((state) => 
    state.dashboard.selectedConversationId
  );
  return (
    <div className="chat_container">
      {!selectedConversationId ? (
        <ChatLogo />
      ) : (
        <div className="chat_selected_container">
          <Messages />
          <NewMessageInput />
        </div>
      )}
    </div>
  );
}
