import React, { useState } from "react";
import "./Comp.css";
import axios from "axios";
import swal from "sweetalert";
import { Link, useNavigate } from "react-router-dom";
const Login = () => {
  const navi = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  async function login(e) {
    e.preventDefault();
    try {
      const res = await axios.post(`http://localhost:3001/login`, {
        email,
        password,
      });
      // console.log(res);
      if (res.data.status === 11) {
        swal(`You Are login ${res.data.data.name}`).then((e) => {
          if (e === true) {
            localStorage.setItem("data", JSON.stringify(res.data.data));
            navi("/dashbord");
          }
        });
      }
      if (res.data.status === 13) {
        swal({
          title: `Sorry `,
          text: "You Have Not singup",
          icon: "error",
        });
      }
      if (res.data.status === 14) {
        swal({
          title: `Sorry `,
          text: "Password invaled",
          icon: "error",
        });
      }
    } catch (error) {
      console.error(error);
    }
  }
  return (
    <>
      <div className="body">
        <div className="signup-container">
          <h2>Login</h2>
          <form>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              required
              onChange={(e) => setEmail(e.target.value)}
            />
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              required
              onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={login}>Login</button> <br />
            <Link to="/">Go to singup</Link>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
