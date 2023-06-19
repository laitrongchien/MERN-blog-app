import { Link } from "react-router-dom";
import axios from "axios";
import { useRef, useContext, useState } from "react";
import { Context } from "../../context/Context";
import "./login.css";

function Login() {
  const userRef = useRef();
  const passwordRef = useRef();
  const { dispatch, isFetching } = useContext(Context); // Lay lai gia tri cua dispatch và isFetching từ component cha
  const [passwordShown, setPasswordShown] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGIN_START" });
    try {
      const res = await axios.post("/auth/login", {
        username: userRef.current.value,
        password: passwordRef.current.value,
      });
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
    } catch (err) {
      dispatch({ type: "LOGIN_FAILURE" });
    }
  };
  // console.log(isFetching);
  return (
    <div className="login">
      <span className="loginTitle">Login</span>
      <form className="loginForm" onSubmit={handleSubmit}>
        <label>Username</label>
        <input
          className="loginInput"
          type="text"
          placeholder="Enter your username..."
          ref={userRef}
        />
        <label>Password</label>
        <div className="loginInputWrapper">
          <input
            className="loginInput"
            type={passwordShown ? "text" : "password"}
            placeholder="Enter your password..."
            ref={passwordRef}
          />
          <i
            className={passwordShown ? "fas fa-eye" : "fas fa-eye-slash"}
            onClick={() => {
              setPasswordShown(!passwordShown);
            }}
          ></i>
        </div>

        <button className="loginButton" type="submit" disabled={isFetching}>
          Login
        </button>
      </form>
      <button className="loginRegisterButton">
        <Link className="link" to="/register">
          Register
        </Link>
      </button>
    </div>
  );
}

export default Login;
