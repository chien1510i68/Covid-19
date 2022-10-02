import React from 'react'
import { Link } from 'react-router-dom'
import { Box, ListItem } from '@mui/material'

const boxitem = [
    {
        id: 1,
        h3: 'coronavirus',
        span: ' V1',
        img: 'https://raw.githubusercontent.com/hoangvantuan123/Covid-19-news/515a95ba9247694914318406aa776e2f6682e2c5/src/Components/file/Images/khang-the-troi-cho-trungquoc-omicron-2022-02-04-15-05.jpg',
        p: "Our goal is to make data and research accessible so we can make progress on the world's biggest problems.",
        h5: "SEE MORE",
        Arrow: 'https://raw.githubusercontent.com/hoangvantuan123/Covid-19-news/main/src/Components/file/svg/Arrow.svg',
        to: '/CoronaVirus'
    },
    {
        id: 2,
        h3: 'vaccines',
        span: ' V2',
        img: 'https://raw.githubusercontent.com/hoangvantuan123/Covid-19-news/main/src/Components/file/Images/Image2.png',
        p: "To bring this pandemic to an end, a large share of the world needs to be immune to the virus. The safest way to achieve this is with a vaccine. Vaccines are a technology that humanity has often relied on in the past to bring down the death toll of infectious diseases.",
        h5: "SEE MORE",
        Arrow: 'https://raw.githubusercontent.com/hoangvantuan123/Covid-19-news/main/src/Components/file/svg/Arrow.svg',
        to: '/Vaccines'
    },
   
]
console.log('tabelapi ', boxitem)
export default function FooterPages() {
    const delay = 2500;
    const [index, setIndex] = React.useState(0);
    const timeoutRef = React.useRef(null);

    function resetTimeout() {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }
    }

    React.useEffect(() => {
        resetTimeout();
        timeoutRef.current = setTimeout(
            () =>
                setIndex((prevIndex) =>
                    prevIndex === boxitem.length - 1 ? 0 : prevIndex + 1
                ),
            delay
        );

        return () => {
            resetTimeout();
        };
    }, [index]);
    return (
        <div  className='  mt-10 pb-6 tablet:max-w-full'>
            <Box className='duration-1000 flex carousel-inner relative overflow-hidden tablet:max-w-[500px] md:max-w-full lg:w-full' >
                {
                    boxitem.map((item) => {
                        return <ListItem key={item.id} className="w-full justify-center m-auto"  style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}  >
                            <Link to={item.to} className='  items-center gap-16 tablet:min-w-full md:w-[1000px] lg:min-w-[1250px] justify-center tablet:flex-col md:flex lg:flex'>
                                <div className='tablet:items-center tablet:justify-center tablet:text-center tablet:mb-4'>
                                    <h3 className=' uppercase  font-inria font-bold tablet:text-3xl md:text-4xl lg:text-5xl  text-tahiti-100'>
                                        {item.h3}
                                        <span className=' tablet:text-xl md:text-2xl  lg:text-3xl'>
                                            {item.span}
                                        </span>
                                    </h3>
                                </div>
                                <div >
                                    <img src={item.img} alt="" className='rounded-full  object-cover  tablet:m-auto tablet:max-w-[250px] tablet:min-h-[250px] md:max-w-[220px] md:min-h-[220px]  lg:max-w-[340px] lg:min-h-[340px]   ' />
                                </div>
                                <div className=' tablet:hidden md:block  lg:block'>
                                    <p className=' font-inria  font-normal md:text-xs lg:text-xl  text-tahiti-100 max-w-[350px]'>
                                        {item.p}
                                    </p>
                                    <h5 className=' font-inter font-semibold text-lg flex  text-[#3E3E3E] mt-4'>
                                        <img src={item.Arrow} alt="" className=' mr-6 rotate-180' />
                                        SEE MORE
                                    </h5>
                                </div>

                            </Link>

                        </ListItem>

                    })


                }

            </Box>
        </div>
    )
}
