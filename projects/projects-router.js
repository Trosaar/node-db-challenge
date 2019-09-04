const express = require('express');

const Projects = require('./projects-model.js');

const router = express.Router();

// When the client makes a `GET` request to `/api/projects`:
route.get('/', async (req, res) => {
  //datatype
  //status code
  //responce
  try{
    const projects = await db.getProjects()
    res.status(200).json(projects)
  } catch(err){
    res.status(500).json({
      error: 'failed to get projects'
   })
  }
})

// When the client makes a `GET` request to `/api/projects/:id`:
route.get('/:id', validateProjectId, async (req, res) => {
  const { id } = req.params
  const project = req.project
  try{
    res.status(200).json(project)
  } catch(err){
    res.status(500).json({
      error: 'failed to get the project'
   })
  }
})

// When the client makes a `GET` request to `/api/projects/resources`:
route.get('/resources', (req, res) => {
  try{
    const resources = await db.getResources()
    res.status(200).json(resources)
  } catch(err){
    res.status(500).json({
      error: 'failed to get resources'
   })
  }
})

// When the client makes a `GET` request to `/api/projects/:id/resources`:
route.get('/id/resource', validateProjectId, (req, res) => {
  const { id } = req.params
  try{
    const resource = await db.getResources(id)
    res.status(200).json(resource)
  } catch(err){
    res.status(500).json({
      error: 'failed to get resource'
   })
  }
})

// When the client makes a `GET` request to `/api/projects/tasks`:
route.get('/tasks', (req, res) => {
  try{
    const tasks = await db.getTasks()
    res.status(200).json(tasks)
  } catch(err){
    res.status(500).json({
      error: 'failed to get tasks'
   })
  }
})

// When the client makes a `GET` request to `/api/projects/:id/tasks`:
route.get('/:id/tasks', validateProjectId, (req, res) => {
  const { id } = req.params
  try{
    const task = await db.getTasks(id)
    res.status(200).json(task)
  } catch(err){
    res.status(500).json({
      error: 'failed to get task'
   })
  }
})

// When the client makes a `POST` request to `/api/projects`:
server.post('/', async (req, res) => {
  const { name, description, completed } = req.body

  try {
    const newProject = await db.addProject({ name, description, completed})
    res.status(201).json(newProject)
  } catch(err) {
    res.status(500).json({
      error: 'There was an error while saving the project to the database'
    })
  }
})

// When the client makes a `POST` request to `/api/resources`:
server.post('/resources', async (req, res) => {
  const { name, description } = req.body

  try {
    const newResource = await db.addResource({ name, description })
    res.status(201).json(newResource)
  } catch(err) {
    res.status(500).json({
      error: 'There was an error while saving the resource to the database'
    })
  }
})

// When the client makes a `POST` request to `/api/:id/tasks`:
server.post('/:id/tasks', validateProjectId, async (req, res) => {
  const { description, notes, completed } = req.body
  const { id } = req.params

  try {
    const newTask = await db.addTask({ description, notes, completed, id })
    res.status(201).json(newTask)
  } catch(err) {
    res.status(500).json({
      error: 'There was an error while saving the task to the database'
    })
  }
})

function validateProjectId(req, res, next) {
  const { project_id } = req.body;

  db.getProjects(project_id)
    .then( project => {
      if(project){
        req.project = project;
        next();
      } else {
        res.status(400).json({ message: "invalid project id" })
      }
    })
    .catch(err => {
      res.status(500).json({ message: "server error!", err})
    })
};
