const Airtable = require('airtable');

Airtable.configure({
  apiKey: process.env.AIRTABLE_API_KEY || process.env.airtable_api_key,
  endpointUrl: 'https://api.airtable.com',
});

const database = Airtable.base(`appwBApIraXhdeTin`)(`Love`);

module.exports = database;
