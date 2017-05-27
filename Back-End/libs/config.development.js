var logger = require('./logger.js');

module.exports = {
  // database name
  // phpmyadmin's username & password
  // root root
  database: "rate",
  username: "root",
  password: "root",
  params: {
    // mac:8889, Windows:3306
    port: 3306,
    dialect: "mysql",
    logging: (sql) => {
      logger.info(`[${new Date()}] ${sql}`);
    },
    define: {
      underscored: true
    }
  },
  jwtSecret: "Y055zc1@4JG9",
  jwtSession: {session: false}
};
