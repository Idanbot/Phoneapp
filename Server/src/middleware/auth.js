const jwt = require('jsonwebtoken');

const auth = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    
    if (!authHeader) {
        return res.status(403).json({ message: 'Authorization header is missing' });
    }
    
    const token = authHeader.split(' ')[1];
    
    if (!token) {
        return res.status(403).json({ message: 'Token not provided in authorization header' });
    }

    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
        if (err) {
            return res.status(401).json({ message: 'Invalid or expired token' });
        }
        
        req.user = decoded;
        next();
    });
};

module.exports = auth;
