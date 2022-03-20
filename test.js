const io = require("socket.io-client");
var socket = io("http://localhost:3000");

socket.on("connect", () => {
    socket.emit('subscribe', "CHANNEL_NAME");
});
socket.on("change_agent_status", data => {
    console.log(data)
    // Response from server
});