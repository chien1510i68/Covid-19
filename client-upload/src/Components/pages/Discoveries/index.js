import React from "react";
import Country from "../../Country";
import News from "../../news";
import World from "../../world";
import Disease from "./disease";
import Focus from "./focus";
import FooterPage from "./footer";
import Title from "./header/Header";
import Reports from "./reports";
import Header from "../CoronaVirus/header";

export default function Discoveries() {
  return (
    // <Headers></Headers>
    // <Headers/>
    <div className=" bg-[#F1F1F2]">
      <div className="max-w-[1250px]  m-auto justify-center items-center tablet:p-3 lg:p-0">
        <Title />
        <div className="xl:flex w-[100%] lg:grid justify-center ">
          <World />
          <Country />
        </div>
        <Disease />
        <Focus />
        <News />
      </div>
      <FooterPage />
    </div>
  );
}
