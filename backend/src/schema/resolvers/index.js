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
    /*
     * This is bad
     * Almost certainly a better way to do it
     */
    allLove(_, args, { database }) {
      const items = database.items
        .chain()
        .find()
        .data();
      const lookup = items.reduce((merged, item) => {
        if (!merged[item.name]) {
          merged[item.name] = {
            ...item,
            count: 0,
          };
        }
        merged[item.name].count += 1;
        return merged;
      }, {});
      return Object.keys(lookup).map(key => lookup[key]);
    },
  },
  Mutation: {
    addLove(_, args, { database }) {
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
    reset(_, args, { database }) {
      database.items.clear();
      return true;
    },
  },
};
