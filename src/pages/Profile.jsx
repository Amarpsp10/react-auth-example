import React, { useContext, useState } from 'react'
import Api from '../apis'
import classes from '../styles/Home.css'
import { useHistory, Redirect} from 'react-router-dom'
import { Button, Input } from '../components'
import {AuthContext} from '../contexts/AuthContext'

const Profile = () =>{
    const history = useHistory()
    const {token, setToken, user} = useContext(AuthContext)
    const [loading, setLoading] = useState(false)

    const handleLogout = async() =>{
        setLoading(true)
        const result = await Api.Logout();
        if(result.status===200){
            setLoading(false)
            setToken(null)
            return history.push('/')
        }
        setLoading(false)
    }
    return(
        <div className={classes.home}>
            {!token? <Redirect to='/'/> : null}
            <h4>Profile</h4><br/>
            {user?
            <>
                <Input
                    value={user?.name}
                    onChange={()=>{}}
                    disabled={true}
                /><br/>
                <Input
                    value={user?.email}
                    onChange={()=>{}}
                    disabled={true}
                    type='email'
                />
            </>
            :null}
            <h6></h6>
            <div className={classes.margin}>
                <Button onClick={()=>handleLogout()} loading={loading} lable='Logout'/>
            </div>
        </div>
    )
}

export default Profile