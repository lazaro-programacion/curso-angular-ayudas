const express = require('express')
const app = express();
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt')
const auth = require("./middleware/auth")
const cors = require('cors');

app.use(cors());

app.use(express.json());

const secretPass = "93048sdlkjjsdfkl39djksjf";

app.post('/login', (req, res) => {
  console.log(req.body)
  var username = req.body.user
  var password = req.body.password
  console.log(username, password)

  // const salt = bcrypt.genSaltSync(10);
  // console.log(salt);
  const hash = bcrypt.hashSync('1234', "$2b$10$hGp2nppMyWA.CtKAmo3gGe");
  console.log("1234", hash)

  const passHash = bcrypt.hashSync(password, "$2b$10$hGp2nppMyWA.CtKAmo3gGe")
  console.log(password, passHash)

  if(!(username === 'alfonso' && hash === passHash)){
    res.status(401).send({
      error: 'usuario o contraseña inválidos'
    })
    return
  }
  var tokenData = {
    username: username
  }
  var token = jwt.sign(tokenData, secretPass, {
     expiresIn: 60 * 60 * 24 // expires in 24 hours
  })
  res.send({
    token
  })
})


app.get('/seguro', (req, res) => {
  var token = req.headers['authorization']
  if(!token){
      res.status(403).send({
        error: "Es necesario el token de autenticación"
      })
      return
  }

  token = token.replace('Bearer ', '')

  jwt.verify(token, secretPass, function(err, user) {
    if (err) {
      res.status(401).send({
        error: 'Token inválido'
      })
    } else {
      console.log(user);
      res.send({
        message: 'Bienvenido '+user.username
      })
    }
  })
})

app.get('/seguro-middleware', auth.ensureAuthenticated, (req, res) => {
  res.send({
    message: 'Welcome from the deep'
  })
})


module.exports = app;
