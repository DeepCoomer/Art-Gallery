import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useAuth0 } from '@auth0/auth0-react'
import LoginButton from './LoginButton';
import LogoutButton from './LogoutButton';
import logo from '../Components/1.jpg'

const Navbar = () => {
    const { user, isAuthenticated } = useAuth0();
    const location = useLocation();
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">Art Gallery</Link>

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className={`nav-link ${location.pathname === "/" ? "active" : ""}`} aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className={`nav-link ${location.pathname === "/about" ? "active" : ""}`}  to="/about">About</Link>
                            </li>
                        </ul>
                        {
                            isAuthenticated ?
                                <div className='d-flex'>
                                    <li className='nav-item dropdown'>
                                        <img src={logo} style={{ height: 40, borderRadius: 100, position: 'relative', left: -10 }} className='dropdown-toggle' id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false" alt="" />
                                        <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                            <li><LogoutButton /></li>
                                        </ul>
                                    </li>
                                    <p style={{color: 'white'}}>{user.nickname}</p>
                                </div>
                                :
                                <div className='d-flex'>
                                    <LoginButton />
                                </div>
                        }
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar