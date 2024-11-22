// import jwt from 'jsonwebtoken';

// export const authenticate = (req, res, next) => {
//     const authHeader = req.header('Authorization');
//     if (!authHeader) {
//         return res.status(401).json({ message: "Authorization header missing" });
//     }

//     const token = authHeader.split(' ')[1];
//     if (!token) {
//         return res.status(401).json({ message: "Access denied: Token missing" });
//     }

//     try {
//         const decoded = jwt.verify(token, process.env.JWT_SECRET);
//         req.user = decoded;
//         next();
//     } catch (error) {
//         if (error.name === 'TokenExpiredError') {
//             return res.status(401).json({ message: "Token has expired, please log in again" });
//         }
//         return res.status(400).json({ message: "Invalid token" });
//     }
// };















import jwt from 'jsonwebtoken';

const authenticateUser = (req, res, next) => {
  const token = req.header('Authorization')?.split(' ')[1]; // Extract token from Authorization header

  if (!token) {
    return res.status(401).json({ message: "Access denied. No token provided." });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.userId = decoded.userId; // Attach userId to request object
    next();
  } catch (error) {
    res.status(400).json({ message: "Invalid token." });
  }
};

export default authenticateUser;
