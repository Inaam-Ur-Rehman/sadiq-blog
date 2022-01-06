import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const Update = () => {
    const [title, setTitle] = useState("")
    const [imageUrl, setImageUrl] = useState("")
    const [description, setDescription] = useState("")
    const { id } = useParams();
    let navigate = useNavigate();

    useEffect(() => {
        const getData = async () => {
            try {
                const { data } = await axios.get(`http://localhost:8000/blog/${id}`);
                setTitle(data.title)
                setImageUrl(data.imageUrl)
                setDescription(data.description)
            }
            catch (e) {
                console.log(e.message)
            }
        }
        getData()
    }, [id]);
    const updateBlog = async (e) => {
        e.preventDefault()
        try {
            const { data } = await axios({
                url: `http://localhost:8000/blog/${id}`,
                method: "PUT",
                data: {
                    title,
                    imageUrl,
                    description
                }
            })
            alert("Blog updated successfully");
            navigate("/")
        }
        catch (e) {
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

                <button type="submit" onClick={updateBlog} class="btn btn-primary">Update</button>
            </form>
        </div>
    )
}

export default Update
