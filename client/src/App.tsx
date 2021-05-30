import React, { useState } from "react";
import Login from "./components/Login";
import "bootstrap/dist/css/bootstrap.min.css";
import useLocalStorage from "./hooks/useLocalStorage";
import Dashboard from "./components/Dashboard";

function App() {
  const [id, setId] = useLocalStorage("id");

  return id ? (
    <Dashboard id={id}></Dashboard>
  ) : (
    <Login onIdSubmit={setId}></Login>
  );
}

export default App;
