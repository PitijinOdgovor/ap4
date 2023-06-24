document.addEventListener("DOMContentLoaded", function() {
  var sendButton = document.getElementById("send-button");
  var messageInput = document.getElementById("message-input");
  var chatDisplay = document.getElementById("chat-display");

  var userNames = ["Veseli Mucko", "Veseli Vrabac", "Ivana iz Šibenika", "Petar"];
  var userColors = ["user1-message", "user2-message", "user3-message", "user4-message"];

  sendButton.addEventListener("click", function() {
    var message = messageInput.value;
    if (message) {
      var messageContainer = document.createElement("div");
      messageContainer.classList.add("message");

      var messageContent = document.createElement("div");
      messageContent.classList.add("message-content");

      var userIndex = Math.floor(Math.random() * userNames.length);
      var userName = userNames[userIndex];
      var userColor = userColors[userIndex];

      messageContent.classList.add(userColor); // Dodajte klasu boje korisnika

      messageContent.textContent = userName + ": " + message;

      messageContainer.appendChild(messageContent);
      chatDisplay.appendChild(messageContainer);

      messageInput.value = "";
      chatDisplay.scrollTop = chatDisplay.scrollHeight;
    }
  });

  messageInput.addEventListener("keydown", function(event) {
    if (event.keyCode === 13) {
      event.preventDefault();
      sendButton.click();
    }
  });
});