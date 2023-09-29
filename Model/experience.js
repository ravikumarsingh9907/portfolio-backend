const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ExperienceSchema = new Schema({
    ['company-logo']: {
        type: Buffer,
    },
    company: {
        type: String,
        required: true
    },
    profile: {
        type: String,
        required: true,
    },
    duration: {
        start: {
            type: String,
            required: true
        },
        end: {
            type: String,
            required: true
        }
    },
    ['work-and-responsibility']: [{
        type: String,
        required: true
    }]
}, {
    timestamps: true,
});

const Experience = new mongoose.model('Experience', ExperienceSchema);

module.exports = Experience;