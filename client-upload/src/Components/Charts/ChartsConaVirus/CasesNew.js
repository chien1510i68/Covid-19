import React, { useEffect, useState } from "react";
import ReactEcharts from "echarts-for-react";
function CasesNew({ report }) {
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
        boundaryGap: [0, "100%"],
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
          name: "Cases New",
          data: report.map((item) => item.cases.new),

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
    <div className=" mt-8">
      <h2 className=" font-inria font-semibold text-[28px] text-[#3E3E3E] capitalize ">
        What Is The Daily Number <br /> Of Confirmed Cases ?{" "}
      </h2>

      <ReactEcharts option={options} data={report}></ReactEcharts>
    </div>
  );
}

export default CasesNew;
