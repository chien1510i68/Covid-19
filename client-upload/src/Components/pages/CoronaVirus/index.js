import React from "react";
import Header from "./header";
import BackgroundImage from "../../file/Images/khang-the-troi-cho-trungquoc-omicron-2022-02-04-15-05.jpg";
import CountriesUI from "../../countriesUI";
import TableCoronaVirus from "../../table/TableCoronaVirus";
import FooterPages from "../../footer";
import HeaderPages from "../../header";

export default function CoronaVirus() {
  return (
    <>
      <HeaderPages />
      <div className="max-w-[1250px]  m-auto justify-center items-center">
        <img
          src={BackgroundImage}
          alt=""
          className=" tablet:p-3 md:p-3 lg:p-0 tablet:w-[100%] tablet:h-[100%] md:w-[100%] md:h-[100%] lg:w-[1250px] lg:h-[646px] rounded-3xl object-cover "
        />
      </div>
      <div className=" w-[100%] "></div>
      <div className="max-w-[1250px] tablet:p-3 md:p-3  mx-[52px] justify-center items-center mt-8">
        <div className=" w-full ">
          <div className="lg:w-[50%] ">
            <h1 className="text-[#3c4e66] text-7xl font-bold leading-normal  ">
              CORONAVIRUS NEWS
              <span className="font-medium font-[emoji] "> V.1</span>
            </h1>
          </div>
          <div className=" w-full lg:flex md:flex sm:flex tablet:grid tablet:w-full  justify-between pt-12">
            <p className="sm:w-[50%] tablet:w-full tablet:mb-5 text-[28px] lg:pr-24 sm:pr-4   font-[emoji] text-[#3c4e66]   ">
              Explore Global Data On <br /> Infection And Death From Covid - 19
            </p>
            <div className="w-[50%] lg:pl-40 sm:pl-2 tablet:text-3  tablet:w-full font-medium text-[#3c4e66]">
              <p>
                THIS PAGE HAS A LARGE NUMBER OF CHARTS ON THE PANDEMIC . IN THE
                BOX BELOW YOU CAN SELECT ANY COUNTRY YOU ARE INTERESTED IN - OR
                SEVERAL , IF YOU WANT TO COMPARE COUNTRIES .
              </p>
              <p className="pt-7 ">
                ALL CHARTS ON THIS PAGE WILL THEN SHOW DATA FOR THE COUNTRIES
                THAT YOU SELECTED .
              </p>
            </div>
          </div>
        </div>

        <div className="pt-[50px] ">
          <h2 className=" max-w-[500px] mb-8  font-inria font-semibold text-[28px] text-[#3c4e66] pr-36 capitalize">
            Select Countries To Show In All Charts
          </h2>
        </div>
        <CountriesUI />
        <TableCoronaVirus />
        <FooterPages />
      </div>
    </>
  );
}
