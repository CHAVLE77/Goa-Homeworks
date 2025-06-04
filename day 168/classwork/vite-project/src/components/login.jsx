import React, { useState } from "react";

const Login = ({ setIsLoggedIn, setUsername }) => {
  const [inputUser, setInputUser] = useState("");
  const [inputPass, setInputPass] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputUser && inputPass) {
      setUsername(inputUser);
      setIsLoggedIn(true);
    } else {
      alert("შეიყვანე სახელი და პაროლი");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Username"
        value={inputUser}
        onChange={(e) => setInputUser(e.target.value)}
        className="border"
      />
      <input
        type="password"
        placeholder="Password"
        value={inputPass}
        onChange={(e) => setInputPass(e.target.value)}
        className="border"
      />
      <button type="submit" className="border">
        Login
      </button>
    </form>
  );
};

export default Login;
