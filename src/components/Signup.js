import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";


function Signup() {
    const navigate = useNavigate()
    const [user, setUser] = useState({
        name: "",
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
        const response = await fetch("http://localhost:5000/api/auth/create-users", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({name: user.name, email: user.email, password: user.password})
        })
        const json = await response.json()
        localStorage.setItem('token', json.authToken)
        navigate("/login")
    }
    return (
        <>
            <form>
                <h1 className='mt-3'>Signup to continue to iNoteBook</h1>
                <div className="mb-3 mt-5">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input name='name' type="text" className="form-control" onChange={handleChange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email address</label>
                    <input name='email' type="email" className="form-control" aria-describedby="emailHelp" onChange={handleChange} />
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input name='password' type="password" className="form-control" onChange={handleChange} />
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

export default Signup