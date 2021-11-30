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
                <Route path='/home' element={<div>jatt</div>}/>
                <Route path='/login' element={<Login/>}/>
                <Route path='/signup' element={<Signup/>}/>
                <Route path='/signup/complete-profile' element={<div>jatt</div>}/> 
                <Route path='/forget-password' element={<ForgetPassword/>}/>
                <Route path='/profile' element={<div>jatt</div>}/>
                <Route path='/not-found' element={<div>jatt</div>}/>
              </Routes>
           </BrowserRouter>
        </AuthProvider>
    )
}
export default App