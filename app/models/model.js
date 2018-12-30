const mongoose = require('mongoose');

const StageSchema = mongoose.Schema({
    stageName: {
        type: String,
        required: true,
        unique: true
    },
    stageOrder: {
        type: Number,
        unique: true,
        required: true
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Stage', StageSchema);
