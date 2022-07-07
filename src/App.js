import './App.css';

import React from 'react';

import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';

import ProgressIdb from './data/idb';

import {Login,
        Register,
        LandingPage} from './pages';
import {Navbar,
        InputStudentData, 
        InputTeacherData,
        ListStudent,
        ListTeacher,
        TambahNilai,
        EditNilai,
        TabelNilaiSiswa,
        TabelNilaiGuru} from './components';


import { AiOutlineUnorderedList } from 'react-icons/ai';
import { FaChalkboardTeacher } from 'react-icons/fa';
import { BsFillPeopleFill } from 'react-icons/bs';

const nav = [
{
  path : '/inputteacherdata',
  icon : <FaChalkboardTeacher className="text-white text-2xl lg:text-3xl" />,
  name : 'Input Teacher Data'
},
{
  path : '/inputstudentdata',
  icon : <BsFillPeopleFill className="text-white text-2xl lg:text-3xl" />,
  name : 'Input Student Data'
},
{
  path : '/liststudent',
  icon : <AiOutlineUnorderedList className="text-white text-2xl lg:text-3xl" />,
  name : 'List Student'
},
{
  path : '/listteacher',
  icon : <AiOutlineUnorderedList className="text-white text-2xl lg:text-3xl" />,
  name : 'List Teacher'
},
]

function App() {  
  const [component, setComponent] = React.useState('');
  const [isAdmin, setIsAdmin] = React.useState(false);
  React.useEffect(() => {

  const getData = async () => {
  const role = await ProgressIdb.getUser();
  if (role.length === 0) {
    return setComponent(<LandingPage/>)
  }
  if (role[0].user?.type == "admin") {
    setIsAdmin(true);
    setComponent(<InputStudentData/>)
  } else if (role[0].user?.type == "guru") {
    setComponent(<TabelNilaiGuru/>)
  } else if (role[0].user?.type == "siswa") {
    setComponent(<TabelNilaiSiswa/>)
  }

}
  getData();
});

  return (
    <Router>
    <Navbar navs={nav} isAdmin={isAdmin}/>
      <Routes>
       <Route path="/" element={component} />
        <Route path="/inputstudentdata" element={<InputStudentData />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/inputteacherdata" element={<InputTeacherData />} />
        <Route path="/liststudent" element={<ListStudent />} />
        <Route path="/listteacher" element={<ListTeacher />} />
        <Route path="/tambahnilai" element={<TambahNilai />} />
        <Route path="/tabelnilaiguru" element={<TabelNilaiGuru />} />
        <Route path="/tabelnilaisiswa" element={<TabelNilaiSiswa />} />
        <Route path="/editnilai" element={<EditNilai />} />
      </Routes>
    </Router>
  );
}

export default App;
