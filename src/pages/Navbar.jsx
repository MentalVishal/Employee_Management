import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <div>
      <Link to={"/"}>
        <button>Dashbored</button>
      </Link>
      <Link to={"/login"}>
        <button>Login</button>
      </Link>
      <Link to={"/signup"}>
        <button>Signup</button>
      </Link>
    </div>
  );
};
