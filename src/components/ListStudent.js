import React, {
    useState,
    useEffect
} from 'react';
import axios from 'axios';
import ProgressIdb from '../data/idb';
import CONFIG from '../global/config';


export default function ListStudent() {
    const [error, setError] = useState(null);
    const [student, setStudent] = useState([]);
    const { URL_STUDENT, } = CONFIG;
    useEffect(() => {
        const getData = async () => {
            const response = await ProgressIdb.getToken();
            const token = await response[0].token;
            const result = await axios
                .get(URL_STUDENT, { headers: { Authorization: token } })
                .catch((error) => setError(error));
            setStudent(result.data.data);
            console.log(result.data.data)
        };
        getData();
    }, [])
    if (error) {
        return <div>An error occured: {error.message}</div>;
    }
    return (
        <div className='grid lg:grid-cols-5 gap-4 px-4 mb-3 md:px-24  md:pr-48'>
            {student?.map((student) => (
                <div class="max-w-sm rounded overflow-hidden shadow-lg">
                    <img class="w-full h-72 " src="./images/profile.png" alt="Profile" />
                    <div class="px-6 py-4">
                        <div class="font-bold text-xl text-center mb-2">{student.attributes.nama_siswa}</div>
                        <p class="text-gray-700 text-base text-center">
                            {student.attributes.nisn}
                        </p>
                        <p class="text-gray-700 text-base text-center">
                            {student.attributes.kelas}
                        </p>
                    </div>
                </div>
            ))}
        </div>
    )
}
