import React, { useEffect, useState } from "react";
import ReactEcharts from "echarts-for-react";

export default function VaccinesProtocol({ report }) {
  console.log("vaccccccc", report);
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
          name: "The number of people who are fully immunized per hundred(%)",
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
      <div className="flex">
        <h2 className=" w-[50%] font-inria font-semibold tablet:text-2xl md:text-3xl lg:text-3xl text-[#3c4e66]  capitalize">
          What Share Of The Population Has Received At Least One Dose , And
          Completed The Initial Vaccination Protocol ?
        </h2>
        <p className="w-[50%] font-inria tablet:text-sm md:text-base lg:text-xl font-normal pr-32  text-tahiti-100 max-w-[650px]  pt-[100px]  mb-8 ">
          What Is Important To Note About These Case Figures?
          <br />
          <br />
          <span className="text-[13px] block text-right  ">
            The Reported Case Figures On A Given Date Do Not Necessarily Show
            The Number Of New Cases On'That Day ~ This Is Due To Delays In
            Reporting
            <br />
            <br />
            “The Actual Number OF Cases Is Likely To Be Much Higher Than The
            Number OF Confirmed Cases This Is Due To Limited Testing
          </span>
        </p>
      </div>
      <div>
        {/* <h2 className=" font-inria font-semibold tablet:text-2xl md:text-3xl lg:text-4xl text-[#3E3E3E] capitalize ">
          Chia sẻ của những người được tiêm vắc xin COVID-19
        </h2> */}
        <br />
      </div>
      <div>
        {/* <ReactEcharts option={options} data={report}></ReactEcharts> */}
      </div>
    </div>
  );
}
