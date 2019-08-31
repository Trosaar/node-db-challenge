exports.seed = function(knex, Promise) {
  return knex('resouces').insert([
    {
      name: 'Me',
      description: 'I am me',
    },
    {
      name: 'My Brain',
      description: 'very helpful',
    },
    {
      name: 'internet',
      description: 'all the knowledge ever',
    }
  ]);
};
