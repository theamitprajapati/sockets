const url = 'ws://localhost:8080'
const connection = new WebSocket(url)

connection.onopen = () => {
  connection.send('Hello ws..') 
}

connection.onerror = (error) => {
  console.log(`WebSocket error: ${error}`)
}

connection.onmessage = (e) => {
  document.getElementById('server').innerHTML = e.data
}