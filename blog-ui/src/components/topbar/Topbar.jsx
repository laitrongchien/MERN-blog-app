import { Link } from "react-router-dom";
import { useContext, useState, useEffect } from "react";
import { Context } from "../../context/Context";
import "./topbar.css";

function Topbar() {
  const PF = "http://localhost:5000/images/";
  const defaultAvatar =
    "https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500";
  const { user, dispatch } = useContext(Context);
  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
    window.location.replace("/");
  };

  // Tach ra component rieng sau
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleAvatarClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleClickOutside = (event) => {
    if (event.target.closest(".topImg")) return;
    setIsMenuOpen(false);
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isMenuOpen]);
  /********* */

  return (
    <div className="top">
      <i className="fas fa-bars barsIcon"></i>
      <div className="topLeft hideOnMobile">
        <a
          href="https://www.facebook.com/chien.lai.1401/"
          target="_blank"
          rel="noreferrer"
        >
          <i className="topIcon fab fa-facebook-square"></i>
        </a>
        <i className="topIcon fab fa-instagram-square"></i>
        <i className="topIcon fab fa-pinterest-square"></i>
        <i className="topIcon fab fa-twitter-square"></i>
      </div>
      <div className="topCenter hideOnMobile">
        <ul className="topList">
          <li className="topListItem">
            <Link className="link" to="/">
              HOME
            </Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="/">
              ABOUT
            </Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="/">
              CONTACT
            </Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="/write">
              WRITE
            </Link>
          </li>
        </ul>
      </div>
      <div className="topRight">
        {user ? (
          <div className="topImgWrap">
            <img
              className="topImg"
              src={PF + user.profilePic || defaultAvatar}
              onClick={handleAvatarClick}
              alt=""
            />
            {isMenuOpen && (
              <ul className="menuList">
                <li className="menuItem">
                  <Link className="link" to="/settings">
                    Setting
                  </Link>
                </li>
                <li className="menuItem" onClick={handleLogout}>
                  {user && "Log out"}
                </li>
              </ul>
            )}
          </div>
        ) : (
          <ul className="topList">
            <li className="topListItem">
              <Link className="link" to="/login">
                LOGIN
              </Link>
            </li>
            <li className="topListItem">
              <Link className="link" to="/register">
                REGISTER
              </Link>
            </li>
          </ul>
        )}

        <i className="topSearchIcon fas fa-search"></i>
      </div>
    </div>
  );
}

export default Topbar;
