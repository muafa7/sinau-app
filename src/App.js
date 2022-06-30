import './App.css';

import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';

import {Login,
        Register,
        LandingPage} from './pages';
import {Navbar,
        InputStudentData, 
        InputTeacherData,
        ListStudent,
        ListTeacher } from './components';


import { AiFillHome } from 'react-icons/ai';
import { GiProgression } from 'react-icons/gi';
import { VscAccount } from 'react-icons/vsc';

const nav = [{
  path : '/',
  icon : <AiFillHome className="text-white text-2xl lg:text-3xl" />,
  name : 'Home'
},
{
  path : '/progress',
  icon : <GiProgression className="text-white text-2xl lg:text-3xl" />,
  name : 'Progress'
},
{
  path : '/profile',
  icon : <VscAccount className="text-white text-3xl" />,
  name : 'Profile'
},
]

function App() {
  return (
    <Router>
    <Navbar navs={nav}/>
      <Routes>
        <Route path="/" element={<LandingPage/>} />
        <Route path="/inputstudentdata" element={<InputStudentData />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/inputteacherdata" element={<InputTeacherData />} />
        <Route path="/liststudent" element={<ListStudent />} />
        <Route path="/listteacher" element={<ListTeacher />} />
      </Routes>
    </Router>
  );
}

export default App;
