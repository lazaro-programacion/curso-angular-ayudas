const mongoose = require("mongoose")
const app = require("./app")


mongoose.connect("mongodb://localhost:27017/hospital").then(
  () => {
    console.log("conectado");
    app.listen(
      4000, () => {
        console.log("Server up and running on port 4000")
      }
    )
  }
).catch(
  err => {
    console.log("Error conectando a db", err);
  }
)

