const form = document.getElementById('genie-form');
const chat = document.getElementById('chat');
const input = document.getElementById('input');

const replies = [
  "Cool!", "Awesome!", "Noice", "Killer idea",
  "Lowkey fire", "I hear you...", "Sounds like a plan"
];

const addMessage = (text, sender) => {
  const message = document.createElement('div');
  message.className = `message ${sender}`;
  message.textContent = `${sender === 'user' ? 'You' : 'Genie'}: ${text}`;
  chat.appendChild(message);
  chat.scrollTop = chat.scrollHeight;
};

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const userInput = input.value.trim();
  if (!userInput) return;

  addMessage(userInput, 'user');
  input.value = '';

  setTimeout(() => {
    const botReply = replies[Math.floor(Math.random() * replies.length)];
    addMessage(botReply, 'bot');
  }, 500);
});

console.log("Globocorp GPT Genie 2.0 loaded @ " + new Date());