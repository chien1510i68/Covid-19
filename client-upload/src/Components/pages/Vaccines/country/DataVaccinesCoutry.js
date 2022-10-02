import React, { useMemo } from "react";
import { Box, ListItem } from "@mui/material";
import ChartsVaccines from "../../../Charts/ChartsVaccines/index";
export default function DataVaccinesCoutry({ report }) {
  console.log("vacc", report);
  const boxitem = useMemo(() => {
    if (report && report.length) {
      const latestData = report[report.length - 1];
      return [
        {
          count: latestData.total_vaccinations,
          type: "total_vaccinations",
        },
        {
          count1: latestData.people_fully_vaccinated,
          type: "people_fully_vaccinated",
        },
        {
          count2: latestData.people_fully_vaccinated_per_hundred,
          type: "people_fully_vaccinated_per_hundred",
        },
      ];
    }
    return [];
  }, [report]);
  console.log("r", boxitem);
  return (
    <div>
      <Box className=" tablet:mx-auto tablet:flex-col lg:flex relative mt-8 tablet:mb-10 tablet:gap-5 justify-between  lg:mb-24  w-[60%]">
        <ListItem className=" font-inter text-xl flex-col text-l  ">
          <h3 className=" tablet:mb-2 lg:mb-6 min-h-[50px] font-bold text-[#41536a]">
            Total dose provided
          </h3>
          <h4 className="text-[#286DA8] text-4xl font-inter font-semibold">
            {boxitem.map((res, item) => {
              return <span key={item}>{res.count}</span>;
            })}
          </h4>
        </ListItem>
        <ListItem className=" font-inter text-xl flex-col block ">
          <h3 className="tablet:mb-2 lg:mb-6 min-h-[50px] font-bold text-[#41536a] tablet:text-center">
            Number of people who received the full dose{" "}
          </h3>

          <h4 className="text-[#286DA8] text-4xl font-inter font-semibold ">
            {boxitem.map((res, item) => {
              return <span key={item}>{res.count1}</span>;
            })}
          </h4>
        </ListItem>
        {/* <ListItem className=' font-inter text-xl flex-col md:mb-5'>
                    <h3 className='tablet:mb-2 lg:mb-6 min-h-[50px]'>
                        Số người được tiêm chủng đầy đủ trên một trăm:
                    </h3>

                    <h4 className="text-[#286DA8] text-5xl font-inter font-semibold">
                        {
                            boxitem.map((res, item) => {
                                return <span key={item} >
                                    {res.count2} 
                                </span>
                            })
                        }%
                    </h4>
                </ListItem> */}
      </Box>
      <ChartsVaccines report={report} />
    </div>
  );
}
