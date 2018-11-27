'use strict';

const Loki = require('lokijs');

const database = new Loki('love.db', {
  autoload: true,
  autosave: true,
  autosaveInterval: 4000,
});
module.exports = database;
module.exports.items = database.addCollection('items', {
  indices: ['name'],
});
