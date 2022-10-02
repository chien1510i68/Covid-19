import React, { useMemo } from "react";
import Vaccine from "../../../file/Images/Vaccine.png";

function DataVaccinesWorld({ vaccine }) {
  let getDataWorld = [];
  for (let i = 0; i < vaccine.length; i++) {
    if (vaccine[i].country === "World") {
      getDataWorld.push(vaccine[i].data);
    }
  }

  // console.log('da', getDataWorld);
  const lastItem = getDataWorld[getDataWorld.length - 1];
  // console.log('r', lastItem);

  const boxitem = useMemo(() => {
    if (lastItem && lastItem.length) {
      const latestData = lastItem[lastItem.length - 1];
      return [
        {
          count: latestData.people_vaccinated_per_hundred,
          type: "people_vaccinated_per_hundred",
        },
        {
          count1: latestData.total_vaccinations,
          type: "total_vaccinations",
        },
      ];
    }
    return [];
  }, [lastItem]);
  // console.log('r', boxitem);
  return (
    <div className="sm:flex tablet:grid w-full justify-center">
      <div className="sm:w-[50%] tablet:w-full">
        <h2 className=" font-inria font-semibold tablet:text-2xl md:text-3xl lg:text-3xl text-tahiti-100 capitalize pt-10">
          The Our world in Data COVID <br /> vaccination data
        </h2>
      </div>
      <div className=" ">
        <div>
          <p className="font-semibold  font-inria tablet:sm md:text-base lg:text-xl  uppercase  text-tahiti-100 max-w-[650px]  pt-10 ">
            within less than 12 months after the start of the pandemic, some
            groups research has passed the test and developed a vaccine that
            protects against SARS-CoV-2.
            <br />
            <br />
            Now the challenge is to make these vaccines available to everyone
            people in the world. It is important that people in all countries
            countries - not just in rich countries - receive the protection they
            need set.
          </p>
        </div>
        <div className=" mt-14 tablet:text-center">
          <div>
            <h2 className="text-[#286DA8] tablet:text-4xl lg:text-6xl  font-inter font-semibold">
              {boxitem.map((res, item) => {
                return <span key={item}>{res.count}</span>;
              })}
              %
            </h2>
            <h3 className=" font-inter tablet:sm md:text-base lg:text-xl text-tahiti-100  font-medium   capitalize">
              Of The world's population has received at least one <br />
              dose of the COVID-19 vaccine.{" "}
            </h3>
          </div>
          <div className="mt-8">
            <h2 className="text-[#286DA8] tablet:text-4xl lg:text-6xl font-inter font-semibold">
              {boxitem.map((res, item) => {
                return <span key={item}>{res.count1}</span>;
              })}
            </h2>
            <h3 className=" font-inter tablet:sm md:text-base lg:text-xl max-w-[400px] tablet:mx-auto text-tahiti-100 font-medium tablet:mb-8">
              Dosage has been administered globally
            </h3>
          </div>
        </div>
        {/* <div>
          <img
            src={Vaccine}
            alt=""
            className=" tablet:max-w-[300px] tablet:h-[300px] tablet:items-center  md:w-[300px] md:h-[300px] m-auto tablet:mb-8 lg:w-[500px] lg:h-[500px]  rounded-full  object-cover"
          />
        </div> */}
      </div>
    </div>
  );
}

export default DataVaccinesWorld;
