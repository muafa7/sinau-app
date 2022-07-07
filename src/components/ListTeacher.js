import React, {
    useState,
    useEffect
} from 'react';
import axios from 'axios';

import ProgressIdb from '../data/idb';
import CONFIG from '../global/config';

export default function ListTeacher() {
    const [error, setError] = useState(null);
    const [teacher, setTeacher] = useState([]);
    const { URL_TEACHER } = CONFIG;



    useEffect(() => {
        const getData = async () => {
            const response = await ProgressIdb.getToken();
            const token = await response[0].token;
            const result = await axios
                .get(URL_TEACHER, { headers: { Authorization: token } })
                .then(response => setTeacher(response.data))
                .catch((error) => setError(error));
        };
        getData();
    }, [])
    console.log(teacher[0]?.matpel)
    if (error) {
        return <div>An error occured: {error.message}</div>;
    }
    return (
        <div className='grid lg:grid-cols-5 gap-4 px-4 mb-3 md:px-24  md:pr-48'>
            {teacher?.map((teacher) => (
                <div class="max-w-sm rounded overflow-hidden shadow-lg">
                    <img class="w-full h-72 " src="./images/profile.png" alt="Profile" />
                    <div class="px-6 py-4">
                        <div class="font-bold text-xl text-center mb-2">{teacher.nama_guru}</div>
                        <p class="text-gray-700 text-base text-center">
                            {teacher.nip}
                        </p>
                        <p class="text-gray-700 text-base text-center">
                            {teacher.matpel?.nama_matpel}
                        </p>
                    </div>
                </div>
            ))}
        </div>
    )
}
