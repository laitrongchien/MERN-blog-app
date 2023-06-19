import { useState, useEffect } from "react";
import Header from "../../components/header/Header.jsx";
// import Sidebar from "../../components/sidebar/Sidebar.jsx";
import Posts from "../../components/posts/Posts.jsx";
import "./homepage.css";
import axios from "axios";
import { useLocation } from "react-router-dom";

function Homepage() {
  const [posts, setPosts] = useState([]);
  const { search } = useLocation();
  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get("/posts" + search);
      setPosts(res.data);
    };
    fetchPosts();
  }, [search]);
  return (
    <>
      <Header />
      <div className="home">
        <Posts posts={posts} />
      </div>
    </>
  );
}

export default Homepage;
