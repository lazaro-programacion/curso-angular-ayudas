// middleware.js
var jwt = require('jsonwebtoken');

const secretPass = "93048sdlkjjsdfkl39djksjf";

exports.ensureAuthenticated = function(req, res, next) {
  if(!req.headers.authorization) {
    return res
      .status(403)
      .send({message: "Tu petición no tiene cabecera de autorización"});
  }

  var token = req.headers.authorization.split(" ")[1];

  jwt.verify(token, secretPass, function(err, user) {
    if (err) {
      res.status(401).send({
        error: 'Token inválido'
      })
    }
  })

  next();
}
