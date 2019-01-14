module.exports = function normalize(item) {
  if (!item) {
    return null;
  }

  return {
    ...item,
    id: item.name,
  };
};
