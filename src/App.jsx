import './App.css';
import ChatLog from './components/ChatLog';
import chatMessages from './data/messages.json';

const App = () => {
  const firstMessage = chatMessages[0];
  return (
    <div id="App">
      <header>
        <h1> Chat Log </h1>
      </header>
      <main>
        <ChatLog entries={chatMessages} />
        {/* Wave 01: Render one ChatEntry component
        Wave 02: Render ChatLog component */}
      </main>
    </div>
  );
};

export default App;
