import React from 'react';
import {useForm} from "react-hook-form";
import axios from "axios"; 
import CONFIG from '../global/config';

import { AiOutlineLock } from 'react-icons/ai';
import { VscAccount } from 'react-icons/vsc';
export default function Register() {
    const {URL_REGISTER} = CONFIG;
    const { register, handleSubmit } = useForm();
    const [error, setError] = React.useState();
    const onSubmit = (data) => {
      axios
          .post(URL_REGISTER, {
            ...data, type : 1})
          .then(response => {window.location.href = '/login'})
          .catch(errors => {setError(errors.response.data.error.details.errors[0].message)});
    }
  return (
    <div className="fixed top-0 z-10 bg-white w-screen h-screen grid grid-cols-1">
        <div className="relative mx-5 my-2 pt-8 md:mx-24 grid grid-cols-1 md:grid-cols-2">
              <div className="flex justify-center items-center md:w-full">
                  <img className="w-full" src="./images/register.svg" alt="" />
              </div>
              <div className="md:flex md:justify-center md:items-center" >
                  <div className="max-w-sm md:w-2/3" >
                      <h1 className="text-3xl mt-8 md:mt-0 mb-6 md:mb-20 font-semibold text-left
                                      md:text-5xl md:text-center ">
                      Register
                      </h1>
                      <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="flex items-center border-b border-gray-400 py-2 mb-2">
                            <VscAccount className="text-gray-400" />
                            <input {...register("username")}
                            className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" placeholder="Username" aria-label="Full Name" />
                        </div>
                        <div class="flex items-center border-b border-gray-400 py-2 mb-2">
                            <i className="text-gray-400">@</i>
                            <input {...register("email")}
                            className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" placeholder="Email Address" aria-label="Email address" />
                        </div>
                        <div className="flex items-center border-b border-gray-400 py-2 mb-2">
                            <AiOutlineLock className="text-gray-400" />
                            <input {...register("password")}
                            class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" type="password" placeholder="Password" aria-label="Password" />
                        </div>
                            <div className="flex flex-col justify-center items-center mt-4 mb-8 md:mt-8">
                                <p className=' font-bold text-red-500'>{error}</p>
                                <button className="bg-blue-500 hover:bg-blue-700 w-full md:max-w-xs text-center text-white font-normal py-2 px-4 rounded-md focus:outline-none focus:shadow-outline" type="submit">
                                    Register
                                </button>
                            </div>
                      </form>
                  </div>
              </div>
        </div>
    </div>
  )
}
