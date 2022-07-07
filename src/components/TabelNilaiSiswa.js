import React from 'react'

export default function TabelNilaiSiswa() {
  return (
    <div className="px-20 mr-32">
    <h1 className=' text-3xl mb-4'>Halo, <span className='text-blue-500'>Wahyu Eko</span></h1>
       <table className="w-full  pt-8 lg:mx-auto table-fixed border-slate border border-slate-400 mb-11 ">
    <thead className="bg-blue-500 border-b-2 border-blue-500">
      <tr>
        <th className="border border-slate-300 ">Mata Pelajaran</th>
        <th className="border border-slate-300">UH1</th>
        <th className="border border-slate-300">UH2</th>
        <th className="border border-slate-300">UH3</th>
        <th className="border border-slate-300">UH4</th>
        <th className="border border-slate-300">UTS</th>
        <th className="border border-slate-300">UAS</th>
      </tr>
    </thead>
    <tbody className="bg-white">
      <tr>
        <td className="text-center border border-slate-300">Bahasa Indonesia</td>
        <td className="text-center border border-slate-300">
          85</td>
        <td className="text-center border border-slate-300">96</td>
        <td className="text-center border border-slate-300">96</td>
        <td className="text-center border border-slate-300">96</td>
        <td className="text-center border border-slate-300">96</td>
        <td className="text-center border border-slate-300">96</td>
      </tr>
      <tr>
        <td className="text-center border border-slate-300">Bahasa Inggris</td>
        <td className="text-center border border-slate-300">
          85</td>
        <td className="text-center border border-slate-300">96</td>
        <td className="text-center border border-slate-300">96</td>
        <td className="text-center border border-slate-300">96</td>
        <td className="text-center border border-slate-300">96</td>
        <td className="text-center border border-slate-300">96</td>
      </tr>
      <tr>
        <td className="text-center border border-slate-300">Matematika</td>
        <td className="text-center border border-slate-300">
          85</td>
        <td className="text-center border border-slate-300">80</td>
        <td className="text-center border border-slate-300">80</td>
        <td className="text-center border border-slate-300">90</td>
        <td className="text-center border border-slate-300">90</td>
        <td className="text-center border border-slate-300">90</td>
      </tr>
      <tr>
        <td className="text-center border border-slate-300">Olahraga</td>
        <td className="text-center border border-slate-300">
          85</td>
        <td className="text-center border border-slate-300">96</td>
        <td className="text-center border border-slate-300">96</td>
        <td className="text-center border border-slate-300">96</td>
        <td className="text-center border border-slate-300">96</td>
        <td className="text-center border border-slate-300">96</td>
      </tr>
      <tr>
        <td className="text-center border border-slate-300">Seni Budaya</td>
        <td className="text-center border border-slate-300">
          85</td>
        <td className="text-center border border-slate-300">96</td>
        <td className="text-center border border-slate-300">96</td>
        <td className="text-center border border-slate-300">96</td>
        <td className="text-center border border-slate-300">96</td>
        <td className="text-center border border-slate-300">96</td>
      </tr>
     
    </tbody>
  </table>

    </div>
  )
}

