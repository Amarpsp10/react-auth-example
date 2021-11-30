import React from 'react'
import classes from '../styles/Input.css'
import { MdOutlineEmail, MdOutlineLock } from 'react-icons/md'

const Input = ({value, onChange, placeholder, type}) =>{
    return(
        <div className={classes.container}>
            {type==='email'? <MdOutlineEmail className={classes.icon}/> : type==='password'? <MdOutlineLock className={classes.icon}/>: null}
            <input 
                className={classes.input}
                value={value} 
                onChange={(e)=>onChange(e.target.value)}
                placeholder={placeholder}
                type={type}
            />
        </div>
    )
}
export default Input