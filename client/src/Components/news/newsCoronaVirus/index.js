import React, { useEffect } from 'react'
import { getNewsCoronaVirus } from '../../API/newsCorona'
import usePagination from '../Pagination'
import { sortBy } from 'lodash';
export default function NewsCoronaVirus() {
    const [news, setNews] = React.useState([]);

    // APi get all coronavirusnews 
    useEffect(() => {
        getNewsCoronaVirus().then((response) => {
            //console.log(response.data);
            setNews(response.data.articles)
        }).catch(function (error) {
            console.error(error);
        });


    }, []);
   // console.log('rr', news)
    const PER_PAGE = 9;
    // Xử lý Pagination : Phân trang
    //const count = Math.ceil(data.length / PER_PAGE);
    const DATA = usePagination(news, PER_PAGE)
    console.log('te', DATA) 
    /* const handleChange = (e, p) => {
        setNews(p);
        DATA.jump(p);
    };
    */

    return (
        <div className=' '>
           <div className=' '>
                <div>
                    <h3 className=' tablet:text-xs font-inter text-2xl  font-semibold text-[#2082A2] mb-4'>
                        News CoronaVirus
                    </h3>
                </div>
                <div className=' grid tablet:grid-cols-1 laptop:max-w-3xl   max-w-[100%]  grid-cols-3  gap-8'>
                    {
                        DATA.currentData().map((item, use) => {
                            return (
                                <div key={use} className='relative  max-w-[400px] max-h-[400px]   ' >
                                    <a href={item.link}>
                                        <div className=' max-w-[400px] max-h-[360px] rounded-3xl' >
                                            <img src={item.media} alt="" className='rounded-2xl tablet:max-w-full tablet:min-h-[360px] lg:min-w-[400px] lg:min-h-[360px] object-cover' />
                                        </div>
                                        <div className='title bg-[#F1F1F2] w-[350px] h-[165px] absolute top-[80%] left-[44%] translate-x-[-50%] translate-y-[-50%] p-7'>
                                            <h5 className=' uppercase text-[18px] font-medium'>
                                                {item.author}
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
            </div> 
        </div>
    )
}
