import React from 'react'
import Api from '../apis'
import classes from '../styles/Home.css'
import { useHistory, useLocation, Redirect } from 'react-router-dom'
import { Button } from '../components'

const VerifyEmail = (props) =>{
    const history = useHistory()
    const search = useLocation().search
    const token = new URLSearchParams(search).get('token')
    return(
        <div className={classes.home}>
            {!token? <Redirect to='/'/>:null}
            <h4>Verify Email</h4>
            <h6></h6>
            <div className={classes.margin}>
                <Button onClick={()=>history.push('/login')} lable='Login'/>
            </div>
        </div>
    )
}

export default VerifyEmail