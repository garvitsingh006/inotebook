import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";

// localhost:5000/api/auth/login


function Login() {
    const navigate = useNavigate()
    const [user, setUser] = useState({
        email: "",
        password: "",
    })

    const handleChange = (e) => {
        setUser({
            ...user, [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch("http://localhost:5000/api/auth/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({email: user.email, password: user.password})
        })
        const json = await response.json()
        localStorage.setItem('token', json.authToken)
        navigate("/")
    }

    return (
        <>
            <form>
                <h1 className='mt-3'>Login to continue to iNoteBook</h1>
                <div className="mb-3 mt-5">
                    <label htmlFor="email" className="form-label">Email address</label>
                    <input name='email' type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={handleChange} />
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input name='password' type="password" className="form-control" id="exampleInputPassword1" onChange={handleChange} />
                </div>
                <div className="mb-3 form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                    <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                </div>
                <button type="submit" className="btn btn-primary" onClick={handleSubmit}>Submit</button>
            </form>
        </>
    )
}

export default Login