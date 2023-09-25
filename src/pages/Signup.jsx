import React from "react";
import { Navbar } from "./Navbar";
import { Link } from "react-router-dom";

export const Signup = () => {
  return (
    <div>
      <h1>SignUp Form</h1>
      <Link to={"/login"}>
        <button>Login</button>
      </Link>
      <Link to={"/signup"}>
        <button>Signup</button>
      </Link>
    </div>
  );
};
