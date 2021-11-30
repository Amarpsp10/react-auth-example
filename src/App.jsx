import React from "react";
import './styles/index.css'
import { AuthProvider } from "./contexts/AuthContext";
import { BrowserRouter, Route, Routes} from "react-router-dom";
import { Home, Login } from "./pages";
const App = () => {
    return (
        <AuthProvider>
           <BrowserRouter>
              <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/home' element={<div>jatt</div>}/>
                <Route path='/login' element={<Login/>}/>
                <Route path='/signup' element={<div>jatt</div>}/>
                <Route path='/signup/complete-profile' element={<div>jatt</div>}/> 
                <Route path='/forget-password' element={<div>jatt</div>}/>
                <Route path='/profile' element={<div>jatt</div>}/>
                <Route path='/not-found' element={<div>jatt</div>}/>
              </Routes>
           </BrowserRouter>
        </AuthProvider>
    )
}
export default App