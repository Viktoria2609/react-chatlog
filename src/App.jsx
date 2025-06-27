import './App.css';
import ChatLog from './components/ChatLog';
import chatMessages from './data/messages.json';
import { useState } from 'react';
import {
  toggleLikedStatus,
  calculateTotalLikeCount,
  getParticipants,
} from './Helper_functions/helper_message';
const App = () => {
  const [messages, setMessages] = useState(chatMessages);

  const toggleLike = (id) => {
    const updatedMessages = toggleLikedStatus(messages, id);
    setMessages(updatedMessages);
  };
  const countLikes = calculateTotalLikeCount(messages);
  const chatHeader = getParticipants(messages);

  return (
    <div id="App">
      <header>
        <h1> {chatHeader} </h1>
        <h2>{countLikes} 💖</h2>
      </header>
      <main>
        <ChatLog entries={messages} onLikeToggle={toggleLike} />
      </main>
    </div>
  );
};

export default App;
