const jwt = require('jsonwebtoken');

// Middleware to authenticate requests using JWT
const authMiddleware = (req, res, next) => {
    // Get the token from the request headers
    const token = req.header('Authorization');

    // Check if token is missing
    if (!token) {
        return res.status(401).json({ message: 'Access denied, no token provided' });
    }

    try {
        // Verify the token
        const decoded = jwt.verify(token, process.env.JWT_SECRET); // Ensure to use your JWT secret
        req.user = decoded; // Attach the decoded user info to the request
        next(); // Move to the next middleware or route handler
    } catch (err) {
        res.status(400).json({ message: 'Invalid token' });
    }
};

module.exports = authMiddleware;
