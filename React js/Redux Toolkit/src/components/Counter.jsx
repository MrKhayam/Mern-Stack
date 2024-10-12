import React from "react";
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from "../features/countSlice";


const Counter = () => {
    const dispatch = useDispatch();
    const count = useSelector((state) => state.counter.count);
  return (
    <>
      <div className="w-[20%] h-[40%] bg-white rounded-lg flex flex-col items-center justify-center gap-3">
        <h1 className="text-7xl text-black font-bold">{count}</h1>
        <div className="btns flex gap-4">
          <button
            onClick={() => dispatch(increment())}
            className="bg-black px-3 py-2 text-white rounded-md cursor-pointer"
          >
            Increment
          </button>
          <button
            onClick={() => dispatch(decrement())}
            className="bg-black px-3 py-2 text-white rounded-md cursor-pointer"
          >
            Decrement
          </button>
        </div>
      </div>
    </>
  );
};

export default Counter;
