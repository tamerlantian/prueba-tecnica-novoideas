// this function helps to apply custom css classes depending on who is sending the message
export const getMessageBubble = (sender, message) => {
  if (sender === "agent") {
    return <div className="message message--agent">{message}</div>;
  }
  return <div className="message message--customer">{message}</div>;
};
