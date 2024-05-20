import Header from "./Header"
import { useState } from "react";

const Login = () => {
    const [isSignInForm, setIsSignInForm] = useState(true);
    const toggleSignUpForm = () => {
        setIsSignInForm(!isSignInForm);
    }
  return (
    <div className="" >
        <Header/>
        <div className="absolute">
            <img src="https://assets.nflxext.com/ffe/siteui/vlv3/41c789f0-7df5-4219-94c6-c66fe500590a/3149e5eb-4660-4e3d-9e65-b1e615229c64/IN-en-20240513-popsignuptwoweeks-perspective_alpha_website_large.jpg" alt="header-login-bg"/>
        </div>
        <form className="w-4/12 absolute p-12 bg-black my-28 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80">
            <h1 className="font-bold text-2xl p-2 my-2">{isSignInForm ? "Sign In" : "Sign Up"}</h1>
            { 
                !isSignInForm && 
                <input type="text" placeholder="Name" className="p-2 my-4 w-full rounded-sm"/>
            }
            <input type="text" placeholder="Email Address" className="p-2 my-4 w-full rounded-sm"/>
            <input type="password" placeholder="Password" className="p-2 my-4 w-full rounded-sm"/>
            <button className="p-3 my-4 bg-red-700 w-full font-bold rounded-lg">{isSignInForm ? "Sign In" : "Sign Up"}</button>          
            <p className="py-4">New to MovieFlix? <span className="font-bold cursor-pointer" onClick={toggleSignUpForm}>{isSignInForm ? "Sign Up Now" : "Sign In"}</span></p>
        </form>
    </div>
  )
}
export default Login