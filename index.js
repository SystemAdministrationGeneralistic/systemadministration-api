const express = require('express');
const app = express();
const dotenv = require('dotenv');
const bodyParse = require("body-parser")
const cors = require('cors');
const { connectDB, disconnectDB, promisePool } = require('./dbConection/db'); 
const productRoutes = require('./src/routes/productRoute');
dotenv.config();
connectDB();

app.use(cors());

app.use(express.json());

app.use(bodyParse.urlencoded({extended:true}))
app.use(bodyParse.json())

app.use('/product', productRoutes);
app.use('/sale', productRoutes);
app.use('/supplier', productRoutes);
app.use('/client', productRoutes);

// Desconectar la base de datos al cerrar la aplicación
process.on('SIGINT', async () => {
    await disconnectDB();
    process.exit();
  });

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Servidor escuchando puerto:${port}`);
});