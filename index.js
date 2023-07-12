const mongoose = require('mongoose');
const userRoutes = require('./src/routes/userRoutes');
const express = require('express');
const cors = require('cors');
require('dotenv').config();

// Configurar la conexión a MongoDB Atlas
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('Conexión exitosa a MongoDB Atlas'))
  .catch((error) => console.log('Error al conectar a MongoDB Atlas:', error.message));

const app = express();
app.use(express.json());
app.use(cors());
//llama a los enrutadores de usuarios-------------
app.use('/api/users', userRoutes);

//------------------------------

// Puerto en el que se ejecutará el servidor
const port = 9001;
app.listen(port, () => {
  console.log(`Servidor iniciado en http://localhost:${port}`);
});