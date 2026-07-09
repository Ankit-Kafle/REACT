import React, { useState } from "react";
import { useSearchParams } from "react-router-dom";

const Home = () => {
  const [title, setTitle] = useState("");
  const [value, setValue] = useState("");

  const [searchParams] = useSearchParams();

  const pasteId = searchParams.get("pasteId");

  return (
  <div>
      <div className="flex flex-row gap-7">
      <input
        className="p-3 rounded-medium mt-2"
        type="text"
        placeholder="Enter title here"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <button>
        {pasteId ? "Update my paste" : "Create my paste"}
      </button>
    </div>


    <div className="mt-8">

      <textarea
      className="rounded-2xl mt-4,min-w-[500px] p-4"

      value={value}
      placeholder=" Enter Content Here"

      onChange={(e) => setValue(e.target.value)}
      rows={20}
      />



    </div>
  </div>
  );
};

export default Home;