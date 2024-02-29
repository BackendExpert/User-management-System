import { Navigate, Outlet } from "react-router-dom"

const Admin = () => {
    let auth = {'token' : false}
  return (
        auth.token ? <Outlet/> : <Navigate to={'/'} />
    )
}

export default Admin