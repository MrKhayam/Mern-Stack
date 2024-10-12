import React, { useState } from "react";
import useUser from "../hooks/useUser";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [inpUsername, setInpUsername] = useState("");
  const [inpPass, setInpPass] = useState("");


  const { username, pass } = useUser();
  const navigate = useNavigate();

  const handleClick = () => {
    if (inpUsername === username && inpPass === pass) {
      navigate("/home");
    } else {
      navigate("/");
    }
  }
  return (
    <>
      <div className="w-[20%] h-[40%] bg-white rounded-lg p-3 flex flex-col items-center justify-center">
        <h1 className="text-zinc-900 text-2xl font-bold">Login</h1>
        <input
          value={inpUsername}
          onChange={(e) => setInpUsername(e.target.value)}
          type="text"
          placeholder="Username"
          className="w-full h-10 rounded-md p-2 my-2"
        />
        <input
          value={inpPass}
          onChange={(e) => setInpPass(e.target.value)}
          type="password"
          placeholder="Password"
          className="w-full h-10 rounded-md p-2 my-2"
        />
        <button onClick={handleClick} className="w-full h-10 rounded-md bg-zinc-900 text-white">
          Login
        </button>
      </div>
    </>
  );
};

export default Login;
