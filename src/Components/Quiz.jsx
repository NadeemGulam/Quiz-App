import React, { useContext, useState } from 'react'
import { QuizContext } from '../Context/QuizHolder';

export default function Quiz() {
    const [current, setCurrent] = useState(0);
    return (
        <div className='w-full h-screen flex justify-center items-center'>
            <Box current={current} next={setCurrent} />
        </div>
    )
}
const Box = ({ current, next }) => {
    const { quizzes, correct, setCorrect, setExit } = useContext(QuizContext);
    const [ans, setAns] = useState("");
    const saveHandler = () => {
        if (quizzes[current].correct === ans) {
            setCorrect(correct + 1);
        }
        setAns("");
        if ((current + 1) === quizzes.length) {
            setExit(true)
        } else {
            next(current + 1);
        }
    }
    return (
        
        <div className='bg-[#1f1f38] relative w-full h-screen flex justify-center items-center'>
            <div className='w-[50%] border shadow-lg rounded-md overflow-hidden  bg-[#2c2c6c] justify-center text-white '>
                <div className='p-2 text-3xl'> {current + 1}) {quizzes[current].question}</div>
                <div className='grid grid-cols-2 mt-3'>
                    <div className={`p-2 border ${ans === "a" ? 'bg-blue-400 text-white' : ''} hover:bg-blue-400 duration-200 cursor-pointer`} onClick={() => setAns("a")}>{quizzes[current].a}</div>
                    <div className={`p-2 border ${ans === "b" ? 'bg-blue-400 text-white' : ''} hover:bg-blue-400 duration-200 cursor-pointer`} onClick={() => setAns("b")}>{quizzes[current].b}</div>
                    <div className={`p-2 border ${ans === "c" ? 'bg-blue-400 text-white' : ''} hover:bg-blue-400 duration-200 cursor-pointer`} onClick={() => setAns("c")}>{quizzes[current].c}</div>
                    <div className={`p-2 border ${ans === "d" ? 'bg-blue-400 text-white' : ''} hover:bg-blue-400 duration-200 cursor-pointer`} onClick={() => setAns("d")}>{quizzes[current].d}</div>
                </div>
                <div className='flex justify-between'>
                    <div className='cursor-pointer h-[30px] px-3  bg-orange-400 text-white rounded-lg hover:bg-white hover:text-[#fb923c] font-semibold' onClick={() => setAns("")}>Reset</div>
                    <div className='cursor-pointer h-[30px] px-3 bg-green-500 text-white  rounded-full hover:bg-white hover:text-[#22c55e] font-semibold' onClick={saveHandler}>Save or Skip</div>
                    <div className='cursor-pointer h-[30px] px-3 bg-red-700 text-white rounded-lg hover:bg-white hover:text-[#b91c1c] font-semibold' onClick={() => setExit(true)}>Exit</div>
                </div>
                </div>
             </div>
        
    )
}