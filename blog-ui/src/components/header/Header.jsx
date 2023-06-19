// import { useState, useEffect } from "react";
import "./header.css";
function Header() {
  // const [currentImage, setCurrentImage] = useState(0);
  // const images = [
  //   "https://images.pexels.com/photos/1167355/pexels-photo-1167355.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  //   "http://localhost:5000/images/hello.jpg",
  // ];
  // const imageLength = images.length;

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setCurrentImage((prevImage) =>
  //       prevImage === imageLength - 1 ? 0 : prevImage + 1
  //     );
  //   }, 3000);
  //   return () => clearInterval(interval);
  // });
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleSm">Welcome to</span>
        <span className="headerTitleLg">MY BLOG</span>
      </div>
      {/* <div className="sliderImage">
        {images.map((image, index) => (
          <img
            key={index}
            className={
              currentImage === index ? "active headerImg" : "headerImg"
            }
            src={image}
            alt={`Slider ${index + 1}`}
          />
        ))}
      </div> */}
      <img
        className="headerImg"
        src="https://images.pexels.com/photos/1167355/pexels-photo-1167355.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
        alt=""
      />
    </div>
  );
}

export default Header;
