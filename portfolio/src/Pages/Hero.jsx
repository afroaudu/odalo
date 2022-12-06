import React from "react";
import Nav from "../Components/Nav";
import "tailwindcss/dist/tailwind.min.css";


const Hero = () => {
  return (
    <div className="bg-blackhero bg-no-repeat bg-cover bg-center h-screen">
      <Nav />
      <div className=" px-20 ">
        <div className="  flex flex-col h-screen items-center py-[120px] text-white text-center">
          <p
            className="text-[80px] font-bold transition duration-500 transform translate-x-full "
            style={{ opacity: 0 }}
          >
            {" "}
            HEY, I'M ODALO{" "}
          </p>
          <p>
            A Frontend focused Web Developer building the Frontend of Websites
            and
            <br></br>
            Web Application that leads to success to the overall product
          </p>
          <button className="glitch mt-[75px] bg-[#E0D929] p-[15px] px-[35px] text-[28px]">
            P R O J E C T S
          </button>
          <div className="flex text-[16px] list-none gap-20 pr-[70px] pt-11 ">
            <li className="hover:text-blue-400 zoom-hover zoom-hover transition delay-150 duration-300 ease-in-out">
              <a href="£" className="">
                {" "}
                HOME{" "}
              </a>
            </li>
            <li className="hover:text-blue-400 zoom-hover transition delay-150 duration-300 ease-in-out">
              <a href="£"> ABOUT </a>
            </li>
            <li className="hover:text-blue-400 zoom-hover transition delay-150 duration-300 ease-in-out">
              <a href="£"> PROJECTS </a>
            </li>
            <li className="hover:text-blue-400 zoom-hover transition delay-150 duration-300 ease-in-out">
              <a href="£"> CONTACT </a>
            </li>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
