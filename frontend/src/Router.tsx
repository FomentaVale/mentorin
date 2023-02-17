import { Routes, Route } from "react-router-dom"
import { SignIn } from "./pages/Login/SignIn/SignIn"
import { Login } from "./pages/Login/Login"
import { SignUp } from "./pages/Login/SignUp/SignUp"
import { Home } from "./pages/Home/Home"
import { Mentorias } from "./pages/Home/Mentorias/Mentorias"
import { ForgetPassword } from "./pages/Login/ForgetPassword/ForgetPassword"
import { Profile } from "./pages/Home/Profile/Profile"

/* Arquivo para controlar as rotas da aplicacao */

export function Router() {
    return (
        <Routes>
            <Route path="/" element={<Login />} >
                <Route path="/" element={<SignIn />} />
                <Route path="/signUp" element={<SignUp />} />
                <Route path="/forgetPassword" element={<ForgetPassword />} />
            </Route>
            <Route path="/home" element={<Home />}>
                <Route path="/home" element ={<Mentorias />} />
                <Route path="/home/profile" element ={<Profile />} />
            </Route>
        </Routes>
    )
}