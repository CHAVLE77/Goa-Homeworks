import React, { useState } from "react";
import Login from "./components/login";
import Welcome from "./welcome";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");

  return (
    <>
      {isLoggedIn ? (
        <Welcome username={username} />
      ) : (
        <Login setIsLoggedIn={setIsLoggedIn} setUsername={setUsername} />
      )}
    </>
  );
}

export default App;
