const mongoose = require('mongoose');
const app = require('./app')

mongoose.connect("mongodb://localhost:27017/todos").then(
  () => app.listen(4000, () => { console.log("server up and running") })
).catch(
  () => console.error("no se ha conectado con base de datos")
)
