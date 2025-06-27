export const toggleLikedStatus = (messages, id) => {
  return messages.map((msg) =>
    msg.id === id ? { ...msg, liked: !msg.liked } : msg
  );
};

export const calculateTotalLikeCount = (messages) => {
  return messages.reduce((acc, msg) => (msg.liked ? acc + 1 : acc), 0);
};

export const getParticipants = (messages) => {
  const uniqueSenders = [...new Set(messages.map(msg => msg.sender))];
  return `Magic Messages between ${uniqueSenders.join(" & ")}`;
};