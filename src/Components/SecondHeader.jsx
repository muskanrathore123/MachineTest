import React from "react";
import { FaFantasyFlightGames } from "react-icons/fa6";
import { SiHomeadvisor } from "react-icons/si";
import { FaPersonDress } from "react-icons/fa6";
import { GiWitchFlight } from "react-icons/gi";
import { GiOakLeaf } from "react-icons/gi";
import { MdOutlineSportsHandball } from "react-icons/md";

function SecondHeader() {
  return (
    <div className="w-[75rem] border border-blue-950 h-10 ml-2 rounded-md ">
      <div className="grid grid-cols-6">
        <div className="flex justify-center items-center text-center mt-2">
          <FaFantasyFlightGames className="w-5 h-5 rounded-full bg-blue-100 p-1" />{" "}
          <span className="text-center text-blue-950 text-xs font-semibold ml-3">
            Fantasy
          </span>
        </div>
        <div className="flex justify-center items-center text-center mt-2">
          <SiHomeadvisor className="w-5 h-5 rounded-full bg-blue-100 p-1 text-red-500" />{" "}
          <span className="text-center  text-blue-950 text-xs font-semibold ml-3">
            Adventure
          </span>
        </div>
        <div className="flex justify-center items-center text-center mt-2">
          <FaPersonDress className="w-5 h-5 rounded-full bg-blue-100 p-1  text-purple-600" />{" "}
          <span className="text-center  text-blue-950 text-xs font-semibold ml-3">
            Mystery
          </span>
        </div>
        <div className="flex justify-center items-center text-center mt-2">
          <GiWitchFlight className="w-5 h-5 rounded-full bg-blue-100 p-1" />{" "}
          <span className="text-center text-blue-950 text-xs font-semibold ml-3">
            Science
          </span>
        </div>
        <div className="flex justify-center items-center text-center mt-2">
          <GiOakLeaf className="w-5 h-5 rounded-full bg-blue-100 p-1 text-green-400" />{" "}
          <span className="text-center text-blue-950 text-xs font-semibold ml-3">
            History
          </span>
        </div>
        <div className="flex justify-center items-center text-center mt-2">
          <MdOutlineSportsHandball className="w-5 h-5 rounded-full bg-blue-100 p-1 text-blue-700" />{" "}
          <span className="text-center text-blue-950 text-xs font-semibold ml-3">
            Sports
          </span>
        </div>
      </div>
    </div>
  );
}

export default SecondHeader;
