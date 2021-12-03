import React from "react";
import classes from '../styles/Home.css'
import { useHistory, useLocation, Redirect } from 'react-router-dom'

const Message = () =>{
    const state = useLocation().state
    const history = useHistory()

    return(
        <div className={classes.home}>
            {!state?.message ? <Redirect to='/'/>:null}
            <h4>{state?.message.split('!')[0]} !</h4>
            <h6>{state?.message.split('!')[1]}</h6>
        </div>
    )
}

export default Message