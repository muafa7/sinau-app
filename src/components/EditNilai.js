import React from 'react'

export default function TambahNilai() {
  return (
    <div className="px-20">
         <div className="w-full ">
         <h1 className="text-3xl font-bold text-center mb-12 md:text-5xl">Edit Nilai Siswa</h1>
            <form 
            className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" for="nama">
                  Nama
                </label>
                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="namasiswa" type="text" placeholder="Nama Siswa"/>
              </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" for="NISN">
                      NISN
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="NISN" type="text" placeholder="NISN"/>
                  </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" for="mapel">
                          Mata pelajaran
                        </label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="Matpel" type="text" placeholder="Mata Pelajaran"/>
                      </div>
                      <div className="mb-4">
                        <label class="block text-gray-700 text-sm font-bold mb-2" for="UH1">
                          Ulangan Harian 1
                        </label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="UH1" type="text" placeholder="UH1"/>
                      </div>
                      <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" for="UH2">
                          Ulangan Harian 2
                        </label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="UH2" type="text" placeholder="UH2"/>
                      </div>
                      <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" for="UH3">
                          Ulangan Harian 3
                        </label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="UH1" type="text" placeholder="UH3"/>
                      </div>
                      <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" for="UH4">
                          Ulangan Harian 4
                        </label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="UH4" type="text" placeholder="UH4"/>
                      </div>
                      <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" for="UTS">
                          Ulangan Tengan Semester
                        </label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="UTS" type="text" placeholder="UTS"/>
                      </div>
                      <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" for="UAS">
                        Ujian Akhir Semester
                        </label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="UAS" type="text" placeholder="UAS"/>
                      </div>
                
              <div className="flex items-center justify-between">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                  Edit Nilai
                </button>
              </div>

            </form>
     </div>
     </div>
  )
}

