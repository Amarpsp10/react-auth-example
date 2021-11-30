import React, { useEffect, useState } from 'react'
import classes from '../styles/Auth.css'
import { Input, Button } from '../components'
import { Link } from 'react-router-dom'
export default function Login() {
    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')
    const [loading, setLoading] = useState(false)

    return (
        <div className={classes.AuthPage}>
            <div className={classes.left}>
                <div className={classes.leftContent}>
                    <h4>Authentication Login Page</h4>
                    <h6>Go and add your credential</h6>
                </div>
            </div>       
            <div className={classes.right}>
                <div className={classes.rightContent}>
                    <h3>Hello Again!!</h3>
                    <h5>Welcome Back</h5><br/><br/>
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
                        <Button loading={loading} variant='primary' type='submit' lable='Login' />
                    </form><br/>
                    <div className={classes.links}>
                        <Link to={'/forget-password'}>Forget Password</Link><br/>
                        <p>Don't have an account? <Link to='/signup'>Create Account</Link></p>
                    </div>
                </div>
            </div>
        </div>
    )
}
