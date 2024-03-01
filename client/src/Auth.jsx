import React, { useContext } from 'react'
import { Navigate, Outlet, useLocation } from 'react-router-dom'
import AuthContext from "../Context/authProvider";

const Auth = ({allowedRoles}) => {
  return (
    <div>Auth</div>
  )
}

export default Auth