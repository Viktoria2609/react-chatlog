import './App.css';
import ChatLog from './components/ChatLog';
import chatMessages from './data/messages.json';
import { useState } from 'react';

const App = () => {
  const [messages, setMessages] = useState(chatMessages);

  const toggleLike = (id) => {
    const updatedMessages = messages.map((msg) =>
      msg.id === id ? { ...msg, liked: !msg.liked } : msg
    );
    setMessages(updatedMessages);
  };

  const countLikes = messages.filter((msg) => msg.liked).length;
  return (
    <div id="App">
      <header>
        <h1> Magic Messages </h1>
        <h2>{countLikes} 💖</h2>
      </header>
      <main>
        <ChatLog entries={messages} onLikeToggle={toggleLike} />
      </main>
    </div>
  );
};

export default App;
