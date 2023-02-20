import React, { useEffect, useRef, useState } from "react";
import Start from "./Start";
import './SignInSignUp.css';
function SignInSignupWithLocalStorage(){
   const name=useRef()
   const email=useRef()
   const password=useRef()
   const [showHome,setShowHome]=useState(false)
   const [show,setShow]=useState(false)
    const localSignUp=localStorage.getItem("signUp")
    const localEmail=localStorage.getItem("email")
    const localPassword=localStorage.getItem("password")
    const localName=localStorage.getItem("name")
   useEffect(()=>{
    if(localSignUp){
        setShowHome(true)
    }
    if(localEmail){
        setShow(true)
    }
   })
   const handleClick=()=>{
       if(name.current.value&&email.current.value&&password.current.value)
      {
        localStorage.setItem("name",name.current.value)
        localStorage.setItem("email",email.current.value)
        localStorage.setItem("password",password.current.value)
        localStorage.setItem("signUp",email.current.value)
        alert("Account created successfully!!")
        window.location.reload()
      }
   }

   const handleSignIn=()=>{
    if(email.current.value==localEmail&&password.current.value==localPassword){
        localStorage.setItem("signUp",email.current.value)
        window.location.reload()
    }else{
        alert("Please Enter valid Credential")
    }
   }
    return(
        <div className="bg-[#1f1f38] relative w-full h-screen flex justify-center items-center">
            {showHome?<Start/>:
            (show?
                <div className="container border-white">
                        <h1 className="p-5 text-white border-white">Hello {localName}</h1>
                        <div className="input_space">
                            <input placeholder="Email" type='text' ref={email} />
                        </div>
                        <div className="input_space">
                            <input placeholder="Password" type='password' ref={password} />
                        </div>
                        <button onClick={handleSignIn} className='text-black bg-[#4db5ff] border border-white p-3 text-1xl rounded-full hover:bg-white hover:py-5 hover:font-bold'>Sign In</button>
                </div>
                :
                <div className="container border-white">
                        <div className="input_space">
                            <input placeholder="Name" type='text' ref={name} />
                        </div>
                        <div className="input_space">
                            <input placeholder="Email" type='text' ref={email} />
                        </div>
                        <div className="input_space">
                            <input placeholder="Password" type='password' ref={password} />
                        </div>
                        <button onClick={handleClick} className='text-black bg-[#4db5ff] border border-white p-3 text-1xl rounded-full hover:bg-white hover:py-5 hover:font-bold'>Sign Up</button>
                </div>)
            }
        </div>
    );
}
export default SignInSignupWithLocalStorage;