const { Pool } = require("pg");
const {dbv} = require('./config')
// Pool Me permite Crear una Connection a la base de datos

const db = new Pool({
  user: dbv.user,
  password:dbv.password,
  host:dbv.host,
  port: dbv.port,
  database:dbv.database,
});

module.exports = db;
