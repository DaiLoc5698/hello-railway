const Knex = require('knex')
const knexFile = require('./knexfile')

const env = process.env.NODE_ENV || 'development'
const options = knexFile[env];

console.log('options', options)

module.exports = Knex(options)