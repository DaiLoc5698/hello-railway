const path = require('path');
require('dotenv').config();
// Update with your config settings.

// connection: {
//   host : process.env.KNEX_HOST,
//   port : process.env.MARIADB_PORT,
//   user : process.env.MARIADB_USER,
//   password : process.env.MARIADB_PASSWORD,
//   database : process.env.MARIADB_DATABASE
// },

const knexConfig = {
  development: {
    client: 'mysql',
    connection: {
      host : 'sql12.freemysqlhosting.net',
      port : '3306',
      user : 'sql12607450',
      password : 'jCXVJdynWN',
      database : 'sql12607450'
    },
    migrations: {
      tableName: 'migrations'
    },
    log: {
      warn(message) {
        console.log('[knex] warn ', message)
      },
      error(message) {
        console.log('[knex] error ', message)
      },
      deprecate(message) {
        console.log('[knex] deprecate ', message)
      },
      debug(message) {
        console.log('[knex] debug ', message)
      },
    }
  },

  staging: {
    client: 'mysql',
    connection: {
      host : process.env.KNEX_HOST,
      port : process.env.MARIADB_PORT,
      user : process.env.MARIADB_USER,
      password : process.env.MARIADB_PASSWORD,
      database : process.env.MARIADB_DATABASE
    },
    migrations: {
      tableName: 'migrations'
    },
  },

  production: {
    client: 'mysql',
    connection: {
      host : process.env.KNEX_HOST,
      port : process.env.MARIADB_PORT,
      user : process.env.MARIADB_USER,
      password : process.env.MARIADB_PASSWORD,
      database : process.env.MARIADB_DATABASE
    },
    migrations: {
      tableName: 'migrations'
    },
  }
}

module.exports = knexConfig
