import React, { useEffect, useState } from 'react'
import classes from '../styles/Auth.css'
import { Input, Button } from '../components'
import { Link } from 'react-router-dom'
export default function Signup() {
    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')
    const [passConfirm, setPassConfirm] = useState('')
    const [loading, setLoading] = useState(false)

    return (
        <div className={classes.AuthPage}>
            <div className={classes.left}>
                <div className={classes.leftContent}>
                    <h4>Authentication Signup Page</h4>
                    <h6>Go and create your new account!</h6>
                </div>
            </div>       
            <div className={classes.right}>
                <div className={classes.rightContent}>
                    <h3>Hello !</h3>
                    <h5>Sign Up to Get Started</h5><br/><br/>
                    <form onSubmit={()=>{}}>
                        <Input
                            value={email}
                            onChange={(text)=>setEmail(text)}
                            placeholder='Email Address'
                            type='email'
                            /><br/>
                        <Input
                            value={pass}
                            onChange={(text)=>setPass(text)}
                            placeholder='Password'
                            type='password'
                        /><br/>
                        <Input
                            value={passConfirm}
                            onChange={(text)=>setPassConfirm(text)}
                            placeholder='Confirm Password'
                            type='password'
                        /><br/>
                        <Button loading={loading} variant='primary' type='submit' lable='Login' />
                    </form><br/>
                    <div className={classes.links}>
                        <p>Already have an account? <Link to='/login'>Log In</Link></p>
                    </div>
                </div>
            </div>
        </div>
    )
}
