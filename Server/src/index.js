const express = require('express');
const bodyParser = require('body-parser');
const contactRoutes = require('./routes/contacts');

const app = express();
app.use(bodyParser.json());

app.use('/contacts', contactRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));