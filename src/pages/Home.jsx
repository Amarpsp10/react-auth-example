import React from 'react'
import classes from '../styles/Home.css'
import { Button } from '../components'
import { useNavigate } from 'react-router-dom'
export default function Home() {
    const navigate = useNavigate()
    return (
        <div className={classes.home}>
            <h4>Welcome to Authentication Testing Web App</h4>
            <h6>features : login, signup, additional info, email verification and forget password</h6>
            <div className={classes.margin}>
                <Button onClick={()=>navigate('/login')} lable='Get Started'/>
            </div>
        </div>
    )
}
