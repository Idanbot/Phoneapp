require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/auth');
const contactRoutes = require('./routes/contacts');
const cors = require('cors');

console.log('JWT_SECRET:', process.env.JWT_SECRET);

const app = express();

app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true,
  }));

app.use(bodyParser.json());

app.use('/auth', authRoutes);
app.use('/contacts', contactRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));