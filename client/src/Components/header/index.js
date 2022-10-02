import React from "react";
import { Link } from "react-router-dom";

export default function HeaderPages() {
  return (
    <div className=" flex justify-between py-8">
      <a
        href=""
        className="bg-[#fff] px-[30px] py-[10px] rounded-[5px] font-medium"
      >
        data-covid-19
      </a>
      <div className="flex items-center">
        <nav>
          <ul className="flex rounded-[5px] bg-[#fff] ">
            <li className=" py-[10px] px-[30px] font-medium">
              <Link to="/">Home</Link>
            </li>
            <li className=" py-[10px] px-[30px] font-medium">
              <Link to="/CoronaVirus">CoronaVirus</Link>
            </li>
            <li className=" py-[10px] px-[30px] font-medium">
              <Link to="/Vaccines">Vaccines</Link>
            </li>
            <li className=" py-[10px] px-[30px] font-medium">
              <Link to="/Health">Health</Link>{" "}
            </li>
          </ul>
        </nav>
        <div className=" ml-[10px]">
          <button className="bg-[#fff] px-[30px] py-[10px] rounded-[5px] font-medium mr-[10px]">
            EN
          </button>
          <button className="bg-[#fff] px-[30px] py-[10px] rounded-[5px] font-medium ">
            VI
          </button>
        </div>
      </div>
    </div>
  );
}
