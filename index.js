const express = require('express');
const app = express();
const dotenv = require('dotenv');
const bodyParse = require("body-parser")
const cors = require('cors');
const { connectDB, disconnectDB, promisePool } = require('./dbConection/db'); 
const productRoutes = require('./src/routes/productRoute');
const categoryRoutes = require('./src/routes/categoryRoute');
// const supplierRoutes = require('./src/routes/supplierRoute');
// const clientRoutes = require('./src/routes/clientRoute');
// const saleRoutes = require('./src/routes/saleRoute');
dotenv.config();
connectDB();

app.use(cors());

app.use(express.json());

app.use(bodyParse.urlencoded({extended:true}))
app.use(bodyParse.json())

app.use('product', productRoutes);
app.use('category', categoryRoutes);
// app.use('api/supplier', supplierRoutes);
// app.use('api/client', clientRoutes);
// app.use('api/sale', saleRoutes);

// Desconectar la base de datos al cerrar la aplicación
process.on('SIGINT', async () => {
    await disconnectDB();
    process.exit();
  });

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Servidor escuchando puerto:${port}`);
});