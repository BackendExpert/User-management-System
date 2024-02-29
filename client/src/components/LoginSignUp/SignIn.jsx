import { Link } from "react-router-dom"

const SignIn = () => {
  return (
    <div className="bg-blue-500 w-full h-screen">
        <div className="container lg:px-32 py-10 ">
            <div className="rounded-xl lg:mx-20 p-10 bg-white w-full">
                <p className="text-3xl font-semibold py-4">SignIn</p>
                <hr className="pb-6" />

                <form>
                    <div className="">
                        <label htmlFor="" className="text-xl py-4">Email : </label>
                        <input type="email" className="pl-4 border w-full h-12 my-2 rounded text-xl" required placeholder="Email" />
                    </div>
                    <div className="">
                        <label htmlFor="" className="text-xl py-4">Password : </label>
                        <input type="password" className="pl-4 border w-full h-12 my-2 rounded text-xl" required placeholder="Password" />
                    </div>
                    <div className="">
                        <button type="submit" className="w-1/2 rounded-md border border-cyan-500 py-4 my-4 text-xl text-cyan-600 duration-500 hover:bg-cyan-500 hover:text-white">Login</button>
                    </div>
                </form>

                <p>Dont have an Account ? 
                    <Link to={'/register'}>
                        <span className="pl-2 text-cyan-500">Create Account</span>
                    </Link>
                </p>
            </div>
        </div>
    </div>
  )
}

export default SignIn