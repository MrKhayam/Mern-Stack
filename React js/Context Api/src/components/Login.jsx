import React, { useState } from "react";
import { BtnSimple } from "react-buttons-library";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import userContext from "../context/userContext/userContext";

const Login = () => {
  const navigate = useNavigate();
  const { username, setUsername, password, setPassword } =
    useContext(userContext);
  return (
    <>
      <div className="w-full h-full overflow-hidden text-white bg-zinc-900 flex items-center justify-center">
        <div className="w-[20%] min-h-[20%] bg-white rounded-lg p-3">
          <h1 className="text-zinc-900 text-center text-2xl font-bold">
            Login
          </h1>
          <form className="flex flex-col gap-5">
            <input
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              type="text"
              placeholder="Username"
              className="p-2 rounded-md outline-none text-zinc-900 border-b"
            />
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder="Password"
              className="p-2 rounded-md outline-none text-zinc-900 border-b"
            />
            <BtnSimple
              label="Login"
              btnClass="primary"
              onClick={(e) => {
                e.preventDefault();
                if (username === "khayam" && password === "console.log") {
                  navigate("/home");
                } else {
                  navigate("/");
                }
              }}
            />
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
