"use strict";

let chatbotToggler = document.querySelector(".chatbot-toggler");
let closeBtn = document.querySelector(".close-btn");
let chatbox = document.querySelector(".chatbox");
let chatInput = document.querySelector(".chat-input textarea");
let sendChatBtn = document.querySelector(".chat-input span");

let userMessage = null; // Variable to store user's message
let inputInitHeight = chatInput.scrollHeight; //Initial scroll height of chatInput

// API configuration
let API_KEY = "PASTE-YOUR-API-KEY-HERE"; // Your API key here
let API_URL = `https://generativelanguage.googleapis.com/v1/models/gemini-pro:generateContent?key=${API_KEY}`;

let createChatLi = (message, className) => {
    // Create a chat <li> element with passed message and className
    let chatLi = document.createElement("li");
    chatLi.classList.add("chat", `${className}`);
    let chatContent = className === "outgoing" ? `<p></p>` : `<span class="material-symbols-outlined">smart_toy</span><p></p>`;
    chatLi.innerHTML = chatContent;
    chatLi.querySelector("p").textContent = message;
    return chatLi; // return chat <li> element
};

let generateResponse = async (chatElement) => {
    let messageElement = chatElement.querySelector("p");
    // Define the properties and message for the API request
    let requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            contents: [{
                role: "user",
                parts: [{ text: userMessage }]
            }]
        }),
    };

    // Send POST request to API, get response and set the reponse as paragraph text
    try {
        let response = await fetch(API_URL, requestOptions);
        let data = await response.json();
        if (!response.ok) throw new Error(data.error.message);

        // Get the API response text and update the message element
        messageElement.textContent = data.candidates[0].content.parts[0].text.replace(/\*\*(.*?)\*\*/g, '$1');
    } catch (error) {
        // Handle error
        messageElement.classList.add("error");
        messageElement.textContent = error.message;
    } finally {
        chatbox.scrollTo(0, chatbox.scrollHeight);
    }
}



let handleChat = () => {
    userMessage = chatInput.value.trim(); // Get user entered message and remove extra whitespace
    if (!userMessage) return;

    // Clear the input textarea and set its height to default
    chatInput.value = "";
    chatInput.style.height = `${inputInitHeight}px`;

    // Append the user's message to the chatbox
    chatbox.appendChild(createChatLi(userMessage, "outgoing"));
    chatbox.scrollTo(0, chatbox.scrollHeight);

    setTimeout(() => {
        // Display "Thinking..." message while waiting for the response
        let incomingChatLi = createChatLi("Thinking...", "incoming");
        chatbox.appendChild(incomingChatLi);
        chatbox.scrollTo(0, chatbox.scrollHeight);
        generateResponse(incomingChatLi);
    }, 600);
}

chatInput.addEventListener("input", () => {
    // Adjust the height of the input textarea based on its content
    chatInput.style.height = `${inputInitHeight}px`;
    chatInput.style.height = `${chatInput.scrollHeight}px`;
});

chatInput.addEventListener("keydown", (e) => {
    // If Enter key is pressed without Shift key and the window 
    // width is greater than 800px, handle the chat
    if (e.key === "Enter" && !e.shiftKey && window.innerWidth > 800) {
        e.preventDefault();
        handleChat();
    }
});

sendChatBtn.addEventListener("click", handleChat);
closeBtn.addEventListener("click", () => document.body.classList.remove("show-chatbot"));
chatbotToggler.addEventListener("click", () => document.body.classList.toggle("show-chatbot"));

