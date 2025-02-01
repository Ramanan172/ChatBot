import { format } from 'date-fns';

function ChatMessage({ message }) {
  return (
    <div
      className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
    >
      <div
        className={`p-2 rounded-lg ${
          message.sender === 'user' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'
        }`}
      >
        <p>{message.text}</p>
        <p className="text-xs text-gray-500">
          {format(message.timestamp, 'HH:mm:ss')}
        </p>
      </div>
    </div>
  );
}

export default ChatMessage;
