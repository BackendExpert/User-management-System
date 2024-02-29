import axios from "axios"
import { useEffect, useState } from "react"
import { Redirect, useNavigate } from "react-router-dom"

const Admin = () => {
    const [auth, SetAuth] = useState(false);
    const [message, SetMessage] = useState('');
    const navigate = useNavigate()
    const [name, SetName] = useState()

    useEffect(() => {
        axios.get('/')
        .then(res => {
            if(res.data.Status === "Success"){
                SetAuth(true)
                SetName(res.data.name)
                navigate('/')
            }
            else{
                SetAuth(false)
                SetMessage(res.data.Error)
            }
        })
        .then(err => console.log(err))
    }, [])
  return (
    <div className="px-16 py-12">
        {
            auth ? 
            <div className="">
                Welcome Admin {name}
                <button className="px-8 py-4 border border-red-500 text-red-500"></button>
            </div>
            :
            <Redirect to='/' />            
        }
    </div>
  )
}

export default Admin