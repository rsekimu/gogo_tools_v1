const jwt = require("jsonwebtoken");

let JWT_SECRET = process.env.JWT_SECRET;

const verifyToken = (req, res, next) => {
  let authHeader = req.headers.authorization;
  if (!authHeader) {
    let errObj = {
      kind: "Token Verification",
      name: "No  Headers",
      msg: "There is no headers provided",
      sltn: "Check headers",
    };
    return res.status(401).json(errObj);
  }
  let token = authHeader.split(" ")[1];
  if (!token) {
    let errObj = {
      kind: "Token Verification",
      name: "No  Token",
      msg: "There is no Token provided",
      sltn: "Check the authorization headers",
    };
    return res.status(401).json(errObj);
  }

  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    req.user = decoded;
    next();
  } catch (err) {
    let errObj = {
      kind: "Token Verification  ",
      name: err.name,
      msg: err.message,
    };
    console.log(errObj);
    return res.status(500).json(errObj);
  }
};

module.exports = { verifyToken };
