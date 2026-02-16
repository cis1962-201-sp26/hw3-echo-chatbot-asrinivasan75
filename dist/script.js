var currentChat = { messages: [] };
var STORAGE_KEY = 'chatjs-history';
/**
 * Simulates a bot response to a user message
 * @param {string} userMessage - The user's message
 * @returns {string} - The bot's response
 */
function simulateBotResponse(userMessage) {
    // Simulate bot response with a delay
    setTimeout(function () {
        var botReply = "You said: \"".concat(userMessage, "\"");
        sendMessage('Echo', botReply);
    }, 500);
}
/**
 * Sends a message in the current chat
 * @param {string} role - The role of the message sender ('User' or 'Echo')
 * @param {string} message - The message content
 */
function sendMessage(role, message) {
    var newMessage = { role: role, content: message };
    currentChat.messages.push(newMessage);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(currentChat));
    renderMessages(currentChat.messages);
}
/**
 * Renders the messages in the chat current selected
 * @param {{role: string, content: string}[]} messages - The messages to render
 */
function renderMessages(messages) {
    var container = document.getElementById('messages');
    if (!container)
        return;
    container.innerHTML = '';
    for (var _i = 0, messages_1 = messages; _i < messages_1.length; _i++) {
        var msg = messages_1[_i];
        var bubble = document.createElement('div');
        var cssClass = msg.role === 'User' ? 'user' : 'echo';
        bubble.className = "message ".concat(cssClass);
        var roleLabel = document.createElement('div');
        roleLabel.className = 'message-role';
        roleLabel.textContent = msg.role;
        var text = document.createElement('span');
        text.textContent = msg.content;
        bubble.appendChild(roleLabel);
        bubble.appendChild(text);
        container.appendChild(bubble);
    }
    // Scroll to bottom of chat
    var chatContainer = document.getElementById('chat-container');
    if (chatContainer) {
        chatContainer.scrollTop = chatContainer.scrollHeight;
    }
}
/**
 * Creates a new chat
 * @requirements
 * - If no chat exists, create a new chat object and stores it in local storage
 * - If a chat exits, delete the old chat and creates a new one
 * - Always render the chat list and messages after creating a new chat
 */
function createNewChat() {
    currentChat = { messages: [] };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(currentChat));
    renderMessages(currentChat.messages);
}
/**
 * Initializes the app
 * @requirements
 * - Fetch the chat object from local storage
 * - Renders the chat messages from the saved chat
 * - If no chat exists, create a new chat
 */
function initializeApp() {
    var saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
        currentChat = JSON.parse(saved);
        renderMessages(currentChat.messages);
    }
    else {
        createNewChat();
    }
    // Wire up the send button disable/enable based on input
    var input = document.getElementById('chat-input');
    var sendBtn = document.getElementById('send-btn');
    if (input && sendBtn) {
        input.addEventListener('input', function () {
            sendBtn.disabled = input.value.trim().length === 0;
        });
    }
}
// Event listener to reset the chat messages when the "New Chat" button is clicked
var newChatBtn = document.getElementById('new-chat-btn');
if (newChatBtn) {
    newChatBtn.addEventListener('click', function () {
        createNewChat();
    });
}
// Event listener to handle sending messages when the user submits the chat input form
var chatForm = document.getElementById('chat-form');
if (chatForm) {
    chatForm.addEventListener('submit', function (e) {
        e.preventDefault();
        var input = document.getElementById('chat-input');
        if (!input)
            return;
        var text = input.value.trim();
        if (text.length === 0)
            return;
        sendMessage('User', text);
        input.value = '';
        // Disable send button again since input is now empty
        var sendBtn = document.getElementById('send-btn');
        if (sendBtn) {
            sendBtn.disabled = true;
        }
        simulateBotResponse(text);
    });
}
// Initialize the app upon reload
initializeApp();
export {};
