import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Carousel from '../components/Carousel'

const Home = () => {
    const [blogs, setBlogs] = useState([])
    useEffect(() => {
        const getData = async () => {
            try {
                const { data } = await axios.get("http://localhost:8000/blogs");
                setBlogs(data)
            }
            catch (e) {
                console.log(e.message)
            }
        }
        getData()
    }, [])
    return (
        <div>

            <Carousel />
            <div className='container mt-5'>
                <h1 className='text-center mb-5'>Blogs</h1>
                <div className="row">
                    {
                        blogs?.map(blog => (
                            <div key={blog._id} className="col-6 col-md-4 mt-5">
                                <div className="card" style={{ maxWidth: "18rem", minHeight: "450px", maxHeight: "450px" }}>
                                    <img src={blog.imageUrl} style={{ minHeight: "230px", maxHeight: "230px" }} className="card-img-top" alt="..." />
                                    <h5 class="card-title px-2 py-2">
                                        <Link style={{
                                            textDecoration: "none",
                                            color: "black"
                                        }} to={`/blog/${blog._id}`}>
                                            {blog.title}
                                        </Link>
                                    </h5>
                                    <div className="card-body">
                                        <p className="card-text">{blog.description.slice(0, 150)}</p>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
            <footer class="py-3 my-4 bg-dark">
                <ul class="nav justify-content-center border-bottom pb-3 mb-3">
                    <li class="nav-item"><a href="#" class="nav-link px-2 text-muted">Home</a></li>
                    <li class="nav-item"><a href="#" class="nav-link px-2 text-muted">Features</a></li>
                    <li class="nav-item"><a href="#" class="nav-link px-2 text-muted">Pricing</a></li>
                    <li class="nav-item"><a href="#" class="nav-link px-2 text-muted">FAQs</a></li>
                    <li class="nav-item"><a href="#" class="nav-link px-2 text-muted">About</a></li>
                </ul>
                <p class="text-center text-muted">© 2021 Company, Inc</p>
            </footer>
        </div>
    )
}

export default Home
