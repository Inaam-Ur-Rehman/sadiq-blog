const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")

const BlogRoutes = require("./routes/BlogRoute")

const app = express();

app.use(express.json())
app.use(cors())

mongoose.connect("mongodb://127.0.0.1:27017/sadiq-db").then(() => console.log("Connected to DB")).catch(e => console.log("Error while connecting to DB"))


app.get("/", (req, res) => {
    res.status(200).json({
        "message": "Hello World"
    })
})

app.post("/blog/create", BlogRoutes.create)
app.get("/blogs", BlogRoutes.allBlogs)
app.get("/blog/:id", BlogRoutes.getBlogById)
app.put("/blog/:id", BlogRoutes.updateBlog)
app.delete("/blog/:id", BlogRoutes.deleteBlog)


app.listen(8000, () => {
    console.log(`Server is running at http://localhost:8000`)
})