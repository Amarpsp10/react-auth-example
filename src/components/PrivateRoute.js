import React,{useContext} from 'react'
import {Route} from 'react-router-dom'
import {AuthContext} from '../contexts/AuthContext'

const PrivateRoute = ({path, children}) =>{
    const {loading} = useContext(AuthContext)
    return(
        <Route path={path} element={children}/>
    )
}

export default PrivateRoute