const WebSocket = require('ws')

const wss = new WebSocket.Server({ port: 8080 })

wss.on('connection', (ws) => {
  ws.on('message', (message) => {     
    console.log(`Clint saying:${message}`)
  })
  setInterval(function(){
    ws.send(Math.random())},1500);
})