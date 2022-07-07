import React, {
    useState,
    useEffect
} from 'react';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import ProgressIdb from '../data/idb';
import CONFIG from '../global/config';

export default function InputStudentData() {
    const { URL_STUDENT,  } = CONFIG;
    const { register, handleSubmit } = useForm();
    const [error, setError] = React.useState();
    const [token, setToken] = React.useState([]);
    
    useEffect(() => {
        const getData = async () => {
            const response = await ProgressIdb.getToken();
            const token = await response[0].token;
            setToken(token);
        };
        getData();
    }, [])

    const onSubmit = (data) => {
        axios
            .post(URL_STUDENT, { data: { ...data } }, { headers: { Authorization: token } })
            .then(response => { window.location.href = '/inputstudentdata' })
            .catch(errors => { setError(console.log("gagal input data")) });
    }

    return (
        <div className="relative mx-5 my-2 pt-8 lg:mx-48">
            <h1 className="text-3xl font-bold text-center mb-12 md:text-5xl">Input Student Data</h1>
            <form onSubmit={handleSubmit(onSubmit)}
                className="mb-4 md:mb-8">
                <div className="mb-4 md:mb-8 grid grid-cols-1 md:grid-cols-2 gap-x-8">
                    <div className="mb-4 md:mb-8">
                        <label className="block text-sm font-normal mb-1 md:mb-2 md:text-xl" for="Name">
                            Name
                        </label>
                        <input {...register("nama_siswa")}
                            className="appearance-none border rounded md:text-base lg:text-xl border-gray-400 w-full py-3 px-2 text-gray-700 leading-tight
                                        focus:outline-none" id="Name" type="text" placeholder="Name" />
                    </div>
                    <div className="mb-4 md:mb-8">
                        <label className="block text-sm font-normal mb-1 md:mb-2 md:text-xl" for="Name">
                            Email
                        </label>
                        <input 
                            className="appearance-none border rounded md:text-base lg:text-xl border-gray-400 w-full py-3 px-2 text-gray-700 leading-tight
                                        focus:outline-none" id="Name" type="text" placeholder="Email" />
                    </div>
                    <div className="mb-4 md:mb-8">
                        <label className="block text-sm font-normal mb-1 md:mb-2 md:text-xl" for="NISN">
                            NISN
                        </label>
                        <input {...register("nisn")}
                            className="appearance-none border rounded md:text-base lg:text-xl border-gray-400 w-full py-3 px-2 text-gray-700 leading-tight focus:outline-none" id="NISN" type="text" placeholder="NISN" />
                    </div>
                    <div className="mb-4 md:mb-8">
                        <label className="block text-sm font-normal mb-1 md:mb-2 md:text-xl">
                            Sex
                        </label>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="rounded border border-gray-400">
                                <input {...register("jenis_kelamin")}
                                    id="male" type="radio" name="jenis_kelamin" value="laki-laki" className="hidden" />
                                <label for="male" className="flex items-center cursor-pointer text-sm py-3 px-2">
                                    <span className="w-3 h-3 inline-block mr-2 md:text-xl rounded-full border border-grey bg-gray-400 shadow-inset flex-no-shrink"></span>
                                    Male</label>
                            </div>
                            <div className="rounded border border-gray-400">
                                <input {...register("jenis_kelamin")}
                                    id="female" type="radio" name="jenis_kelamin" value="perempuan" className="hidden" />
                                <label for="female" className="flex items-center cursor-pointer text-sm py-3 px-2">
                                    <span className="w-3 h-3 inline-block mr-2 md:text-xl rounded-full border border-grey bg-gray-400 shadow-inset flex-no-shrink"></span>
                                    Female</label>
                            </div>
                        </div>
                    </div>
                    <div className="mb-4 md:mb-8">
                        <label className="block text-sm font-normal mb-1 md:mb-2 md:text-xl" for="">
                            Date of Birth
                        </label>
                        <input {...register("tanggal_lahir")}
                            className="appearance-none border rounded md:text-base lg:text-xl border-gray-400 w-full py-3 px-2 text-gray-700 leading-tight focus:outline-none" id="nip" type="date" placeholder="NIP" />
                    </div>
                    {/* <div className="mb-4 md:mb-8">
                        <label className="block text-sm font-normal mb-1 md:mb-2 md:text-xl" for="address">
                            Address
                        </label>
                        <input {...register("alamat")}
                            className="appearance-none border rounded md:text-base lg:text-xl border-gray-400 w-full py-3 px-2 text-gray-700 leading-tight focus:outline-none" id="address" type="text" placeholder="Address" />
                    </div> */}
                    <div className="mb-4 md:mb-8">
                        <label className="block text-sm font-normal mb-1 md:mb-2 md:text-xl" for="parent_name">
                            Parent Name
                        </label>
                        <input {...register("nama_ortu")}
                            className="appearance-none border rounded md:text-base lg:text-xl border-gray-400 w-full py-3 px-2 text-gray-700 leading-tight focus:outline-none" id="parent_name" type="text" placeholder="Parent Name" />
                    </div>
                    <div className="mb-4 md:mb-8">
                        <label className="block text-sm font-normal mb-1 md:mb-2 md:text-xl" for="parent_contact">
                            Parent's Contact
                        </label>
                        <input {...register("hp_ortu")}
                            className="appearance-none border rounded md:text-base lg:text-xl border-gray-400 w-full py-3 px-2 text-gray-700 leading-tight focus:outline-none" id="parent_contact" type="text" placeholder="Parent's Contact" />
                    </div>
                    <div className="mb-4 md:mb-8">
                        <label className="block text-sm font-normal mb-1 md:mb-2 md:text-xl" for="class">
                            Class
                        </label>
                        <input {...register("kelas")}
                            className="appearance-none border rounded md:text-base lg:text-xl border-gray-400 w-full py-3 px-2 text-gray-700 leading-tight focus:outline-none" id="class" type="text" placeholder="class" />
                    </div>
                    {/* <div className="mb-4 md:mb-8">
                        <label className="block text-sm font-normal mb-1 md:mb-2 md:text-xl" for="photo">
                            Photo
                        </label>
                        <input {...register("gambar_siswa")}
                            className="appearance-none border rounded md:text-base lg:text-xl border-gray-400 w-full py-3 px-2 text-gray-700 leading-tight focus:outline-none" id="photo" type="file" />
                    </div> */}
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
