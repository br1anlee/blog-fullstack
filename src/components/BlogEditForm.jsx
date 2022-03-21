import {useState} from 'react'
import axios from 'axios'
import Form from './Form'


export default function BlogEditForm ({blog, setShowForm, showForm}) {
    const [blogForm, setBlogForm] = useState(blog)

    const handleSubmit = (e) => {
        e.preventDefault()

        axios.put(`${process.env.REACT_APP_SERVER_URL}/blogs/${blog._id}`, blogForm)
            .then(response => {
                console.log(response.data)
                setBlogForm(!showForm)
            })
            .catch(console.log)
    }

    return(
        <>
            <h1>Edit the Blog</h1>
            <Form
                blogForm={blogForm}
                handleSubmit={handleSubmit}
                setBlogForm={setBlogForm}
            />
        </>

    )
}