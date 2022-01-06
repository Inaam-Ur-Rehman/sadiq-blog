import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { TrashIcon, PencilIcon } from "@heroicons/react/outline"
import { useNavigate } from 'react-router-dom';

const Description = () => {
    const { id } = useParams();
    const [blog, setBlog] = useState([])
    let navigate = useNavigate();
    useEffect(() => {
        const getData = async () => {
            try {
                const { data } = await axios.get(`http://localhost:8000/blog/${id}`);
                setBlog(data)
            }
            catch (e) {
                console.log(e.message)
            }
        }
        getData()
    }, [id]);

    const deleteBlog = async (id) => {
        try {
            const { data } = await axios({
                url: `http://localhost:8000/blog/${id}`,
                method: "DELETE"
            })
            alert("Blog deleted successfully");

            setTimeout(() => {
                navigate("/")
            }, 600)
        }
        catch (e) {
            console.log(e.message)
        }
    }

    return (
        <div className='container'>
            <div class="card mb-3 mt-5">
                <img src={blog.imageUrl} style={{ maxHeight: "400px" }} class="card-img-top" alt="..." />
                <div class="card-body">
                    <h5 class="card-title">{blog.title}</h5>
                    <p class="card-text">{blog.description}</p>
                    <p class="card-text"><small class="text-muted">{blog.createdAt}</small></p>
                    <TrashIcon onClick={() => deleteBlog(blog._id)} fontSize={20} height={40} />
                    <PencilIcon onClick={() => navigate(`/blog/update/${blog._id}`)} fontSize={20} height={40} />
                </div>
            </div>
        </div>
    )
}

export default Description
