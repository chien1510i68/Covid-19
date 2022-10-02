import React from "react";
import { Link } from "react-router-dom";

export default function FooterPage() {
  return (
    <div className=" w-full min-h-[386px] bg-[#23232C]  p-3">
      <div className="max-w-[1250px]  m-auto justify-center items-center">
        <div className=" uppercase pt-4 font-inter font-bold text-tahiti-200 tablet:text-5xl md:text-7xl  lg:text-9xl ">
          <div className="">discoveries</div>
          <div className="tablet:ml-[100px] ml-[400px]">Covid-19</div>
        </div>
        <div className=" tablet:flex-col md:flex-col  lg:flex justify-between tablet:mt-auto md:mt-[-140px] lg:mt-[-200px]">
          <div className=" font-inria  text-xs text-[#FFFFFF]  font-light opacity-70 max-w-[640px] ">
            <h4 className=" font-inter text-base uppercase  mb-6">
              Quote from the source
            </h4>
            <ul className=" sm:flex tablet:grid mb-6 gap-5">
              <li className=" max-w-xs">
                Hannah Ritchie , Edouard Mathieu , Lucas Rodés - Guirao ,
                Cameron Appel , Charlie Giattino , Esteban Ortiz - Ospina , Joe
                Hasell , Bobbie Macdonald , Diana Beltekian and Max Roser ( 2020
                ) - " Coronavirus Pandemic ( COVID - 19 ) " . Published online
                at OurWorldInData.org . Retrieved from:{" "}
                <a href="https://ourworldindata.org/coronavirus">
                  'https://ourworldindata.org/coronavirus' [Online Resource]
                </a>
              </li>
              <li className="max-w-xs">
                Suggested citation : WHO COVID - 19 Dashboard . Geneva : World
                Health Organization , 2020. Available online
                <a href=" https://covid19.who.int/">
                  {" "}
                  https://covid19.who.int/
                </a>
              </li>
            </ul>
            <ul className=" ">
              <li className="">
                VACCOVID . LIVE is a comprehensive up - to - date Vaccine
                tracker , COVID - 19 tracker and Treatment tracker website which
                has been landed to inform people throughout the planet about the
                present novel coronavirus ( COVID - 19 ) pandemic . In VACCOVID
                you can also find the most relevant and up - to - date news
                about covid - 19 .
                <a href="https://vaccovid.live/">https://vaccovid.live/</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
