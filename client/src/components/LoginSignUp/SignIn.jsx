
const SignIn = () => {
  return (
    <div className="bg-blue-500 w-full h-screen">
        <div className="container px-32 py-20 ">
            <div className="rounded-xl mx-40 p-20 mt-20 bg-white w-full">
                <p className="text-3xl font-semibold py-4">SignUp</p>
                <hr className="pb-6" />

                <form>
                    <div className="">
                        <label htmlFor="" className="text-xl py-4">Email : </label>
                        <input type="email" className="pl-4 border w-full h-16 my-2 rounded text-2xl" required placeholder="Email" />
                    </div>
                    <div className="">
                        <label htmlFor="" className="text-xl py-4">Password : </label>
                        <input type="password" className="pl-4 border w-full h-16 my-2 rounded text-2xl" required placeholder="Password" />
                    </div>
                    <div className="">
                        <button type="submit" className="w-1/2 rounded-md border border-cyan-500 py-4 my-4 text-xl text-cyan-600 duration-500 hover:bg-cyan-500 hover:text-white">Login</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}

export default SignIn