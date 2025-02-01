import ChatMessage from './ChatMessage';

function ChatHistory({ messages }) {
  return (
    <div className="h-80 overflow-y-auto space-y-2">
      {messages.map((message, index) => (
        <ChatMessage key={index} message={message} />
      ))}
    </div>
  );
}

export default ChatHistory;
