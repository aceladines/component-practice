"use client";
import ParentToChild from "@/components/ParentToChild";
import ChildToParent from "@/components/ChildToParent";
import ChildToChild from "@/components/ChildToChild";
import { useState } from "react";

function Page() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");
  const handleIncrement = () => {
    setCount((prev) => prev + 1);
  };
  const handleDecrement = () => {
    if (count > 0) setCount((prev) => prev - 1);
  };

  const handleTextChange = (e) => {
    setText(e);
  };

  return (
    <div className="container mx-auto h-screen">
      <h1 className="text-2xl md:text-4xl text-center py-5">Component Practice</h1>
      <div className="grid gap-4 md:grid-cols-2 sm:grid-cols-1 place-items-center py-3">
        <div className="py-2 px-3 rounded-xl w-4/5 h-full bg-teal-200">
          <ParentToChild count={count} text="This is a sample counter, data will be sent from the parent" />
          <div className="flex justify-center space-x-3">
            <button className="px-3 py-1 rounded-lg bg-blue-500" onClick={handleIncrement}>
              Increment
            </button>
            <button className="px-3 py-1 rounded-lg bg-red-500" onClick={handleDecrement}>
              Decrement
            </button>
          </div>
        </div>
        <div className="w-4/5 h-full flex flex-col bg-sky-300 rounded-xl">
          <div className="h-36 overflow-y-auto">
            <p className="break-all p-5">{text}</p>
          </div>
          <div className="mx-auto py-2">
            <ChildToParent data={handleTextChange} />
          </div>
        </div>
      </div>
      <div className="w-10/12   md:w-1/3 h-1/3 mx-auto rounded-xl mt-7 bg-slate-300 relative">
        <ChildToChild text={text} />
        <h2 className="text-2xl font-bold text-center py-1 bg-yellow-200 absolute bottom-0 w-full rounded-b-xl">
          Text Preview
        </h2>
      </div>
    </div>
  );
}

export default Page;
