const jwt = require("jsonwebtoken");

const verifyToken = async (req, res, next) => {
  if (!req.headers.authorization)
    return res.status(403).json({ msg: "Not authorized. No token" });

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer ")
  ) {
    const token = req.headers.authorization.split(" ")[1];
    try {
      const data = await jwt.verify(token, process.env.JWT_SECRET);
      req.user = data; // data = {id: user._id}
      next();
    } catch (err) {
      return res.status(403).json({ msg: "Wrong or expired token" });
    }
  }
};

module.exports = verifyToken;
