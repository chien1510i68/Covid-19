import React from "react";
import Arrow from "../../../file/svg/Arrow.svg";
import { Link } from "react-router-dom";
import Image from "../../../file/Images/Brown Covid Mask Quotes Instagram Post.png";

let Data = [
  {
    title: "Explore data sources about Coronavirus  ",
    content:
      "Each profile include interactive visualizations , explaination of the presented metrics and the details on the sources of the data",
  },
  {
    title: "Explore data sources about Vaccines  ",
    content: `To bring this pandemic to an end , a
    large share of the world needs to be
    immune to the virus . The safest way
    to achieve this is with a vaccine .`,
  },
  {
    title: "Source of health protection information",
    content:
      "Health News covers emerging research , new treatments , diet ,exercise and trending health and wellness topics ., explaination of the presented metrics and",
  },
];

export default function Disease() {
  return (
    <div className=" flex   mb-24 md:p-5 bg-[#f9f9fa]">
      <div className=" lg:w-[60%] md:w-[50%] tablet:w-100% md:mx-[auto]  ml-[20px] flex  flex-wrap" >
        <div className=" lg:w-[40%]  text-center pt-[0]   m-[25px]  ">
          <h2 className="font-bold text-3xl text-[#555555] ">
            Area of our forcus
          </h2>
          <p className="text-[14px] pt-[50px] font-semibold">
            EXPLORE THE VOLATILITY OF THE COVID - 19 PANDEMIC THROUGH INDICATORS
            AND QUICK REPORTS WITH THETOPICS WE COLLECT .
          </p>
        </div>
        {/* <div className="w-[45%] flex"> */}
        {Data.map((item) => {
          return (
            <div className=" lg:w-[40%] bg-[#f1f1f2] justify-between   p-[30px]  mx-[25px]  rounded-[10px] mb-7 pb-6   ">
              <h3 className="font-bold text-xl text-[#606060]">{item.title}</h3>
              <span className="text-[11px] block mt-3 pt-10">
                {item.content}
              </span>
            </div>
          );
        })}
      </div>
      {/* </div> */}
      <div className="lg:w-[40%] md:w-[50%] sm:w-0 tablet:w-0    ">
        <img
          className="h-full bg-cover bg-center object-cover   "
          src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bmF0dXJlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
          alt=""
        />
      </div>
    </div>
  );
}
