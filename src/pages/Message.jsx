import React from "react";
import classes from '../styles/Home.css'
import { useHistory, useLocation, Redirect } from 'react-router-dom'
import { Button } from '../components'
const Message = () =>{
    const state = useLocation().state
    const history = useHistory()

    return(
        <div className={classes.home}>
            {!state?.message ? <Redirect to='/'/>:null}
            <h4>{state?.message}</h4>
            <h6></h6>
            <div className={classes.margin}>
                <Button onClick={()=>history.push('/login')} lable='Login'/>
            </div>
        </div>
    )
}

export default Message