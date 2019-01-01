module.exports = (app) => {
  const controller = require('../controllers/controller.js');

  // Create a new Stage
  app.post('/api/createStage', controller.addStage);

  // Retrieve all Stages
  app.get('/api/stages', controller.findAllStages);

  // Delete a Stage with stageId
  app.delete('/api/stages/:stageId', controller.deleteStage);

  // Add a new project
  app.post('/api/addProject', controller.addProject)

  // Get project with a stage Id
  app.get('/api/projects/:stageId', controller.getProjectByStageId)

  // Change project stage
  app.post('/api/changeProjectStage', controller.changeProjectStage)
}