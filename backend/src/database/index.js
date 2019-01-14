const Airtable = require('airtable');

Airtable.configure({
  endpointUrl: 'https://api.airtable.com',
});

const database = Airtable.base(`appwBApIraXhdeTin`)(`Love`);

module.exports = database;
