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

const handleUserInput = function (key) {
  if (key === '\u0003') {
    process.exit(); // Exit the program if the 'Ctrl + C' key combination is pressed
  }
  if(key === 'w'){
    connection.write("Move: up")
  }else if(key === 'a'){
    connection.write("Move: left");
  }else if(key === 's'){
    connection.write("Move: down")
  }else if(key === 'd'){
    connection.write("Move: right")
  }
  if (key === '1') {
    connection.write("Say: Hey");
  } else if (key === '2') {
    connection.write("Say: Good Job");
  } else if (key === '3') {
    connection.write("Say: Nice!!");
  }
};
module.exports = setupInput;