require('dotenv').config();

module.exports = {
  development: {
    dialect: process.env.DB_DIALECT || 'mysql',
    username: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || null,
    database: process.env.DB_NAME || 'my_database',
    host: process.env.DB_HOST || 'localhost',
  },
  production: {
    dialect: process.env.DB_DIALECT || 'mysql',
    username: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || null,
    database: process.env.DB_NAME || 'my_database',
    host: process.env.DB_HOST || 'localhost',
  },
};