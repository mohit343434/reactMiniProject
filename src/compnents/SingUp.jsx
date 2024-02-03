import React, { useState } from "react";
import swal from "sweetalert";
import axios from "axios";
import "./Comp.css";
import { Link, useNavigate } from "react-router-dom";
const SingUp = () => {
  const navi = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  async function user(e) {
    e.preventDefault();
    try {
      const res = await axios.post(`http://localhost:3001/signup`, {
        name,
        email,
        password,
      });
      if (res.data.status === 10) {
        swal(`Hello ${res.data.signup.name}`).then((e) => {
          if (e === true) {
            navi("/login");
          }
        });
      }
      if (res.data.status === 12) {
        swal({
          title: `Sorry `,
          text: "You Have Allrady singup!",
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
        <h2>Sign Up</h2>
        <form>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            required
            onChange={(e) => setName(e.target.value)}
          />
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
          <button onClick={user}>Sign Up</button>
        </form>{" "}
        <br />
        <Link to="/login">Go to Login</Link>
      </div>
      </div>
    </>
  );
};

export default SingUp;
