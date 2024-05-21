import React from "react";

const CarrerCard = () => {
  return (
    <>
      <div className="bg-orange-200 border w-72 rounded-md ">
        <div className="m-10">
          <div>
            <h2 className="text-black font-extrabold text-2xl mb-10">
              Frontend developer
            </h2>

            <button class=" p-1 rounded-full from-rose-400 via-fuchsia-500 to-indigo-500 bg-gradient-to-r">
              <span class="block text-black px-4 py-2 font-extrabold text-base rounded-full bg-white hover:bg-transparent hover:text-white transition">
                Apply Now
              </span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CarrerCard;
