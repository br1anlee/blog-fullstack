import {Link} from 'react-router-dom'

export default function Home () {
    return (
        <>
            <h1>Welcome to the Blog!</h1>
            <Link to="/blogs">See All of the Blogs!</Link>
        </>
    )
}