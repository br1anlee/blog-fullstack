import {useParams, Link} from 'react-router-dom'
import {useState, useEffect} from 'react'
import axios from 'axios'
import BlogDetails from '../BlogDetails'
import BlogEditForm from '../BlogEditForm'


export default function Blog ({blogs}) {
    const[showForm, setShowForm] = useState(false)
    const [blog, setBlog] = useState({})
    const {id} = useParams()

    // Way to map the comments

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_SERVER_URL}/blog/${id}`)
            .then(response => {
                // console.log(response.data)
                setBlog(response.data)
            })
    }, [showForm])
    return (
        <>
            {showForm ? <BlogEditForm blog={blog} setShowForm={setShowForm} showForm={showForm}/> :<BlogDetails blog={blog}/>}

            <button onClick={() => setShowForm(!showForm)}>{showForm ? "Exit" : "Edit"}</button>
            <div>
                <Link to="/blogs">Back to the List of Blogs</Link>
            </div>
        </>
    )
}