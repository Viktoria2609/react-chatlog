import './ChatEntry.css';
import PropTypes from 'prop-types';
import TimeStamp from './TimeStamp';


const ChatEntry = ({sender, body, timeStamp}) => {
  const bubbleClass = sender === 'Allen' ? 'local' : 'remote';
  return (
    <div className="chat-entry local">
      <h2 className="entry-name">🌸{sender}🌸</h2>
      <section className="entry-bubble">
        <p>{body}</p>
        <p className="entry-time">
          <TimeStamp time={timeStamp}/>
          </p>
        <button className="like">🤍</button>
      </section>
    </div>
  );
};

ChatEntry.propTypes = {
  sender: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  timeStamp: PropTypes.string.isRequired,
};

export default ChatEntry;
