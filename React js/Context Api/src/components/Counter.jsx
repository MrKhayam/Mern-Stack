import React from "react";
import { useContext } from "react";
import countContext from "../context/counterContext";

const Counter = () => {
    const { count, setCount } = useContext(countContext);
    
    const handleAdd = () => {
        setCount(count + 1);
    }
    const handleMinus = () => {
        setCount(count - 1);
    }
  return (
    <>
      <div className="w-80 h-80 bg-white rounded-lg shadow flex flex-col gap-3 justify-center items-center">
        <h1 className="text-6xl font-bold">{count}</h1>
        <div className="flex gap-3">
          <button
            onClick={handleAdd}
            className="px-5 py-2 bg-black rounded-md text-white cursor-pointer"
          >
            Add
          </button>
          <button
            onClick={handleMinus}
            className="px-5 py-2 bg-black rounded-md text-white cursor-pointer"
          >
            Minus
          </button>
        </div>
      </div>
    </>
  );
};

export default Counter;
