import "./post.css";
import { Link } from "react-router-dom";

function Post({ post }) {
  const PF = "http://localhost:5000/images/";
  // const defaultImage =
  //   "https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500";

  return (
    <div className="post l-4 m-6 s-12">
      <img src={PF + post.photo} alt="" className="postImg" />
      <div className="postInfo">
        <div className="postCats">
          {post.categories.map((cat, index) => (
            <Link to={`/?cat=${cat}`} className="link" key={index}>
              <span className="postCat">{cat}</span>
            </Link>
          ))}
        </div>
        <span className="postTitle">
          <Link className="link" to={`/post/${post._id}`}>
            {post.title}
          </Link>
        </span>
        <hr />
        <span className="postDate">
          {new Date(post.createdAt).toDateString()}
        </span>
      </div>
      <p className="postDesc">{post.desc}</p>
    </div>
  );
}

export default Post;
