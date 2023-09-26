import React, { useState } from "react";

export const AddEmployee = () => {
  const [fname, setfname] = useState("");
  const [lname, setlname] = useState("");
  const [email, setEmail] = useState("");
  const [department, setDepartment] = useState("");
  const [salery, setSalery] = useState("");

  const token = localStorage.getItem("token");

  const handelSubmit = (e) => {
    e.preventDefault();
    let props = {
      first_name: fname,
      last_name: lname,
      email: email,
      department: department,
      salery: salery,
    };
    fetch("https://dark-plum-tortoise-belt.cyclic.cloud/employees/", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(props),
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        alert("Employee Added Sucessfully...");
        setfname("");
        setlname("");
        setEmail("");
        setDepartment("");
        setSalery("");
      });
  };

  return (
    <div>
      <center>
        <h1>Add Employee</h1>

        <form onSubmit={handelSubmit}>
          <input
            type="text"
            value={fname}
            placeholder="First Name..."
            onChange={(e) => setfname(e.target.value)}
          />
          <br />
          <input
            type="text"
            value={lname}
            placeholder="Last Name..."
            onChange={(e) => setlname(e.target.value)}
          />
          <br />
          <input
            type="email"
            value={email}
            placeholder="Email..."
            onChange={(e) => setEmail(e.target.value)}
          />
          <br />
          <select
            value={department}
            onChange={(e) => setDepartment(e.target.value)}
            name=""
            id=""
          >
            <option value="">Select Department</option>
            <option value="tech">Tech</option>
            <option value="marketing">Marketing</option>
            <option value="operations">Operations</option>
          </select>
          <br />
          <input
            type="number"
            value={salery}
            placeholder="Salery..."
            onChange={(e) => setSalery(e.target.value)}
          />
          <br />
          <input type="submit" value="Add Employee" />
        </form>
      </center>
    </div>
  );
};
