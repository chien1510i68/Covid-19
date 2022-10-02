import React, { useEffect, useState } from "react";
import ReactEcharts from "echarts-for-react";
export default function VaccinesDaily({ report }) {
  const generateOptions = (report) => {
    const categories = report.map((item) => item.date);
    return {
      animationDuration: 10000,
      tooltip: {
        trigger: "axis",
      },

      xAxis: {
        type: "category",
        boundaryGap: false,
        data: categories,
      },
      yAxis: {
        type: "value",
        boundaryGap: [0, "0%"],
      },
      dataZoom: [
        {
          type: "slider",
          show: true,
          start: 70,
          end: 100,
        },
        {
          type: "inside",
          start: 70,
          end: 100,
        },
      ],
      series: [
        {
          name: "Daily People Vaccinated",
          data: report.map((item) => item.daily_people_vaccinated),
          type: "line",
          symbol: "none",
          sampling: "lttb",
          itemStyle: {
            color: "rgb(42, 106, 83)",
          },
        },
      ],
    };
  };

  const [options, setOptions] = useState({});
  useEffect(() => {
    setOptions(generateOptions(report));
  }, [report]);
  return (
    <div>
      <div className="flex w-full">
        <h2 className=" w-[50%] font-inria font-semibold tablet:text-2xl md:text-3xl lg:text-3xl text-[#3c4e66] capitalize ">
          Number Of People Vaccinated Daily
        </h2>
        <p className="w-[50%] pt-20 pr-28 text-right  ">
          The Provious Charts Looked At The Number Of Confirmed Cases Per Day —
          This Chart Shows The Cumulative Number Of Confirmed Cases Since The
          Beginning Of The COVID-19 Pandemic.
        </p>
      </div>
      <ReactEcharts option={options} data={report}></ReactEcharts>
    </div>
  );
}
