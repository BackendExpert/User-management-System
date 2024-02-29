import { useState } from "react"
import { Link } from "react-router-dom"
import axios from "axios"

const SignUp = () => {
    const [values, SetValues] = useState({
        username: '',
        fname: '',
        email: '',
        password: ''
    })

    const headleSignUp = (event) => {
        event.preventDefault();
        axios.post("http://localhost:8081/register", values)
        .then(res => console.log(res))
        .then(err => console.log(err));
    }
  return (
    <div className="bg-blue-500 w-full h-full">
        <div className="container lg:px-32 py-10 ">
            <div className="rounded-xl lg:mx-20 p-10 bg-white w-full">
                <p className="text-3xl font-semibold py-4">SignUp</p>
                <hr className="pb-6" />

                <form onSubmit={headleSignUp}>
                    <div className="">
                        <label htmlFor="" className="text-xl py-4">Username : </label>
                        <input type="text" className="pl-4 border w-full h-12 my-2 rounded text-xl" required placeholder="Username" 
                        onChange={e => SetValues({...values, username: e.target.value})}/>
                    </div>
                    <div className="">
                        <label htmlFor="" className="text-xl py-4">First Name : </label>
                        <input type="text" className="pl-4 border w-full h-12 my-2 rounded text-xl" required placeholder="First Name" 
                        onChange={e => SetValues({...values, fname: e.target.value})}/>
                    </div>
                    <div className="">
                        <label htmlFor="" className="text-xl py-4">Email : </label>
                        <input type="email" className="pl-4 border w-full h-12 my-2 rounded text-xl" required placeholder="Email" 
                        onChange={e => SetValues({...values, email: e.target.value})}/>
                    </div>
                    <div className="">
                        <label htmlFor="" className="text-xl py-4">Password : </label>
                        <input type="password" className="pl-4 border w-full h-12 my-2 rounded text-xl" required placeholder="Password" 
                        onChange={e => SetValues({...values, password: e.target.value})}/>
                    </div>
                    <div className="">
                        <button type="submit" className="h-12 w-1/2 rounded-md border border-cyan-500 text-cyan-500 duration-500 hover:bg-cyan-500 hover:text-white">SignUp</button>
                    </div>
                </form>
                <p>Already have an Account ? 
                    <Link to={'/'}>
                        <span className="pl-2 mt-4 text-cyan-500">SignIn</span>
                    </Link>
                </p>
            </div>
        </div>
    </div>
  )
}

export default SignUp