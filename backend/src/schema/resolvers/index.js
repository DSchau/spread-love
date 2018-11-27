const Filter = require('bad-words');
const normalize = require('./normalize');

const filter = new Filter();

module.exports = {
  Query: {
    love(_, args, { database }) {
      const { filter, sort } = args;
      const query = filter
        ? {
            ...(filter.created && {
              created: {
                $gt: filter.created,
              },
            }),
            ...(filter.name && {
              name: {
                $eq: filter.name,
              },
            }),
            ...(filter.id && {
              $loki: {
                $eq: filter.id,
              },
            }),
          }
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
      const item = {
        ...args,
        created: new Date(),
      };
      database.items.insert(item);
      return item;
    },
  },
};
