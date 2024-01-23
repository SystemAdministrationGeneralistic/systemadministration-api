const express = require('express');
const app = express();
const dotenv = require('dotenv');
const { connectDB, disconnectDB, promisePool } = require('./dbConection/db'); 
const productRoutes = require('./src/routes/productosRoute');
dotenv.config();
connectDB();


app.use(express.json());

app.use('/', productRoutes);

// Desconectar la base de datos al cerrar la aplicación
process.on('SIGINT', async () => {
    await disconnectDB();
    process.exit();
  });

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Servidor escuchando puerto:${port}`);
});