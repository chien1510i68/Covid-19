import React, { useEffect } from "react";
import usePagination from "../Pagination";
import { sortBy } from "lodash";
import { getNewsCountry } from "../../../API/newsCountry";
function NewsCoutry() {
  const [countrys, setCountrys] = React.useState([]);
  useEffect(() => {
    getNewsCountry()
      .then((res) => {
        console.log("Country", res);
        setCountrys(res.data.articles);
        res.data.articles.sort(function (a, b) {
          var c = new Date(a.published_date);
          var d = new Date(b.published_date);
          return d - c;
        });
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);

  /// Xử lý phân trang
  const PER_PAGE = 20;
  // Xử lý Pagination : Phân trang
  const DATA = usePagination(countrys, PER_PAGE);
  console.log("tyu", DATA);
  const deletefirstitem = countrys.shift();
  console.log("TAO TEST : ", countrys);
  return (
    // <div className=" table:p-5 md:p-5 lg:p-0">
    //   <div className=" mb-24 ">
    //     <div>
    //       <h3 className=" tablet:text-xs font-inter text-2xl  font-semibold text-[#2082A2] mb-4">
    //         Tình hình dịch cả nước
    //       </h3>
    //     </div>
    //     <div className="w-full">
    //       {/*  <div>
    //                     <div>
    //                         <img src="" alt="" />
    //                         <h2>Massa tortor nibh nulla condimentum imperdiet scelerisque...</h2>
    //                     </div>
    //                     <div>
    //                         <p>
    //                             Nisi, sagittis aliquet sit rutrum. Nunc, id vestibulum quam ornare adipiscing. Pellentesque sed turpis nunc gravida pharetra, sit nec vivamus pharetra. Velit, dui, egestas nisi, elementum mattis mauris, magnis. Massa tortor nibh nulla condimentum imperdiet scelerisque... read more
    //                         </p>
    //                     </div>
    //                 </div> */}

    //       <div className="grid tablet:grid-cols-1 md:grid-cols-2  w-[25%]">
    //         {DATA.currentData().map((item, use) => {
    //           return (
    //             <div key={use} className="relative w-full ">
    //               <a href={item.link} className="w-[25%]">
    //                 <div className=" tablet:max-w-full  lg:w-[400px] lg:h-[360px] rounded-3xl">
    //                   <img src={item.media} alt="" className="" />
    //                 </div>
    //                 <div className="title">
    //                   <h5 className=" uppercase  tablet:text-xs lg:text-[18px] font-medium">
    //                     {item.clean_url}
    //                   </h5>
    //                   <h4 className=" uppercase text-[14px] font-medium mt-2">
    //                     {item.title}
    //                   </h4>
    //                 </div>
    //               </a>
    //             </div>
    //           );
    //         })}
    //       </div>
    //     </div>
    //   </div>
    // </div>

    <div>
      {/* <h2>Lastest New</h2> */}
      <div className=" w-full tablet:grid-cols-1 md:grid-cols-2 flex flex-wrap ">
        {countrys.map((item, use) => {
          return (
            <div key={use} className="relative lg:w-[25%] md:w-[33%] sm:w-[50%] tablet:w-full  ">
              <a
                href={item.link}
                className=" h-[175px] mx-[17px] my-12 w-[90%]"
              >
                <div className=" rounded-3xl h-[175px] mx-4">
                  <img
                    src={item.media}
                    alt=""
                    className="h-full w-full object-cover rounded-[8px] "
                  />
                </div>
                <h4 className=" text-[16px] capitalize   font-bold font-[emoji] mt-4    mx-4 mb-10">
                  {item.title}
                </h4>
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default NewsCoutry;
