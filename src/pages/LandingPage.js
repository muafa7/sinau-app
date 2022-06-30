import React from "react";
import { NavLink } from 'react-router-dom';

import Header from "../components/Header";

function LandingPage() {
    return (
        <div className="fixed top-0 z-10 bg-white">
        <Header/>
        <div className="grid grid-cols-1 mt-8">
            <div className="relative mx-5 my-2 pt-8 md:mx-24 grid grid-cols-1 md:grid-cols-2">
                  <div className="flex justify-center items-center md:w-full">
                      <img className="w-full" src="./images/landing_page.svg" alt="" />
                  </div>
                  <div className=" w-full max-w-md flex flex-col space-x-3 justify-center mt-6 lg:ml-20" >
                          <h1 className="text-3xl font-semibold
                                          md:text-5xl text-center ">
                          Daftarkan Sekolahmu
                          </h1>
                          <p className=" text-center">Dapatkan kemudahan dalam mengatur administrasi yang menarik</p>
                        <div className="flex flex-col space-y-4 md:flex-row justify-center md:space-y-0 md:space-x-6 mt-2 lg:mt-8">
                            <NavLink end to="/login"
                            className="bg-blue-700 hover:bg-blue-600 w-full md:max-w-xs text-center text-white font-normal py-2 px-4 rounded-md focus:outline-none focus:shadow-outline">
                                Register
                            </NavLink>
                            <NavLink end to="/register"
                            className="border-2 border-black text-blue-700 w-full md:max-w-xs text-center font-normal py-2 px-4 rounded-md focus:outline-none focus:shadow-outline">
                                Login
                            </NavLink>
                        </div>
                  </div>
            </div>
        </div>
        </div>
    );
   }
    
   export default LandingPage;


