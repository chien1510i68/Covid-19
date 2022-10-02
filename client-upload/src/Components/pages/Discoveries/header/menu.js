import React from 'react';
import { Link } from 'react-router-dom';

const Menuheader = () => {
    return (
        <div>
           <nav className='mt-3'>
              <ul className="grid rounded-[5px] bg-[#fff] ">
                <li className=" py-[10px] px-[30px] font-medium">
                  <Link to="/">Home</Link>
                </li>
                <li className=" py-[10px] px-[30px] font-medium">
                  <Link to="/CoronaVirus">CoronaVirus</Link>
                </li>
                <li className=" py-[10px] px-[30px] font-medium">
                  <Link to="/Vaccines">Vaccines</Link>
                </li>
                <li className=" py-[10px] px-[30px] font-medium">
                  <Link to="/Health">Health</Link>{" "}
                </li>
              </ul>
            </nav>
        </div>
    );
};

export default Menuheader  ;