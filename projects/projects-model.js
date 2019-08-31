const db = require('../data/db-config.js');

module.exports = {
  getProjects,
  getResources,
  getTasks,
  addProject,
  addResource,
  addTask
}

function getProjects(project_id) {
  if(project_id) {
    return db('projects').where('id', project_id).first()
  } else {
    return db('projects')
  }
}

function getResources(project_id) {
  if(project_id) {
    return db('resources AS r')
    .join('project_resources AS pr', 'r.id', 'pr.resource_id')
    .join('projects AS p', 'pr.project_id', 'p.id')
    .select('p.name', 'r.name', 'r.Description')
    .where('p.id', project_id )
    .first()
  } else {
    return db('resources')
  }
}

function getTasks(project_id) {
  if(project_id) {
    return db('tasks AS t')
    .join('projects AS p', 't.project_id', 'p.id')
    .select('p.name', 'p.description', 't.description', 't.notes', 't.completed')
    .where( 'p.id', project_id )
    first()
  } else {
    return db('tasks')
  }
}

function addProject(newProject) {
  return db('projects').insert(newProject)
  .then(ids => {
    return getProjects(ids[0])
  })
}

function addResource(newProject) {
  return db('projects').insert(newProject)
  .then(ids => {
    return getResources(ids[0])
  })
}

function addTask(newTask) {
  return db('projects').insert(newTask)
  .then(ids => {
    return getTasks(ids[0])
  })

}
