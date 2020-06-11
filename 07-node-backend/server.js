'use strict';

const app = require("./app");
const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

mongoose.connect("mongodb://localhost:27017/hospital").then( 
    (res) => 
    app.listen(
        4000, () => {
            console.log("Servidor web up & running")
        }
    )
).catch(
    (err) => console.log("No se ha podido conectar a la base de datos", err)
)






