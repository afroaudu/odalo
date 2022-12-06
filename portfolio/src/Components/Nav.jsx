import React from "react";
import Caleb from "./Images/Caleb.png";

const Nav = () => {
  return (
    <div className="w-full sticky top-0 text-white pt-5 bg-transparent h-[80px] flex items-center justify-between font-bold pl-10">
      <a href="">
        <div className="flex items-center  ">
          
          <p className="text-[25px] zoom-hover hover:text-blue-400 transition delay-150 duration-300 ease-in-out">
            {" "}
            ODALO
          </p>
        </div>
      </a>
     
    </div>
  );
};

export default Nav;
