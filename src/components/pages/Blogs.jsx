import {Link} from 'react-router-dom'
import {useState} from 'react'
import Form from '../Form'
import axios from 'axios'



export default function Blogs ({blogs, setBlogs}) {

    // state for the new blog
    const [newBlog, setNewBlog] = useState({})


    // handleSubmit for creating a new blog
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post(`${process.env.REACT_APP_SERVER_URL}/blog`, newBlog)
                .then(response => {
                    setNewBlog({})
                    // setBlogs(response.data)
                })
        } catch (err) {
            console.log(err)
        }
    }


    // Mapping through each blog in blogs
    const blogLinks = blogs.map((blog, i) => {
        return (
            <div key={`blog-link${i}`}>
                {/* Link is the front end link to the individual blogs */}
                <Link to={`/blogs/${blog._id}`}>{blog.title}</Link>
            </div>
        )
    })
    return (
        <>
            <div>
                <Form 
                    newBlog={newBlog}
                    setNewBlog={setNewBlog}
                    handleSubmit={handleSubmit}
                />
            </div>
            <div>
                <h1>List of Blogs</h1>
                {blogLinks}
            </div>
        </>


    )
}