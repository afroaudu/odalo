import React from "react";
import { Icon } from "@iconify/react";

const Contact = () => {
  return (
    <div>
      <div className="min-h-[250px] px-20 bg-black pb-[0px] pt-[50px] text-white">
        <div className="flex justify-between">
          <div className="w-2/5 ">
            <p className="font-bold py-3  text-lg">CALEB AUDU</p>
            <p className="text-sm">
              A Frontend focused Web Developer building the Frontend of Websites
              and Web Application that leads to success to the overall product
            </p>
          </div>
          <div className="">
            <p className="font-bold py-3  text-lg">SOCIAL</p>
            <div className="flex gap-4">
              <a href="">
                <Icon
                  className="w-8 h-8"
                  icon="ri:linkedin-fill"
                  color="white"
                />
              </a>

              <a href="twitter.com">
                <Icon
                  icon="teenyicons:twitter-outline"
                  color="white"
                  width="32"
                  height="32"
                />
              </a>
              <a href="">
                <Icon icon="mdi:github" color="white" width="32" height="32" />
              </a>
              <a href="">
                <Icon icon="mdi:email" width="32" />
              </a>
              <a href=""></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
