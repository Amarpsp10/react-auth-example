import React from 'react'
import Api from '../apis'
import classes from '../styles/Home.css'
import { useHistory } from 'react-router-dom'
import { Button } from '../components'
const Profile = () =>{
    const history = useHistory()
    
    return(
        <div className={classes.home}>
            <h4>Profile Page</h4>
            <h6></h6>
            <div className={classes.margin}>
                <Button onClick={()=>history.push('/login')} lable='Logout'/>
            </div>
        </div>
    )
}

export default Profile