import React, { useContext, useState } from 'react'
import classes from '../styles/Auth.css'
import { Input, Button } from '../components'
import { Link, useHistory, Redirect} from 'react-router-dom'
import Api from '../apis'
import { Error } from '../components'
import { AuthContext } from '../contexts/AuthContext'
export default function Signup() {
    const {token} = useContext(AuthContext)
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')
    const [passConfirm, setPassConfirm] = useState('')
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')
    const history = useHistory()

    const handleSignup = async(e) =>{
        e.preventDefault()
        setError('')
        if(!name || !email || !pass || !passConfirm){
            return setError('Please fill all the fields!')
        }
        if(pass !== passConfirm){
            return setError('Password do not match !')
        }
        setLoading(true)
        const result = await Api.Signup({name:name, email:email, password:pass})
        if(!result){
            setLoading(false)
            return setError('Something went wrong!')
        }
        if(result.status===400){
            setLoading(false)
            return setError(result.data.message)
        }
        if(result.status===201){
            history.push({pathname:'/success',state:{message:result.data.message}})
        }
        setLoading(false)
    }
    return (
        <div className={classes.AuthPage}>
            {token? <Redirect to='/home'/>:null}
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
                    <form onSubmit={(e)=>handleSignup(e)}>
                        <Input
                            value={name}
                            onChange={(text)=>setName(text)}
                            placeholder='Name'
                            type='name'
                        /><br/>
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
                        <Error message={error}/>
                        <Button loading={loading} variant='primary' type='submit' lable='Signup' />
                    </form><br/>
                    <div className={classes.links}>
                        <p>Already have an account? <Link to='/login'>Log In</Link></p>
                    </div>
                </div>
            </div>
        </div>
    )
}
