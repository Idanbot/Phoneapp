const auth = (req, res, next) => {
    // Hardcoded user data
    req.user = {
        id: '1',
        username: 'testuser'
    };
    next();
};

module.exports = auth;
