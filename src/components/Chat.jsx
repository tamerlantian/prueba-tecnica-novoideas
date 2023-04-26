import React from "react";
import { useFetchChatsQuery } from "../store";
import { getMessageBubble } from "./getMessageBubble";
import { Typography } from "@mui/material";

const Chat = () => {
  // get credentials from localstorage
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
          {getMessageBubble(sender, message)}
        </React.Fragment>
      );
    });
  }
  return (
    <div>
      <Typography variant="h4" sx={{ fontWeight: "bold" }}>
        Chat
      </Typography>
      <div className="chat__container">{content}</div>
    </div>
  );
};

export default Chat;
