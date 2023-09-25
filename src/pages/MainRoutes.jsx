import React from "react";
import { Route, Routes } from "react-router-dom";
import { Dashbored } from "./Dashbored";
import { Login } from "./Login";
import { Signup } from "./Signup";

export const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashbored />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
    </Routes>
  );
};
