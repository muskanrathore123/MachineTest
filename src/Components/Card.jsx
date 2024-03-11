import axios from "axios";
import React, { useEffect, useState } from "react";

function Card() {
  let [data, setData] = useState([]);

  useEffect(() => {
    async function show() {
      let res = await axios.get(
        "https://child.onrender.com/api/sciencefiction "
      );
      setData(res.data);
    }
    show();
  }, []);

  return (
    <>
      <div class="px-6">
        <div class="grid grid-cols-4 gap-4 justify-center place-content-center">
          {data.map((val, index) => (
            <div class="w-full bg-white rounded-lg shadow-md p-4 mr-4 text-center" key={val.id}>
              <img
                className=" h-[15rem]  mt-3 border border-white"
                src={`https://ik.imagekit.io/dev24/${val.Image[0]}`}
                alt={val.Title}
              />
              <p>{val.Title}</p>

              <button className="bg-blue-200 w-fit rounded-md mt-2">New</button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Card;
