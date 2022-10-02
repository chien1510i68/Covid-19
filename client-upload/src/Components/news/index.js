import React from "react";
import NewsCoutry from "./newsCountry";

export default function News() {
  return (
    <div className="">
      <div className=" md:p-5 md:mb-0 lg:p-0 mt-20 tablet:mb-6  lg:mb-6">
        <h2 className="font-[roboto] text-[32px] ml-4 font-bold    text-[#3E3E3E]">
          Lastest News
        </h2>
      </div>
      <NewsCoutry />
    </div>
  );
}
