require('dotenv').config();

module.exports = {
  development: {
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: `${process.env.DB_NAME}_development`,
    host: 'localhost',
    dialect: 'postgres',
  },
  test: {
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: `${process.env.DB_NAME}_test`,
    host: 'localhost',
    dialect: 'postgres',
<<<<<<< HEAD
  },
  production: {
=======
    logging: false,
  },
  production: {
    // Reference: https://stackoverflow.com/a/70243144
>>>>>>> 09ee8b0e22cc1f5fdf3c097599ead789a8e004cd
    use_env_variable: 'DATABASE_URL',
    dialect: 'postgres',
    protocol: 'postgres',
    ssl: true,
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    },
  },
};
