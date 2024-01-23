const mysql = require('mysql2');
const dotenv = require('dotenv');

dotenv.config(); // Cargar variables de entorno

const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

const promisePool = pool.promise();

const connectDB = async () => {
  try {
    await promisePool.getConnection();
    console.log('Conexión a la base de datos MySQL exitosa');
  } catch (error) {
    console.error('Error al conectar a la base de datos MySQL:', error.message);
    process.exit(1); // Salir con código de error
  }
};

const disconnectDB = async () => {
  try {
    await pool.end();
    console.log('Desconexión de la base de datos MySQL exitosa');
  } catch (error) {
    console.error('Error al desconectar de la base de datos MySQL:', error.message);
  }
};

module.exports = { connectDB, disconnectDB, promisePool };