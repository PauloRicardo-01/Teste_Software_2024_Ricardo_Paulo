const updateAll = (tableName, fields, criteria, force = false) => {
  return new Promise((resolve) => {
    const items = [tableName, fields, criteria, force];

    resolve(force ? items : items.map(() => undefined));
  });
};

module.exports = updateAll;
