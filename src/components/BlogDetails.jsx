export default function BlogDetails ({blog, commentList}) {
    const date = (new Date(blog.createdAt)).toDateString()
    return (
        <>
            <h1>{blog.title}</h1>
            <p>{blog.content}</p>
            <h5>Author: {blog.name}</h5>
            <p>Created on: {date}</p>

            <div>
                <h4>Comments</h4>
                {commentList}
            </div>
        </>
    )
}