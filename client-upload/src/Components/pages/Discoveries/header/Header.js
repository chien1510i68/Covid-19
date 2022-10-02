import { Menu } from "@mui/material";
import React from "react";
// import { Link } from "react-router-dom";
import HeaderPages from "../../../header";
// import Menuheader from "./menu";
// import 

export default function Title() {
  return (
    <section className="  tablet:min-h-full  tablet:mb-10 mb-24 lg:min-h-[1000px] w-full">
      <HeaderPages></HeaderPages>
      <div className="tablet:pt-10 md:pt-9 md:p-5 max-w-[1250px] pt-24 ">
        <div className="  rounded-3xl  absolute  justify-center max-w-full tablet:relative md:relative">
          <img
            className=" p-0 tablet:w-[100%] tablet:h-[100%] md:w-[100%] md:h-[100%] lg:w-[1250px] lg:h-[646px] rounded-3xl object-cover"
            src="https://images.unsplash.com/photo-1597440658768-f3ffdf64223c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            alt=""
          />
          <div className="  tablet:w-full  absolute z-20  top-1/2 left-1/2  translate-x-[-50%] translate-y-[-50%] m-auto justify-center items-center font-inter font-bold">
            <div className="tablet:w-full  tablet:text-2xl md:text-5xl lg:text-7xl text-[#3E3E3E] md:w-[700px] lg:w-[1000px] ">
              <h1 className=" lg:px-3 md:w-full">Coronavirus Disease</h1>
              <h1 className=" tablet:ml-[50px] md:ml-[110px] lg:ml-[170px]">
                (COVID-19) Pandemic
              </h1>
            </div>
            <br />
            <p className=" tablet:text-[10px]  tablet:leading-3 tablet:m-0 tablet:max-w-[250px] md:max-w-[500px] tablet:mr-6  lg:mr-0 relative w-[400px] text-right text-base text-[#3C4E66] float-right ">
              This website continuously updates the situation of the disease
              caused by coronavirus (COVID-19) cause with overview of cases and
              deaths COVID-19 across the globe, regional and national cables,
              highlighting the important data and trends
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
