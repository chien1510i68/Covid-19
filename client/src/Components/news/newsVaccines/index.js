import React, { useEffect } from 'react'
import { getVaccineNews } from '../../API'
import usePagination from '../Pagination'


export default function NewsVaccines() {

  const [vaccine, setVaccine] = React.useState([]);

  // APi get all  
  useEffect(() => {
    return () => {
      getVaccineNews().then(function (response) {
        //console.log(response.data);
        setVaccine(response.data.news)
      }).catch(function (error) {
        console.error(error);
      });

    };
  }, [])

  const PER_PAGE = 7;
  // Xử lý Pagination : Phân trang
  //const count = Math.ceil(data.length / PER_PAGE);
  const DATA = usePagination(vaccine, PER_PAGE)

  return (
    <div className=' tablet:mt-9 lg:mt-20'>
      {<div className=' '>
        <div>
          <h3 className=' tablet:text-xs font-inter text-2xl font-semibold text-[#2082A2] mb-4'>
            News Vaccines
          </h3>
        </div>
        <div className=' grid tablet:grid-cols-1 laptop:max-w-3xl   max-w-[100%]  grid-cols-3  gap-8'>
          {
            DATA.currentData().map((item, use) => {
              return (
                <div key={use} className='relative max-w-[400px] max-h-[400px]  ' >
                  <a href={item.link}>
                    <div className='max-w-[400px] max-h-[360px] rounded-3xl' >
                      <img src={item.urlToImage} alt="" className='rounded-2xl tablet:min-w-full  min-w-[400px] min-h-[360px] object-cover' />
                    </div>
                    <div className='title bg-[#F1F1F2] w-[380px] h-[165px] absolute top-[80%] left-[44%] translate-x-[-50%] translate-y-[-50%] p-7'>
                      <h5 className=' uppercase text-[18px] font-medium'>
                        {item.reference}
                      </h5>
                      <h4 className=' uppercase text-[14px] font-medium mt-2'>
                        {item.title}
                      </h4>
                    </div>
                  </a>
                </div>
              )
            })
          }
        </div>
      </div>}


    </div>
  )
}
