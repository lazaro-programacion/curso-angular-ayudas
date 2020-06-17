const express = require("express");
const app = express();
const jwt = require("jsonwebtoken");
const authmw = require('./authmw')
const bcrypt = require('bcrypt');
const cors = require('cors')

app.use(cors())

//console.log(bcrypt.genSaltSync(40));
const salt = "$2b$10$hGp2nppMyWA.CtKAmo3gGe";

const hashedPassword = bcrypt.hashSync('1234', salt);
console.log("1234",hashedPassword);

const secretKey = "dskfjlsdpkafjklsdfjlksdjf398jsdjfkl";

app.use(express.json());

app.get("/", (req, res) => {
  return res.send("bienvenido a mi web de atenticacion")
})

// Nos envían el usuario y el password y nosotros le devolvemos un token
app.post("/login", (req, res) => {
  const userPass = req.body;

  if (userPass.user === 'alfonso' &&
      bcrypt.hashSync(userPass.password, salt)===hashedPassword) {
    const token = jwt.sign({user: userPass.user}, secretKey, {
      expiresIn: 60*60*24
    });
    return res.status(200).jsonp({token})
  } else {
    return res.status(403).json({msg: "El usuario o el password no son correctos"})
  }
})

app.get("/mensaje", authmw,  (req, res) => {
  return res.status(200).jsonp({mensaje: "Hola desde el inframundo"})
})

app.listen("4000", () => console.log("server up and running"))
