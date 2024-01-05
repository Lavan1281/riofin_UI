import React from "react";

const Navbar = () => {
  return (
    <div>
      <div className="flex flex-col md:flex-row justify-between items-center h-20 ms-auto text-white px-4 md:px-8 lg:px-12">
        <h1 className="w-full md:w-auto text-3xl font-bold text-[#034BF5] mb-4 md:mb-0">
          RIO<span className="text-[#00df9a] text-border-5">FIN</span>
        </h1>
        <ul className="flex justify-center md:justify-start space-x-4">
          <li className="p-2 md:p-4  hover:text-green-500"><a href="#">Why Riofin</a> </li>
          <li className="p-2 md:p-4 hover:text-green-500"><a href="#">Opportunities</a> </li>
          <li className="p-2 md:p-4 hover:text-green-500"><a href="#">Founders</a> </li>
          <li className="p-2 md:p-4 hover:text-green-500"><a href="#"> Learn</a></li>
        </ul>
        <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4">
          <button className="bg-[#00df9a] w-40    rounded-md font-medium p-4 text-black hover:bg-blue-800 hover:text-white">
            Login
          </button>
          <button className="bg-[#000] w-40 rounded-md font-medium p-2 md:p-4 text-white border-white hover:bg-white hover:text-black">
            Sign up
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
