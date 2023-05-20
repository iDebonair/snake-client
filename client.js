const net = require("net");
const { host, port } = require("./constants");
const connect = function() {
  const conn = net.createConnection({
    host,
    port
  });
  // interpret incoming data as text
  conn.setEncoding("utf8");
  conn.on("data", (data) => {
    console.log("Server says: ", data);
  });
  conn.on("connect", () => {
    console.log("Successfully connected to game server");
    conn.write("Name: FM");

  });
  return conn;
};


module.exports = connect;