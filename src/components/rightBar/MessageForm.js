import React, { useState } from 'react';

function MessageForm({ recipient }) {
  const [message, setMessage] = useState('');

  const sendMessage = () => {
    // Here, you can implement your logic to send the message.
    // For a simple example, we'll just log the message to the console.
    console.log(`Message sent to ${recipient}: ${message}`);

    // You can also send the message to a server for real-time messaging.
    // Example: sendToServer(recipient, message);

    // Clear the message input
    setMessage('');
  };

  return (
    <div>
      <textarea
        placeholder="Type your message..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button onClick={sendMessage}>Send</button>
    </div>
  );
}

export default MessageForm;
