import React, { useMemo } from "react";

function CircleMap({ report }) {
  const boxitem = useMemo(() => {
    if (report && report.length) {
      const latestData = report[report.length - 1];
      return [
        {
          count1: latestData.cases.total,
          type: "confirmed",
        },
        {
          count2: latestData.cases.recovered,
          type: "recovered",
        },
        {
          count3: latestData.deaths.total,
          type: "death",
        },
      ];
    }
    return [];
  }, [report]);

  return (
    <div className=" font-inter font-medium text-[#3C4E66]  items-center justify-center mt-14 ">
      <div className="flex justify-between">
        <div className=" ">
          <h5 className=" text-[12px]  text-center  capitalize">
            Total number of infections
            <br />
            {boxitem.map((data, id) => (
              <span key={id} className="text-[#286DA8] text-2xl">
                {data.count1}
              </span>
            ))}
          </h5>
        </div>
        <div className=" ">
          <h5 className=" text-[12px]  text-center capitalize">
            Number of restores
            <br />
            {boxitem.map((data, id) => (
              <span key={id} className="text-[#7BB224] text-2xl">
                {data.count2}
              </span>
            ))}
          </h5>
        </div>
      </div>
      <div className=" mt-[50px]">
        <h5 className="text-[12px]  text-center  capitalize">
          Number of people dead <br />
          {boxitem.map((data, id) => (
            <span key={id} className="text-[#D75F24] text-2xl">
              {data.count3}
            </span>
          ))}
        </h5>
      </div>
    </div>
  );
}

export default CircleMap;
