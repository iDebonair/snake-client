const host = '10.0.2.15'; // IP address here,
const port = 50541;// PORT number here,

// This accepts all our key inputs and store as an object which is then exported to be used by other parts of our game
const movementAndMessage = {
  'w': "Move: up",
  'a': "Move: left",
  's': "Move: down",
  'd': "Move: right",
  '1': "Say: Hey",
  '2': "Say: Good Job",
  '3': "Say: Nice!!"
};

module.exports = {
  host,
  port,
  movementAndMessage,
};
