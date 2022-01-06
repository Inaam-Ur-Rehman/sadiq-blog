import axios from 'axios'
import React, { useState } from 'react'

const Create = () => {
    const [title, setTitle] = useState("")
    const [imageUrl, setImageUrl] = useState("")
    const [description, setDescription] = useState("")
    const createBlog = async (e) => {
        e.preventDefault()
        try {
            const blog = await axios({
                url: "http://localhost:8000/blog/create",
                method: 'POST',
                data: {
                    title,
                    imageUrl,
                    description
                }
            })
            alert("Blog Created")
            setTitle("")
            setImageUrl("")
            setDescription("")
        } catch (e) {
            console.log(e.message)
        }
    }
    return (
        <div className='container mt-5'>
            <form>
                <div class="mb-3">
                    <label class="form-label">Blog title</label>
                    <input type="text" class="form-control" onChange={(e) => setTitle(e.target.value)} value={title} />
                </div>
                <div class="mb-3">
                    <label class="form-label">Image Url</label>
                    <input type="text" class="form-control" onChange={(e) => setImageUrl(e.target.value)} value={imageUrl} />
                </div>
                <div class="mb-3">
                    <label class="form-label">Description</label>
                    <textarea type="text" rows={10} class="form-control" onChange={(e) => setDescription(e.target.value)} value={description}></textarea>
                </div>

                <button type="submit" onClick={createBlog} class="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}

export default Create
