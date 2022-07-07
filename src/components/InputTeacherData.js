import React, {
    useState,
    useEffect
} from 'react';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import ProgressIdb from '../data/idb';
import CONFIG from '../global/config';

export default function InputTeacherData() {
    const { URL_SUBJECT, URL_TEACHER } = CONFIG;
    const [subject, setSubject] = useState([])
    const { register, handleSubmit } = useForm();
    const [error, setError] = React.useState();
    const [token, setToken] = React.useState([]);

    useEffect(() => {
        const getData = async () => {
            const response = await ProgressIdb.getToken();
            const token = await response[0].token;
            setToken(token);
            const result = await axios.get(URL_SUBJECT,
                { headers: { Authorization: token } });
            setSubject(result.data.data);
            console.log(result.data.data)
        };
        getData();
    }, [])

    const onSubmit = (data) => {
        axios
            .post(URL_TEACHER, { data: { ...data } }, { headers: { Authorization: token } })
            .then(response => { window.location.href = '/inputteacherdata' })
            .catch(errors => { setError(console.log("gagal input data", data, token)) });
    }
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
                        <input {...register("nama_guru")}
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
                        <label className="block text-sm font-normal mb-1 md:mb-2 md:text-xl" for="nip">
                            NIP
                        </label>
                        <input {...register("nip")}
                            className="appearance-none border rounded md:text-base lg:text-xl border-gray-400 w-full py-3 px-2 text-gray-700 leading-tight focus:outline-none" id="nip" type="text" placeholder="NIP" />
                    </div>
                    <div className="mb-4 md:mb-8">
                        <label className="block text-sm font-normal mb-1 md:mb-2 md:text-xl" for="contact">
                            Contact
                        </label>
                        <input {...register("hp_guru")}
                            className="appearance-none border rounded md:text-base lg:text-xl border-gray-400 w-full py-3 px-2 text-gray-700 leading-tight focus:outline-none" id="nip" type="text" placeholder="NIP" />
                    </div>
                    {/* <div className="mb-4 md:mb-8">
                        <label className="block text-sm font-normal mb-1 md:mb-2 md:text-xl" for="">
                            Date of Birth
                        </label>
                        <input 
                            className="appearance-none border rounded md:text-base lg:text-xl border-gray-400 w-full py-3 px-2 text-gray-700 leading-tight focus:outline-none" id="nip" type="date" placeholder="NIP" />
                    </div> */}
                    <div className="mb-4 md:mb-8">
                        <label className="block text-sm font-normal mb-1 md:mb-2 md:text-xl">
                            Gender
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
                        <label className="block text-sm font-normal mb-1 md:mb-2 md:text-xl" for="address">
                            Address
                        </label>
                        <input {...register("alamat_guru")}
                            className="appearance-none border rounded md:text-base lg:text-xl border-gray-400 w-full py-3 px-2 text-gray-700 leading-tight focus:outline-none" id="address" type="text" placeholder="Address" />
                    </div>
                    <div className="mb-4 md:mb-8">
                        <label className="block text-sm font-normal mb-1 md:mb-2 md:text-xl">
                            Subject
                        </label>
                        <div className="grid grid-cols-2 gap-4">
                            {subject?.map((subject) => (
                                <div className="rounded border border-gray-400">
                                    <input {...register("matpel")}
                                        id={subject.attributes.nama_matpel} type="radio" name="matpel" value={subject.id} className="hidden" />
                                    <label for={subject.attributes.nama_matpel} className="flex items-center cursor-pointer text-sm py-3 px-2">
                                        <span className="w-3 h-3 inline-block mr-2 md:text-xl rounded-full border border-grey bg-gray-400 shadow-inset flex-no-shrink"></span>
                                        {subject.attributes.nama_matpel}</label>
                                </div>
                            ))}
                        </div>
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
                    <p className=' font-bold text-red-500'>{error}</p>
                    <button className="bg-blue-600 hover:bg-blue-700 w-full md:max-w-sm md:mx-auto text-center text-white font-normal py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                        Save
                    </button>
                </div>
            </form>
        </div>
    )
}
