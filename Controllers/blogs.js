const Blog = require('../Model/blogs');
const catchAsyncError = require('../Exceptions/async-error');
const expError = require('../Exceptions/exp-error');

const blogAdded = catchAsyncError(async (req, res) => {
    const blog = new Blog(req.body);

    await blog.save();
    res.status(201).send({ success: "Blog added"});
});

const blogUpdated = catchAsyncError(async (req, res) => {
    const { id } = req.params;
    const getBlog = await Blog.findById(id);

    if(!getBlog) throw new expError({message: "Blog Not Found", statusCode: 400});

    const blog = await Blog.findByIdAndUpdate(id, req.body);

    res.status(200).send({ success: blog });
});

const getBlogs = catchAsyncError(async (req, res) => {
    const blogs = await Blog.find({}).sort({createdAt: -1});

    if(!blogs) throw new expError({message: "No Blog Found", statusCode: 400});

    res.status(200).send({ success: blogs });
});

const getBlogById = catchAsyncError(async (req, res) => {
    const { id } = req.params;
    const blogs = await Blog.findById(id);

    if(!blogs) throw new expError({message: "Blog Not Found", statusCode: 400});
    
    res.status(200).send({ success: blogs });
});

const blogDeleted = catchAsyncError(async (req, res) => {
    const { id } = req.params;
    const blogs = await Blog.findById(id);

    if(!blogs) throw new expError({message: "Blog Not Found", statusCode: 400});

    const blog = await blog.findByIdAndDelete(id);
    await blog.save();
    
    res.status(200).send({ success: 'Blog deleted'});
})

module.exports = {
    blogAdded,
    blogUpdated,
    getBlogs,
    getBlogById,
    blogDeleted
}