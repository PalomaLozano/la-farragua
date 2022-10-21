const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
  const authHeader = req.headers.token;
  if (authHeader) {
    const token = authHeader.split(" ")[1];
    jwt.verify(token, process.env.JWT_SEC, (err, user) => {
      if (err) res.status(401).json("El Token no es válido");
      req.user = user;
      next();
    });
  } else {
    return res.status(401).json("No estás verificado");
  }
};

const verifyTokenAndAuthorization = (req,res,next)=>{
    verifyToken(req,res, ()=>{
        if(req.user.id === req.params.id || req.user.isAdmin){
        next();
        }else{
            res.status(403).json("No tienes permiso")
        }
    })
}

module.exports = {verifyToken, verifyTokenAndAuthorization};