import React from 'react'
import classes from '../styles/Error.css'
import { MdOutlineErrorOutline } from 'react-icons/md'
const Error = ({message}) =>{
    return(
        <>
        {message?
            <div className={classes.error}>
                <MdOutlineErrorOutline className={classes.errorIcon}/>
                <div>{message}</div>
            </div>
            :null
        }
        <br/>
        </>
    )
}

export default Error;