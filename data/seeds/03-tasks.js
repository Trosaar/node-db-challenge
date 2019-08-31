exports.seed = function(knex, Promise) {
  return knex('tasks').insert([
    {
      description: 'Join Lambda',
      notes: 'What a great decision',
      completed: true,
      project_id: 1
    },
    {
      description: 'Work on Project through Khan Academy',
      notes: 'excellent resouce',
      completed: true,
      project_id: 1
    },
    {
      description: 'Join Lambda',
      notes: 'What a great decision',
      completed: true,
      project_id: 2
    },
    {
      description: 'go DEEEEEEEP',
      notes: 'What even is life?',
      completed: false,
      project_id: 3
    },
    {
      description: 'Watch Cartoons',
      notes: 'What can you do when you live in a shoe and you aint got no sole? - ed',
      completed: true,
      project_id: 3
    },
  ]);
};
