'use strict';

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    var ownKeys = Object.keys(source);
    if (typeof Object.getOwnPropertySymbols === 'function') {
      ownKeys = ownKeys.concat(
        Object.getOwnPropertySymbols(source).filter(function(sym) {
          return Object.getOwnPropertyDescriptor(source, sym).enumerable;
        })
      );
    }
    ownKeys.forEach(function(key) {
      _defineProperty(target, key, source[key]);
    });
  }
  return target;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true,
    });
  } else {
    obj[key] = value;
  }
  return obj;
}

const Filter = require('bad-words');

const normalize = require('./normalize');

const filter = new Filter();
module.exports = {
  Query: {
    love(_, args, { database }) {
      const { filter, sort } = args;
      const query = filter
        ? _objectSpread(
            {},
            filter.created && {
              created: {
                $gt: filter.created,
              },
            },
            filter.name && {
              name: {
                $eq: filter.name,
              },
            },
            filter.id && {
              $loki: {
                $eq: filter.id,
              },
            }
          )
        : undefined;
      const limit = typeof args.limit === 'number' ? args.limit : undefined;
      return database.items
        .chain()
        .find(query)
        .compoundsort(
          sort.fields.map(field => [field, sort.order === 'ASC' ? false : true])
        )
        .limit(limit)
        .data()
        .map(normalize);
    },
  },
  Mutation: {
    async addLove(_, args, { database }) {
      if (filter.isProfane(args.name)) {
        throw new Error(`Hey now! I see you 👀`);
      }

      const item = _objectSpread({}, args, {
        created: new Date(),
      });

      database.items.insert(item);
      return item;
    },
  },
};
