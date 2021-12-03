import Cookies from 'js-cookie'
import React,{useContext, createContext, useState, useEffect} from 'react'
const AuthContext = createContext()
import Api from '../apis'
export function useAuth(){
    return useContext(AuthContext)
}

const AuthProvider = ({children}) =>{
    const [loading, setLoading] = useState(true);
    const [token, setToken ] = useState(null);
    const [user, setUser] = useState(null);

    useEffect(()=>{
        resolveAuth();
    },[])

    useEffect(()=>{
        fetchDetail();
    },[token])

    const fetchDetail = async() =>{
        if(!token){
            return setUser(null)
        }
        const result = await Api.fetchUser()
        if(result && result.status===200){
            setUser(result.data)
        }
    }
    
    const resolveAuth = async() =>{
        if(Cookies.get('token')){
            setToken(Cookies.get('token'));
        }
        setLoading(false);
    }

    const value = {
        loading,
        token,
        setToken,
        user
    }

    return(
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    )
}

export {AuthProvider, AuthContext}