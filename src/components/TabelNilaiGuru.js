import React from 'react'
import { NavLink } from 'react-router-dom';

export default function TabelNilaiSiswa() {
  return (
    <div className="px-20">
        <NavLink end to="/TambahNilai" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 mb-5 rounded focus:outline-none focus:shadow-outline" type="button" href="">
                  Tambah Nilai
        </NavLink>
       <table className="w-full  pt-8 lg:mx-auto table-fixed border-slate border border-slate-400 mb-11 ">
    <thead className="bg-blue-500 border-b-2 border-blue-500">
      <tr>
        <th className="border border-slate-300 ">Mata Pelajaran</th>
        <th className="border border-slate-300 ">NISN</th>
        <th className="border border-slate-300 ">Nama</th>
        <th className="border border-slate-300">UH1</th>
        <th className="border border-slate-300">UH2</th>
        <th className="border border-slate-300">UH3</th>
        <th className="border border-slate-300">UH4</th>
        <th className="border border-slate-300">UTS</th>
        <th className="border border-slate-300">UAS</th>
        <th className="border border-slate-300">Aksi</th>
      </tr>
    </thead>
    <tbody className="bg-white">
      <tr>
        <td className="text-center border border-slate-300">Matematika</td>
        <td className="text-center border border-slate-300">1234</td>
        <td className="text-center border border-slate-300">sinau</td>
        <td className="text-center border border-slate-300">85</td>
        <td className="text-center border border-slate-300">96</td>
        <td className="text-center border border-slate-300">96</td>
        <td className="text-center border border-slate-300">96</td>
        <td className="text-center border border-slate-300">96</td>
        <td className="text-center border border-slate-300">96</td>
        <td className="text-center border border-slate-300"> 
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-2 rounded focus:outline-none focus:shadow-outline" type="button">
                  Edit
        </button>
        <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-2 ml-2 rounded focus:outline-none focus:shadow-outline" type="button">
                  Hapus
        </button>
        </td>
      </tr>
     
    </tbody>
  </table>

    </div>
  )
}

