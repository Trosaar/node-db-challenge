const express = require('express');
const helmet = require('helmet');

const ProjectRouter = require('./projects/projects-router.js');

const server = express();

server.use(helmet());
server.use(express.json());

server.use('/api/projects', ProjectRouter);

server.get('/', (req, res) => {
  res.send(`<h2>No Dream Is Too Big</h2>`)
});


module.exports = server;
