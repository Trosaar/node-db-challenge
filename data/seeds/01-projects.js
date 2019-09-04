exports.seed = function(knex, Promise) {
  return knex('Projects').insert([
    {
      name: 'javascript',
      description: 'learn javascript',
      completed: 'true'
    },
    {
      name: 'HTML',
      description: 'learn HTML',
      completed: 'true'
    },
    {
      name: 'Meaning to life',
      description: 'learn the meaning to life',
      completed: 'false'
    }
  ]);
};
