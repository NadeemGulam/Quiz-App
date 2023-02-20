import React, { useState } from 'react'
import { createContext } from 'react'

const QuizContext = createContext();

const quizzes = [
    {
        "question": "Which of the following languages is more suited to a structured program?",
        "a": "PL/1",
        "b": "FORTRAN",
        "c": "BASIC",
        "d": "PASCAL",
        "correct": "d"
    },
    {
        "question": "A computer assisted method for the recording and analyzing of existing or hypothetical systems is",
        "a": "Data transmission",
        "b": "Data flow",
        "c": "Data capture",
        "d": "Data processing",
        "correct": "b"
    },
    {
        "question": "The brain of any computer system is",
        "a": "ALU",
        "b": "Memory",
        "c": "CPU",
        "d": "Control unit",
        "correct": "c"
    },
    {
        "question": "What difference does the 5th generation computer have from other generation computers?",
        "a": "Technological advancement",
        "b": "Scientific code",
        "c": "Object Oriented Programming",
        "d": "All of the above",
        "correct": "a"
    },
    {
        "question": "Which of the following computer language is used for artificial intelligence?",
        "a": "FORTRAN",
        "b": "PROLOG",
        "c": "C",
        "d": "COBOL",
        "correct": "b"
    },
    {
        "question": "The tracks on a disk which can be accessed without repositioning the R/W heads is",
        "a": "Surface",
        "b": "Cylinder",
        "c": " Cluster",
        "d": "All of the above",
        "correct": "b"
    },
    {
        "question": "Which of the following is the 1's complement of 10?",
        "a": "01",
        "b": "110",
        "c": "11",
        "d": "10",
        "correct": "a"
    },
    {
        "question": "A section of code to which control is transferred when a processor is interrupted is known as?",
        "a": "M",
        "b": "SVC",
        "c": "IP",
        "d": "MDR",
        "correct": "a"
    },
    {
        "question": "Which part interprets program instructions and initiate control operations?",
        "a": "Input",
        "b": "Storage unit",
        "c": "Logic unit",
        "d": "Control unit",
        "correct": "d"
    },
    {
        "question": "The binary system uses powers of",
        "a": "2",
        "b": "10",
        "c": "8",
        "d": "16",
        "correct": "a"
    },
]

export default function QuizHolder(props) {

    const [start, setStart] = useState(false);
    const [exit, setExit] = useState(false);
    const [correct,setCorrect] = useState(0);
    return (
        <QuizContext.Provider value={{
            start, exit, setStart, setExit, quizzes,correct,setCorrect
        }}>
            {props.children}
        </QuizContext.Provider>
    )
}

export { QuizContext };
