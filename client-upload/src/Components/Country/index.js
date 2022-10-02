import React, { useEffect } from "react";
import { sortBy } from "lodash";
import { getReportByCountry2, getCountries2 } from "../../API/history";
import CountrySelect from "./countrySelect";
import CircleMap from "./cricleMap";

export default function Country() {
  const [countries, setCountries] = React.useState([]);
  const [selectedCountryId, setSelectedCountryId] = React.useState("");
  const [report, setReport] = React.useState([]);

  useEffect(() => {
    getCountries2().then((res) => {
      //console.log({ res })
      const { data } = res;
      const countries = sortBy(data, "name");
      setCountries(countries);
      setSelectedCountryId("VietNam");
    });
  }, []);

  const handleOnChange = React.useCallback((e) => {
    setSelectedCountryId(e.target.value);
  }, []);

  /*  console.log('tiel',selectedCountryId);  */

  useEffect(() => {
    if (selectedCountryId) {
      const selectedCountry = countries.find(
        (name) => name.name === selectedCountryId.toString()
      );
      console.log("test1", selectedCountry);
      getReportByCountry2(selectedCountry.name).then((res) => {
        console.log("t", res);
        // remove last item = current date

        // Sắp xếp thời gian
        res.data.response.sort(function (a, b) {
          var c = new Date(a.day);
          var d = new Date(b.day);
          return c - d;
        });
        setReport(res.data.response);
      });
    }
  }, [selectedCountryId, countries]);

  return (
    <div className="   lg:min-h-[800px]  ">
      <div className=" mb-6 pt-[70px]  ">
        <h2 className="tablet:text-lg pb-4 font-[roboto] font-bold  text-4xl text-[#3e3e3e]">
          Update News
        </h2>

        <div className="bg-[#f1f1f2] border-none outline-none font-bold">
          <CountrySelect
            handleOnChange={handleOnChange}
            countries={countries}
            value={selectedCountryId}
          />
          <CircleMap report={report} />
        </div>
      </div>
    </div>
  );
}
