import React from 'react'
import { useNavigate } from 'react-router-dom'


const Dashboard = () => {
    let navigate = useNavigate()

    return (
        <div>
            <h1>Dashboard</h1>
            <button onClick={() =>{navigate(-1)}}>
                Go back
            </button>
        </div>
    )
}

export default Dashboard
