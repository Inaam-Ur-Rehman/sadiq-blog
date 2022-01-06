const Blog = require("../models/Blog")

const BlogRoutes = {
    create: async (req, res) => {
        const { title, imageUrl, description } = req.body;

        try {
            const blog = await Blog.create({
                title,
                imageUrl,
                description
            })
            return res.status(201).send(blog)
        }
        catch (e) {
            res.status(400).send("Error while creating blog")
            console.log(e)
        }
    },
    allBlogs: async (req, res) => {
        try {
            const blogs = await Blog.find().sort([['createdAt', -1]])
            return res.status(201).send(blogs)
        }
        catch (e) {
            res.status(400).send("Error while fetching blogs")
            console.log(e)
        }
    },
    getBlogById: async (req, res) => {
        const { id } = req.params;
        try {
            const blog = await Blog.findOne({ "_id": id })
            return res.status(201).send(blog)
        }
        catch (e) {
            res.status(400).send("Error while fetching blog")
            console.log(e)
        }
    },
    updateBlog: async (req, res) => {
        const { id } = req.params;
        const { title, imageUrl, description } = req.body;
        try {
            const blog = await Blog.findOneAndUpdate({ "_id": id }, {
                $set: {
                    title,
                    imageUrl,
                    description
                },

            }, {
                new: true
            })
            return res.status(201).send(blog)
        }
        catch (e) {
            res.status(400).send("Error while updating blog")
            console.log(e)
        }
    },
    deleteBlog: async (req, res) => {
        const { id } = req.params;
        try {
            const blog = await Blog.findOneAndDelete({ "_id": id })
            return res.status(201).send(blog)
        }
        catch (e) {
            res.status(400).send("Error while deleting blog")
            console.log(e)
        }
    },

}

module.exports = BlogRoutes;