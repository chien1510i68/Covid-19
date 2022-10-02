import React, { useEffect } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { sortBy } from "lodash";
import { getTableVaccinesCoutry } from "../../API";

export default function TableVaccinesCountry() {
  const [country, setCountry] = React.useState([]);
  useEffect(() => {
    getTableVaccinesCoutry().then((res) => {
      console.log({ res });
      const { data } = res;
      const country = sortBy(data);
      setCountry(country);
    });
  }, []);
  console.log("tgg", country);
  return (
    <div>
      <h2 className=" font-inria font-semibold tablet:text-2xl md:text-3xl lg:text-3xl text-[#3E3E3E] capitalize mb-8 ">
        Sources of information by country
      </h2>
      <p className=" tablet:text-sm md:text-base lg:text-xl font-normal  text-tahiti-100 max-w-[450px] mb-8  ">
        Vaccination against COVID-19 has now begun at 218 sites.{" "}
      </p>

      <TableContainer component={Paper} sx={{ height: 700, width: "100%" }}>
        <Table
          sx={{ Width: "100%", Height: "500px", overflow: "hidden" }}
          size="small"
          aria-label="a dense table"
        >
          <TableHead>
            <TableRow>
              <TableCell align="left" sx={{ maxWidth: "100%" }}>
                COUNTRY
              </TableCell>
              <TableCell align="center" sx={{ maxWidth: "100%" }}>
                ISO_CODE
              </TableCell>
              <TableCell align="center" sx={{ minWidth: 500 }}>
                VACCINES
              </TableCell>
              <TableCell align="center" sx={{ minWidth: 200 }}>
                LAST OBSERVATION DATE
              </TableCell>
              <TableCell align="left" sx={{ maxWidth: "100%" }}>
                SOURCE NAME
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {country.map((row, iso_code) => (
              <TableRow
                key={iso_code}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell align="left">{row.location}</TableCell>
                <TableCell align="center">{row.iso_code}</TableCell>
                <TableCell align="left">{row.vaccines}</TableCell>
                <TableCell align="center">
                  {row.last_observation_date}
                </TableCell>
                <TableCell align="left">
                  <a href={row.source_website} className="text-[#001E3C]">
                    {row.source_name}
                  </a>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
