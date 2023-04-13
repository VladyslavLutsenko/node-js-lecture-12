const ws = require('ws');

const wsServer = new ws.Server({port: 5001});

const clients = [];

wsServer.on("connection", (client) => {
  clients.push(client);
  console.log('New client connected');

  setTimeout(() => {
    clients.forEach(currentClient => currentClient.send(`New client joined ${clients.length}`))
  }, 3000);
});
