const contacts = {};

// Get all contacts for the logged-in user
exports.getContacts = (req, res) => {
    const username = req.user.username;
    const userContacts = contacts[username] || [];
    res.json(userContacts);
};

exports.addContact = (req, res) => {
    /* TODO */ 
};

exports.updateContact = (req, res) => {
    /* TODO */ 
};

exports.deleteContact = (req, res) => {
    /* TODO */ 
};