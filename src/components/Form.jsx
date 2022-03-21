export default function Form({blogForm, setBlogForm ,handleSubmit}) {
    return (
        <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name:</label>
                <input type="text" value={blogForm.name} onChange={e => setBlogForm({...blogForm, name: e.target.value})} id="name"/>

                <label htmlFor="title">Title:</label>
                <input type="text" value={blogForm.title} onChange={e => setBlogForm({...blogForm, title: e.target.value})} id="title"/>

                <label htmlFor="content">Content:</label>
                <input type="text" value={blogForm.content} onChange={e => setBlogForm({...blogForm, content: e.target.value})} id="content"/>

                <input type="submit" />

            </form>
    )
}