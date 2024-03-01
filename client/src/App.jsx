import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignIn from "./components/LoginSignUp/SignIn";
import SignUp from "./components/LoginSignUp/SignUp";
import Admin from "./components/Admin/Admin";
import Users from "./components/Users/Users";
import AdminDash from "./components/Admin/AdminDash";


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignIn />} ></Route>
        <Route path="/register" element={<SignUp />} ></Route>
        <Route path="/admin" element={<Admin />} ></Route>
        <Route path="/user" element={<Users />} ></Route>
        <Route path="/adminDash" element={<AdminDash />} ></Route>
      </Routes>
    </BrowserRouter>
  )
}