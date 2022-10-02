import React, { useEffect } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { getTableAllCountries } from "../../API";
import { sortBy } from "lodash";
import CountriesUI from "../countriesUI";

export default function TableCoronaVirus() {
  //const [data , setAllCountry] = React.useState([])
  const [allCountry, setAllCoutry] = React.useState([]);

  useEffect(() => {
    getTableAllCountries().then((res) => {
      // console.log({ res });
      const { data } = res;
      const allCountry = sortBy(data);
      setAllCoutry(allCountry);
      delete allCountry[0];
    });
  }, []);
  //console.log('te', allCountry)
  return (
    <div className="mt-9">
      <h2 className=" font-inria font-semibold text-4xl text-[#3E3E3E] capitalize ">
        Global dataset on covid-19 mutations
      </h2>
      {/* <CountriesUI /> */}

      <p className=" text-xl font-inria mt-7 mb-7  text-tahiti-100 max-w-[650px]  ">
        Coronavirus COVID-19 is affecting 228 countries and territories. List of
        countries and their regional classification based on
        <a
          href="https://unstats.un.org/unsd/methodology/m49/"
          className="text-[#37629A]"
        >
          {" "}
          The United Nations Geoscheme.
        </a>
      </p>

      <TableContainer component={Paper} sx={{ height: 700, width: "100%" }}>
        <Table
          sx={{ Width: "100%", Height: "500px", overflow: "hidden" }}
          size="small"
          aria-label="a dense table"
        >
          <TableHead>
            <TableRow>
              <TableCell align="right">STT</TableCell>
              <TableCell align="right" sx={{ minWidth: 170 }}>
                COUNTRY
              </TableCell>
              <TableCell align="right" sx={{ minWidth: 170 }}>
                TOTAL CASES
              </TableCell>
              <TableCell align="right" sx={{ minWidth: 170 }}>
                NEW CASES ▾
              </TableCell>
              <TableCell align="right" sx={{ minWidth: 170 }}>
                TOTAL DEATHS ▾
              </TableCell>
              <TableCell align="right" sx={{ minWidth: 170 }}>
                NEW DEATHS▾
              </TableCell>
              <TableCell align="right" sx={{ minWidth: 190 }}>
                TOTAL RECOVERED ▾
              </TableCell>
              <TableCell align="right" sx={{ minWidth: 170 }}>
                INFECTION RISK ▾
              </TableCell>
              <TableCell align="right" sx={{ minWidth: 170 }}>
                SERIOUS, CRITICAL▾
              </TableCell>
              <TableCell align="right" sx={{ minWidth: 170 }}>
                ACTIVE CASES ▾
              </TableCell>
              <TableCell align="right" sx={{ minWidth: 230 }}>
                CASE FATALITY RATE (CFR)▾
              </TableCell>
              <TableCell align="right" sx={{ minWidth: 170 }}>
                TOTAL TESTS ▾
              </TableCell>
              <TableCell align="right" sx={{ minWidth: 190 }}>
                TEST PERCENTAGE ▾
              </TableCell>
              <TableCell align="right" sx={{ minWidth: 230 }}>
                RECOVERY PERCENTAGE ▾
              </TableCell>
              <TableCell align="right" sx={{ minWidth: 170 }}>
                POPULATION ▾
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {allCountry.map((row, id) => (
              <TableRow
                key={id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell>{row.rank}</TableCell>
                <TableCell align="right">{row.Country}</TableCell>
                <TableCell align="right">{row.TotalCases}</TableCell>
                <TableCell align="right">{row.NewCases}</TableCell>
                <TableCell align="right">{row.TotalDeaths}</TableCell>
                <TableCell align="right">{row.NewDeaths}</TableCell>
                <TableCell align="right">{row.TotalRecovered}</TableCell>
                <TableCell align="right">{row.Infection_Risk}</TableCell>
                <TableCell align="right">{row.Serious_Critical}</TableCell>
                <TableCell align="right">{row.ActiveCases}</TableCell>
                <TableCell align="right">{row.Case_Fatality_Rate}</TableCell>
                <TableCell align="right">{row.TotalTests}</TableCell>
                <TableCell align="right">{row.Test_Percentage}</TableCell>
                <TableCell align="right">{row.Recovery_Proporation}</TableCell>
                <TableCell align="right">{row.Population}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
