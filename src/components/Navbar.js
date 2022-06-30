import React from "react";
import { NavLink } from 'react-router-dom';

import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { HiOutlineLogout } from 'react-icons/hi';



export default function Navbar({navs}) {
  const [navbarOpen, setNavbarOpen] = React.useState(false);

  

  return (
      <header className="relative flex flex-wrap items-center justify-between px-4 mb-3 md:px-24">
        <div className="container flex flex-row items-center justify-between">
          <div className=" relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <NavLink end to="/home" className="text-sm font-bold flex items-center leading-relaxed whitespace-nowrap uppercase text-white"
                >
                <img
                  src="./images/logogabung.png" alt=""
                  className="w-20 h-10 md:h-12 md:w-24 lg:h-16 lg:w-32" ></img>
            </NavLink>
          </div>
            <div className="flex flex-row items-center justify-between " >
                <button
                  className="text-white ml-16 cursor-pointer text-xl leading-none px-2 py-1 md:px-3 md:py-2 my-4 rounded bg-blue-500 block outline-none focus:outline-none"
                  type="button"
                  onClick={() => setNavbarOpen(!navbarOpen)}
                >
                  <AiOutlineMenu className="lg:w-8 lg:h-8"/>
                </button>
            </div>
          <nav
            className={
              "absolute z-10 h-screen w-screen right-0 top-0 flex flex-grow justify-center items-center bg-blue-700 md:w-40" +
              (navbarOpen ? "" : " hidden")
            }
          >
            <ul className="flex flex-col list-none space-y-8">
                <li className="flex flex-row items-center justify-center" >
                    <button
                    className="text-white cursor-pointer text-sm leading-none px-2 py-1 outline-none focus:outline-none"
                    type="button"
                    onClick={() => setNavbarOpen(!navbarOpen)}
                    >
                    <AiOutlineClose className="text-2xl lg:text-3xl" />
                    </button>
                </li>
                {navs.map((navItem) => (
            <li key={navItem.name}>
                <NavLink end to={navItem.path} onClick={() => setNavbarOpen(!navbarOpen)}
                className={({ isActive }) => "flex flex-col items-center justify-center" + (isActive ? " activated" : "")}>
                    {navItem.icon}
                    <span className="text-white font-normal">{navItem.name}</span>
                </NavLink>
            </li>
            ))}
              <li className="nav-item">
                <NavLink end to="/login"
                className="flex flex-col justify-center items-center"
                  >
                      <HiOutlineLogout className="text-white text-2xl lg:text-3xl" />
                      <span className="text-white font-normal">Logout</span>
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </header>
  );
}