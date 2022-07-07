import React from 'react'

export default function TabelNilaiSiswa() {
  const [editable, setEditable] = React.useState('false');
  return (
    <div className="px-20  mr-32">
      <h1 className=' text-3xl mb-4'>Halo, <span className='text-blue-500'>Sudirman Said</span></h1>
      <h2 className=' text-3xl mb-4'>Matematika</h2>
       <table className="w-full  pt-8 lg:mx-auto table-fixed border-slate border border-slate-400 mb-11 ">
    <thead className="bg-blue-500 border-b-2 border-blue-500">
      <tr>
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
        <td className="text-center border border-slate-300">Akbar Fadillah</td>
        <td className="text-center border border-slate-300"
        contenteditable={editable}></td>
        <td className="text-center border border-slate-300"
        contenteditable={editable}></td>
        <td className="text-center border border-slate-300"
        contenteditable={editable}></td>
        <td className="text-center border border-slate-300"
        contenteditable={editable}></td>
        <td className="text-center border border-slate-300"
        contenteditable={editable}></td>
        <td className="text-center border border-slate-300"
        contenteditable={editable}></td>
        <td className="text-center border border-slate-300 flex justify-around"> 
        <button onClick={() => setEditable('true')}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-2 rounded focus:outline-none focus:shadow-outline" type="button">
                  Edit
        </button>
        <button onClick={() => setEditable('false')}
        className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-2 rounded focus:outline-none focus:shadow-outline" type="button">
                  Save
        </button>
        </td>
      </tr>
      <tr>
        <td className="text-center border border-slate-300">Marzuki Juki</td>
        <td className="text-center border border-slate-300"
        contenteditable={editable}></td>
        <td className="text-center border border-slate-300"
        contenteditable={editable}></td>
        <td className="text-center border border-slate-300"
        contenteditable={editable}></td>
        <td className="text-center border border-slate-300"
        contenteditable={editable}></td>
        <td className="text-center border border-slate-300"
        contenteditable={editable}></td>
        <td className="text-center border border-slate-300"
        contenteditable={editable}></td>
        <td className="text-center border border-slate-300 flex justify-around"> 
        <button onClick={() => setEditable('true')}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-2 rounded focus:outline-none focus:shadow-outline" type="button">
                  Edit
        </button>
        <button onClick={() => setEditable('false')}
        className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-2 rounded focus:outline-none focus:shadow-outline" type="button">
                  Save
        </button>
        </td>
      </tr>
      <tr>
        <td className="text-center border border-slate-300">Nabila Olivia</td>
        <td className="text-center border border-slate-300"
        contenteditable={editable}></td>
        <td className="text-center border border-slate-300"
        contenteditable={editable}></td>
        <td className="text-center border border-slate-300"
        contenteditable={editable}></td>
        <td className="text-center border border-slate-300"
        contenteditable={editable}></td>
        <td className="text-center border border-slate-300"
        contenteditable={editable}></td>
        <td className="text-center border border-slate-300"
        contenteditable={editable}></td>
        <td className="text-center border border-slate-300 flex justify-around"> 
        <button onClick={() => setEditable('true')}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-2 rounded focus:outline-none focus:shadow-outline" type="button">
                  Edit
        </button>
        <button onClick={() => setEditable('false')}
        className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-2 rounded focus:outline-none focus:shadow-outline" type="button">
                  Save
        </button>
        </td>
      </tr>
      <tr>
        <td className="text-center border border-slate-300">Nurul Aulia</td>
        <td className="text-center border border-slate-300"
        contenteditable={editable}></td>
        <td className="text-center border border-slate-300"
        contenteditable={editable}></td>
        <td className="text-center border border-slate-300"
        contenteditable={editable}></td>
        <td className="text-center border border-slate-300"
        contenteditable={editable}></td>
        <td className="text-center border border-slate-300"
        contenteditable={editable}></td>
        <td className="text-center border border-slate-300"
        contenteditable={editable}></td>
        <td className="text-center border border-slate-300 flex justify-around"> 
        <button onClick={() => setEditable('true')}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-2 rounded focus:outline-none focus:shadow-outline" type="button">
                  Edit
        </button>
        <button onClick={() => setEditable('false')}
        className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-2 rounded focus:outline-none focus:shadow-outline" type="button">
                  Save
        </button>
        </td>
      </tr>
      <tr>
        <td className="text-center border border-slate-300">Rafly Alamsyah</td>
        <td className="text-center border border-slate-300"
        contenteditable={editable}></td>
        <td className="text-center border border-slate-300"
        contenteditable={editable}></td>
        <td className="text-center border border-slate-300"
        contenteditable={editable}></td>
        <td className="text-center border border-slate-300"
        contenteditable={editable}></td>
        <td className="text-center border border-slate-300"
        contenteditable={editable}></td>
        <td className="text-center border border-slate-300"
        contenteditable={editable}></td>
        <td className="text-center border border-slate-300 flex justify-around"> 
        <button onClick={() => setEditable('true')}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-2 rounded focus:outline-none focus:shadow-outline" type="button">
                  Edit
        </button>
        <button onClick={() => setEditable('false')}
        className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-2 rounded focus:outline-none focus:shadow-outline" type="button">
                  Save
        </button>
        </td>
      </tr>
      <tr>
        <td className="text-center border border-slate-300">Sabrina Riyani</td>
        <td className="text-center border border-slate-300"
        contenteditable={editable}></td>
        <td className="text-center border border-slate-300"
        contenteditable={editable}></td>
        <td className="text-center border border-slate-300"
        contenteditable={editable}></td>
        <td className="text-center border border-slate-300"
        contenteditable={editable}></td>
        <td className="text-center border border-slate-300"
        contenteditable={editable}></td>
        <td className="text-center border border-slate-300"
        contenteditable={editable}></td>
        <td className="text-center border border-slate-300 flex justify-around"> 
        <button onClick={() => setEditable('true')}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-2 rounded focus:outline-none focus:shadow-outline" type="button">
                  Edit
        </button>
        <button onClick={() => setEditable('false')}
        className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-2 rounded focus:outline-none focus:shadow-outline" type="button">
                  Save
        </button>
        </td>
      </tr>
      <tr>
        <td className="text-center border border-slate-300">Syahril Mauladie</td>
        <td className="text-center border border-slate-300"
        contenteditable={editable}></td>
        <td className="text-center border border-slate-300"
        contenteditable={editable}></td>
        <td className="text-center border border-slate-300"
        contenteditable={editable}></td>
        <td className="text-center border border-slate-300"
        contenteditable={editable}></td>
        <td className="text-center border border-slate-300"
        contenteditable={editable}></td>
        <td className="text-center border border-slate-300"
        contenteditable={editable}></td>
        <td className="text-center border border-slate-300 flex justify-around"> 
        <button onClick={() => setEditable('true')}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-2 rounded focus:outline-none focus:shadow-outline" type="button">
                  Edit
        </button>
        <button onClick={() => setEditable('false')}
        className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-2 rounded focus:outline-none focus:shadow-outline" type="button">
                  Save
        </button>
        </td>
      </tr>
      <tr>
        <td className="text-center border border-slate-300">Wahyu Eko</td>
        <td className="text-center border border-slate-300"
        contenteditable={editable}></td>
        <td className="text-center border border-slate-300"
        contenteditable={editable}></td>
        <td className="text-center border border-slate-300"
        contenteditable={editable}></td>
        <td className="text-center border border-slate-300"
        contenteditable={editable}></td>
        <td className="text-center border border-slate-300"
        contenteditable={editable}></td>
        <td className="text-center border border-slate-300"
        contenteditable={editable}></td>
        <td className="text-center border border-slate-300 flex justify-around"> 
        <button onClick={() => setEditable('true')}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-2 rounded focus:outline-none focus:shadow-outline" type="button">
                  Edit
        </button>
        <button onClick={() => setEditable('false')}
        className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-2 rounded focus:outline-none focus:shadow-outline" type="button">
                  Save
        </button>
        </td>
      </tr>
     
    </tbody>
  </table>

    </div>
  )
}

