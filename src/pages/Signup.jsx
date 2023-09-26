import React, { useState } from "react";

import { Link } from "react-router-dom";

export const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setpassword] = useState("");
  const [confirm_password, setConfirm] = useState("");

  const handelSubmit = (e) => {
    e.preventDefault();
    const props = {
      email: email,
      password: password,
      confirm_password: confirm_password,
    };

    fetch("https://dark-plum-tortoise-belt.cyclic.cloud/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(props),
    })
      .then((res) => res.json())
      .then((res) => console.log(res));
  };
  return (
    <div>
      <h1>SignUp Form</h1>
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
        <input
          type="password"
          placeholder="Confirm Password..."
          onChange={(e) => setConfirm(e.target.value)}
        />
        <input type="submit" value="SignUp" />
      </form>
    </div>
  );
};
