import React,{useContext, createContext, useState} from 'react'

const AuthContext = createContext()

export function useAuth(){
    return useContext(AuthContext)
}

const AuthProvider = ({children}) =>{
    const [loading, setLoading] = useState(false)
    const value = {loading}
    
    return(
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    )
}

export {AuthProvider, AuthContext}