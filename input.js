const {movementAndMessage} = require("./constants");

let connection;
const setupInput = (conn) => {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", (key) => handleUserInput(key, connection));
  return stdin;
};

const handleUserInput = function(key) {
  if (key === '\u0003') {
    process.exit(); // Exit the program if the 'Ctrl + C' key combination is pressed
  }
  const movementOrMessage = movementAndMessage[key];
  if (movementOrMessage) {
    connection.write(movementOrMessage);
  }
};
module.exports = setupInput;