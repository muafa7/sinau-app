import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import validationSchema from '../utils/validation'

export default function InputTeacherData() {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors }
      } = useForm({
        resolver: yupResolver(validationSchema)
      });

    const onSubmit = data => {
    console.log(JSON.stringify(data, null, 2));
    };
  return (
    <div className="relative mx-5 my-2 max-w-lg pt-8 lg:mx-auto">
            <h1 className="text-3xl font-bold text-center mb-12 md:text-5xl">Input Teacher Data</h1>
                <form onSubmit={handleSubmit(onSubmit)}
                className="mb-4 md:mb-8">
                    <div className="mb-4 md:mb-8 grid grid-cols-1 gap-x-8">
                        <div className="mb-4 md:mb-8">
                            <label className="block text-sm font-normal mb-1 md:mb-2 md:text-xl" for="Name">
                                Name
                            </label>
                            <input
                            className="appearance-none border rounded md:text-base lg:text-xl border-gray-400 w-full py-3 px-2 text-gray-700 leading-tight
                                            focus:outline-none" id="Name" type="text" placeholder="Name" />
                        </div>
                        <div className="mb-4 md:mb-8">
                            <label className="block text-sm font-normal mb-1 md:mb-2 md:text-xl" for="nip">
                                NIP
                            </label>
                            <input
                            className="appearance-none border rounded md:text-base lg:text-xl border-gray-400 w-full py-3 px-2 text-gray-700 leading-tight focus:outline-none" id="nip" type="text" placeholder="NIP" />
                        </div>
                        <div className="mb-4 md:mb-8">
                            <label className="block text-sm font-normal mb-1 md:mb-2 md:text-xl" for="">
                                Date of Birth
                            </label>
                            <input
                            className="appearance-none border rounded md:text-base lg:text-xl border-gray-400 w-full py-3 px-2 text-gray-700 leading-tight focus:outline-none" id="nip" type="date" placeholder="NIP" />
                        </div>
                        <div className="mb-4 md:mb-8">
                            <label className="block text-sm font-normal mb-1 md:mb-2 md:text-xl">
                                Jenis Kelamin
                            </label>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="rounded border border-gray-400">
                                    <input
                                    id="male" type="radio" name="sex" value="Pria" className="hidden" />
                                    <label for="male" className="flex items-center cursor-pointer text-sm py-3 px-2">
                                    <span className="w-3 h-3 inline-block mr-2 md:text-xl rounded-full border border-grey bg-gray-400 shadow-inset flex-no-shrink"></span>
                                    Pria</label>
                                </div>
                                <div className="rounded border border-gray-400">
                                    <input
                                    id="female" type="radio" name="sex" value="Wanita" className="hidden" />
                                    <label for="female" className="flex items-center cursor-pointer text-sm py-3 px-2">
                                    <span className="w-3 h-3 inline-block mr-2 md:text-xl rounded-full border border-grey bg-gray-400 shadow-inset flex-no-shrink"></span>
                                    Wanita</label>
                                </div>
                            </div>
                        </div>
                        <div className="mb-4 md:mb-8">
                            <label className="block text-sm font-normal mb-1 md:mb-2 md:text-xl" for="address">
                                Address
                            </label>
                            <input
                            className="appearance-none border rounded md:text-base lg:text-xl border-gray-400 w-full py-3 px-2 text-gray-700 leading-tight focus:outline-none" id="address" type="text" placeholder="Address" />
                        </div>
                    </div>
                <div className="flex flex-col justify-center items-center">
                    <button className="bg-blue-600 hover:bg-blue-700 w-full md:max-w-sm md:mx-auto text-center text-white font-normal py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                        Save
                    </button>
                </div>
                </form>
        </div>
  )
}
