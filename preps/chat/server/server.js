const express = require('express');
const app = express();
var cors = require('cors')
app.use(cors())

app.get('/', (req, res) => {
  return res.status(200).send("Socker server")
})

const mensajes = [
  {
    msg: "Bienvenido al chat",
    user: "admin"
  }
]

const server = app.listen(4000, () => {
  console.log("server up and running")
})

const io = require('socket.io')(server);

io.on("connection", (socket) => {
  console.log("alguien se ha conectado al socket " + socket.handshake.address);
  socket.emit("messages", mensajes);
  socket.on("message", (data) => {
    console.log(data)
    mensajes.push(data);
    socket.broadcast.emit("messages", mensajes);
    socket.emit("messages", mensajes);
  })
})
