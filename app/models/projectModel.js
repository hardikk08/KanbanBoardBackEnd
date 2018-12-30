const mongoose = require('mongoose');

const ProjectSchema = mongoose.Schema({
    projectName: {
        type: String,
        required: true,
    },
    projectType: {
        type: String,
        required: true
    },
    projectDuration: {
        type: Number,
        required: true,
    },
    stageId: {
        type: String,
        required: true
    },
    projectBudget: {
        type: Number,
        required: true
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Project', ProjectSchema);
