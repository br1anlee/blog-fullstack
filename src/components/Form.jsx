export default function Form({newBlog, setNewBlog ,handleSubmit}) {
    return (
        <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name:</label>
                <input type="text" value={newBlog.name} onChange={e => setNewBlog({...newBlog, name: e.target.value})} id="name"/>

                <label htmlFor="title">Title:</label>
                <input type="text" value={newBlog.title} onChange={e => setNewBlog({...newBlog, title: e.target.value})} id="title"/>

                <label htmlFor="content">Content:</label>
                <input type="text" value={newBlog.content} onChange={e => setNewBlog({...newBlog, content: e.target.value})} id="content"/>

                <input type="submit" />

            </form>
    )
}