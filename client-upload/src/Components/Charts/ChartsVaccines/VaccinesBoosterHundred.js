import React, { useEffect, useState } from "react";
import ReactEcharts from "echarts-for-react";
export default function VaccinesBoosterHundred({ report }) {
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
          data: report.map((item) => item.total_boosters_per_hundred),
          label: {
            show: true,
            position: "right",
            valueAnimation: true,
          },
          itemStyle: {
            color: "rgb(42, 106, 83)",
          },
          name: "COVID-19 vaccine boosters administered per 100 people",
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
        <h2 className="w-[50%] font-inria font-semibold tablet:text-2xl md:text-3xl lg:text-3xl text-tahiti-100 capitalize ">
          COVID-19 vaccine booster given per 100 people?{" "}
        </h2>
        <br />
        <p className="w-[50%] ] tablet:text-sm md:text-base lg:text-[13px] pt-[100px] pr-28 font-normal  text-tahiti-100 max-w-[650px]  ">
          The total number of booster doses of vaccine administered divided by
          the total population of the country. Increase Doses are doses used in
          excess of the original immunization schedule.{" "}
        </p>
      </div>
      <br />
      <ReactEcharts option={options} data={report}></ReactEcharts>
    </div>
  );
}
