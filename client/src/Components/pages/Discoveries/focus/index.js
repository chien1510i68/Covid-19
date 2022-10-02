import React, { useEffect } from "react";
import { getNewsCountry } from "../../../../API/newsCountry";
function Focus() {
  const [country, setCountry] = React.useState([]);
  useEffect(() => {
    getNewsCountry()
      .then((res) => {
        console.log("CountryTest", res);
        setCountry(res.data.articles);
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
  const first = country[0];
  console.log("This is the : ", first);
  // const first = country[0]
  // console.log("This is the : " ,first)
  return (
    <div>
      <div className=" w-full tablet:grid-cols-1 md:grid-cols-2 flex flex-wrap ">
        <div className="mx-12 ">
          <a href={first?.link}>
            <h2 className="font-bold text-[42px] pb-[40px] text-[#121221]">
              Hot Topics
            </h2>
            <div className="flex w-full tablet:grid">
              <div className="lg:w-[75%]  sm:w-[50%] tablet:w-full relative">
              <div className="">
                <img
                  className="w-[100%] rounded-[5px]  h-[300px] bg-center bg-no-repeat bg-cover object-cover "
                  src={first?.media}
                  alt=""
                />
              </div>
                <p className="absolute top-[45%] text-3xl text-[#5a5a5a] font-[emoji] pl-9 pr-72 sm:hidden tablet:hidden   ">
                  Massa tortor nibh nulla condimentum imperdiet scelerisque ...
                </p>
              </div>
              <div className="lg:w-[25%] sm:w-[50%] tablet:w-full">
                <p className="ml-5 leading-7 pt-7 text-[#5a5a5a] font-[emoji] lg:h-[68%] block overflow-hidden sm:h-[250px] tablet:h-full">{first?.summary}
                </p>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Focus;
