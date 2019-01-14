const Filter = require('bad-words');

const swearFilter = new Filter();

module.exports = {
  Query: {
    love(_, args, { database }) {
      const { filter } = args;
      const filterByFormula = [
        filter.name && `IF(Name = '${filter.name}')`,
        filter.count && `IF(Count >= ${filter.count})`,
      ]
        .filter(Boolean)
        .join(' ');
      return new Promise((resolve, reject) => {
        let results = [];
        database
          .select({
            filterByFormula,
            sort: [{ field: `Count`, direction: `desc` }],
          })
          .eachPage(
            (records, fetchNextPage) => {
              results = results.concat(
                records.map(record => {
                  return {
                    id: record.getId(),
                    count: record.get(`Count`),
                    name: record.get(`Name`),
                    created: record.get(`Created`),
                  };
                })
              );

              fetchNextPage();
            },
            err => {
              if (err) {
                return reject(err);
              }
              return resolve(results);
            }
          );
      });
    },
    allLove(_, args, { database }) {
      return new Promise((resolve, reject) => {
        let results = [];
        database
          .select({
            filterByFormula: `NOT({Name} = '')`,
            sort: [{ field: `Count`, direction: `desc` }],
          })
          .eachPage(
            (records, fetchNextPage) => {
              results = results.concat(
                records.map(record => {
                  return {
                    id: record.getId(),
                    count: record.get(`Count`),
                    name: record.get(`Name`),
                    created: record.get(`Created`),
                  };
                })
              );

              fetchNextPage();
            },
            err => {
              if (err) {
                return reject(err);
              }
              return resolve(results);
            }
          );
      });
    },
  },
  Mutation: {
    addLove(_, { name }, { database }) {
      if (swearFilter.isProfane(name)) {
        throw new Error(`Hey now! I see you 👀`);
      }
      const now = new Date();
      return new Promise((resolve, reject) => {
        database.create(
          {
            Name: name,
            Count: 1,
            Created: now,
            Updated: now,
          },
          (err, record) => {
            if (err) {
              return reject(err);
            }
            return resolve({
              id: record.getId(),
              count: record.get(`Count`),
              name: record.get(`Name`),
              created: record.get(`Created`),
            });
          }
        );
      });
    },
    reset(_, args, { database }) {
      return new Promise((resolve, reject) => {
        let results = [];
        database.select().eachPage(
          (records, fetchNextPage) => {
            results = results.concat(
              records.map(record => {
                return {
                  id: record.getId(),
                  count: record.get(`Count`),
                  name: record.get(`Name`),
                  created: record.get(`Created`),
                };
              })
            );

            fetchNextPage();
          },
          err => {
            if (err) {
              return reject(err);
            }
            let count = 0;
            results.forEach(({ id }) => {
              database.destroy(id, destroyErr => {
                if (destroyErr) {
                  return reject(destroyErr);
                }
                count += 1;
                if (count === results.length) {
                  return resolve(true);
                }
              });
            });
          }
        );
      });
    },
  },
};
