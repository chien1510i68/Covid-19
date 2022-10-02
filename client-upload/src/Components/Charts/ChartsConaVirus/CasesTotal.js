import React, { useEffect, useState } from "react";
import ReactEcharts from "echarts-for-react";
function CasesTotal({ report }) {
  const generateOptions = (report) => {
    const categories = report.map((item) => item.day);
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
          name: "Cases Total",
          data: report.map((item) => item.cases.total),
          type: "line",
          symbol: "none",
          sampling: "lttb",
          itemStyle: {
            color: "rgb(255, 70, 131)",
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
    <div className="mt-9">
      <h2 className=" font-inria font-semibold text-4xl text-[#3E3E3E] capitalize ">
        What is the cumulative number <br /> of confirmed cases?
      </h2>

      <ReactEcharts option={options} data={report}></ReactEcharts>
    </div>
  );
}

export default CasesTotal;
