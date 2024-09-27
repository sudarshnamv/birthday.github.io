// Function to play the birthday song automatically when the countdown ends
const playBirthdaySong = () => {
    const song = document.getElementById('birthdaySong');
    song.play();
};

// Function to update countdown timer with animation
const updateCountdown = () => {
    const countDate = new Date('July 13, 2024 00:00:00 GMT+0530').getTime();
    const now = new Date().getTime();
    const gap = countDate - now;

    if (gap <= 0) {
        document.getElementById('days').textContent = '00';
        document.getElementById('hours').textContent = '00';
        document.getElementById('minutes').textContent = '00';
        document.getElementById('seconds').textContent = '00';
        playBirthdaySong();
    } else {
        const seconds = 1000;
        const minutes = seconds * 60;
        const hours = minutes * 60;
        const days = hours * 24;

        const textDays = Math.floor(gap / days);
        const textHours = Math.floor((gap % days) / hours);
        const textMinutes = Math.floor((gap % hours) / minutes);
        const textSeconds = Math.floor((gap % minutes) / seconds);

        document.getElementById('days').textContent = formatTime(textDays);
        document.getElementById('hours').textContent = formatTime(textHours);
        document.getElementById('minutes').textContent = formatTime(textMinutes);
        document.getElementById('seconds').textContent = formatTime(textSeconds);

        if (gap < 24 * hours) {
            document.getElementById('timer').style.color = '#e74c3c'; // Red color
        } else if (gap < 7 * days) {
            document.getElementById('timer').style.color = '#f39c12'; // Orange color
        } else {
            document.getElementById('timer').style.color = '#3498db'; // Blue color
        }
    }
};

// Function to format time to always display two digits (e.g., 03 instead of 3)
const formatTime = (time) => {
    return time < 10 ? `0${time}` : time;
};

// Initialize countdown when the page loads
updateCountdown();

// Update countdown every second
setInterval(updateCountdown, 1000);

// Basic AI Chat feature
const chatMessages = document.getElementById('chatMessages');
const chatInput = document.getElementById('chatInput');
const sendChatButton = document.getElementById('sendChatButton');

const responses = {
    "hello": "Hi there! How can I help you today?",
    "how are you": "I'm just a program, but I'm here to assist you!",
    "happy birthday": "Thank you! Let's celebrate Uthapam's birthday together!",
    "bye": "Goodbye! Have a great day!",
    "what's your name": "I'm your friendly AI assistant!",
    "tell me a joke": "Why don't scientists trust atoms? Because they make up everything!",
    "what's the time": "I'm not sure about the exact time, but it's always a good time to celebrate!",
    "who created you": "I was created by a team of talented developers to assist you!",
    "what is the purpose of life": "To enjoy moments like Uthapam's birthday!",
    "where are you from": "I'm from the vast world of the internet!",
    "what's your favorite color": "I love all the colors, especially those that make Uthapam's birthday bright!",
    "what's your favorite food": "I don't eat, but I imagine birthday cake is delicious!",
    "do you like music": "Absolutely! Especially birthday songs!",
    "how old are you": "I'm ageless, just like our friendship!",
    "what's your hobby": "Helping you celebrate and answering your questions!"
};

const sendMessage = () => {
    const userMessage = chatInput.value.toLowerCase();
    const messageDiv = document.createElement('div');
    messageDiv.textContent = `You: ${chatInput.value}`;
    chatMessages.appendChild(messageDiv);
    chatInput.value = '';

    const aiResponse = responses[userMessage] || "I'm not sure how to respond to that.";
    const responseDiv = document.createElement('div');
    responseDiv.textContent = `AI: ${aiResponse}`;
    chatMessages.appendChild(responseDiv);

    chatMessages.scrollTop = chatMessages.scrollHeight;
};

sendChatButton.addEventListener('click', sendMessage);
chatInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        sendMessage();
    }
});
