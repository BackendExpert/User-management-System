import axios from "axios"
import React, { useEffect, useState } from "react"
import { Navigate, useNavigate } from 'react-router-dom';

const Admin = () => {
    const [auth, SetAuth] = useState(false);
    const [msg, SetMsg] = useState('');
    const [name, SetName] = useState('');
    const navigate = useNavigate();

    axios.defaults.withCredentials = true;

    useEffect(() => {
      axios.get('http://localhost:8081/admin')
      .then(res => {
          if(res.data.Status === "Success"){
            SetAuth(true)
            SetName(res.data.name)
          }
          else{
            SetAuth(false)
            SetMsg(res.data.Error)
          }
      })
      .then(err => console.log(err))
    })
  return (
      <div className="">
        {
          auth ? 
          <div className="">
            Your Are Login {name}
            <button>Logout</button>
          </div>

          :

            navigate('/')
          
        }
      </div>
    )
}

export default Admin