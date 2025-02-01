import { useState } from 'react';

import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import ChatHistory from './ChatHistory';
import ChatInput from './ChatInput';

export default function Chatbot() {
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const sendMessage = () => {
    if (inputValue.trim()) {
      const newMessage = { text: inputValue, sender: 'user', timestamp: new Date() };
      setMessages([...messages, newMessage]);
      setInputValue('');

      // Simulate bot response
      setTimeout(() => {
        const botResponse = { text: 'This is a bot response.', sender: 'bot', timestamp: new Date() };
        setMessages((prevMessages) => [...prevMessages, botResponse]);
      }, 1000);
    }
  };

  return (
    <Card className="w-full max-w-md mx-auto mt-10">
      <CardHeader>
        <CardTitle className="text-2xl font-bold">Chatbot</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col space-y-4">
        <ChatHistory messages={messages} />
        <ChatInput
          inputValue={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onSend={sendMessage}
        />
      </CardContent>
    </Card>
  );
}
