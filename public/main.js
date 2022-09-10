const socket = io.connect(location.origin);
const inputEl = document.querySelector('.message');



socket.on("new-message", (data) => console.log(data));
function sendMessage(e) {
  socket.emit("chat-message", inputEl.value);
  inputEl.value = "";
}
