const Experience = require('../Model/experience');
const catchAsyncError = require('../Exceptions/async-error');
const expError = require('../Exceptions/exp-error');

const experienceAdded = catchAsyncError(async (req, res) => {
    const experience = new Experience(req.body);

    await experience.save();
    res.status(201).send({ success: "Experience added"});
});

const experienceUpdated = catchAsyncError(async (req, res) => {
    const { id } = req.params;
    const getExperience = await Experience.findById(id);

    if(!getExperience) throw new expError({message: "Experience Not Found", statusCode: 400});

    const experience = await Experience.findByIdAndUpdate(id, req.body);

    res.status(200).send({ success: experience });
});

const getExperience = catchAsyncError(async (req, res) => {
    const experiences = await Experience.find({}).sort({createdAt: -1});

    if(!experiences) throw new expError({message: "No Experience Found", statusCode: 400});

    res.status(200).send({ success: experiences });
});

const getExperienceById = catchAsyncError(async (req, res) => {
    const { id } = req.params;
    const experiences = await Experience.findById(id);

    if(!experiences) throw new expError({message: "Experience Not Found", statusCode: 400});
    
    res.status(200).send({ success: experiences });
});

const experienceDeleted = catchAsyncError(async (req, res) => {
    const { id } = req.params;
    const experiences = await Experience.findById(id);

    if(!experiences) throw new expError({message: "Experience Not Found", statusCode: 400});

    await Experience.findByIdAndDelete(id);
    
    res.status(200).send({ success: 'Experience deleted'});
})

module.exports = {
    experienceAdded,
    experienceUpdated,
    getExperience,
    getExperienceById,
    experienceDeleted
}