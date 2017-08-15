var environment = process.env.NODE_EVN || 'development';
var config = require('../knexfile.js')[environment];
mode.exports = require('knex')(config);
