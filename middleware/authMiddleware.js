const jwt = require("jsonwebtoken");

const authMiddleware = (req, res, next) => {
  try {
    // Retrieve the token from the request headers
    const token = req.headers.authorization?.split(" ")[1];
    

    if (!token) {
      return res.status(401).json({ message: "No token, authorization denied." });
    }

    // Verify the token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    console.log(decoded)
    // Attach user information to the request object
    req.user = decoded;

    // Proceed to the next middleware/route
    next();
  } catch (err) {
    console.error("Authentication error:", err.message);
    return res.status(401).json({ message: "Token is not valid." });
  }
};

module.exports = authMiddleware;
