const StageModel = require('../models/model');
const ProjectModel = require('../models/projectModel')

// Create a new Stage
exports.addStage = (req, res) => {
    // Validate request
    if(!req.body.stageName) {
        return res.status(400).send({
            message: "Please enter a Stage name"
        });
    }
    if(!req.body.stageOrder) {
        return res.status(400).send({
            message: "Please enter the Stage Order"
        });
    }

    const newStage = new StageModel({
        stageName: req.body.stageName,
        stageOrder: req.body.stageOrder
    });

    newStage.save()
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the Stage."
        });
    });
};

// Retrieve and return all stages from the database.
exports.findAllStages = (req, res) => {
    StageModel.find()
    .then(stages => {
        res.send(stages);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving stages."
        });
    });
};

// Delete a Stage with the specified StageId in the request
exports.deleteStage = (req, res) => {
    StageModel.findByIdAndRemove(req.params.stageId)
    .then(stage => {
        if(!stage) {
            return res.status(404).send({
                message: "Stage not found with id " + req.params.stageId
            });
        }
        res.send({message: "Stage deleted successfully!"});
    }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "Stage not found with id " + req.params.stageId
            });                
        }
        return res.status(500).send({
            message: "Could not delete stage with id " + req.params.stageId
        });
    });
};

// Add a new Project with specified StageId in the request
exports.addProject = (req, res) => {
    const newProject = new ProjectModel({
        projectName: req.body.projectName,
        projectType: req.body.projectType,
        projectDuration: req.body.projectDuration,
        projectBudget: req.body.projectBudget,
        stageId: req.body.stageId
    })
    // Find if the stage id exists and then proceed else fail
    Stage.find({_id: req.body.stageId}, (err, docs) => {
        if(err) {
            return res.status(500).send({
                message: err.message || "Cannot find the Stage in which you want to add Project"
            });
        }
        else {
            newProject.save()
            .then(data => {
                res.send(data)
            }).catch(err => {
                res.status(500).send({
                    message: err.message || "Some error occurred while adding the Project."
                });
            })
        }
    })
}

exports.getProjectByStageId = (req, res) => {
    ProjectModel.find({stageId: req.params.stageId}, (err, docs) => {
        if(err) {
            return res.status(500).send({
                message: err.message || "Cannot find the Stage in which you want to add Project"
            });
        }
        else {
            res.send(docs)
        }
    })
}