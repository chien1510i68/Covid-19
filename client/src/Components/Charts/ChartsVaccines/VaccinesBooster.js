import React, { useEffect, useState } from "react";
import ReactEcharts from "echarts-for-react";

export default function VaccinesBooster({ report }) {
  const generateOptions = (report) => {
    const categories = report.map((item) => item.date);

    return {
      xAxis: {
        type: "value",
        boundaryGap: [0, "0%"],
      },

      yAxis: {
        type: "category",
        data: categories,
        inverse: true,
        animationDuration: 300,
        animationDurationUpdate: 300,
        max: 2, // only the largest 3 bars will be displayed
      },
      series: [
        {
          realtimeSort: true,
          type: "bar",
          data: report.map((item) => item.total_vaccinations_per_hundred),
          label: {
            show: true,
            position: "right",
            valueAnimation: true,
          },
          itemStyle: {
            color: "rgb(42, 106, 83)",
          },
          name: "COVID-19 vaccine initial doses and boosters per 100 people",
        },
      ],

      legend: {
        show: true,
      },
      animationDuration: 10000,
      animationDurationUpdate: 3000,
      animationEasing: "linear",
      animationEasingUpdate: "linear",
    };
  };

  const [options, setOptions] = useState({});
  useEffect(() => {
    setOptions(generateOptions(report));
  }, [report]);

  return (
    <div>
      <div className="w-full flex">
        <h2 className=" font-inria font-semibold tablet:text-2xl md:text-3xl lg:text-3xl text-[#3c4e66] w-[50%] capitalize mt-8 ">
          How many doses of booster vaccine? be managed?
        </h2>
        <br />
        <p className="pt-[100px] tablet:text-sm md:text-base lg:text-[13px] pr-28 text-right  font-normal text-[13px] text-tahiti-100 max-w-[650px] w-[50%] ">
          The following charts show the number of booster doses used. A booster
          dose is a dose used in excess of the original immunization schedule -
          for example, the third dose of Pfizer/BioNTech vaccine or the second
          dose of Johnson & Johnson vaccine.
        </p>
      </div>
      <br />
      <ReactEcharts option={options} data={report}></ReactEcharts>
    </div>
  );
}
