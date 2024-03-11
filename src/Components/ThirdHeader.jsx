import React from "react";

function ThirdHeader() {
  return (
    <div className="w-[75rem]  h-8   ml-2 rounded-md flex justify-between items-center">
      <h1 className="font-bold">Science Fiction Stories</h1>
      <div className=" flex space-x-2 ">
        <button className=" bg-green-300 text-white border w-fit border-white rounded-md text-sm p-1 ">
          {" "}
          Clear All
        </button>
        <button className=" bg-green-300 text-white border w-fit border-white rounded-md text-sm p-1">
          {" "}
          Completed
        </button>
        <button className=" bg-green-300 text-white border w-fit border-white rounded-md text-sm p-1">
          {" "}
          In Progress
        </button>
        <button className=" bg-green-300 text-white border w-fit border-white rounded-md text-sm p-1">
          {" "}
          New
        </button>
      </div>
    </div>
  );
}

export default ThirdHeader;
