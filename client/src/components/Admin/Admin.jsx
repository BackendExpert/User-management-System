import axios from "axios"
import { useEffect, useState } from "react"

const Admin = () => {
    const [auth, SetAuth] = useState(false);
    const [msg, SetMsg] = useState('');
    const [name, SetName] = useState('');

    axios.defaults.withCredentials = true;

    useEffect(() => {
      axios.get('/admin')
      .then(res => {
          if(res.data.Status === "Success"){
            SetAuth(true)
            SetName(res.data.name)
            Navigate('/')
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

          <div className="">
            asdasdas
          </div>
        }
      </div>
    )
}

export default Admin