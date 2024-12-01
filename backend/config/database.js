require('dotenv').config();

module.exports = {
  development: {
    username: process.env.PGADMIN_DATABASE_USER,
    password: process.env.PGADMIN_DEFAULT_PASSWORD,
    database: process.env.PGADMIN_DATABASE_NAME,
    host: process.env.PGADMIN_DATABASE_HOST,
    dialect: 'postgres'
  },
  test: {
    username: process.env.PGADMIN_DATABASE_USER,
    password: process.env.PGADMIN_DEFAULT_PASSWORD,
    database: process.env.PGADMIN_DATABASE_NAME_TEST,
    host: process.env.PGADMIN_DATABASE_HOST,
    dialect: 'postgres'
  },
  production: {
    username: process.env.PGADMIN_DATABASE_USER,
    password: process.env.PGADMIN_DEFAULT_PASSWORD,
    database: process.env.PGADMIN_DATABASE_NAME,
    host: process.env.PGADMIN_DATABASE_HOST,
    dialect: 'postgres'
  }
};