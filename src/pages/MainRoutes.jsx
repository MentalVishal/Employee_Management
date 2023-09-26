import React from "react";
import { Route, Routes } from "react-router-dom";
import { Dashbored } from "./Dashbored";
import { Login } from "./Login";
import { Signup } from "./Signup";
import { AddEmployee } from "./AddEmployee";
import { PrivateRoute } from "./PrivateRoute";
import { EditPage } from "./EditPage";

export const MainRoutes = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <PrivateRoute>
            <Dashbored />
          </PrivateRoute>
        }
      />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/add" element={<AddEmployee />} />
      <Route path="/edit/:id" element={<EditPage />} />
    </Routes>
  );
};
