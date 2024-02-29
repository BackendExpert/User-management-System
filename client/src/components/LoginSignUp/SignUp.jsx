import { useState } from "react"
import { Link } from "react-router-dom"

const SignUp = () => {
    const [values, SetValues] = useState({
        username: '',
        fname: '',
        email: '',
        password: ''
    })
  return (
    <div className="bg-blue-500 w-full h-full">
        <div className="container lg:px-32 py-10 ">
            <div className="rounded-xl lg:mx-20 p-10 bg-white w-full">
                <p className="text-3xl font-semibold py-4">SignUp</p>
                <hr className="pb-6" />

                <form>
                    <div className="">
                        <label htmlFor="" className="text-xl py-4">Username : </label>
                        <input type="text" className="pl-4 border w-full h-12 my-2 rounded text-xl" required placeholder="Username" />
                    </div>
                    <div className="">
                        <label htmlFor="" className="text-xl py-4">First Name : </label>
                        <input type="text" className="pl-4 border w-full h-12 my-2 rounded text-xl" required placeholder="First Name" />
                    </div>
                    <div className="">
                        <label htmlFor="" className="text-xl py-4">Email : </label>
                        <input type="email" className="pl-4 border w-full h-12 my-2 rounded text-xl" required placeholder="Email" />
                    </div>
                    <div className="">
                        <label htmlFor="" className="text-xl py-4">Password : </label>
                        <input type="password" className="pl-4 border w-full h-12 my-2 rounded text-xl" required placeholder="Password" />
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