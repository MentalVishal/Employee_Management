import React, { useState } from "react";
import { Navbar } from "./Navbar";
import { Link, Navigate, useNavigate } from "react-router-dom";
import axios from "axios";

export const Login = () => {
  const url = "https://dark-plum-tortoise-belt.cyclic.cloud";
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setpassword] = useState("");

  const handelSubmit = (e) => {
    e.preventDefault();
    const props = {
      email: email,
      password: password,
    };

    fetch("https://dark-plum-tortoise-belt.cyclic.cloud/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(props),
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        localStorage.setItem("token", res.token);
        navigate("/");
      });
  };

  return (
    <div>
      <h1>Login Form</h1>
      <Link to={"/login"}>
        <button>Login</button>
      </Link>
      <Link to={"/signup"}>
        <button>Signup</button>
      </Link>

      <br />
      <form onSubmit={handelSubmit}>
        <input
          type="text"
          placeholder="Email..."
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password..."
          onChange={(e) => setpassword(e.target.value)}
        />
        <input type="submit" value="Login" />
      </form>
    </div>
  );
};
