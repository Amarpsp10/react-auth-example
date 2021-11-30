import React from "react";
import './styles/index.css'
import { AuthProvider } from "./contexts/AuthContext";
import { BrowserRouter, Route, Routes} from "react-router-dom";
import { Home, Login, Signup, ForgetPassword } from "./pages";
const App = () => {
    return (
        <AuthProvider>
           <BrowserRouter>
              <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/home' element={<div>Home</div>}/>
                <Route path='/login' element={<Login/>}/>
                <Route path='/signup' element={<Signup/>}/>
                <Route path='/signup/complete-profile' element={<div>Complete Profile</div>}/> 
                <Route path='/forget-password' element={<ForgetPassword/>}/>
                <Route path='/profile' element={<div>Profile</div>}/>
                <Route path='/not-found' element={<div>not found</div>}/>
              </Routes>
           </BrowserRouter>
        </AuthProvider>
    )
}
export default App