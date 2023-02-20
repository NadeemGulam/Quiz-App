import React, { useContext } from 'react'
import { QuizContext } from '../Context/QuizHolder'


export default function Start() {
    const { setStart } = useContext(QuizContext)
    const logout=()=>{
        localStorage.removeItem("signUp")
        window.location.reload()
    }
    const deleteAccount=()=>{ 
        localStorage.clear()
        window.location.reload()
    }
    return (
        <>
        <div className='bg-[#1f1f38] text-white flex text-center justify-center'>
        <div className=' p-10 tracking-wide'>
            <h5 className='text-3xl'>Hello I'm</h5>
            <h1 className='text-5xl font-bold'>Nadeem Gulam</h1>
            <h5 className="text-gray-400 text-3xl">Aspiring Fullstack Developer</h5>
            <div>
            <p>Welcome {localStorage.getItem('name')}</p>
            <button onClick={logout} className="logout">Log Out</button>
            <button onClick={deleteAccount} className="delete">Delete</button>
            </div>
            <div className=' w-full h-full flex justify-center items-center '>
            <button onClick={() => setStart(true)} className='text-black bg-[#4db5ff] border border-white p-5 text-5xl rounded-full hover:bg-white hover:py-11 hover:font-bold'>start</button>
            </div>
         </div>
         
            
        </div>
        </>
    )
}


// bg-gradient-to-b from-blue-300 to-blue-700