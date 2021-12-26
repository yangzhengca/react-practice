import React from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    let navigate = useNavigate()
    return (
        <div>
            <h1>Login</h1>
            <button onClick={() =>{navigate('/dashboard')}} >
                Go to dashboard 
            </button>

        </div>
    )
}

export default Login
