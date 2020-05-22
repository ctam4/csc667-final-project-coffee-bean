const views = new Map();

module.exports = {
  incrementView: (id) => {
    if (views.has(id)) {
      let total = views.get(id);
      total += 1;
      views.set(id, total);
    } else {
      views.set(id, 1);
    }
  },

  decrementView: (id) => {
    let total = views.get(id);
    total -= 1;
    views.set(id, total);
  },

  getViews: (id) => views.get(id),
};
