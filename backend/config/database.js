require('dotenv').config();

module.exports = {
  development: {
    username: process.env.PG_DATABASE,
    password: process.env.PG_PASSWORD,
    database: process.env.PG_DATABASE,
    host: process.env.PG_HOST,
    dialect: 'postgres'
  },
  test: {
    username: process.env.PG_DATABASE,
    password: process.env.PG_PASSWORD,
    database: process.env.PG_DATABASE_TEST,
    host: process.env.PG_HOST,
    dialect: 'postgres'
  },
  production: {
    username: process.env.PG_DATABASE,
    password: process.env.PG_PASSWORD,
    database: process.env.PG_DATABASE,
    host: process.env.PG_HOST,
    dialect: 'postgres'
  }
};