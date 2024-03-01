import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignIn from "./components/LoginSignUp/SignIn";
import SignUp from "./components/LoginSignUp/SignUp";
import Admin from "./components/Admin/Admin";
import Users from "./components/Users/Users";


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignIn />} ></Route>
        <Route path="/register" element={<SignUp />} ></Route>
        <Route path="/admin" element={<Admin />} ></Route>
        <Route path="/user" element={<Users />} ></Route>

      </Routes>
    </BrowserRouter>
  )
}