import React, { useEffect } from "react";
import { getWorldData } from "../../API";
import { sortBy } from "lodash";
import { Box } from "@mui/material";

export default function World() {
  const [world, setWorld] = React.useState([]);

  // World Data API
  useEffect(() => {
    getWorldData().then((response) => {
      console.log("WorldData", response);
      const { data } = response;
      const world = sortBy(data);
      setWorld(world);
    });
  }, []);

  return (
    <section className=" tablet:min-h-full lg:min-h-[800px]  w-[70%] text-right  md:p-5 ">
      <div className=" mb-6">
        {/* <h2 className=" tablet:text-lg font-inria font-semibold text-4xl text-[#3E3E3E]">
          Trên toàn thế giới
        </h2> */}
      </div>
      <div className=" font-inter">
        {/* <img src="" alt="WorldMap" className='m-auto float-right ' /> */}

        <Box className=" tablet:p-0 tablet:pt-[20pt] tablet:min-h-[500px] lg:min-w-[100%] lg:min-h-[750px] bg-hero-pattern bg-cover bg-no-repeat ">
          <div className=" tablet:flex-col flex justify-between items-center m-auto">
            <div className=" bg-[#E9E8EE] tablet:max-w-full tablet:max-h-[100px] w-[200px] h-[90px] relative rounded-[20px]">
              <div className=" absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-[200px] h-[70px] text-center text-[12px]">
                Total number of infections
                <h5>
                  {world.map((item) => {
                    return (
                      <span
                        key={item}
                        className="text-[#286DA8] tablet:text-2xl text-2xl"
                      >
                        {item.TotalCases}
                      </span>
                    );
                  })}
                </h5>
              </div>
            </div>
            <div className=" bg-[#E9E8EE]  tablet:max-w-full tablet:max-h-[100px] w-[200px] h-[90px] relative rounded-[20px]  tablet:mt-10 md:mt-20 lg:mt-28 justify-around items-center m-auto ">
              <div className="  text-[12px] absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-[260px] text-center">
                Total number of restores{" "}
                <h5>
                  {world.map((item) => {
                    return (
                      <span
                        key={item}
                        className="text-[#7BB224] tablet:text-2xl text-2xl"
                      >
                        {item.TotalRecovered}
                      </span>
                    );
                  })}
                </h5>
              </div>
            </div>
          </div>
          <div className=" bg-[#E9E8EE]  tablet:max-w-full tablet:max-h-[100px] w-[200px] h-[90px] relative rounded-[20px] mt-10">
            <div className=" text-[12px] absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-[260px] text-center">
              Number of people dead{" "}
              <h5>
                {world.map((item) => {
                  return (
                    <span
                      key={item}
                      className="text-[#D75F24] tablet:text-2xl  text-2xl"
                    >
                      {item.TotalDeaths}
                    </span>
                  );
                })}
              </h5>
            </div>
          </div>
        </Box>
      </div>
    </section>
  );
}
