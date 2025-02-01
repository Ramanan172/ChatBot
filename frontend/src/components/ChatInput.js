import { Button } from './ui/button';
import { Input } from './ui/input';

function ChatInput({ inputValue, onChange, onSend }) {
  return (
    <div className="flex space-x-2">
      <Input
        value={inputValue}
        onChange={onChange}
        placeholder="Type a message..."
        className="flex-1"
      />
      <Button onClick={onSend}>Send</Button>
    </div>
  );
}

export default ChatInput;
