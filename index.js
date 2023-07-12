require('dotenv').config();
const mongoose = require('mongoose');
const userRoutes = require('./src/routes/userRoutes');
const express = require('express');
const cors = require('cors');

const app = express();
const port = 9001;

// Configurar la conexión a MongoDB Atlas

mongoose.set('strictQuery', false);
const connectDB = async () => {
  try
  {
    const conn = await mongoose.connect(process.env.MONGODB_URI);
    console.log(`Mongo Connected : ${conn.connection.host}`);
  }
  catch(error){
    console.log(error);
    process.exit(1);
  }
}


/*mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('Conexión exitosa a MongoDB Atlas'))
  .catch((error) => console.log('Error al conectar a MongoDB Atlas:', error.message));
*/

//app.use(express.json());
//app.use(cors());
//llama a los enrutadores de usuarios-------------
app.use('/users', userRoutes);

//------------------------------

// Puerto en el que se ejecutará el servidor

connectDB().then(() => {
  app.listen(port, () => {
    console.log(`Servidor iniciado en http://localhost:${port}`);
  })
});
