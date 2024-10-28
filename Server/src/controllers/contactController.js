const { v4: uuidv4 } = require('uuid');
const contacts = {};

// Get all contacts for the logged-in user
exports.getContacts = (req, res) => {
    const username = req.user.username;
    const userContacts = contacts[username] || [];
    res.json(userContacts);
};

exports.addContact = (req, res) => {
    const { name, phone, email } = req.body;
    const username = req.user.username;

    if (!name || !phone) {
        return res.status(400).json({ message: 'Name and phone are required' });
    }

    const contact = {
        id: uuidv4(),
        name,
        phone,
        email
    };

    if (!contacts[username]) {
        contacts[username] = [];
    }
    contacts[username].push(contact);

    res.status(201).json({ message: 'Contact added successfully', contact });
};

exports.updateContact = (req, res) => {
    const { id } = req.params;
    const { name, phone, email } = req.body;
    const username = req.user.username;

    const userContacts = contacts[username] || [];
    const contactIndex = userContacts.findIndex(contact => contact.id === id);

    if (contactIndex === -1) {
        return res.status(404).json({ message: 'Contact not found' });
    }

    userContacts[contactIndex] = {
        ...userContacts[contactIndex],
        name: name || userContacts[contactIndex].name,
        phone: phone || userContacts[contactIndex].phone,
        email: email || userContacts[contactIndex].email,
    };

    res.json({ message: 'Contact updated successfully', contact: userContacts[contactIndex] });
};

exports.deleteContact = (req, res) => {
    const { id } = req.params;
    const username = req.user.username;

    const userContacts = contacts[username] || [];
    const contactIndex = userContacts.findIndex(contact => contact.id === id);

    if (contactIndex === -1) {
        return res.status(404).json({ message: 'Contact not found' });
    }

    userContacts.splice(contactIndex, 1);

    res.json({ message: 'Contact deleted successfully' });
};