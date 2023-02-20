import React, { useContext } from 'react'
import { QuizContext } from '../Context/QuizHolder'

export default function Result() {
    const { correct, setExit, setStart, quizzes } = useContext(QuizContext)
    const playAgain = () => {
        setExit(false);
        setStart(false);
    }
    return (
        <div className=' bg-[#1f1f38] text-white w-full h-screen flex justify-center items-center'>
            <div className='bg-[#2c2c6c] w-[40%] border shadow-lg rounded-md overflow-hidden text-center'>
                <h2 className='text-2xl p-3 my-2'>{correct} are correct out of {quizzes.length}</h2>
                <button onClick={playAgain} className='text-black bg-[#4db5ff] border border-white p-3 text-2xl font-semibold hover:bg-white rounded'>Play again</button>
            </div>
        </div>
    )
}
