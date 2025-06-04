import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Signup from "./components/signup";
import MainPage from "./components/mainpage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/signup" />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/main" element={<MainPage />} />
    </Routes>
  );
}

export default App;
