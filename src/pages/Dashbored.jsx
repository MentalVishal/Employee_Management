import React, { useEffect, useState } from "react";
import { Navbar } from "./Navbar";
import { Link, Navigate, useNavigate } from "react-router-dom";
import axios from "axios";

export const Dashbored = () => {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();
  const [data, setData] = useState([]);

  const handelClick = () => {
    localStorage.removeItem("token");
    navigate("/login");
    alert("Logout Successfully");
  };

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
        console.log(res.post);
      });
  };

  const handelDelete = async (id) => {
    await axios
      .delete(
        `https://dark-plum-tortoise-belt.cyclic.cloud/employees/delete/${id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((res) => {
        console.log(res, "deleted");
        getData();
      });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <center>
        <h1>Dashbored page</h1>
      </center>
      <Link to={"/add"}>
        <button>Add Employee</button>
      </Link>
      <button onClick={handelClick}>Logout</button>
      <center>
        <div>
          <table style={{ textAlign: "center" }}>
            <thead>
              <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
                <th>Department</th>
                <th>Salery</th>
                <th>Edit</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {data?.map((el) => (
                <tr key={el.id}>
                  <td>{el.first_name}</td>
                  <td>{el.last_name}</td>
                  <td>{el.email}</td>
                  <td>{el.department}</td>
                  <td>{el.salery}</td>
                  <Link to={`/edit/${el._id}`}>
                    <td>Edit</td>
                  </Link>
                  <td
                    onClick={() => {
                      handelDelete(el._id);
                    }}
                    style={{ backgroundColor: "red", color: "wheat" }}
                  >
                    Delete
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </center>
    </div>
  );
};
