import React, {useState} from 'react'
import { Button } from '../Button'
import { Link, useNavigate } from 'react-router-dom'
import { ProductConsumer } from '../../context'


export default function Login() {

    const navigate = useNavigate()

    const [isRegistered, setRegister] = useState(false)
    
    const [userDetails, setDetails] = useState({
        username:"",
        password: "",
        confirm: ""
    })

    const linkClick = ()=>{
        setRegister(!isRegistered)
        setDetails({
            username:"",
            password: "",
            confirm: ""
        })
    }

    const handleChange = (event)=>{
        const {name, value} = event.target

        setDetails((prevValue)=>{
            return {
                ...prevValue,
                [name]: value
            }
        })
        console.log(userDetails);

    }

  return (
    <ProductConsumer>
        {(value)=>{
                const {login, register, isAuthFailure} = value
                return <form className='login-form'>
                    <i className="fas fa-sun"></i>
                    {isAuthFailure && <p className="error" >Authentication Error. Please try again</p>}
                    <input onChange={ handleChange } name='username' type="text" placeholder='username or email' value={userDetails.username} />
                    <input onChange={ handleChange } name='password' type="password" placeholder='password' value={userDetails.password}/>
                    {!isRegistered && <input onChange={ handleChange } name='confirm' type="password" placeholder='confirm password' value={userDetails.confirm}/>}
                    <div>
                        <p>{isRegistered ?"Don't have an account?": "Already have an account?"}</p>
                        <Link to="/" onClick={linkClick}>{isRegistered?"Sign-Up":"Sign In"} </Link>

                    </div>



                            
                            <Button type='submit' onClick={ (e)=>{
                                e.preventDefault()
                                
                                if (isRegistered) {
                                    login(userDetails, navigate)
                                    
                                } else {
                                    register(userDetails, navigate)
                                }
                                
                                
                                setDetails({
                                    username:"",
                                    password: "",
                                    confirm: ""
                                })
                                
                            }}>{isRegistered? "Sign In" : "Sign Up"}</Button>

            </form>
     }}
    </ProductConsumer>

  )
}

