import './App.css';

import Home from "./components/pages/Home"
import Blog from "./components/pages/Blog"
import Blogs from "./components/pages/Blogs"

import {useState, useEffect} from 'react'
import axios from 'axios'

import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'


function App() {
  // state to hold the blogs [has to be in an array to map the blogs]
  const [blogs, setBlogs] = useState([])


  // useEffect to get all of the blogs
  useEffect(() => {
    axios.get(process.env.REACT_APP_SERVER_URL + "/blog")
      .then((response) => {
        // console.log(response.data)
        setBlogs(response.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [blogs])
  
  
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route exact path="/blogs" element={<Blogs blogs={blogs} setBlogs={setBlogs}/>}/>
          <Route path="/blogs/:id" element={<Blog blogs={blogs}/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
