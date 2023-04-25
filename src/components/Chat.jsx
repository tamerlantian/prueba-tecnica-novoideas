import React from "react";
import { useFetchChatsQuery } from "../store";

const Chat = () => {
  const credentials = {
    username: localStorage.getItem("username"),
    password: localStorage.getItem("password"),
  };

  const { data, isLoading, error } = useFetchChatsQuery(credentials);

  let content;
  if (isLoading) {
    content = <div>Cargando...</div>;
  } else if (error) {
    content = <div>Ups! Ha habido un error.</div>;
  } else {
    content = data.map(({ sender, message }, i) => {
      return (
        <React.Fragment key={i}>
          <div>{sender}</div>
          <div>{message}</div>
        </React.Fragment>
      );
    });
  }
  return (
    <div>
      <h1>Chat</h1>
      <div>{content}</div>
    </div>
  );
};

export default Chat;
