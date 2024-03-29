import { Link, useNavigate } from "react-router-dom"
import axios from "axios"
import { useState } from "react"

const SignIn = () => {
    const [values, SetValues] = useState({
        email: '',
        password: ''
    })

    const navigate = useNavigate()
    axios.defaults.withCredentials = true;
    const headleLogin = (e) => {
        e.preventDefault();

        axios.post('http://localhost:8081/login', values)
        .then(res => {
            if(res.data.Status === "Success"){
               if(res.data.Result[0].role === 'admin'){
                    navigate('/admin')
               }
               else if(res.data.Result[0].role === 'user'){
                    navigate('/user')
               }
            } else{
                alert(res.data.Error);
            }
        }).catch(err => console.log(err))
    }
  return (
    <div className="bg-blue-500 w-full h-screen">
        <div className="container lg:px-32 py-10 ">
            <div className="rounded-xl lg:mx-20 p-10 bg-white w-full">
                <p className="text-3xl font-semibold py-4">SignIn</p>
                <hr className="pb-6" />

                <form onSubmit={headleLogin}>
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