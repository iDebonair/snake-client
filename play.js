const net = require("net");
const {setupInput} = require("./input.js");
const {connect}  = require("./client.js");
// establishes a connection with the game server

console.log("Connecting ...");
connect();

setupInput();
