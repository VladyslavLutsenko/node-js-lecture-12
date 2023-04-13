const ws = require('ws');

const wsServer = new ws.Server({port: 5001});

const clients = [];

wsServer.addListener("connection", client => {
  console.log('New user connected!');

  clients.push(client);

  client.addListener("message", data => {
    const parsedData = JSON.parse(data);

    clients.forEach(currentClient => {
      if (currentClient === client) {
        return;
      }

      currentClient.send(JSON.stringify(parsedData));
    })
  });
})
