import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export const EditPage = () => {
  const token = localStorage.getItem("token");
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  const { id } = useParams();

  const getData = async () => {
    await fetch("https://dark-plum-tortoise-belt.cyclic.cloud/employees/", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((res) => {
        setData(res.post);
      });
  };

  useEffect(() => {
    getData();
    setData(data.filter((el) => el._id === id));
  }, []);

  const eData = data?.find((el) => el._id == id);
  console.log(eData);

  const [fname, setfname] = useState(eData?.first_name);
  const [lname, setlname] = useState(eData?.last_name);
  const [email, setEmail] = useState(eData?.email);
  const [department, setDepartment] = useState(eData?.department);
  const [salery, setSalery] = useState(eData?.salery);

  const handelSubmit = (e) => {
    e.preventDefault();
    const props = {
      first_name: fname,
      last_name: lname,
      email: email,
      department: department,
      salery: salery,
    };
    fetch(`https://dark-plum-tortoise-belt.cyclic.cloud/employees/edit/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(props),
    })
      .then((res) => res.json())
      .then((res) => {
        alert("Employee edit Sucessful");
        navigate("/");
        console.log(res);
      });
  };

  return (
    <div>
      <center>
        <h1>Edit Employee</h1>

        <form onSubmit={handelSubmit}>
          <input
            type="text"
            value={fname || eData?.first_name}
            placeholder="First Name..."
            onChange={(e) => setfname(e.target.value)}
          />
          <br />
          <input
            type="text"
            value={lname || eData?.last_name}
            placeholder="Last Name..."
            onChange={(e) => setlname(e.target.value)}
          />
          <br />
          <input
            type="email"
            value={email || eData?.email}
            placeholder="Email..."
            onChange={(e) => setEmail(e.target.value)}
          />
          <br />
          <select
            value={department || eData?.department}
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
            value={salery || eData?.salery}
            placeholder="Salery..."
            onChange={(e) => setSalery(e.target.value)}
          />
          <br />
          <input type="submit" value="Edit Employee" />
        </form>
      </center>
    </div>
  );
};
