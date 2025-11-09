const express = require('express');
const mongoose = require('mongoose');
const app = express();
app.use(express.static('public')); // ضع الملفات في مجلد public

mongoose.connect('YOUR_MONGODB_URI', { useNewUrlParser: true });

app.get('/', (req, res) => res.sendFile(__dirname + '/index.html'));
app.get('/admin', (req, res) => res.sendFile(__dirname + '/admin.html'));

app.listen(3000, () => console.log('Server running on port 3000'));