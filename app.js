const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();

mongoose.connect('mongodb://localhost:27017/usuariosDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(cors());
app.use(bodyParser.json());

const userRoutes = require('./routes/userRoutes');
app.use('/api/usuarios', userRoutes);

app.listen(3000, () => {
  console.log('Servidor corriendo en http://localhost:3000');
});