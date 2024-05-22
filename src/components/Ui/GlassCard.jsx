import React from "react";

const GlassCard = () => {
  return (
    <div className="relative flex items-center  min-h-screen justify-between">
      <div className="relative w-80 h-48 p-6 bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-xl shadow-lg border border-white border-opacity-20">
        <div className="absolute top-0 left-0 w-32 h-32 bg-red-600 rounded-full mix-blend-multiply filter blur-xl opacity-30"></div>
        <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-400 rounded-full mix-blend-multiply filter blur-xl opacity-30"></div>
        <div className="relative">
          <h1 className="text-xl font-semibold text-black">NH Tushar</h1>
          <p className="text-sm font-light text-black">Graphic Designer</p>
          <div className="absolute bottom-4 right-4 flex space-x-2">
            <div className="w-6 h-6 border rounded-full border-violet-600 opacity-70"></div>
            <div className="w-6 h-6 border rounded-full border-violet-600 opacity-70"></div>
          </div>
        </div>
      </div>

      <div className="relative w-80 h-48 p-6 bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-xl shadow-lg border border-white border-opacity-20">
        <div className="absolute top-0 left-0 w-32 h-32 bg-red-400 rounded-full mix-blend-multiply filter blur-xl opacity-30"></div>
        <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-400 rounded-full mix-blend-multiply filter blur-xl opacity-30"></div>
        <div className="relative">
          <h1 className="text-xl font-semibold text-white">NH Tushar</h1>
          <p className="text-sm font-light text-white">Graphic Designer</p>
          <div className="mt-6">
            <p className="text-white text-opacity-80 tracking-widest">
              152 256 14 2569
            </p>
          </div>
          <div className="absolute bottom-4 right-4 flex space-x-2">
            <div className="w-6 h-6 border rounded-full border-white opacity-70"></div>
            <div className="w-6 h-6 border rounded-full border-white opacity-70"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GlassCard;
