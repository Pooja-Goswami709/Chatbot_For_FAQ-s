document.addEventListener("DOMContentLoaded", function(){
    const chatContainer = document.getElementById("chatbot-container");
    const closeBtn = document.getElementById("close-btn");
    const sendBtn = document.getElementById("send-btn");
    const chatbotInput = document.getElementById("chatbot-input");
    const chatbotMessages = document.getElementById("chatbot-messages");
    const chatbotIcon = document.getElementById("chatbot-icon");

    
    chatbotIcon.addEventListener("click", function () {
        chatContainer.classList.remove("hidden");
        chatContainer.style.display = "flex";
        chatbotIcon.style.display = "none"; 
    });

    
    closeBtn.addEventListener("click", function() {
        chatContainer.classList.add("hidden");
        chatContainer.style.display = "none";
        chatbotIcon.style.display = "flex";
    });

   
    sendBtn.addEventListener("click", sendMessages);
    chatbotInput.addEventListener("keypress", function (e) {
        if (e.key === "Enter") {
            sendMessages();
        }
    });

    function sendMessages() {
        const userMessage = chatbotInput.value.trim();
        if (userMessage) {
            appendMessage("user", userMessage);
            chatbotInput.value = "";
            getBotResponse(userMessage);
        }
    }

    function appendMessage(sender, message) {
        const messageElement = document.createElement("div");
        messageElement.classList.add("message", sender);

                messageElement.innerHTML = message.replace(/\n/g, "<br>");

        chatbotMessages.appendChild(messageElement);
        chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
    }

     function dummyResponses(userMessage) {
        const lower = userMessage.toLowerCase();

        
        if (["hi", "hello", "hey"].some(word => lower.includes(word))) {
            return "👋 Hi there! How are you today?";
        }
        if (lower.includes("how are you")) {
            return "😊 I’m doing great, thanks for asking! How about you?";
        }
        if (lower.includes("good morning")) {
            return "🌅 Good morning! Hope your day is off to a great start!";
        }
        if (lower.includes("good night")) {
            return "🌙 Good night! Sleep well and sweet dreams!";
        }

             if (lower.includes("capital of india")) {
            return "🇮🇳 The capital of India is New Delhi.";
        }
        if (lower.includes("largest planet")) {
            return "🪐 Jupiter is the largest planet in our solar system.";
        }
        if (lower.includes("fastest animal")) {
            return "🐆 The cheetah is the fastest land animal.";
        }

                if (lower.includes("top books 2025") || lower.includes("book suggestions")) {
            return `📚 Here are 5 must-read books of 2025:\n
                 1. *The Emperor of Gladness* – Ocean Vuong\n
                 2. *Atmosphere* – Taylor Jenkins Reid\n
                 3. *Katabasis* – R.F. Kuang\n
                 4. *Everything Is Tuberculosis* – John Green\n
                 5. *Wild Dark Shore* – Charlotte McConaghy`;
        }

        
        if (lower.includes("joke") || lower.includes("funny")) {
            const jokes = [
                "😂 Why don’t skeletons fight each other? Because they don’t have the guts!",
                "🤣 Why did the computer go to the doctor? Because it caught a virus!",
                "😆 Why did the math book look sad? Because it had too many problems!",
                "😁 Why can’t your nose be 12 inches long? Because then it would be a foot!",
                "😜 Why did the scarecrow win an award? Because he was outstanding in his field!"
            ];
            return jokes[Math.floor(Math.random() * jokes.length)];
        }

        
        if (lower.includes("who are you")) {
            return "🤖 I'm DummyBot — your chatbot friend!";
        }

        
        return "🤔 Sorry, I don’t know that yet. Try asking 'capital of India', 'largest planet', 'book suggestions', or 'tell me a joke'.";
    }

    
    function getBotResponse(userMessage) {
        const botMessage = dummyResponses(userMessage);
        appendMessage("bot", botMessage);
    }
});


