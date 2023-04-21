import { useEffect, useState } from "react";

function ChildToParent({ data }) {
  const [text, setText] = useState("");
  useEffect(() => {
    data(text);
  }, [text]);

  const handleTextChange = (e) => {
    setText(e.target.value);
  };
  return (
    <div>
      <form action="">
        <label className="block">
          <span className="mx-2">🔥</span>
          <input
            className="placeholder:italic  border border-slate-300 placeholder:text-slate-400 rounded-md pl-2 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
            type="text"
            placeholder="Enter a text..."
            onChange={handleTextChange}
          />
        </label>
      </form>
    </div>
  );
}

export default ChildToParent;
