import React from "react";
import { ChatData } from "./ChatData";
import ChatItem from "./ChatItem";

export default function ChatList({ query, isFullScreen }) {
  chatDataByQuery = ChatData.filter(
    (chatData) => chatData.name.toLowerCase().includes(query) || !query
  );
  return (
    <div>
      {chatDataByQuery.length > 0
        ? chatDataByQuery.map((item) => (
            <ChatItem isFullScreen={isFullScreen} key={item.id} name={item.name} ava={item.ava} />
          ))
        : "Không có kết quả"}
    </div>
  );
}
