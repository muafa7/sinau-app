import React from 'react'


function ListItem() {
    return (<div class="max-w-sm rounded overflow-hidden shadow-lg">
        <img class="w-full h-72 " src="./images/profile.jpg" alt="Mountain" />
        <div class="px-6 py-4">
            <div class="font-bold text-xl text-center mb-2">Muklis S.Pd</div>
            <p class="text-gray-700 text-base text-center">
                80974822
            </p>
        </div>
        <div className="flex flex-col space-y-4 md:flex-row justify-center md:space-y-0 md:space-x-6 mt-4 px-2 pb-2">
            <button className="bg-red-500 hover:bg-red-700 w-full md:max-w-xs text-center text-white font-normal py-2 px-4 rounded-md focus:outline-none focus:shadow-outline" type="button">
                Delete
            </button>
            <button className="bg-blue-500 hover:bg-blue-700 text-white w-full md:max-w-xs text-center font-normal py-2 px-4 rounded-md focus:outline-none focus:shadow-outline" type="button">
                Edit
            </button>
        </div>
    </div>);
}


export default function ListTeacher() {
    return (
        <div className='grid lg:grid-cols-5 gap-4 px-4 mb-3 md:px-24  md:pr-48'>
            <ListItem/>
            <ListItem/>
            <ListItem/>
            <ListItem/>
            <ListItem/>
            <ListItem/>
            <ListItem/>
            <ListItem/>
        </div>
    )
}
