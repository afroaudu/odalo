import React from 'react'

const About = () => {
  return (
    <div className="min-h-screen px-20 pb-[70px] pt-[90px] bg-blackhero bg-no-repeat bg-cover bg-center h-screen">
      <div className=" flex flex-col  items-center  text-[#393939] text-center">
        <p className="text-[50px] font-bold"> ABOUT ME </p>

        <div className=" bg-[#E0D929] p-[5px] px-[35px] text-"></div>
        <p className="mt-[25px]">
          Here you will find more information about me, what I do, and my
          current skills mostly in terms of
          <br></br>programming and technology
        </p>
      </div>

      <div className="flex justify-between gap-28 mt-14 ">
        <div className="w-1/2 font-medium">
          <h1 className="text-[30px] font-bold my-10 ">Get to know me</h1>
          <p className="">
            I'm a Frontend Web Developer building the Front-end of Websites and
            Web Applications that leads to the success of the overall product.
            Check out some of my work in the Projects section.
            <p>
              <br></br> I also like sharing content related to the stuff that I
              have learned over the years in Web Development so it can help
              other people of the Dev Community. Feel free to Connect or Follow
              me on my Linkedin where I post useful content related to Web
              Development and Programming{" "}
            </p>{" "}
            <br></br>
            I'm open to Job opportunities where I can contribute, learn and
            grow. If you have a good opportunity that matches my..
          </p>
        </div>

        <div className="w-1/2 ">
          <h1 className="text-[30px] text-left font-bold my-10">My Skills</h1>
          <div className="grid gap-4 grid-cols-4 grid-rows-3 font-medium">
            <div className="py-[10px] px-[1px] bg-[#D9D9D9] text-center rounded-[8px]">
              {" "}
              HTML{" "}
            </div>
            <div className="py-[10px] px-[1px] bg-[#D9D9D9] text-center rounded-[8px] ">
              {" "}
              CSS{" "}
            </div>
            <div className="py-[10px] px-[1px] bg-[#D9D9D9] text-center rounded-[8px]">
              {" "}
              Javascript{" "}
            </div>
            <div className="py-[10px] px-[1px] bg-[#D9D9D9] text-center rounded-[8px]">
              {" "}
              React{" "}
            </div>
            <div className="py-[10px] px-[1px] bg-[#D9D9D9] text-center rounded-[8px]">
              {" "}
              NextJs{" "}
            </div>
            <div className="py-[10px] px-[1px] bg-[#D9D9D9] text-center rounded-[8px]">
              {" "}
              Sass{" "}
            </div>
            <div className="py-[10px] px-[1px] bg-[#D9D9D9] text-center text-sm rounded-[8px]">
              {" "}
              Technical Writing{" "}
            </div>
            <div className="py-[10px] px-[1px] bg-[#D9D9D9] text-center rounded-[8px]">
              {" "}
              Github{" "}
            </div>
            <div className="py-[10px] px-[1px] bg-[#D9D9D9] text-center rounded-[8px]">
              {" "}
              SASS{" "}
            </div>
            <div className="py-[10px] px-[1px] bg-[#D9D9D9] text-center rounded-[8px]">
              {" "}
              APIs{" "}
            </div>
            <div className="py-[10px] px-[1px] bg-[#D9D9D9] text-center rounded-[8px]">
              {" "}
              Figma{" "}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About