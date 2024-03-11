import React from "react";
import { RiArrowRightSLine } from "react-icons/ri";

function FirstHeader() {
  return (
    <div className="w-[75rem] border bg-blue-950 rounded-md h-10  ml-2">
      <div className="grid grid-cols-5 ">
        <div dir="rtl" className="p-2 relative ">
          <div className=" ">
            <RiArrowRightSLine className="w-[0.7rem] h-[0.7rem] rounded-full bg-white absolute right-1 top-[0.8rem] text-gray-400" />
          </div>
          <div className="border-s-2 border-white text-center text-white">
            Home
          </div>
        </div>

        <div dir="rtl" className="p-2 relative">
          <div className="">
            <RiArrowRightSLine className="w-[0.7rem] h-[0.7rem] rounded-full bg-white absolute right-1 top-[0.8rem] text-gray-400" />
          </div>

          <div className="border-s-2 border-white text-center  text-white">
            {" "}
            Genre
          </div>
        </div>
        <div dir="rtl" className="p-2 relative">
          <div className="">
            <RiArrowRightSLine className="w-[0.7rem] h-[0.7rem] rounded-full bg-white absolute right-1 top-[0.8rem] text-gray-400" />
          </div>

          <div className="border-s-2 border-white  text-center  text-white">
            {" "}
            Leader Board
          </div>
        </div>
        <div dir="rtl" className="p-2 relative">
          <div className="">
            <RiArrowRightSLine className="w-[0.7rem] h-[0.7rem] rounded-full bg-white absolute right-1 top-[0.8rem] text-gray-400" />
          </div>

          <div className="border-s-2 border-white  text-center  text-white">
            {" "}
            Daily Quiz
          </div>
        </div>
        <div dir="rtl" className="p-2 relative">
          <div className="text-center  text-white"> Logout</div>
        </div>
      </div>
    </div>
  );
}

export default FirstHeader;
