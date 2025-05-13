import React from 'react'
import { NavLink } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { useNavigate } from "react-router-dom";

const Navbar = () => {
    const navigate = useNavigate()
    const handleLogout = () => {
        localStorage.removeItem("token")
        navigate("/login")
    }
  return (
    <div>
        <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
            <div className="container-fluid">
                <NavLink className="navbar-brand" to="/">Navbar</NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                    <NavLink className={ ({ isActive }) => (isActive ? "nav-link active" : "nav-link") } aria-current="page" to="/">Home</NavLink>
                    </li>
                    <li className="nav-item">
                    <NavLink className={ ({ isActive }) => (isActive ? "nav-link active" : "nav-link") } to="/about">About</NavLink>
                    </li>
                </ul>
                {!localStorage.getItem("token") ? <form className="d-flex" role="search">
                    <Link className="btn btn-primary mx-2" to="/login" role="button">Login</Link>
                    <Link className="btn btn-primary mx-2" to="/signup" role="button">Signup</Link>
                </form> : <button onClick={handleLogout} className="btn btn-primary mx-2" to="/login" role="button">Logout</button>}
                </div>
            </div>
        </nav>
    </div>
  )
}

export default Navbar